const ResourceFilter = () => {
    return (
        <>
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sky-500 font-semibold tracking-wider">
                            FIND WHAT YOU NEED
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Browse Our Resource Library
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Filter our resources by category to find exactly what you need to
                            build your misinformation defense skills.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button
                            className="filter-btn active px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                            data-filter="all"
                        >
                            All Resources
                        </button>
                        <button
                            className="filter-btn px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                            data-filter="guide"
                        >
                            <i className="fas fa-book mr-2"></i> Guides
                        </button>
                        <button
                            className="filter-btn px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                            data-filter="tool"
                        >
                            <i className="fas fa-tools mr-2"></i> Tools
                        </button>
                        <button
                            className="filter-btn px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                            data-filter="video"
                        >
                            <i className="fas fa-video mr-2"></i> Videos
                        </button>
                        <button
                            className="filter-btn px-4 py-2 rounded-full border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white transition duration-300"
                            data-filter="course"
                        >
                            <i className="fas fa-graduation-cap mr-2"></i> Courses
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-full max-w-2xl">
                            <input
                                type="text"
                                placeholder="Search resources..."
                                className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured-resources" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sky-500 font-semibold tracking-wider">
                            HIGHLIGHTED
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Featured Resources
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            Start with these essential resources recommended by our digital
                            literacy experts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div
                            className="resource-card bg-white rounded-xl shadow-md overflow-hidden"
                            data-type="guide"
                        >
                            <div className="h-48 bg-blue-100 flex items-center justify-center relative">
                                <i className="fas fa-book-open text-sky-500 text-5xl"></i>
                                <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    Most Popular
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-sky-100 text-sky-500 text-xs font-medium px-2 py-1 rounded">
                                        Guide
                                    </span>
                                    <span className="text-xs text-gray-500 ml-2">
                                        <i className="far fa-clock mr-1"></i> 15 min read
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    The Misinformation Handbook
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Learn to identify the 7 most common types of misinformation
                                    with practical examples and verification techniques.
                                </p>
                                <a
                                    href="#"
                                    className="text-sky-500 font-medium flex items-center group"
                                >
                                    Read Guide{" "}
                                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                                </a>
                            </div>
                        </div>

                        <div
                            className="resource-card bg-white rounded-xl shadow-md overflow-hidden"
                            data-type="tool"
                        >
                            <div className="h-48 bg-green-100 flex items-center justify-center relative">
                                <i className="fas fa-check-double text-green-500 text-5xl"></i>
                                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    New
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-green-100 text-green-500 text-xs font-medium px-2 py-1 rounded">
                                        Tool
                                    </span>
                                    <span className="text-xs text-gray-500 ml-2">
                                        <i className="fas fa-external-link-alt mr-1"></i> Web App
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Fact-Check Assistant
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Our browser extension that helps you verify claims and images
                                    right as you browse social media and news sites.
                                </p>
                                <a
                                    href="#"
                                    className="text-sky-500 font-medium flex items-center group"
                                >
                                    Use Tool{" "}
                                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                                </a>
                            </div>
                        </div>

                        <div
                            className="resource-card bg-white rounded-xl shadow-md overflow-hidden"
                            data-type="course"
                        >
                            <div className="h-48 bg-purple-100 flex items-center justify-center">
                                <i className="fas fa-graduation-cap text-purple-500 text-5xl"></i>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="bg-purple-100 text-purple-500 text-xs font-medium px-2 py-1 rounded">
                                        Course
                                    </span>
                                    <span className="text-xs text-gray-500 ml-2">
                                        <i className="far fa-clock mr-1"></i> 2 hours
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Digital Literacy Fundamentals
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    A free interactive course covering source evaluation, bias
                                    recognition, and fact-checking methodologies.
                                </p>
                                <a
                                    href="#"
                                    className="text-sky-500 font-medium flex items-center group"
                                >
                                    Start Course{" "}
                                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResourceFilter;
