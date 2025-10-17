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
            Discover our story, vision, and commitment to educational excellence
          </p>
          <br/>
          <p className="text-lg md:text-xl mb-12 max-w-6xl mx-auto leading-relaxed animate-slide-up">
             We are an education-dedicated organization that aims to bridge the gap of education and opportunities for students, especially those in Africa. While many African students now believe in education, dedication to their studies and a bright future resulting from their education, we realize how they usually fall short of educational opportunities, mainly due to lack of guidance and counseling, lack of access to information, and also lack of support and empowerment to uplevel their skills and readiness for continuing education, especially after graduating from high school and from the Bachelor’s level.
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
                To be a leading educational institution that empowers students to become innovative thinkers, 
                compassionate leaders, and global citizens who contribute positively to society and shape 
                a brighter future for all.
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
                To provide exceptional, holistic education that nurtures academic excellence, character development, 
                and creative thinking while fostering a supportive community where every student can discover 
                their potential and achieve their dreams.
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
              Founded with a vision to transform education, Bright Bridge Academy has been dedicated to 
              creating an environment where students thrive academically, socially, and personally. 
              Our journey began with a simple belief: every child deserves access to quality education 
              that prepares them for success in life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#0B2148] mb-6">Building Bridges to Success</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Bright Bridge Academy, we understand that education is more than just academic achievement. 
                It's about building character, fostering creativity, and developing the skills needed to 
                navigate an ever-changing world.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our dedicated team of educators works tirelessly to create innovative learning experiences 
                that engage students and inspire them to reach their full potential. We believe in the 
                power of education to transform lives and communities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#3CB043] to-[#0B2148] p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-[#D4AF37] mr-3" />
                  <span>Award-winning academic programs</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#D4AF37] mr-3" />
                  <span>Small class sizes for personalized attention</span>
                </li>
                <li className="flex items-center">
                  <Lightbulb className="h-5 w-5 text-[#D4AF37] mr-3" />
                  <span>Innovative teaching methodologies</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 text-[#D4AF37] mr-3" />
                  <span>Global perspective and cultural awareness</span>
                </li>
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
                We strive for the highest standards in everything we do, from academic achievement 
                to character development and community service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Creativity</h3>
              <p className="text-gray-700">
                We encourage innovative thinking, artistic expression, and creative problem-solving 
                across all areas of learning and development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#3CB043] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Leadership</h3>
              <p className="text-gray-700">
                We develop confident, ethical leaders who inspire others and make positive 
                contributions to their communities and the world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0B2148] uppercase mb-4">Collaboration</h3>
              <p className="text-gray-700">
                We build strong partnerships between students, families, educators, and the 
                community to create a supportive learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}