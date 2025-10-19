import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, BookOpen, X } from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);

  // Toggle this to open/close applications
  const isApplicationOpen = false; // <-- set to true when applications are open

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
    <div className="min-h-screen">
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
                className="bg-[#0B2148] text-[#D4AF37] hover:bg-[#142E5E] font-bold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <img
              src="/assets/logo.png"
              alt="Bright Bridge Academy"
              className="h-32 w-auto mx-auto mb-8 animate-slide-up"
            />
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide mb-6 animate-slide-up">
              Bright Bridge Academy
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-8 animate-slide-up">
              Building Bright Minds, Bridging Brighter Futures.
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Welcome to Bright Bridge Academy, where excellence meets innovation. We empower students across Africa with the guidance and resources needed to achieve their dreams of higher education and career success.
            </p>

            {/* Buttons aligned horizontally */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in">
              <Link
                to="/programs"
                className="inline-flex items-center bg-[#D4AF37] text-[#0B2148] hover:bg-[#F1C232] font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={handleApplyClick}
                className="bg-[#0B2148] text-[#D4AF37] hover:bg-[#142E5E] font-bold px-10 py-4 rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-white/20">
          <Star size={60} />
        </div>
        <div className="absolute bottom-20 right-10 text-white/20">
          <BookOpen size={80} />
        </div>
      </section>

      {/* Mission Preview Section */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-8 animate-fade-in">
            Bridging the Gap to Opportunity
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            We are an education-dedicated organization aiming to connect students with opportunities they deserve. We realize many fall short due to a lack of guidance, information, and support—we are here to change that.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center card-hover p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#3CB043] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2148] mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in education and character development.</p>
            </div>

            <div className="text-center card-hover p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2148] mb-2">Creativity</h3>
              <p className="text-gray-600">Encouraging innovative thinking and artistic expression in all areas.</p>
            </div>

            <div className="text-center card-hover p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#3CB043] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2148] mb-2">Leadership</h3>
              <p className="text-gray-600">Developing confident leaders who make positive impacts in their communities.</p>
            </div>

            <div className="text-center card-hover p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2148] mb-2">Collaboration</h3>
              <p className="text-gray-600">Building strong partnerships between students, families, and educators.</p>
            </div>
          </div>

          <div className="mt-16">
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
