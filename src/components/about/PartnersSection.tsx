const PartnersSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-sky-500 font-semibold tracking-wider">
                        COLLABORATION
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Partners & Supporters
                    </h2>
                    <p className="text-gray-700">
                        We're grateful to work with organizations that share our mission.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div className="flex justify-center">
                        <div className="partner-logo bg-gray-100 h-24 w-40 rounded-lg flex items-center justify-center p-4">
                            <span className="text-gray-400 font-bold">Partner 1</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="partner-logo bg-gray-100 h-24 w-40 rounded-lg flex items-center justify-center p-4">
                            <span className="text-gray-400 font-bold">Partner 2</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="partner-logo bg-gray-100 h-24 w-40 rounded-lg flex items-center justify-center p-4">
                            <span className="text-gray-400 font-bold">Partner 3</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="partner-logo bg-gray-100 h-24 w-40 rounded-lg flex items-center justify-center p-4">
                            <span className="text-gray-400 font-bold">Partner 4</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://truth.debbal.com/contact"
                        className="inline-block border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                    >
                        Become a Partner
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
