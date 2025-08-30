import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import heroImage from "../assets/truth.jpg";

const Home = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Hero
        title="Empowering Minds,"
        highlightedTitle="Fighting Misinformation"
        description="Horizon Truth provides interactive tools and resources to help individuals identify and combat misinformation. Through gamified learning and community-driven verification, we are building a more informed and transparent society."
        primaryButton={{
          text: "Start the Game",
          link: "/game",
        }}
        secondaryButton={{
          text: "Learn More",
          link: "/about",
        }}
        image={{
          url: heroImage,
          alt: "Digital literacy",
        }}
        badge={{
          icon: "fas fa-shield-alt",
          title: "Verified Content",
          description: "Community-driven verification",
        }}
      />
      <About />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
