// pages/GamePage.tsx
import { useState } from "react";
import useGameState from "../hooks/useGameState";
import GameHeader from "../components/game/GameHeader";
import GameProgress from "../components/game/GameProgress";
import WelcomeScreen from "../components/game/WelcomeScreen";
import ScenarioScreen from "../components/game/ScenarioScreen";
import FeedbackScreen from "../components/game/FeedbackScreen";
import GameComplete from "../components/game/GameComplete";
import {
  healthScenarioData,
  misInformationScenarioData,
} from "../config/data/scenarios";

const GamePage = () => {
  const { gameState, startScenario, makeChoice, nextQuestion, resetGame } =
    useGameState();
  const [feedback, setFeedback] = useState<any>(null);

  const handleMakeChoice = (_: number, isCorrect: boolean) => {
    const result = makeChoice(isCorrect);
    setFeedback(result);
  };

  const handleContinue = () => {
    nextQuestion();
    setFeedback(null);
  };

  const getCurrentQuestion = () => {
    if (!gameState.currentScenarioType) return null;

    const questions =
      gameState.currentScenarioType === "social"
        ? misInformationScenarioData
        : healthScenarioData;

    return questions[gameState.currentQuestionIndex % questions.length];
  };

  const currentQuestion = getCurrentQuestion();

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
          {gameState.questionsAnswered >= 10 ? (
            <GameComplete score={gameState.score} onReset={resetGame} />
          ) : feedback ? (
            <FeedbackScreen
              isCorrect={feedback.isCorrect}
              feedback={feedback.feedback}
              onContinue={handleContinue}
            />
          ) : gameState.currentScenarioType ? (
            currentQuestion && (
              <ScenarioScreen
                scenario={currentQuestion}
                onMakeChoice={handleMakeChoice}
              />
            )
          ) : (
            <WelcomeScreen onStartScenario={startScenario} />
          )}
        </div>

        <GameProgress
          completed={gameState.questionsAnswered}
          total={10}
          score={gameState.score}
        />

        <footer className="text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Debbal Truth - Empowering Digital
            Literacy. All Rights Reserved
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default GamePage;
