import { useState, useEffect } from 'react';
import { useGameStore } from '../store/game.store';
import GameHeader from '../components/game/GameHeader';
import GameComplete from '../components/game/GameComplete';
import FeedbackScreen from '../components/game/FeedbackScreen';
import ScenarioScreen from '../components/game/ScenarioScreen';
import WelcomeScreen from '../components/game/WelcomeScreen';
import GameProgress from '../components/game/GameProgress';
import { useGameSessionStore } from '../store/game-session.store';

// Define interface for local answer storage
interface LocalAnswer {
  scenarioId: string;
  categoryId: string;
  choiceId: number;
  isCorrect: boolean;
  score: number;
  timestamp: number;
}

const GamePage = () => {
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [localAnswers, setLocalAnswers] = useState<LocalAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Zustand stores
  const { 
    scenarios, 
    fetchScenarios, 
    updateQuestionResult, 
    completeScenario,
    categories,
    fetchCategories
  } = useGameStore();
  
  const { 
    currentSession, 
    startGame, 
    selectChoice, 
    completeGame,
    resetGame: resetSession
  } = useGameSessionStore();

  // Load saved answers from localStorage on component mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem('gameLocalAnswers');
    if (savedAnswers) {
      try {
        setLocalAnswers(JSON.parse(savedAnswers));
      } catch (error) {
        console.error('Error parsing saved answers:', error);
        localStorage.removeItem('gameLocalAnswers');
      }
    }
    
    // Fetch categories if not already loaded
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('gameLocalAnswers', JSON.stringify(localAnswers));
  }, [localAnswers]);

  const handleStartScenario = async (categoryId: string) => {
    try {
      await fetchScenarios({ categoryId });
      const categoryScenarios = scenarios;
      
      if (categoryScenarios.length > 0) {
        // Filter out scenarios that have already been answered
        const unansweredScenarios = categoryScenarios.filter(
          scenario => !localAnswers.some(answer => answer.scenarioId === scenario.id)
        );
        
        // Use an unanswered scenario if available, otherwise use any scenario
        const selectedScenario = unansweredScenarios.length > 0 
          ? unansweredScenarios[Math.floor(Math.random() * unansweredScenarios.length)]
          : categoryScenarios[Math.floor(Math.random() * categoryScenarios.length)];
        
        startGame(selectedScenario);
      }
    } catch (error) {
      console.error('Error starting scenario:', error);
    }
  };

  const handleMakeChoice = (choiceId: number) => {
    if (!currentSession) return;

    // Update session with selected choice
    selectChoice(choiceId);

    const scenario = currentSession.currentScenario;
    
    // Get all correct choice IDs
    const correctChoices = scenario.choices
      .filter((choice: any) => choice.isCorrect)
      .map((choice: any) => choice.id);
    
    // Check if the selected choice is correct
    const isCorrectAnswer = correctChoices.includes(choiceId);
    
    const score = isCorrectAnswer ? 10 : 0;
    const feedbackMessage = isCorrectAnswer ? scenario.feedback.correct : scenario.feedback.incorrect;

    // Store answer locally
    const newAnswer: LocalAnswer = {
      scenarioId: scenario.id,
      categoryId: scenario.categoryId,
      choiceId,
      isCorrect: isCorrectAnswer,
      score,
      timestamp: Date.now()
    };
    
    setLocalAnswers(prev => [...prev, newAnswer]);
    setFeedback({
      isCorrect: isCorrectAnswer,
      message: feedbackMessage
    });
  };

  const handleContinue = async () => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setFeedback(null);
    
    // If this was the 10th question, complete the game
    if (localAnswers.length >= 10) {
      try {
        // Submit all local answers to backend
        await submitAllAnswers();
        
        completeGame();
        if (currentSession) {
          completeScenario({
            userId: 'current-user-id',
            categoryId: currentSession.currentScenario.categoryId,
            scenarioId: currentSession.currentScenario.id
          });
        }
      } catch (error) {
        console.error('Error completing game:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Otherwise, move to the next question
      try {
        // Get the category of the current scenario
        const currentCategoryId = currentSession?.currentScenario.categoryId;
        if (currentCategoryId) {
          await handleStartScenario(currentCategoryId);
        }
      } catch (error) {
        console.error('Error starting next scenario:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const submitAllAnswers = async () => {
    try {
      // Submit all locally stored answers to the backend
      for (const answer of localAnswers) {
        await updateQuestionResult({
          userId: 'current-user-id',
          categoryId: answer.categoryId,
          score: answer.score,
          isCorrect: answer.isCorrect
        });
      }
      
      // Clear local answers after successful submission
      setLocalAnswers([]);
      localStorage.removeItem('gameLocalAnswers');
    } catch (error) {
      console.error('Error submitting answers:', error);
      throw error; // Re-throw to handle in calling function
    }
  };

  const handleResetGame = () => {
    resetSession();
    setFeedback(null);
    setLocalAnswers([]);
    localStorage.removeItem('gameLocalAnswers');
  };

  // Calculate game progress based on local answers
  const questionsCompleted = localAnswers.length;
  const totalScore = localAnswers.reduce((total, answer) => total + answer.score, 0);
  const isGameComplete = questionsCompleted >= 10;

  return (
    <div
      className="font-sans antialiased text-gray-800"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <GameHeader />

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300">
          {isGameComplete ? (
            <GameComplete 
              score={totalScore} 
              onReset={handleResetGame} 
            />
          ) : feedback ? (
            <FeedbackScreen
              isCorrect={feedback.isCorrect}
              feedback={feedback.message}
              onContinue={handleContinue}
              scenario={currentSession?.currentScenario}
              isSubmitting={isSubmitting}
            />
          ) : currentSession ? (
            <ScenarioScreen
              scenario={currentSession.currentScenario}
              selectedChoices={currentSession.selectedChoices}
              onMakeChoice={handleMakeChoice}
            />
          ) : (
            <WelcomeScreen 
              onStartScenario={handleStartScenario} 
              categories={categories}
            />
          )}
        </div>

        {!isGameComplete && (
          <GameProgress
            completed={questionsCompleted}
            total={10}
            score={totalScore}
          />
        )}

        <footer className="text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Horizon Truth - Empowering Digital
            Literacy. All Rights Reserved
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-sky-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sky-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-sky-500">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GamePage;