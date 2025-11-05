import { useState } from 'react';
import { Link } from 'react-router-dom';


const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'description', title: 'Service Description' },
    { id: 'eligibility', title: 'Eligibility' },
    { id: 'user-accounts', title: 'User Accounts' },
    { id: 'user-responsibilities', title: 'User Responsibilities' },
    { id: 'content-guidelines', title: 'Content Guidelines' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Information' }
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
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Terms of Service</h1>
          <p className="text-center text-blue-100 max-w-3xl mx-auto">
            Please read these terms carefully before using Horizon Truth platform
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Terms Sections</h3>
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
                <div className="bg-blue-50 border-l-4 border-sky-500 p-6 mb-8">
                  <p className="text-gray-700 font-medium">
                    <strong>Last Updated:</strong> January 1, 2025
                  </p>
                  <p className="text-gray-700 mt-2">
                    By accessing or using the Horizon Truth platform, you agree to be bound by these Terms of Service.
                  </p>
                </div>

                <div id="acceptance" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    These Terms of Service ("Terms") govern your access to and use of the Horizon Truth platform 
                    ("Platform"), website, and services (collectively, "Services") provided by Dabbal Software 
                    Development PLC ("we," "us," or "our").
                  </p>
                  <p className="text-gray-700">
                    By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. 
                    If you disagree with any part of these Terms, you may not access or use our Services.
                  </p>
                </div>

                <div id="description" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    Horizon Truth is a gamified digital literacy platform designed to combat misinformation through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Interactive educational games and scenarios</li>
                    <li>Crowdsourced content verification system</li>
                    <li>AI-powered misinformation detection</li>
                    <li>Digital literacy resources and training materials</li>
                    <li>Community engagement features</li>
                  </ul>
                  <p className="text-gray-700">
                    We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, 
                    including hours of operation or availability, without notice and without liability.
                  </p>
                </div>

                <div id="eligibility" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
                  <p className="text-gray-700 mb-4">
                    To use our Services, you must:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Be at least 13 years of age</li>
                    <li>Have the legal capacity to enter into binding contracts</li>
                    <li>Not be prohibited from receiving our Services under applicable laws</li>
                  </ul>
                  <p className="text-gray-700">
                    If you are between 13 and 18 years of age, you must have your parent or legal guardian's 
                    permission to use our Services and they must agree to these Terms on your behalf.
                  </p>
                </div>

                <div id="user-accounts" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
                  <p className="text-gray-700 mb-4">
                    To access certain features of our Platform, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Take responsibility for all activities that occur under your account</li>
                  </ul>
                  <p className="text-gray-700">
                    We reserve the right to disable any user account at our sole discretion, including if we believe 
                    you have violated these Terms.
                  </p>
                </div>

                <div id="user-responsibilities" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">
                    You are responsible for your conduct and content while using our Services. You agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Use the Services for any illegal purpose or in violation of any laws</li>
                    <li>Submit false or misleading information in the verification system</li>
                    <li>Harass, abuse, or harm another person</li>
                    <li>Send altered, deceptive, or false source-identifying information</li>
                    <li>Interfere with or disrupt the integrity or performance of our Services</li>
                    <li>Attempt to gain unauthorized access to our Systems</li>
                    <li>Use automated systems (bots, scrapers, etc.) to access our Services</li>
                    <li>Circumvent any content-filtering techniques we employ</li>
                  </ul>
                </div>

                <div id="content-guidelines" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Content Guidelines</h2>
                  <p className="text-gray-700 mb-4">
                    When submitting content for verification or participating in our community, you agree that:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>You own or have the necessary rights to share the content</li>
                    <li>Your content does not violate the intellectual property rights of others</li>
                    <li>You will not submit harmful, abusive, or offensive content</li>
                    <li>You will not intentionally submit false verification reports</li>
                    <li>You understand that submitted content may be used for educational and research purposes</li>
                  </ul>
                  <p className="text-gray-700">
                    We reserve the right to remove any content that we determine, in our sole discretion, 
                    violates these Terms or is otherwise objectionable.
                  </p>
                </div>

                <div id="intellectual-property" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                  <p className="text-gray-700 mb-4">
                    The Horizon Truth Platform and its original content, features, and functionality are owned by 
                    Dabbal Software Development PLC and are protected by international copyright, trademark, patent, 
                    trade secret, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our trademarks and trade dress may not be used in connection with any product or service without 
                    the prior written consent of Dabbal Software Development PLC.
                  </p>
                  <p className="text-gray-700">
                    For content you submit to the Platform, you grant us a worldwide, non-exclusive, royalty-free 
                    license to use, reproduce, modify, adapt, and display such content for the purpose of operating 
                    and improving our Services.
                  </p>
                </div>

                <div id="privacy" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Our <Link to="/privacy-policy" className="text-sky-600 hover:text-sky-700 font-medium">Privacy Policy</Link> explains how we collect, 
                    use, and protect your personal information. By using our Services, you agree to the collection 
                    and use of information in accordance with our Privacy Policy.
                  </p>
                  <p className="text-gray-700">
                    We may use the data collected through our Services for research and development purposes to 
                    improve our AI-powered misinformation detection systems and educational content, always in 
                    compliance with our Privacy Policy.
                  </p>
                </div>

                <div id="termination" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                  <p className="text-gray-700 mb-4">
                    We may terminate or suspend your account and access to our Services immediately, without prior 
                    notice or liability, for any reason, including if you breach these Terms.
                  </p>
                  <p className="text-gray-700">
                    Upon termination, your right to use the Services will cease immediately. All provisions of these 
                    Terms which by their nature should survive termination shall survive, including ownership 
                    provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>

                <div id="disclaimers" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
                  <p className="text-gray-700 mb-4">
                    Our Services are provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties 
                    of any kind, whether express or implied, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Warranties of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement</li>
                    <li>That the Services will be uninterrupted, timely, secure, or error-free</li>
                    <li>That the content provided through the Services is completely accurate or reliable</li>
                  </ul>
                  <p className="text-gray-700">
                    The educational content and verification results provided through our Services are for 
                    informational and educational purposes only and should not be considered as professional 
                    advice or absolute truth.
                  </p>
                </div>

                <div id="limitation-liability" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    To the fullest extent permitted by applicable law, Dabbal Software Development PLC shall not 
                    be liable for any indirect, incidental, special, consequential, or punitive damages, including 
                    without limitation:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    <li>Loss of profits</li>
                    <li>Loss of data</li>
                    <li>Goodwill</li>
                    <li>Service interruption</li>
                    <li>Computer damage</li>
                    <li>System failure</li>
                    <li>Cost of substitute goods or services</li>
                  </ul>
                  <p className="text-gray-700">
                    Our total liability for any claims under these Terms, including for any implied warranties, 
                    is limited to the amount you paid us to use the Services (if any) in the six months prior to 
                    the event giving rise to the liability.
                  </p>
                </div>

                <div id="governing-law" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                  <p className="text-gray-700 mb-4">
                    These Terms shall be governed and construed in accordance with the laws of Ethiopia, without 
                    regard to its conflict of law provisions.
                  </p>
                  <p className="text-gray-700">
                    Any disputes arising from these Terms or your use of our Services shall be subject to the 
                    exclusive jurisdiction of the courts located in Jimma, Ethiopia.
                  </p>
                </div>

                <div id="changes" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will provide at least 30 days' notice prior to any new terms 
                    taking effect.
                  </p>
                  <p className="text-gray-700">
                    By continuing to access or use our Services after those revisions become effective, you agree 
                    to be bound by the revised terms. If you do not agree to the new terms, please stop using 
                    the Services.
                  </p>
                </div>

                <div id="contact" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms, please contact us:
                  </p>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-2">
                      <strong>Dabbal Software Development PLC</strong>
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> legal@horizontruth.com
                    </p>
                    <p className="text-gray-700 mb-2">
                      <strong>Address:</strong> Addis Ababa, Ethiopia
                    </p>
                    <p className="text-gray-700">
                      <strong>Website:</strong> horizontruth.com
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <p className="text-gray-600 text-sm text-center">
                    Thank you for using Horizon Truth and helping us combat misinformation.
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

export default TermsOfService;