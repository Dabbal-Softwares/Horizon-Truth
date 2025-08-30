import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Horizon Truth" className="h-10" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">Home</Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">About Us</Link>
            <Link to="/resources" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">Resources</Link>
            <Link to="/report" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">Report</Link>
            <Link to="/game" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">Game</Link>
            {/* <Link to="/news" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">News</Link> */}
            <Link to="/contact" className="nav-link text-gray-700 hover:text-sky-500 font-medium transition duration-300">Contact</Link>
          </div>
          <div className="md:hidden">
            <button 
              id="menu-toggle" 
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-4`}>
          <Link to="/" className="block py-2 text-gray-700 hover:text-sky-500">Home</Link>
          <Link to="/about" className="block py-2 text-gray-700 hover:text-sky-500">About Us</Link>
          <Link to="/resources" className="block py-2 text-gray-700 hover:text-sky-500">Resources</Link>
          <Link to="/report" className="block py-2 text-gray-700 hover:text-sky-500">Report</Link>
          <Link to="/game" className="block py-2 text-gray-700 hover:text-sky-500">Game</Link>
          {/* <Link to="/news" className="block py-2 text-gray-700 hover:text-sky-500">News</Link> */}
          <Link to="/contact" className="block py-2 text-gray-700 hover:text-sky-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;