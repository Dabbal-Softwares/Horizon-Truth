import { useState } from "react";


// Define the type for cookie preferences
type CookieType = "necessary" | "analytics" | "functional" | "marketing";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const CookiesPolicy = () => {
  const [activeSection, setActiveSection] = useState("what-are-cookies");
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(
    {
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    }
  );

  const sections = [
    { id: "what-are-cookies", title: "What Are Cookies" },
    { id: "types-of-cookies", title: "Types of Cookies We Use" },
    { id: "purpose-of-cookies", title: "Purpose of Cookies" },
    { id: "third-party-cookies", title: "Third-Party Cookies" },
    { id: "cookie-management", title: "Managing Cookies" },
    { id: "changes", title: "Changes to Policy" },
    { id: "contact", title: "Contact Us" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  const handlePreferenceChange = (cookieType: CookieType) => {
    if (cookieType !== "necessary") {
      setCookiePreferences((prev) => ({
        ...prev,
        [cookieType]: !prev[cookieType],
      }));
    }
  };

  const savePreferences = () => {
    // In a real implementation, this would save to localStorage or send to your backend
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences)
    );
    alert("Your cookie preferences have been saved!");
  };

  const acceptAllCookies = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
    alert("All cookies have been accepted!");
  };

  // Rest of the component remains the same...
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <div className="bg-sky-500 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Cookies Policy
          </h1>
          <p className="text-center text-blue-100 max-w-3xl mx-auto">
            Learn how Horizon Truth uses cookies to enhance your experience and
            how you can manage your preferences
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Policy Sections
              </h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left py-2 px-4 rounded transition duration-300 ${
                        activeSection === section.id
                          ? "bg-sky-100 text-sky-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Cookie Preferences Widget */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">
                  Cookie Preferences
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Necessary Cookies
                    </span>
                    <div className="relative inline-block w-12 h-6">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.necessary}
                        disabled
                        className="opacity-0 w-0 h-0"
                      />
                      <span className="slider round bg-sky-500 cursor-not-allowed"></span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Analytics Cookies
                    </span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => handlePreferenceChange("analytics")}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Functional Cookies
                    </span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functional}
                        onChange={() => handlePreferenceChange("functional")}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      Marketing Cookies
                    </span>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={() => handlePreferenceChange("marketing")}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={savePreferences}
                      className="flex-1 bg-sky-500 hover:bg-sky-600 text-white text-sm py-2 px-3 rounded transition duration-300"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={acceptAllCookies}
                      className="flex-1 bg-gray-500 hover:bg-gray-600 text-white text-sm py-2 px-3 rounded transition duration-300"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <div className="bg-blue-50 border-l-4 border-sky-500 p-6 mb-8">
                  <p className="text-gray-700 font-medium">
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>
                  <p className="text-gray-700 mt-2">
                    This Cookies Policy explains how Horizon Truth uses cookies
                    and similar technologies to recognize you when you visit our
                    platform.
                  </p>
                </div>

                <div id="what-are-cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What Are Cookies?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small text files that are placed on your
                    computer, smartphone, or other device when you visit a
                    website. They are widely used to make websites work more
                    efficiently and provide information to the website owners.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <h3 className="font-bold text-gray-900 mb-2">
                      How Cookies Work:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Cookies are created when you visit a website</li>
                      <li>
                        They store small pieces of data about your interaction
                      </li>
                      <li>
                        They are sent back to the website on subsequent visits
                      </li>
                      <li>They help remember your preferences and settings</li>
                    </ul>
                  </div>
                </div>

                <div id="types-of-cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Types of Cookies We Use
                  </h2>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-sky-100 text-sky-600 p-2 rounded-lg mr-4">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Strictly Necessary Cookies
                          </h3>
                          <p className="text-gray-700 mb-2">
                            These cookies are essential for the website to
                            function properly. They enable basic functions like
                            page navigation and access to secure areas of the
                            website.
                          </p>
                          <div className="bg-sky-50 p-4 rounded">
                            <p className="text-sm text-gray-700">
                              <strong>Examples:</strong> Session management,
                              security features, load balancing
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <strong>Status:</strong> Always active - these
                              cannot be disabled
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-4">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Analytics Cookies
                          </h3>
                          <p className="text-gray-700 mb-2">
                            These cookies help us understand how visitors
                            interact with our platform by collecting and
                            reporting information anonymously.
                          </p>
                          <div className="bg-green-50 p-4 rounded">
                            <p className="text-sm text-gray-700">
                              <strong>Examples:</strong> Page visits, time
                              spent, error tracking, performance monitoring
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <strong>Purpose:</strong> Improve user experience
                              and platform performance
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-4">
                          <i className="fas fa-cogs"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Functional Cookies
                          </h3>
                          <p className="text-gray-700 mb-2">
                            These cookies enable the website to provide enhanced
                            functionality and personalization based on your
                            choices.
                          </p>
                          <div className="bg-purple-50 p-4 rounded">
                            <p className="text-sm text-gray-700">
                              <strong>Examples:</strong> Language preferences,
                              font sizes, game progress saving
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <strong>Purpose:</strong> Remember your settings
                              and preferences
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start mb-3">
                        <div className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-4">
                          <i className="fas fa-bullhorn"></i>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Marketing Cookies
                          </h3>
                          <p className="text-gray-700 mb-2">
                            These cookies are used to track visitors across
                            websites to display relevant advertisements.
                          </p>
                          <div className="bg-orange-50 p-4 rounded">
                            <p className="text-sm text-gray-700">
                              <strong>Examples:</strong> Social media
                              integration, advertising partners
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                              <strong>Note:</strong> We use minimal marketing
                              cookies and focus on educational content
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="purpose-of-cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Purpose of Cookies on Horizon Truth
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies for several important purposes that enhance
                    your experience on our educational platform:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Educational Experience
                      </h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Save your game progress and achievements</li>
                        <li>
                          Remember your learning path and completed modules
                        </li>
                        <li>
                          Track your improvement in identifying misinformation
                        </li>
                        <li>
                          Personalize educational content based on your level
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Platform Functionality
                      </h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                        <li>Keep you logged in during your session</li>
                        <li>
                          Remember your language preferences (Amharic, Afaan
                          Oromo)
                        </li>
                        <li>Ensure secure access to your account</li>
                        <li>Load balance for optimal performance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Analytics and Improvement
                    </h4>
                    <p className="text-gray-700 text-sm">
                      We use analytics cookies to understand how users interact
                      with our gamified learning system. This helps us:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm mt-2">
                      <li>
                        Identify which educational scenarios are most effective
                      </li>
                      <li>Improve our AI-powered misinformation detection</li>
                      <li>
                        Optimize the user interface for better learning outcomes
                      </li>
                      <li>
                        Understand usage patterns across different regions in
                        Ethiopia
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="third-party-cookies" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Third-Party Cookies
                  </h2>
                  <p className="text-gray-700 mb-4">
                    In some cases, we may use third-party services that place
                    cookies on your device. These include:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 border-b text-left font-bold text-gray-900">
                            Service
                          </th>
                          <th className="py-3 px-4 border-b text-left font-bold text-gray-900">
                            Purpose
                          </th>
                          <th className="py-3 px-4 border-b text-left font-bold text-gray-900">
                            Privacy Policy
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 border-b text-gray-700">
                            Google Analytics
                          </td>
                          <td className="py-3 px-4 border-b text-gray-700">
                            Platform analytics and usage statistics
                          </td>
                          <td className="py-3 px-4 border-b text-gray-700">
                            <a
                              href="https://policies.google.com/privacy"
                              className="text-sky-600 hover:text-sky-700"
                            >
                              View Policy
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 border-b text-gray-700">
                            Educational Partners
                          </td>
                          <td className="py-3 px-4 border-b text-gray-700">
                            Research and educational content delivery
                          </td>
                          <td className="py-3 px-4 border-b text-gray-700">
                            <a
                              href="/partners-privacy"
                              className="text-sky-600 hover:text-sky-700"
                            >
                              View Policy
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 mt-4 text-sm">
                    We carefully select third-party providers who respect user
                    privacy and comply with data protection regulations.
                  </p>
                </div>

                <div id="cookie-management" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text-gray-700 mb-4">
                    You have control over the cookies used on our platform.
                    Here's how you can manage them:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Browser Settings
                      </h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Most web browsers allow you to control cookies through
                        their settings preferences. However, limiting cookies
                        may affect your experience on our platform.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className="text-gray-900">Chrome:</strong>
                          <p className="text-gray-700">
                            Settings → Privacy and Security → Cookies
                          </p>
                        </div>
                        <div>
                          <strong className="text-gray-900">Firefox:</strong>
                          <p className="text-gray-700">
                            Options → Privacy & Security → Cookies
                          </p>
                        </div>
                        <div>
                          <strong className="text-gray-900">Safari:</strong>
                          <p className="text-gray-700">
                            Preferences → Privacy → Cookies
                          </p>
                        </div>
                        <div>
                          <strong className="text-gray-900">Edge:</strong>
                          <p className="text-gray-700">
                            Settings → Privacy and Services → Cookies
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Platform Preferences
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Use the cookie preferences widget in the sidebar to
                        customize which types of cookies you accept. Your
                        preferences will be saved for future visits.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">
                        Important Note
                      </h4>
                      <p className="text-gray-700 text-sm">
                        <strong>
                          Strictly necessary cookies cannot be disabled
                        </strong>{" "}
                        as they are required for the platform to function
                        properly. Disabling other cookies may affect features
                        like game progress saving and personalized learning
                        paths.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="changes" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Changes to This Cookies Policy
                  </h2>
                  <p className="text-gray-700 mb-4">
                    We may update this Cookies Policy from time to time to
                    reflect changes in our practices, technology, legal
                    requirements, or other factors.
                  </p>
                  <p className="text-gray-700">
                    We will notify you of any material changes by posting the
                    updated policy on our platform with a new effective date. We
                    encourage you to review this policy periodically to stay
                    informed about how we use cookies.
                  </p>
                </div>

                <div id="contact" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Cookies Policy or our
                    use of cookies, please contact us:
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Dabbal Software Development PLC</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> privacy@horizontruth.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Address:</strong> Addis, Ethiopia
                    </p>
                    <p className="text-gray-700">
                      <strong>Website:</strong> horizontruth.com
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <p className="text-gray-600 text-sm text-center">
                    Thank you for trusting Horizon Truth with your digital
                    literacy journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
