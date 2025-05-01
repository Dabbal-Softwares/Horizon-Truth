import { ScenarioData } from "../../config/data/scenarios";
import ChoiceCard from "./ChoiceCard";
import SocialPost from "./SocialPost";


interface ScenarioScreenProps {
  scenario: ScenarioData;
  onMakeChoice: (choiceId: number, isCorrect: boolean) => void;
}

const ScenarioScreen = ({ scenario, onMakeChoice }: ScenarioScreenProps) => {
  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <i className={`fas fa-${scenario.icon} text-blue-600 text-xl`}></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {scenario.title}
        </h2>
      </div>

      <SocialPost post={scenario.post} />

      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Analyze the post above and choose your next action:
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {scenario.choices.map((choice) => (
          <ChoiceCard
            key={choice.id}
            id={choice.id}
            icon={choice.icon}
            color={choice.color}
            title={choice.title}
            description={choice.description}
            onClick={() => onMakeChoice(choice.id, choice.isCorrect)}
          />
        ))}
      </div>

      <div className="text-sm text-gray-500">
        <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>
        <span>Tip: {scenario.tip}</span>
      </div>
    </div>
  );
};

export default ScenarioScreen;