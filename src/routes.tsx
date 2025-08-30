// routes.tsx
import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/Game";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AboutUsPage from "./pages/About";
import ResourcesPage from "./pages/Resources";
import ReportingPage from "./pages/Reporting";
import ContactUsPage from "./pages/ContactUs";

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

export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);

export default router;
