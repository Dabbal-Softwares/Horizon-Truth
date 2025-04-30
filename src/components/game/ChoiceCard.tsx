interface ChoiceCardProps {
  id: number;
  icon: string;
  color: string;
  title: string;
  description: string;
  onClick: () => void;
}

const ChoiceCard = ({
  id,
  icon,
  color,
  title,
  description,
  onClick,
}: ChoiceCardProps) => {
  const colorClasses = {
    bg: `bg-${color}-100`,
    border: `hover:border-${color}-300`,
    hover: `hover:bg-${color}-50`,
    text: `text-${color}-600`,
  };

  return (
    <div
      className={`choice-card bg-white border border-gray-200 rounded-lg p-6 cursor-pointer ${colorClasses.border} ${colorClasses.hover} transition-all`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`${colorClasses.bg} p-2 rounded-full mr-4`}>
          <i className={`fas fa-${icon} ${colorClasses.text}`}></i>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChoiceCard;
