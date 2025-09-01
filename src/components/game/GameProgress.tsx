interface GameProgressProps {
  completed: number;
  total: number;
  score: number;
}

const GameProgress = ({ completed, total, score }: GameProgressProps) => {
  const progress = (completed / total) * 100;
  const accuracy = completed > 0 ? Math.round((score / (completed * 10)) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Your Investigator Progress
        </h3>
        <span className="text-sm font-medium text-sky-500">
          Level {Math.floor(completed / 3) + 1} Detective
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-sky-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{completed}/{total} questions completed</span>
        <span>{accuracy}% accuracy</span>
        <span>{score} points</span>
      </div>
    </div>
  );
};

export default GameProgress;