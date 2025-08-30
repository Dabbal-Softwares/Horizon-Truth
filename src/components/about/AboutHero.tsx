const AboutHero = () => {
  return (
    <section className="hero-bg py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About <span className="text-blue-100">Horizon Truth</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              We're on a mission to combat misinformation through education,
              technology, and community engagement.
            </p>
            <div className="bg-sky-500 inline-flex items-center text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <i className="fas fa-rocket mr-2"></i> Empowering Digital Citizens
              Since 2023
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#our-story"
                className="bg-white hover:bg-blue-50 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg"
              >
                Our Story
              </a>
              <a
                href="#our-team"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg border border-blue-500"
              >
                Meet Our Team
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl w-full max-w-md border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-sky-500 p-3 rounded-full mr-3">
                    <i className="fas fa-medal text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">Trusted Resource</p>
                    <p className="text-sm text-gray-600">5,247+ active users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
