const ResourceHero = () => {
  return (
    <section className="relative hero-bg py-20 text-white bg-cover bg-center">
      <div className="absolute inset-0 bg-blue-500/70"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Digital Literacy{" "}
              <span className="text-blue-100">Resources</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-lg">
              Empowering you with tools, guides, and knowledge to identify and
              combat misinformation effectively.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#featured-resources"
                className="bg-white hover:bg-blue-50 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg"
              >
                Explore Resources
              </a>
              <a
                href="#newsletter"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 text-center shadow-lg border border-blue-500"
              >
                Get Updates
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://redactive--drupal--facilitate--public-files.s3.eu-west-2.amazonaws.com/s3fs-public/styles/uncropped_small/public/2023-11/web_training-and-skill-development-concept-with-icons-of-online-course-conference_Credit_NicoElNino_iStock-1353769234.png"
                alt="Learning resources"
                className="rounded-xl shadow-2xl w-full max-w-md border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-sky-500 p-3 rounded-full mr-3">
                    <i className="fas fa-book text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="font-bold text-blue-800">Weekly Updates</p>
                    <p className="text-sm text-gray-600">
                      New resources added regularly
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

export default ResourceHero;
