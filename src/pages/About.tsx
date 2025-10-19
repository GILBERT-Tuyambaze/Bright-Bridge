import { Target, Eye, Heart, Users, Award, Lightbulb, Globe, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0B2148] to-[#3CB043] text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase mb-6 animate-fade-in">
            Bright Bridge Academy
          </h1>
          <p className="text-xl text-[#D4AF37] md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Discover our story, mission, and commitment to helping students succeed in higher education abroad
          </p>
          <br/>
          <p className="text-lg md:text-xl mb-12 max-w-6xl mx-auto leading-relaxed animate-slide-up">
            We are an education-dedicated organization that aims to bridge the gap of education and opportunities 
            for students, especially those in Africa. While many African students are dedicated to their studies, 
            they often fall short of opportunities due to lack of guidance, access to information, and support 
            for preparing for higher education abroad.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#3CB043] rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0B2148] uppercase">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become a leading college admissions consultancy, renowned for helping students achieve their academic 
                and career aspirations abroad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#0B2148] uppercase">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide students with the guidance, resources, and support they need to navigate the college 
                admissions process successfully and gain admission to top universities abroad.
              </p>
            </div>
          </div>

          {/* Quote Block */}
          <div className="bg-[#0B2148] text-white p-12 rounded-2xl text-center mb-16">
            <blockquote className="text-3xl md:text-4xl font-bold italic text-[#D4AF37] mb-4">
              "Education is the bridge to endless opportunities."
            </blockquote>
            <p className="text-lg">- Bright Bridge Academy Philosophy</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-6">Our Story</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Bright Bridge Academy was founded to help students access higher education opportunities abroad. 
              We believe every student deserves guidance and support to prepare for universities in top destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#0B2148] mb-6">Building Bridges to Success</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Education is more than academic achievement—it's about building skills, confidence, and readiness 
                for higher education abroad.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team works closely with students to provide personalized guidance, helping them identify their goals, 
                explore opportunities, and successfully navigate the college admissions process.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#3CB043] to-[#0B2148] p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Bright Bridge Prep Program</h4>
              <p className="mb-4">
                Through the Bright Bridge Prep program, we prepare students for higher education abroad.
              </p>
              <h5 className="font-bold mb-2">Program Goal</h5>
              <p className="mb-4">
                We help students apply and study at top universities in the US, Canada, UK, Germany, Australia, and more.
              </p>
              <h5 className="font-bold mb-2">Key Features</h5>
              <ul className="list-disc list-inside space-y-2">
                <li>University Applications</li>
                <li>English Writing/Reading Workshops</li>
                <li>SAT/ACT Preparation</li>
                <li>Career Pathway Exploration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2148] uppercase mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              These fundamental principles guide everything we do at Bright Bridge Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#3CB043] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in everything we do.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Integrity</h3>
              <p className="text-gray-700">
                We uphold honesty and transparency in all interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#3CB043] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Empowerment</h3>
              <p className="text-gray-700">
                We equip students with the tools and confidence to succeed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Collaboration</h3>
              <p className="text-gray-700">
                We work together with students and parents to achieve common goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
