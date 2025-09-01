interface ChoiceCardProps {
  id: number;
  icon: string;
  color: string;
  title: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const ChoiceCard = ({
  icon,
  color,
  title,
  description,
  isSelected,
  onClick,
}: ChoiceCardProps) => {
  const colorClasses = {
    bg: `bg-${color}-100`,
    border: `hover:border-${color}-300 ${isSelected ? `border-${color}-300 ring-2 ring-${color}-200` : 'border-gray-200'}`,
    hover: `hover:bg-${color}-50`,
    text: `text-${color}-600`,
  };

  return (
    <div
      className={`choice-card bg-white border rounded-lg p-6 cursor-pointer transition-all ${colorClasses.border} ${colorClasses.hover} ${isSelected ? 'scale-105' : ''}`}
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