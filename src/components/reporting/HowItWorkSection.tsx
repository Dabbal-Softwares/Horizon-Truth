const HowItWorkSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Crowdsourced Reporting Works
          </h2>
          <p className="text-gray-700">
            Our community-driven approach to verifying information ensures
            multiple perspectives and thorough analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-sky-500 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Submit Report
            </h3>
            <p className="text-gray-700">
              Users flag potentially misleading content with context and
              evidence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-sky-500 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Community Review
            </h3>
            <p className="text-gray-700">
              Multiple users analyze the content using verification tools and
              techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-sky-500 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Consensus Building
            </h3>
            <p className="text-gray-700">
              The community reaches consensus through discussion and evidence
              evaluation.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-sky-500 text-2xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Verification Status
            </h3>
            <p className="text-gray-700">
              Content is marked as Verified, Debunked, or Unverifiable based on
              findings.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Crowdsourced Verification Matters
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-brain text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Collective Intelligence
                </h4>
                <p className="text-gray-700">
                  Leverage diverse perspectives and expertise for more accurate
                  verification.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-shield-alt text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Bias Reduction
                </h4>
                <p className="text-gray-700">
                  Multiple reviewers help identify and counter individual biases
                  in analysis.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-bolt text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Rapid Response
                </h4>
                <p className="text-gray-700">
                  Distributed verification allows faster response to emerging
                  misinformation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-graduation-cap text-white"></i>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Community Learning
                </h4>
                <p className="text-gray-700">
                  Participants develop critical thinking and media literacy
                  skills through practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorkSection;