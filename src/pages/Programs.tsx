import { Computer, Palette, Globe, Users, BookOpen, Microscope, Music, Trophy, GraduationCap, Target, X } from 'lucide-react';
import { useState } from 'react';

export default function Programs() {
  const [showApplicationClosed, setShowApplicationClosed] = useState(false);

  const programs = [
    {
      title: "STEM & Technology",
      description: "Cutting-edge science, technology, engineering, and mathematics programs that prepare students for the digital future with hands-on learning experiences.",
      icon: Computer,
      features: ["Robotics & Coding", "Advanced Mathematics", "Scientific Research", "Engineering Design"],
      color: "bg-[#3CB043]",
      hoverColor: "hover:bg-[#0B2148]"
    },
    {
      title: "Arts & Innovation",
      description: "Creative programs that foster artistic expression, design thinking, and innovative problem-solving skills through multimedia and traditional arts.",
      icon: Palette,
      features: ["Visual Arts", "Digital Design", "Creative Writing", "Innovation Labs"],
      color: "bg-[#D4AF37]",
      hoverColor: "hover:bg-[#3CB043]"
    },
    {
      title: "Languages & Leadership",
      description: "Comprehensive language programs and leadership development to create global citizens and effective communicators in our interconnected world.",
      icon: Globe,
      features: ["Multilingual Studies", "Public Speaking", "Cultural Exchange", "Leadership Training"],
      color: "bg-[#0B2148]",
      hoverColor: "hover:bg-[#D4AF37]"
    },
    {
      title: "Community Engagement",
      description: "Service-learning programs that connect students with their community while developing social responsibility and civic awareness.",
      icon: Users,
      features: ["Volunteer Projects", "Social Impact", "Community Partnerships", "Civic Education"],
      color: "bg-[#3CB043]",
      hoverColor: "hover:bg-[#0B2148]"
    },
    {
      title: "Academic Excellence",
      description: "Rigorous academic programs across all core subjects with personalized learning approaches and advanced placement opportunities.",
      icon: BookOpen,
      features: ["Advanced Placement", "Honors Courses", "Research Projects", "Academic Mentoring"],
      color: "bg-[#D4AF37]",
      hoverColor: "hover:bg-[#0B2148]"
    },
    {
      title: "Research & Discovery",
      description: "Hands-on research opportunities that encourage scientific inquiry, critical thinking skills, and real-world problem solving.",
      icon: Microscope,
      features: ["Lab Research", "Field Studies", "Data Analysis", "Scientific Method"],
      color: "bg-[#0B2148]",
      hoverColor: "hover:bg-[#3CB043]"
    }
  ];

  const preparatoryPrograms = [
    {
      title: "BRIGHT BRIDGE PREP",
      description: "Through the Bright Bridge Prep program, we offer personalized guidance to scholars, expose them to opportunities, and help them get ready for higher education.",
      goal: "We help students apply and study to universities abroad in top destinations such as the United States, Canada, United Kingdom, Germany, Australia, and several others.",
      icon: GraduationCap,
      features: ["University Applications", "English Writing Workshops", "Math Preparation", "Career Pathway Exploration"],
      color: "bg-gradient-to-br from-[#3CB043] to-[#0B2148]"
    }
  ];

  const handleApplyClick = () => {
    setShowApplicationClosed(true);
  };

  const closeModal = () => {
    setShowApplicationClosed(false);
  };

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
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 animate-fade-in">
            Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-slide-up leading-relaxed">
            At Bright Bridge Academy, we offer diverse, future-focused programs designed to nurture creativity, 
            critical thinking, and leadership in every student.
          </p>
        </div>
      </section>

      {/* Bright Bridge Prep - Featured Program */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-4">
              Featured Program
            </h2>
          </div>

          {preparatoryPrograms.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover border border-gray-100">
                <div className={`${program.color} p-12 text-white relative`}>
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex-1 mb-6 md:mb-0">
                      <div className="flex items-center mb-6">
                        <IconComponent className="h-12 w-12 text-[#D4AF37] mr-4" />
                        <h3 className="text-4xl font-bold uppercase tracking-wide">
                          {program.title}
                        </h3>
                      </div>
                      <p className="text-xl leading-relaxed mb-6">
                        {program.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-[#D4AF37] mb-3 uppercase flex items-center">
                          <Target className="h-6 w-6 mr-2" />
                          Program Goal
                        </h4>
                        <p className="text-lg leading-relaxed">
                          {program.goal}
                        </p>
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
                      <button className="w-full mt-6 bg-[#D4AF37] text-[#0B2148] hover:bg-white hover:text-[#0B2148] font-bold py-3 px-6 rounded-xl transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Core Academic Programs */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-6">
              Core Academic Programs
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our comprehensive range of programs ensures that every student finds their passion and develops 
              the skills needed for success in their chosen field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Header with Icon and Title */}
                  <div className={`${program.color} ${program.hoverColor} p-6 text-white relative transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-10 w-10" />
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {program.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">
                      {program.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-bold text-[#0B2148] text-lg">Program Highlights:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-[#3CB043] rounded-full mr-3 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-[#0B2148] text-[#D4AF37] hover:bg-[#0B2148]/90 font-bold py-3 px-4 rounded-xl transition-all duration-300 group-hover:scale-105 hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#3CB043] via-[#0B2148] to-[#D4AF37] p-12 rounded-3xl text-white text-center shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Join Bright Bridge Academy and discover programs that will unlock your potential 
              and prepare you for a bright future filled with endless opportunities. Our dedicated 
              faculty and innovative curriculum await you.
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