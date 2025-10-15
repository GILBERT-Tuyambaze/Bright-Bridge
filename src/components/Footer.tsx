import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B2148] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/assets/logo.png" alt="Bright Bridge Academy" className="h-8 w-auto" />
            <span className="font-bold text-lg">BRIGHT BRIDGE ACADEMY</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link 
              to="/" 
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link 
              to="/programs" 
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Bright Bridge Academy | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}