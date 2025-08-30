import CTASection from "../components/about/CTASection";
import HorizonStory from "../components/about/HorizonStory";
import MissionVision from "../components/about/MissionVision";
import PartnersSection from "../components/about/PartnersSection";
import StatsSection from "../components/about/StatsSection";
import TeamSection from "../components/about/TeamSection";
import ValueSection from "../components/about/ValueSection";
import Hero from "../components/Hero";

const AboutUsPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Hero
        title="About"
        highlightedTitle="Horizon Truth"
        description="We're on a mission to combat misinformation through education, technology, and community engagement."
        primaryButton={{
          text: "Our Story",
          link: "#our-story",
          isExternal: true,
        }}
        secondaryButton={{
          text: "Meet Our Team",
          link: "#our-team",
          isExternal: true,
        }}
        image={{
          url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Team collaboration",
        }}
        badge={{
          icon: "fas fa-medal",
          title: "Trusted Resource",
          description: "5,247+ active users",
        }}
      />
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
