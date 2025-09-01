import { GameScenario } from "../../types/game";

interface FeedbackScreenProps {
  isCorrect: boolean;
  feedback: string;
  scenario?: GameScenario;
  onContinue: () => void;
  isSubmitting?: boolean;
}

const FeedbackScreen = ({ isCorrect, feedback, scenario, onContinue, isSubmitting = false }: FeedbackScreenProps) => {
  return (
    <div className="p-8 text-center">
      <div className={`${isCorrect ? 'bg-green-100' : 'bg-red-100'} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
        <i className={`fas fa-${isCorrect ? 'check' : 'times'} text-${isCorrect ? 'green' : 'red'}-500 text-3xl`}></i>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {isCorrect ? "Correct! Well Done!" : "Incorrect - Better Luck Next Time!"}
      </h2>
      
      <div className={`${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border rounded-lg p-6 mb-8 max-w-2xl mx-auto`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {isCorrect ? "Why This Was the Right Choice:" : "Explanation:"}
        </h3>
        <p className="text-gray-700 mb-4">{feedback}</p>
        
        {!isCorrect && scenario && (
          <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
            <h4 className="font-bold text-gray-900 mb-2">The Correct Approach:</h4>
            <p className="text-gray-700">{scenario.feedback.incorrect}</p>
          </div>
        )}
      </div>
      
      <button 
        onClick={onContinue}
        disabled={isSubmitting}
        className="bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg mx-auto"
      >
        {isSubmitting ? 'Loading...' : 'Continue to Next Question'}
      </button>
    </div>
  );
};

export default FeedbackScreen;