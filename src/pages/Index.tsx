import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, BookOpen } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen">
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
              "Building Bright Minds, Bridging Brighter Futures."
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              Welcome to Bright Bridge Academy, where excellence meets innovation. We are dedicated to nurturing young minds and preparing them for a future filled with endless possibilities through comprehensive education and character development.
            </p>
            <Link 
              to="/programs"
              className="inline-flex items-center bg-[#D4AF37] text-[#0B2148] hover:bg-[#D4AF37]/90 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 animate-slide-up"
            >
              Explore Our Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            At Bright Bridge Academy, we believe education is the bridge to endless opportunities. 
            Our mission is to provide exceptional academic programs that foster creativity, leadership, 
            and collaboration while preparing students for success in an ever-changing world.
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
            <Link 
              to="/about"
              className="btn-secondary"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}