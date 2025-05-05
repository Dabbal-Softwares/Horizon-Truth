const Features = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sky-500 font-semibold tracking-wider">EXPLORE OUR TOOLS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features of Horizon Truth</h2>
            <p className="text-gray-700">Powerful tools designed to help you identify and combat misinformation effectively.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-8 rounded-xl shadow-md transition duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-gamepad text-sky-500 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamified Learning Platform</h3>
              <p className="text-gray-700 mb-4">Engage in fun, interactive games to boost digital literacy skills and learn to spot misinformation in an enjoyable way.</p>
              <a href="#" className="text-sky-500 font-medium flex items-center">
                Read more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            
            <div className="feature-card bg-white p-8 rounded-xl shadow-md transition duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-bullhorn text-sky-500 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Crowdsourced Reporting</h3>
              <p className="text-gray-700 mb-4">Flag and verify content through our community-driven reporting system that leverages collective intelligence.</p>
              <a href="#" className="text-sky-500 font-medium flex items-center">
                Read more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
            
            <div className="feature-card bg-white p-8 rounded-xl shadow-md transition duration-300">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-users text-sky-500 text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Engagement</h3>
              <p className="text-gray-700 mb-4">Earn rewards and recognition for actively combating misinformation and contributing to a more truthful digital space.</p>
              <a href="#" className="text-sky-500 font-medium flex items-center">
                Read more <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;