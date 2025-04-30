import { useState } from "react";
import useGameState from "../hooks/useGameState";
import GameHeader from "../components/game/GameHeader";
import GameProgress from "../components/game/GameProgress";
import WelcomeScreen from "../components/game/WelcomeScreen";
import ScenarioScreen from "../components/game/ScenarioScreen";
import FeedbackScreen from "../components/game/FeedbackScreen";
import GameComplete from "../components/game/GameComplete";

const GamePage = () => {
  const { gameState, startScenario, makeChoice, completeScenario, resetGame } =
    useGameState();
  const [feedback, setFeedback] = useState<any>(null);

  const handleMakeChoice = (choiceId: number) => {
    const result = makeChoice(choiceId);
    setFeedback(result);
  };

  const handleContinue = () => {
    completeScenario();
    setFeedback(null);
  };

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
          {gameState.completed >= 10 ? (
            <GameComplete score={gameState.score} onReset={resetGame} />
          ) : feedback ? (
            <FeedbackScreen
              isCorrect={feedback.isCorrect}
              feedback={feedback.feedback}
              onContinue={handleContinue}
            />
          ) : gameState.currentScenario === 0 ? (
            <WelcomeScreen onStartScenario={startScenario} />
          ) : (
            <ScenarioScreen
              scenario={gameState.currentScenario}
              onMakeChoice={handleMakeChoice}
            />
          )}
        </div>

        <GameProgress completed={gameState.completed} />

        <footer className="text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} Debbal Truth - Empowering Digital Literacy. All Rights
            Reserved
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
