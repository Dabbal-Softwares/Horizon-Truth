import { FaShieldAlt, FaUsers, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-sky-400 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Horizon Truth</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering digital citizens to identify and combat misinformation through innovative tools and community engagement.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://st.depositphotos.com/1745098/3423/i/450/depositphotos_34232789-stock-photo-vision-mission-buzzword.jpg" 
                alt="Team working together"
                className="rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Horizon Truth provides interactive tools and resources to help individuals identify and combat misinformation. 
                Through gamified learning and community-driven verification, we are building a more informed and transparent society.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="italic text-gray-800">
                  "In a world of information overload, critical thinking is the ultimate superpower."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Horizon Truth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaShieldAlt className="text-sky-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Truth</h3>
              <p className="text-gray-600 text-center">
                We prioritize factual accuracy and evidence-based information above all else.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaUsers className="text-sky-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Community</h3>
              <p className="text-gray-600 text-center">
                We believe in collective intelligence and collaborative verification.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGraduationCap className="text-sky-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Education</h3>
              <p className="text-gray-600 text-center">
                We focus on teaching skills rather than just debunking individual claims.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaTrophy className="text-sky-500 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Empowerment</h3>
              <p className="text-gray-600 text-center">
                We equip people with tools to make their own informed judgments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diverse experts united by a common goal of fighting misinformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Founder & CEO",
                bio: "Cognitive scientist specializing in media literacy",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Jamal Williams",
                role: "CTO",
                bio: "Technology architect with focus on trust systems",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Elena Rodriguez",
                role: "Head of Research",
                bio: "Data scientist studying misinformation patterns",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sky-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-sky-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Fight Against Misinformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey to becoming a misinformation investigator today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/game" 
              className="bg-white hover:bg-gray-100 text-sky-500 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg inline-block"
            >
              Play Our Game
            </a>
            <a 
              href="/resources" 
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg inline-block"
            >
              Explore Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;