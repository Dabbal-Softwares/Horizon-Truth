interface GameProgressProps {
  completed: number;
}

const GameProgress = ({ completed }: GameProgressProps) => {
  const progress = (completed / 10) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Your Investigator Progress
        </h3>
        <span className="text-sm font-medium text-blue-600">
          Level 1 Detective
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>{completed}/10 scenarios completed</span>
        <span>{progress}% accuracy</span>
      </div>
    </div>
  );
};

export default GameProgress;
