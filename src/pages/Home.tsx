import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Hero />
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