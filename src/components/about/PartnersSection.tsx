interface PartnerCardProps {
  name: string;
  logoUrl: string;
  borderColor: string; // Tailwind border color e.g., "border-blue-200"
  iconBgColor: string; // Tailwind bg color e.g., "bg-blue-100"
  iconColor: string; // Tailwind icon color e.g., "text-blue-600"
  iconClass: string; // FontAwesome icon class
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  name,
  logoUrl,
  borderColor,
  iconBgColor,
  iconColor,
  iconClass,
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={` bg-white border ${borderColor} h-32 w-48 rounded-xl flex items-center justify-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-105`}
      >
        <div className="text-center w-full">
          <img
            src={logoUrl}
            alt={name}
            className="h-16 mx-auto object-contain max-w-full"
            onError={(e) => {
              const next = e.currentTarget
                .nextElementSibling as HTMLElement | null;
              e.currentTarget.style.display = "none";
              if (next) next.style.display = "flex";
            }}
          />
          <div
            className={`${iconBgColor} w-16 h-16 rounded-full items-center justify-center mx-auto mb-3 hidden`}
          >
            <i className={`${iconClass} ${iconColor} text-xl`}></i>
          </div>
          <span className="text-gray-800 font-bold text-sm mt-2 block">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sky-500 font-semibold tracking-wider uppercase text-sm">
            STRATEGIC PARTNERSHIPS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-2">
            Our Trusted Partners & Supporters
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Working together with leading institutions to combat misinformation
            and build digital literacy across Ethiopia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center mb-16">
          <PartnerCard
            name="Jimma University"
            logoUrl="https://www.neaea.com/wp-content/uploads/2020/05/Jimma-University.png"
            borderColor="border-sky-200"
            iconBgColor="bg-blue-100"
            iconColor="text-blue-600"
            iconClass="fas fa-graduation-cap"
          />
          <PartnerCard
            name="Ministry of Peace"
            logoUrl="https://yvms.mop.gov.et/img/logo_peace.png"
            borderColor="border-green-200"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
            iconClass="fas fa-dove"
          />
          <PartnerCard
            name="Sheger City"
            logoUrl="https://images.seeklogo.com/logo-png/55/1/sheger-city-magaalaa-shaggar-logo-png_seeklogo-551881.png"
            borderColor="border-purple-200"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
            iconClass="fas fa-city"
          />
        </div>

        {/* Partnership Impact Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Collaborative Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 group-hover:border-blue-300 transition duration-300">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition duration-300">
                  <i className="fas fa-user-graduate text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Academic Excellence
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  With{" "}
                  <strong className="text-blue-600">Jimma University</strong>,
                  we're integrating digital literacy into academic curricula and
                  conducting groundbreaking research on media literacy.
                </p>
              </div>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-green-100 group-hover:border-green-300 transition duration-300">
                <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition duration-300">
                  <i className="fas fa-peace text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  National Peace
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Through the{" "}
                  <strong className="text-green-600">Ministry of Peace</strong>,
                  we're training youth ambassadors to promote truth and
                  transparency nationwide.
                </p>
              </div>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="bg-white shadow-lg rounded-2xl p-6 border border-purple-100 group-hover:border-purple-300 transition duration-300">
                <div className="bg-purple-100 text-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition duration-300">
                  <i className="fas fa-hands text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Community Reach
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  With <strong className="text-purple-600">Sheger City</strong>,
                  we're bringing digital literacy programs directly to local
                  communities and schools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
          >
            <span>Join Our Mission</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <p className="text-gray-600 mt-4 text-sm">
            Become part of our growing network of partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
