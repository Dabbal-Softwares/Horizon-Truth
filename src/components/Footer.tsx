import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Horizon Truth" className="h-10 mb-4" />
            <p className="mb-4">
              Empowering minds to identify and combat misinformation through
              interactive tools and community engagement.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="" className="hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  className="hover:text-white transition duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/game"
                  className="hover:text-white transition duration-300"
                >
                  Game
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/report"
                  className="hover:text-white transition duration-300"
                >
                  Report Misinformation
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/news"
                  className="hover:text-white transition duration-300"
                >
                  News & Updates
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-white transition duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on
              misinformation trends and prevention.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition duration-300"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            Copyright © 2025{" "}
            <a
              href="https://debbal.com"
              className="text-blue-400 hover:text-blue-300"
            >
              Debbal
            </a>
            . All Rights Reserved
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to={"/privacy-policy"}
              className="hover:text-white transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/terms-of-service"}
              className="hover:text-white transition duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to={"/cookies"}
              className="hover:text-white transition duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
