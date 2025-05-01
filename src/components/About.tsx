const About = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <span className="text-blue-600 font-semibold tracking-wider">ABOUT Debbal TRUTH</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission to Fight Misinformation</h2>
              <p className="text-gray-700 mb-6 max-w-lg">
                Debbal Truth is dedicated to empowering individuals, especially youth, to navigate the digital world responsibly. We believe that in today's fast-paced information age, digital literacy is key to making informed decisions, understanding the truth, and fostering a healthier, more connected society.
              </p>
              <a href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                About More
              </a>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-gamepad text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gamified Learning</h3>
                  <p className="text-gray-700">Engaging games to teach digital literacy skills in a fun way.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-users text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community Power</h3>
                  <p className="text-gray-700">Crowdsourced verification to combat misinformation together.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-graduation-cap text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Educational Resources</h3>
                  <p className="text-gray-700">Comprehensive materials to improve media literacy.</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <i className="fas fa-trophy text-blue-600 text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Reward System</h3>
                  <p className="text-gray-700">Earn points and recognition for your contributions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;