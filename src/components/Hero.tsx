import { Link } from "react-router-dom";

type HeroProps = {
  title: string;
  highlightedTitle?: string;
  description: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  image: ImageProps;
  badge?: BadgeProps;
  overlayOpacity?: number;
  highlightColor?: string;
};

type ButtonProps = {
  text: string;
  link: string;
  isExternal?: boolean;
  onClick?: () => void;
};

type ImageProps = {
  url: string;
  alt: string;
};

type BadgeProps = {
  icon: string;
  title: string;
  description: string;
  color?: string;
  textColor?: string;
};

const Hero = ({
  title,
  highlightedTitle,
  description,
  primaryButton,
  secondaryButton,
  image,
  badge,
  overlayOpacity = 70,
  highlightColor = "blue-100",
}: HeroProps) => {
  // Helper function to render buttons appropriately
  const renderButton = (button: ButtonProps, isPrimary: boolean) => {
    const baseClasses = `font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg ${
      isPrimary
        ? `bg-white hover:bg-${highlightColor.split('-')[0]}-50 text-sky-600`
        : `bg-${highlightColor.split('-')[0]}-700 hover:bg-${highlightColor.split('-')[0]}-800 text-white border border-${highlightColor.split('-')[0]}-500`
    }`;
    
    if (button.onClick) {
      return (
        <button onClick={button.onClick} className={baseClasses}>
          {button.text}
        </button>
      );
    }
    
    if (button.isExternal) {
      return (
        <a href={button.link} className={baseClasses}>
          {button.text}
        </a>
      );
    }
    
    return (
      <Link to={button.link} className={baseClasses}>
        {button.text}
      </Link>
    );
  };

  return (
    <section className="relative hero-bg py-20 text-white bg-cover bg-center">
      <div className={`absolute inset-0 bg-blue-500/${overlayOpacity}`}></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {title} {highlightedTitle && (
                <span className={`text-${highlightColor}`}>{highlightedTitle}</span>
              )}
            </h1>
            <p className={`text-xl text-${highlightColor} mb-8 max-w-lg`}>
              {description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {primaryButton && renderButton(primaryButton, true)}
              {secondaryButton && renderButton(secondaryButton, false)}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src={image.url}
                alt={image.alt}
                className="rounded-xl shadow-2xl w-full max-w-md border-8 border-white"
              />
              {badge && (
                <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className={`bg-${badge.color || 'sky-500'} p-3 rounded-full mr-3`}>
                      <i className={`${badge.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <p className={`font-bold text-${badge.textColor || 'blue-800'}`}>{badge.title}</p>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;