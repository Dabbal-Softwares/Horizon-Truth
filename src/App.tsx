import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AboutUsPage from "./pages/About";
import { JSX } from "react";

function App() {
  const MainLayout = ({ element }: { element: JSX.Element }) => {
    return (
      <div className="font-sans antialiased text-gray-800 bg-gray-50">
        <Navbar />
        {/* <Hero /> */}
        {element}
        <Footer />
        <BackToTop />
      </div>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        <Route
          path="/about"
          element={<MainLayout element={<AboutUsPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
