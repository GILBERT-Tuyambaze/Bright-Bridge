import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);
  const location = useLocation();

  // Toggle this to open/close applications globally
  const isApplicationOpen = false; // <-- change to true when applications are open

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Academy', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Modal */}
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
                Applications are currently closed. Please check back later.
              </p>
              <button
                onClick={closeModal}
                className="bg-[#0B2148] text-[#D4AF37] hover:bg-[#142E5E] font-bold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/assets/logo.png"
                  alt="Bright Bridge Academy"
                  className="h-10 w-auto"
                />
                <span className="font-bold text-xl text-[#0B2148]">BRIGHT BRIDGE ACADEMY</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-[#3CB043] border-b-2 border-[#3CB043]'
                      : 'text-[#0B2148] hover:text-[#3CB043]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Apply Button */}
              <button
                onClick={handleApplyClick}
                className="ml-4 bg-[#D4AF37] text-[#0B2148] font-bold text-sm px-5 py-2 rounded-xl shadow-md hover:bg-[#F1C232] hover:scale-105 transition-all duration-300"
              >
                Apply
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#0B2148] hover:text-[#3CB043] p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-semibold uppercase tracking-wide transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'text-[#3CB043]'
                        : 'text-[#0B2148] hover:text-[#3CB043]'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Apply Button Mobile */}
                <button
                  onClick={() => {
                    handleApplyClick();
                    setIsOpen(false);
                  }}
                  className="block w-full text-center bg-[#D4AF37] text-[#0B2148] font-bold mt-3 px-5 py-2 rounded-xl shadow-md hover:bg-[#F1C232] hover:scale-105 transition-all duration-300"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
