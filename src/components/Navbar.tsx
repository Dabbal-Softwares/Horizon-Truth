import { useState } from 'react';

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
              <img src="/assets/img/logo.png" alt="Horizon Truth" className="h-10" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</a>
            <a href="/about" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">About Us</a>
            <a href="/resources" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">Resources</a>
            <a href="/report" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">Report</a>
            <a href="/game" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">Game</a>
            <a href="/news" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">News</a>
            <a href="/contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</a>
          </div>
          
          {/* Mobile menu button */}
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
        
        {/* Mobile Navigation */}
        <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-4`}>
          <a href="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
          <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</a>
          <a href="/resources" className="block py-2 text-gray-700 hover:text-blue-600">Resources</a>
          <a href="/report" className="block py-2 text-gray-700 hover:text-blue-600">Report</a>
          <a href="/game" className="block py-2 text-gray-700 hover:text-blue-600">Game</a>
          <a href="/news" className="block py-2 text-gray-700 hover:text-blue-600">News</a>
          <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;