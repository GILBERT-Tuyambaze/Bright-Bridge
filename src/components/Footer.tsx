import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);

  // Toggle this to open/close applications
  const isApplicationOpen = false; // set to true when applications are open

  const handleApplyClick = () => {
    if (isApplicationOpen) {
      window.open(
        'https://docs.google.com/forms/d/e/1FAIpQLSeGiRs4JYXb3sb6jg46vfJddYvXCdBBf92-z_hn3O_xQil0fg/viewform',
        '_blank',
        'noopener,noreferrer'
      );
    } else {
      setShowApplicationClosed(true);
    }
  };

  const closeModal = () => setShowApplicationClosed(false);

  return (
    <footer className="bg-[#0B2148] text-white relative">
      {/* Application Closed Modal */}
      {showApplicationClosed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#0B2148]">Application Status</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-[#0B2148] transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Applications are currently closed. Please check back later for future enrollment opportunities.
              </p>
              <button 
                onClick={closeModal}
                className="bg-[#0B2148] text-[#D4AF37] hover:bg-[#0B2148]/90 font-bold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/assets/logo.png" alt="Bright Bridge Academy" className="h-8 w-auto" />
            <span className="font-bold text-lg">BRIGHT BRIDGE ACADEMY</span>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">About</Link>
            <Link to="/programs" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Programs</Link>
            <Link to="/contact" className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium">Contact</Link>
          </div>

          {/* Apply Button */}
          <div>
            <button 
              onClick={handleApplyClick}
              className="bg-[#D4AF37] text-[#0B2148] hover:bg-white hover:text-[#0B2148] font-bold px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white hover:text-[#D4AF37] transition-colors"><Linkedin size={20} /></a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Bright Bridge Academy | All Rights Reserved. | <a href="https://gilbert-tuyambaze.vercel.app" className="text-gray-300 hover:text-orange-500">Developed By Gilbert TUYAMBAZE</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
