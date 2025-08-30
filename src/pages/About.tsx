import AboutHero from "../components/about/AboutHero";
import CTASection from "../components/about/CTASection";
import HorizonStory from "../components/about/HorizonStory";
import MissionVision from "../components/about/MissionVision";
import PartnersSection from "../components/about/PartnersSection";
import StatsSection from "../components/about/StatsSection";
import TeamSection from "../components/about/TeamSection";
import ValueSection from "../components/about/ValueSection";

const AboutUsPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <AboutHero />
      <HorizonStory />
      <MissionVision />
      <ValueSection />
      <TeamSection />
      <StatsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default AboutUsPage;
