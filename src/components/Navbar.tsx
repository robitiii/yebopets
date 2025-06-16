
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-yebo-teal" />
          <span className="text-xl font-bold text-yebo-navy font-poppins">YeboPets</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-base font-medium text-gray-700 hover:text-yebo-teal transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-base font-medium text-gray-700 hover:text-yebo-teal transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-base font-medium text-gray-700 hover:text-yebo-teal transition-colors">
            About Us
          </Link>
          {/* <Link to="/blog" className="text-base font-medium text-gray-700 hover:text-yebo-teal transition-colors">
            Blog
          </Link> */}
          <Link to="/contact" className="text-base font-medium text-gray-700 hover:text-yebo-teal transition-colors">
            Contact
          </Link>
          <Link to="/book" className="btn btn-primary btn-md rounded-full">
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yebo-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yebo-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yebo-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/blog" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yebo-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-yebo-teal hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/book" 
              className="block w-full text-center px-3 py-2 btn btn-primary rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
