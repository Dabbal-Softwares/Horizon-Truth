import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <section className="hero-bg min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Empowering Minds, <span className="text-blue-600">Fighting Misinformation</span>
              </h1>
              <p className="text-lg text-white mb-8 max-w-lg">
                Horizon Truth provides interactive tools and resources to help individuals identify and combat misinformation. Through gamified learning and community-driven verification, we are building a more informed and transparent society.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/game" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg">
                  Start the Game
                </Link>
                <Link to="/about" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg border border-blue-600">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <img src="https://truth.debbal.com/assets/img/hero-02.jpg" alt="Digital literacy" className="rounded-xl shadow-2xl w-full max-w-md border-8 border-white" />
                <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <div className="bg-blue-600 p-3 rounded-full mr-3">
                      <i className="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="font-bold text-blue-800">Verified Content</p>
                      <p className="text-sm text-gray-600">Community-driven verification</p>
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
  
  export default Hero;