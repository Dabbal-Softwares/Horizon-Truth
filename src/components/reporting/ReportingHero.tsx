const ReportingHero = () => {
  return (
    <section className="relative hero-bg py-20 text-white bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-500/70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Crowdsourced <span className="text-blue-100">Reporting</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Join our community in identifying and verifying information.
              Together, we can combat misinformation and promote truth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#report-form"
                className="bg-white hover:bg-blue-50 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg"
              >
                Submit a Report
              </a>
              <a
                href="#verify-content"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg border border-blue-500"
              >
                Verify Content
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Crowdsourced verification"
                className="rounded-xl shadow-2xl w-full max-w-md border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-sky-500 p-3 rounded-full mr-3">
                    <i className="fas fa-users text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">Community Power</p>
                    <p className="text-sm text-gray-600">
                      Join 5,247 truth seekers
                    </p>
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

export default ReportingHero;
