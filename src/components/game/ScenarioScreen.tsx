import ChoiceCard from "./ChoiceCard";
import SocialPost from "./SocialPost";

interface ScenarioScreenProps {
  scenario: number;
  onMakeChoice: (choiceId: number, isCorrect: boolean) => void;
}

interface ScenarioData {
  title: string;
  icon: string;
  post: {
    title: string;
    source: string;
    time: string;
    content: string;
    likes: string;
    shares: string;
    comments: string;
  };
  choices: {
    id: number;
    icon: string;
    color: string;
    title: string;
    description: string;
    isCorrect: boolean;
  }[];
}



const scenarioData: ScenarioData[] = [
  {
    title: "Scenario 1: Social Media Misinformation",
    icon: "users",
    post: {
      title: "🚨 Breaking News! Celebrity X Quits Acting Forever! 🚨",
      source: "TrendingNowNews",
      time: "5 hours ago",
      content: `"Celebrity X, beloved star of blockbuster movies, has announced their decision to leave acting forever. According to a source close to the celebrity, they plan to focus on their personal life and spend more time with their family. Fans are devastated. Read more here: bit.ly/fake-news-link"`,
      likes: "12,345",
      shares: "4,567",
      comments: "2,345",
    },
    choices: [
      {
        id: 1,
        icon: "search",
        color: "green",
        title: "Investigate the Source",
        description:
          "Check the credibility of TrendingNowNews and the linked article",
        isCorrect: true,
      },
      {
        id: 2,
        icon: "hashtag",
        color: "blue",
        title: "Check Hashtag Trends",
        description: "See what reliable sources are saying about this topic",
        isCorrect: false,
      },
      {
        id: 3,
        icon: "check",
        color: "red",
        title: "Assume It's True",
        description:
          "Accept the post at face value and share with your network",
        isCorrect: false,
      },
      {
        id: 4,
        icon: "user-check",
        color: "purple",
        title: "Verify With Official Sources",
        description: "Check Celebrity X's official social media accounts",
        isCorrect: true,
      },
    ],
  },
  {
    title: "Scenario 2: Fake Health News",
    icon: "heartbeat",
    post: {
      title: "🌿 Miracle Cure Discovered! Doctors Hate This! 🌿",
      source: "NaturalHealthTruth",
      time: "3 hours ago",
      content: `"A simple kitchen ingredient can cure cancer in 3 days! Big Pharma doesn't want you to know this secret. Thousands have already been healed. Click here to learn the shocking truth: healthsecret.site/free-cure"`,
      likes: "8,765",
      shares: "3,210",
      comments: "1,543",
    },
    choices: [
      {
        id: 1,
        icon: "search",
        color: "green",
        title: "Check Medical Sources",
        description: "Verify with reputable medical organizations",
        isCorrect: true,
      },
      {
        id: 2,
        icon: "user-md",
        color: "blue",
        title: "Consult a Doctor",
        description: "Ask a medical professional about this claim",
        isCorrect: true,
      },
      {
        id: 3,
        icon: "share",
        color: "red",
        title: "Share Immediately",
        description: "Spread this important health information",
        isCorrect: false,
      },
      {
        id: 4,
        icon: "flask",
        color: "purple",
        title: "Research Studies",
        description: "Look for peer-reviewed research on this claim",
        isCorrect: true,
      },
    ],
  },
];

const ScenarioScreen = ({ scenario, onMakeChoice }: ScenarioScreenProps) => {
  const currentScenario = scenarioData[scenario];

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <i
            className={`fas fa-${currentScenario.icon} text-blue-600 text-xl`}
          ></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {currentScenario.title}
        </h2>
      </div>

      <SocialPost post={currentScenario.post} />

      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Analyze the post above and choose your next action:
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {currentScenario.choices.map((choice) => (
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
        <span>
          Tip:{" "}
          {scenario === 1
            ? "Viral posts often use emotional language to encourage sharing without verification"
            : "Miracle cures often make unrealistic claims and attack established medicine"}
        </span>
      </div>
    </div>
  );
};

export default ScenarioScreen;
