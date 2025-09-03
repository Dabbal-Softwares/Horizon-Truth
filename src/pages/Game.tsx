import { useState, useEffect } from "react";
import { useGameStore } from "../store/game.store";
import GameHeader from "../components/game/GameHeader";
import GameComplete from "../components/game/GameComplete";
import FeedbackScreen from "../components/game/FeedbackScreen";
import ScenarioScreen from "../components/game/ScenarioScreen";
import WelcomeScreen from "../components/game/WelcomeScreen";
import GameProgress from "../components/game/GameProgress";
import { useGameSessionStore } from "../store/game-session.store";
import { useAuthStore } from "../store/auth.store";
import { guestService } from "../services/guestService";

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
  const [feedback, setFeedback] = useState<{
    isCorrect: boolean;
    message: string;
  } | null>(null);
  const [localAnswers, setLocalAnswers] = useState<LocalAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [guestSessionId, setGuestSessionId] = useState<string | null>(null);

  // Zustand stores
  const {
    scenarios,
    fetchScenarios,
    updateQuestionResult,
    completeScenario,
    categories,
    fetchCategories,
    updateGuestQuestionResult,
    completeGuestScenario,
  } = useGameStore();

  const {
    currentSession,
    startGame,
    selectChoice,
    completeGame,
    resetGame: resetSession,
  } = useGameSessionStore();

  const { user, isAuthenticated, isGuest } = useAuthStore();

  // Initialize guest session on component mount for guest users
  useEffect(() => {
    const initializeGuestSession = async () => {
      if (isGuest && !guestSessionId) {
        try {
          const session = await guestService.createSession();
          setGuestSessionId(session.id);
          localStorage.setItem("guestSessionId", session.id);
        } catch (error) {
          console.error("Error creating guest session:", error);
        }
      }
    };

    initializeGuestSession();
  }, [isGuest, guestSessionId]);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    // Load guest session ID
    const savedGuestSessionId = localStorage.getItem("guestSessionId");
    if (savedGuestSessionId) {
      setGuestSessionId(savedGuestSessionId);
    }

    // Load saved answers
    const savedAnswers = localStorage.getItem("gameLocalAnswers");
    if (savedAnswers) {
      try {
        setLocalAnswers(JSON.parse(savedAnswers));
      } catch (error) {
        console.error("Error parsing saved answers:", error);
        localStorage.removeItem("gameLocalAnswers");
      }
    }

    // Fetch categories if not already loaded
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  // Save data to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("gameLocalAnswers", JSON.stringify(localAnswers));
  }, [localAnswers]);

  const handleStartScenario = async (categoryId: string) => {
    try {
      // Fetch scenarios for the selected category and get the result
      const fetchedScenarios: any = await fetchScenarios({ categoryId });

      if (fetchedScenarios.length === 0) {
        // Show a message if no scenarios are available
        alert(
          "No scenarios available for this category. Please select another category."
        );
        return;
      }

      // Filter out scenarios that have already been answered
      const unansweredScenarios = fetchedScenarios.filter(
        (scenario:any) =>
          !localAnswers.some((answer) => answer.scenarioId === scenario.id)
      );

      // Use an unanswered scenario if available, otherwise use any scenario
      const selectedScenario =
        unansweredScenarios.length > 0
          ? unansweredScenarios[
              Math.floor(Math.random() * unansweredScenarios.length)
            ]
          : fetchedScenarios[
              Math.floor(Math.random() * fetchedScenarios.length)
            ];

      startGame(selectedScenario);
    } catch (error) {
      console.error("Error starting scenario:", error);
      alert("Error loading scenarios. Please try again.");
    }
  };

  const handleMakeChoice = async (choiceId: number) => {
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
    const feedbackMessage = isCorrectAnswer
      ? scenario.feedback.correct
      : scenario.feedback.incorrect;

    // Store answer locally
    const newAnswer: LocalAnswer = {
      scenarioId: scenario.id,
      categoryId: scenario.categoryId,
      choiceId,
      isCorrect: isCorrectAnswer,
      score,
      timestamp: Date.now(),
    };

    setLocalAnswers((prev) => [...prev, newAnswer]);
    setFeedback({
      isCorrect: isCorrectAnswer,
      message: feedbackMessage,
    });

    // Update question result in backend
    try {
      if (isAuthenticated && user) {
        await updateQuestionResult({
          userId: user.id,
          categoryId: scenario.categoryId,
          score,
          isCorrect: isCorrectAnswer,
        });
      } else if (isGuest && guestSessionId) {
        await updateGuestQuestionResult({
          sessionId: guestSessionId,
          categoryId: scenario.categoryId,
          score,
          isCorrect: isCorrectAnswer,
          scenarioId: scenario.id,
        });
      }
    } catch (error) {
      console.error("Error updating question result:", error);
    }
  };

  const handleContinue = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setFeedback(null);

    // If this was the 10th question, complete the game
    if (localAnswers.length >= 10) {
      try {
        // Complete the current scenario
        if (currentSession) {
          const scenario = currentSession.currentScenario;
          if (isAuthenticated && user) {
            await completeScenario({
              userId: user.id,
              categoryId: scenario.categoryId,
              scenarioId: scenario.id,
            });
          } else if (isGuest && guestSessionId) {
            await completeGuestScenario({
              sessionId: guestSessionId,
              categoryId: scenario.categoryId,
              scenarioId: scenario.id,
            });
          }
        }

        completeGame();
      } catch (error) {
        console.error("Error completing game:", error);
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
        console.error("Error starting next scenario:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleResetGame = async () => {
    resetSession();
    setFeedback(null);
    setLocalAnswers([]);
    localStorage.removeItem("gameLocalAnswers");

    // For guest users, also reset the session on the server
    if (isGuest && guestSessionId) {
      try {
        await guestService.deleteSession(guestSessionId);
        localStorage.removeItem("guestSessionId");
        setGuestSessionId(null);

        // Create a new guest session
        const newSession = await guestService.createSession();
        setGuestSessionId(newSession.id);
        localStorage.setItem("guestSessionId", newSession.id);
      } catch (error) {
        console.error("Error resetting guest session:", error);
      }
    }
  };

  // Calculate game progress based on local answers
  const questionsCompleted = localAnswers.length;
  const totalScore = localAnswers.reduce(
    (total, answer) => total + answer.score,
    0
  );

  // Calculate accuracy
  const correctAnswers = localAnswers.filter(
    (answer) => answer.isCorrect
  ).length;
  const accuracy =
    questionsCompleted > 0
      ? Math.round((correctAnswers / questionsCompleted) * 100)
      : 0;

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
              accuracy={accuracy}
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
            accuracy={accuracy}
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
