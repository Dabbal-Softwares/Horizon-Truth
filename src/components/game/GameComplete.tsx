import { useEffect } from "react";
import { useGameStore } from "../../store/game.store";

interface GameCompleteProps {
  score: number;
  onReset: () => void;
}

const GameComplete = ({ score, onReset }: GameCompleteProps) => {
  const { gameStats, getUserStats } = useGameStore();

  useEffect(() => {
    getUserStats('current-user-id');
  }, [getUserStats]);

  const accuracy = gameStats ? Math.round(gameStats.overallAccuracy * 100) : 0;

  return (
    <div className="p-12 text-center">
      <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
        <i className="fas fa-trophy text-green-500 text-4xl"></i>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Investigation Complete!
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        You've completed all scenarios with {score} points and {accuracy}% accuracy!
      </p>
      
      {gameStats && (
        <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Stats:</h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-600">Total Score</p>
              <p className="text-2xl font-bold text-sky-600">{gameStats.totalScore}</p>
            </div>
            <div>
              <p className="text-gray-600">Accuracy</p>
              <p className="text-2xl font-bold text-green-600">{accuracy}%</p>
            </div>
            <div>
              <p className="text-gray-600">Questions Answered</p>
              <p className="text-2xl font-bold text-blue-600">{gameStats.totalQuestionsAnswered}</p>
            </div>
            <div>
              <p className="text-gray-600">Scenarios Completed</p>
              <p className="text-2xl font-bold text-purple-600">{gameStats.totalScenariosCompleted}</p>
            </div>
          </div>
        </div>
      )}
      
      <button
        onClick={onReset}
        className="bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default GameComplete;