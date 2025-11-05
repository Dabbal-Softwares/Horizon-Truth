import { useState } from 'react';


const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collection', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'user-rights', title: 'Your Rights' },
    { id: 'children-privacy', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId:string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">      
      <div className="bg-sky-500 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-center text-blue-100 max-w-3xl mx-auto">
            At Horizon Truth, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Policy Sections</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left py-2 px-4 rounded transition duration-300 ${
                        activeSection === section.id 
                          ? 'bg-sky-100 text-sky-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="prose max-w-none">
                <div id="introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-700 mb-4">
                    This Privacy Policy describes how Dabbal Software Development PLC ("we," "our," or "us") collects, uses, 
                    and shares your personal information when you use the Horizon Truth platform ("Platform"). Horizon Truth 
                    is a gamified digital literacy platform combined with a crowdsourced content verification system, enhanced by AI.
                  </p>
                  <p className="text-gray-700">
                    We are committed to protecting your privacy and ensuring the security of your personal information. 
                    By using our Platform, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>

                <div id="information-collection" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you register for an account or use our Platform, we may collect:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                    <li>Basic profile information (username, email address)</li>
                    <li>Demographic information (age, location - if voluntarily provided)</li>
                    <li>Language preferences (Amharic, Afaan Oromo, English)</li>
                    <li>Game progress, scores, and achievements</li>
                    <li>Content you report or verify through our crowdsourced system</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-4">
                    We automatically collect certain information when you use our Platform:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Device information (type, operating system, browser type)</li>
                    <li>Log data (IP address, access times, pages viewed)</li>
                    <li>Usage patterns and gameplay statistics</li>
                    <li>Interaction with educational content and verification tools</li>
                  </ul>
                </div>

                <div id="how-we-use" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>To provide, maintain, and improve our Platform and services</li>
                    <li>To personalize your experience and educational content</li>
                    <li>To develop and enhance our AI-powered misinformation detection system</li>
                    <li>To track and reward your progress in the gamified learning system</li>
                    <li>To analyze usage patterns and improve our Platform's effectiveness</li>
                    <li>To communicate with you about updates, features, and educational content</li>
                    <li>To ensure the security and integrity of our Platform</li>
                    <li>To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div id="information-sharing" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>
                      <strong>With Service Providers:</strong> We may share information with trusted third-party service providers 
                      who assist us in operating our Platform, conducting our business, or serving our users.
                    </li>
                    <li>
                      <strong>For Research and Development:</strong> We may share anonymized, aggregated data with research 
                      partners to improve digital literacy and misinformation detection.
                    </li>
                    <li>
                      <strong>With Partners:</strong> We may share information with our strategic partners, including the Ministry of Peace 
                      and educational institutions, to further our mission of combating misinformation.
                    </li>
                    <li>
                      <strong>For Legal Compliance:</strong> We may disclose information when required by law or to protect our rights, 
                      users, or the public.
                    </li>
                  </ul>
                </div>

                <div id="data-security" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Encryption of sensitive data</li>
                    <li>Secure server infrastructure</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                  <p className="text-gray-700">
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </div>

                <div id="user-rights" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>
                      <strong>Access:</strong> You can request access to the personal information we hold about you.
                    </li>
                    <li>
                      <strong>Correction:</strong> You can request that we correct or update your personal information.
                    </li>
                    <li>
                      <strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.
                    </li>
                    <li>
                      <strong>Objection:</strong> You can object to certain processing of your personal information.
                    </li>
                    <li>
                      <strong>Data Portability:</strong> You can request a copy of your personal information in a structured, 
                      machine-readable format.
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                  </p>
                </div>

                <div id="children-privacy" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    Our Platform is designed for youth aged 16-25, with a focus on educational content about digital literacy 
                    and misinformation. We are committed to protecting the privacy of children and young people.
                  </p>
                  <p className="text-gray-700">
                    For users under the age of 16, we recommend parental guidance and consent. We do not knowingly collect 
                    personal information from children under 13 without verifiable parental consent. If we become aware that 
                    we have collected personal information from a child under 13 without parental consent, we will take steps 
                    to remove that information.
                  </p>
                </div>

                <div id="changes" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                    legal requirements, or other factors. We will notify you of any material changes by posting the updated 
                    policy on our Platform with a new effective date.
                  </p>
                  <p className="text-gray-700">
                    We encourage you to review this policy periodically to stay informed about how we are protecting your information.
                  </p>
                </div>

                <div id="contact" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                    please contact us:
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Dabbal Software Development PLC</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> privacy@horizontruth.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Addis Ababa, Ethiopia
                    </p>
                  </div>
                  <p className="text-gray-700 mt-4">
                    We will respond to your inquiry as soon as possible, typically within 30 days.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <p className="text-gray-600 text-sm">
                    <strong>Effective Date:</strong> January 1, 2025
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Last Updated:</strong> January 1, 2025
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

export default PrivacyPolicy;