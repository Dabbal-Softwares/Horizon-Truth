interface GameCompleteProps {
  score: number;
  onReset: () => void;
}

const GameComplete = ({ score, onReset }: GameCompleteProps) => {
  return (
    <div className="p-12 text-center">
      <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
        <i className="fas fa-trophy text-green-500 text-4xl"></i>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Investigation Complete!
      </h2>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        You've completed all scenarios with {score}% accuracy!
      </p>
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
