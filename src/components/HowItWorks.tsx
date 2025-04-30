const HowItWorks = () => {
    return (
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-semibold tracking-wider text-blue-200">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Fighting Misinformation Today</h2>
            <p className="text-blue-100">Simple steps to become a misinformation warrior and earn rewards.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-700 bg-opacity-30 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-200 mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Engage in Scenarios</h3>
              <p className="text-blue-100">Navigate real-world misinformation challenges to understand how false content spreads in various contexts.</p>
            </div>
            
            <div className="bg-blue-700 bg-opacity-30 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-200 mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Evaluate Content</h3>
              <p className="text-blue-100">Analyze health myths, political manipulation, and social media hoaxes using critical thinking tools.</p>
            </div>
            
            <div className="bg-blue-700 bg-opacity-30 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-200 mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Earn Rewards</h3>
              <p className="text-blue-100">Correctly identifying misinformation earns you points, helping you level up and gain valuable rewards.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;