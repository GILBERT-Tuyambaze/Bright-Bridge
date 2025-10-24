import { BookOpen, Microscope, GraduationCap, Target, X } from 'lucide-react';
import { useState } from 'react';

export default function Programs() {
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);

  // Toggle this to open/close applications
  const isApplicationOpen = true; // <-- set to true when applications are open

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

  const programs = [
    {
      title: "University Application & Scholarship Guidance",
      description: "We assist students in applying to universities across the USA, Canada, UK, Europe, China, Turkey, and Africa, helping them secure admissions and scholarships.",
      icon: GraduationCap,
      features: ["Personalized university selection","Application essay writing support","Scholarship search and application"],
      color: "bg-[#3CB043]",
      hoverColor: "hover:bg-[#0B2148]"
    },
    {
      title: "SAT/ACT Preparation",
      description: "Our program helps students improve their scores, giving them a better chance of being admitted to their dream university. We equip them with skills to excel in their exams.",
      icon: BookOpen,
      features: ["Comprehensive subject review", "Proven test-taking strategies", "Practice tests and performance analysis"],
      color: "bg-[#D4AF37]",
      hoverColor: "hover:bg-[#3CB043]"
    },
    {
      title: "Career Guidance",
      description: "We help high school students choose the right career path by providing them with information on various professions, enabling them to make informed decisions about their future.",
      icon: Microscope,
      features: ["Exploration of career options", "Alignment of interests with professions", "Informed decisions for future studies"],
      color: "bg-[#0B2148]",
      hoverColor: "hover:bg-[#D4AF37]"
    },
  ];

  const preparatoryPrograms = [
    {
      title: "BRIGHT BRIDGE PREP",
      description: "Through the Bright Bridge Prep program, we offer personalized guidance to scholars, expose them to opportunities, and help them get ready for higher education.",
      goal: "We help students apply and study to universities abroad in top destinations such as the United States, Canada, United Kingdom, Germany, Australia, and several others.",
      icon: GraduationCap,
      features: ["University Applications", "English Writing/Reading Workshops", "SAT/ACT Preparation", "Career Pathway Exploration"],
      color: "bg-gradient-to-br from-[#3CB043] to-[#0B2148]"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2148] to-[#3CB043] text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 animate-fade-in">Programs</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-slide-up leading-relaxed">
            At Bright Bridge Academy, we offer diverse, future-focused programs designed to nurture creativity, critical thinking, and leadership in every student.
          </p>
        </div>
      </section>

      {/* Bright Bridge Prep */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-4">Featured Program</h2>
          </div>

          {preparatoryPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover border border-gray-100 mb-12">
                <div className={`${program.color} p-12 text-white relative`}>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1 mb-6 md:mb-0">
                      <div className="flex items-center mb-6">
                        <IconComponent className="h-12 w-12 text-[#D4AF37] mr-4" />
                        <h3 className="text-4xl font-bold uppercase tracking-wide">{program.title}</h3>
                      </div>
                      <p className="text-xl leading-relaxed mb-6">{program.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-[#D4AF37] mb-3 uppercase flex items-center">
                          <Target className="h-6 w-6 mr-2" /> Program Goal
                        </h4>
                        <p className="text-lg leading-relaxed">{program.goal}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl md:ml-8 min-w-[300px]">
                      <h4 className="text-xl font-bold text-[#D4AF37] mb-4 uppercase">Key Features</h4>
                      <ul className="space-y-3">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-lg">
                            <div className="w-3 h-3 bg-[#D4AF37] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Program Fees Section */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-6">
            Program Fees
          </h2>
          <p className="text-2xl text-[#3CB043] font-semibold mb-4">
            25,000 RWF <span className="text-gray-600 text-lg font-normal">per month</span>
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This small monthly contribution helps keep the program alive by covering
            essential costs and other basic needs that ensure continuous learning and smooth operation of our community.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section id="apply" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#3CB043] via-[#0B2148] to-[#D4AF37] p-12 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6">Ready to Begin Your Journey?</h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Join Bright Bridge Academy and discover programs that will unlock your potential 
              and prepare you for a bright future filled with endless opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleApplyClick}
                className="bg-[#D4AF37] text-[#0B2148] hover:bg-white hover:text-[#0B2148] font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
