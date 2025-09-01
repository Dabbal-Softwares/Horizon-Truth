import { Category } from "../../types/game";

interface WelcomeScreenProps {
  onStartScenario: (categoryId: string) => void;
  categories: Category[];
}

const WelcomeScreen = ({ onStartScenario, categories }: WelcomeScreenProps) => {
  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <i className="fas fa-info-circle text-sky-500 text-xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome to Horizon Truth's Investigation Game!
        </h2>
      </div>

      <p className="text-gray-700 mb-6">
        In this game, your mission is to investigate and debunk misinformation.
        You'll encounter various real-world scenarios where you need to apply
        critical thinking and make informed decisions.
      </p>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <i className="fas fa-gamepad text-sky-500 mr-3"></i> How to Play:
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
            <span>Choose a scenario to begin your investigation</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
            <span>Analyze the information carefully before taking action</span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
            <span>
              Make choices that help stop the spread of misinformation
            </span>
          </li>
          <li className="flex items-start">
            <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
            <span>Learn from feedback to improve your digital literacy</span>
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Select a Scenario to Begin:
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {categories && categories.map((category) => (
          <ScenarioCard
            key={category.id}
            icon={category.icon}
            title={category.label}
            description={`Explore ${category.label} misinformation scenarios`}
            onClick={() => onStartScenario(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

interface ScenarioCardProps {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ScenarioCard = ({
  icon,
  title,
  description,
  onClick,
}: ScenarioCardProps) => {
  return (
    <div
      className="game-card bg-white border border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-blue-300 transition-all duration-300 hover:shadow-md"
      onClick={onClick}
    >
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`fas fa-${icon} text-sky-500 text-2xl`}></i>
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="inline-block bg-sky-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-600 transition-colors">
        Start Investigation
      </span>
    </div>
  );
};

export default WelcomeScreen;