const ValueSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-gray-700">
            The principles that guide our work and approach to combating
            misinformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="value-card bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-sky-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p className="text-gray-700">
              We practice what we preach, ensuring our content is accurate,
              transparent, and ethically sourced.
            </p>
          </div>

          <div className="value-card bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-sky-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-700">
              We continuously develop new approaches to make digital literacy
              education engaging and effective.
            </p>
          </div>

          <div className="value-card bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-hands-helping text-sky-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Collaboration
            </h3>
            <p className="text-gray-700">
              We believe combating misinformation requires collective effort and
              diverse perspectives.
            </p>
          </div>

          <div className="value-card bg-blue-50 p-6 rounded-xl text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-graduation-cap text-sky-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-700">
              We prioritize empowering people with knowledge rather than simply
              debunking false claims.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
