// routes.tsx
import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AboutUsPage from "./pages/About";
import ResourcesPage from "./pages/Resources";
import ReportingPage from "./pages/Reporting";
import ContactUsPage from "./pages/ContactUs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import FAQs from "./pages/Faqs";

const AnimatedOutlet = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

const PageTransitionHandler = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isPageLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return null;
};

function MainLayout() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
}

function MasterLayout() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <PageTransitionHandler /> <AnimatedOutlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: "about",
            element: <AboutUsPage />,
          },
          {
            path: "resources",
            element: <ResourcesPage />,
          },
          {
            path: "report",
            element: <ReportingPage />,
          },
          {
            path: "contact",
            element: <ContactUsPage />,
          },
          {
            path: "privacy-policy",
            element: <PrivacyPolicy />
          },
          {
            path: "terms-of-service",
            element: <TermsOfService />
          },
          {
            path: "cookies",
            element: <CookiesPolicy />
          },
          {
            path: "faqs",
            element: <FAQs />
          }
        ],
      },
    ],
  },
]);

export default router;
