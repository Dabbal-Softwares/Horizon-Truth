import { Link } from "react-router-dom";

const CTA = () => {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Fight Against Misinformation?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">Sign up now and start your journey towards becoming a misinformation warrior today.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/game" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Start Playing
            </Link>
            <Link to="/about" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;