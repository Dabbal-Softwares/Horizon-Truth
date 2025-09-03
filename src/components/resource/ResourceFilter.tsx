import { useState, useEffect } from "react";
import {
  HorizonTruthImg,
  SolutionOverViewImg,
  StepsToVerifyImg,
  FakeNewsSpreadImg,
  TruthDefenderImg,
  ThinkBeforeYouShareImg,
  GuideCoverImg,
  UnderstandingMisinformation,
} from "../../assets/rosources";

const ResourceFilter = () => {
  const resourcesData = {
    resources: [
      {
        id: 1,
        title: "The Misinformation Handbook",
        type: "guide",
        description: "Read to know steps to verify fake news",
        readTime: "15 min read",
        badge: "Most Popular",
        link: "#",
        image: StepsToVerifyImg, // Shows steps to verify social media posts
        isPdf: false // Not a PDF
      },
      {
        id: 7,
        title: "The Misinformation Handbook",
        type: "guide",
        description: "Learn to understand misinformations.",
        readTime: "2 hours read",
        badge: "Most Popular", 
        link: UnderstandingMisinformation, // This should be the path to your PDF file
        image: GuideCoverImg,
        isPdf: true // This is a PDF
      },
      {
        id: 2,
        title: "Horizon Truth: Solution overview",
        type: "guide",
        description:
          "Gamified Learning and Crowdsource Reporting and Verification",
        platform: "Web App",
        badge: "New",
        link: "#",
        image: SolutionOverViewImg, // Shows how gamified learning and verification works
        isPdf: false
      },
      {
        id: 3,
        title: "Why Horizon Truth Empower Youth",
        type: "guide",
        description:
          "Horizon Truth - Empowering Youth to Identify Misinformation",
        duration: "5 min",
        link: "#",
        image: HorizonTruthImg, // Empowering youth with truth
        isPdf: false
      },
      {
        id: 4,
        title: "How Fake News Spread",
        type: "guide",
        description:
          "Learn how fake news spread across social media.",
        readTime: "6 min read",
        link: "#",
        image: FakeNewsSpreadImg, // Shows how fake news spreads across social media
        isPdf: false
      },
      {
        id: 5,
        title: "Defending Truth",
        type: "guide",
        description:
          "Learn why defending truth matters",
        platform: "Browser Extension",
        link: "#",
        image: TruthDefenderImg, // Shows how defending truth matters
        isPdf: false
      },
      {
        id: 6,
        title: "Think before you share",
        type: "guide",
        description:
          "Learn how thinking and verifying before sharing help.",
        duration: "5-10 min each",
        link: "#",
        image: ThinkBeforeYouShareImg, // Encourages thinking before sharing
        isPdf: false
      },
    ],
  };

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState(
    resourcesData.resources
  );

  // Filter resources based on active filter and search query
  useEffect(() => {
    let results = resourcesData.resources;

    // Filter by type
    if (activeFilter !== "all") {
      results = results.filter((resource) => resource.type === activeFilter);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
      );
    }

    setFilteredResources(results);
  }, [activeFilter, searchQuery]);

  // Handle resource click - PDFs open in new tab, others show image
  const handleResourceClick = (resource:any) => {
    if (resource.isPdf) {
      // Open PDF in new tab
      window.open(resource.link, "_blank");
    } else {
      // For non-PDF resources, open the image in new tab as before
      window.open(resource.image, "_blank");
    }
  };

  // Get badge color based on type
  const getBadgeColor = (type: string) => {
    switch (type) {
      case "guide":
        return "bg-sky-100 text-sky-500";
      case "tool":
        return "bg-green-100 text-green-500";
      case "video":
        return "bg-red-100 text-red-500";
      case "course":
        return "bg-purple-100 text-purple-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  // Get background color based on type
  const getBgColor = (type: string) => {
    switch (type) {
      case "guide":
        return "bg-blue-100";
      case "tool":
        return "bg-green-100";
      case "video":
        return "bg-red-100";
      case "course":
        return "bg-purple-100";
      default:
        return "bg-gray-100";
    }
  };

  // Get icon based on type
  const getIcon = (type: string) => {
    switch (type) {
      case "guide":
        return "fas fa-book-open";
      case "tool":
        return "fas fa-check-double";
      case "video":
        return "fas fa-video";
      case "course":
        return "fas fa-graduation-cap";
      default:
        return "fas fa-file-alt";
    }
  };

  // Get icon color based on type
  const getIconColor = (type: string) => {
    switch (type) {
      case "guide":
        return "text-sky-500";
      case "tool":
        return "text-green-500";
      case "video":
        return "text-red-500";
      case "course":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

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
              className={`filter-btn px-4 py-2 rounded-full border border-sky-500 transition duration-300 ${
                activeFilter === "all"
                  ? "bg-sky-500 text-white"
                  : "text-sky-500 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Resources
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-full border border-sky-500 transition duration-300 ${
                activeFilter === "guide"
                  ? "bg-sky-500 text-white"
                  : "text-sky-500 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setActiveFilter("guide")}
            >
              <i className="fas fa-book mr-2"></i> Guides
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-full border border-sky-500 transition duration-300 ${
                activeFilter === "tool"
                  ? "bg-sky-500 text-white"
                  : "text-sky-500 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setActiveFilter("tool")}
            >
              <i className="fas fa-tools mr-2"></i> Tools
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-full border border-sky-500 transition duration-300 ${
                activeFilter === "video"
                  ? "bg-sky-500 text-white"
                  : "text-sky-500 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setActiveFilter("video")}
            >
              <i className="fas fa-video mr-2"></i> Videos
            </button>
            <button
              className={`filter-btn px-4 py-2 rounded-full border border-sky-500 transition duration-300 ${
                activeFilter === "course"
                  ? "bg-sky-500 text-white"
                  : "text-sky-500 hover:bg-sky-500 hover:text-white"
              }`}
              onClick={() => setActiveFilter("course")}
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
              {activeFilter === "all"
                ? "HIGHLIGHTED"
                : activeFilter.toUpperCase()}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeFilter === "all"
                ? "Featured Resources"
                : `${
                    activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)
                  } Resources`}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {activeFilter === "all"
                ? "Start with these essential resources recommended by our digital literacy experts."
                : `Browse our collection of ${activeFilter} resources to build your misinformation defense skills.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="resource-card bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-type={resource.type}
                >
                  <div
                    className={`h-48 ${getBgColor(
                      resource.type
                    )} flex items-center justify-center relative cursor-pointer`}
                    onClick={() => handleResourceClick(resource)}
                  >
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover"
                    />
                    {resource.isPdf && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="bg-white rounded-full p-4">
                          <i className="fas fa-file-pdf text-red-500 text-3xl"></i>
                        </div>
                      </div>
                    )}
                    <i
                      className={`${getIcon(resource.type)} ${getIconColor(
                        resource.type
                      )} text-5xl absolute opacity-70`}
                    ></i>
                    {resource.badge && (
                      <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {resource.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span
                        className={`${getBadgeColor(
                          resource.type
                        )} text-xs font-medium px-2 py-1 rounded`}
                      >
                        {resource.type.charAt(0).toUpperCase() +
                          resource.type.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500 ml-2">
                        {resource.type === "guide" ||
                        resource.type === "course" ? (
                          <>
                            <i className="far fa-clock mr-1"></i>{" "}
                            {resource.readTime || resource.duration}
                          </>
                        ) : resource.type === "tool" ? (
                          <>
                            <i className="fas fa-external-link-alt mr-1"></i>{" "}
                            {resource.platform}
                          </>
                        ) : (
                          <>
                            <i className="far fa-clock mr-1"></i>{" "}
                            {resource.duration}
                          </>
                        )}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <div
                      className="text-sky-500 font-medium flex items-center group cursor-pointer"
                      onClick={() => handleResourceClick(resource)}
                    >
                      {resource.isPdf
                        ? "View PDF"
                        : resource.type === "guide"
                        ? "Read Guide"
                        : resource.type === "tool"
                        ? "Use Tool"
                        : resource.type === "video"
                        ? "Watch Video"
                        : "Start Course"}{" "}
                      <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <i className="fas fa-search text-4xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-700">
                  No resources found
                </h3>
                <p className="text-gray-500">
                  Try a different filter or search term
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ResourceFilter;