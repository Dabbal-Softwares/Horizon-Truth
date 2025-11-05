import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['what-is-horizon-truth']));
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: 'fas fa-info-circle' },
    { id: 'account', name: 'Account & Access', icon: 'fas fa-user' },
    { id: 'game', name: 'Game & Learning', icon: 'fas fa-gamepad' },
    { id: 'verification', name: 'Content Verification', icon: 'fas fa-check-circle' },
    { id: 'technical', name: 'Technical Support', icon: 'fas fa-cogs' },
    { id: 'privacy', name: 'Privacy & Security', icon: 'fas fa-shield-alt' }
  ];

  const faqs: FAQItem[] = [
    {
      id: 'what-is-horizon-truth',
      question: 'What is Horizon Truth?',
      answer: 'Horizon Truth is a gamified digital literacy platform designed to combat misinformation through interactive learning, crowdsourced content verification, and AI-powered detection tools. We empower Ethiopian youth to identify and resist false information while building critical thinking skills.',
      category: 'general'
    },
    {
      id: 'who-is-behind',
      question: 'Who is behind Horizon Truth?',
      answer: 'Horizon Truth is developed by Dabbal Software Development PLC, an Ethiopian technology company focused on creating solutions for social good. Our team includes educators, software developers, and digital literacy experts working in partnership with institutions like Jimma University and the Ministry of Peace.',
      category: 'general'
    },
    {
      id: 'target-audience',
      question: 'Who is Horizon Truth for?',
      answer: 'Our primary audience is Ethiopian youth aged 16-25, but the platform is valuable for anyone interested in improving their digital literacy skills. We\'re particularly focused on students, community leaders, and anyone who wants to become more resilient against misinformation.',
      category: 'general'
    },
    {
      id: 'languages-supported',
      question: 'What languages does Horizon Truth support?',
      answer: 'Currently, Horizon Truth is available in English, with ongoing localization for Amharic and Afaan Oromo. We\'re committed to making the platform accessible to all Ethiopian users in their preferred languages.',
      category: 'general'
    },

    // Account & Access FAQs
    {
      id: 'create-account',
      question: 'How do I create an account?',
      answer: 'You can create an account by clicking the "Sign Up" button on our website. You\'ll need to provide a valid email address and create a password. For educational institutions looking to enroll multiple users, please contact us at partnerships@horizontruth.com.',
      category: 'account'
    },
    {
      id: 'age-requirement',
      question: 'Is there an age requirement to use Horizon Truth?',
      answer: 'Users must be at least 13 years old to create an account. For users between 13-18, we recommend parental guidance and consent. Our content is designed to be appropriate for youth while effectively addressing real-world misinformation challenges.',
      category: 'account'
    },
    {
      id: 'forgot-password',
      question: 'What if I forget my password?',
      answer: 'Click the "Forgot Password" link on the login page. We\'ll send a password reset link to your registered email address. If you don\'t receive the email within 5 minutes, check your spam folder or contact our support team.',
      category: 'account'
    },
    {
      id: 'account-deletion',
      question: 'Can I delete my account?',
      answer: 'Yes, you can delete your account at any time. Go to your account settings and select "Delete Account." Please note that this action is permanent and will remove all your progress, achievements, and submitted content.',
      category: 'account'
    },

    // Game & Learning FAQs
    {
      id: 'how-game-works',
      question: 'How does the gamified learning work?',
      answer: 'Our platform uses interactive scenarios that simulate real-world misinformation challenges. You\'ll encounter various types of false content (health myths, political manipulation, social media hoaxes) and learn to identify them through quizzes, critical thinking exercises, and immediate feedback. As you progress, you earn points, level up, and unlock new challenges.',
      category: 'game'
    },
    {
      id: 'learning-outcomes',
      question: 'What will I learn from using Horizon Truth?',
      answer: 'You\'ll develop essential digital literacy skills including: source verification, fact-checking techniques, bias recognition, emotional manipulation detection, and critical analysis of online content. These skills help you make informed decisions and resist misinformation in your daily digital life.',
      category: 'game'
    },
    {
      id: 'time-commitment',
      question: 'How much time do I need to commit?',
      answer: 'You can learn at your own pace! Each learning module takes 15-30 minutes to complete. We recommend regular practice - even 10-15 minutes daily can significantly improve your misinformation detection skills over time.',
      category: 'game'
    },
    {
      id: 'progress-tracking',
      question: 'Can I track my learning progress?',
      answer: 'Yes! Your dashboard shows your current level, points earned, badges achieved, and completion status for all modules. You can also see how your skills improve over time through our progress analytics.',
      category: 'game'
    },

    // Content Verification FAQs
    {
      id: 'how-verification-works',
      question: 'How does the crowdsourced verification work?',
      answer: 'Users can submit suspicious content they encounter online for community verification. Our system uses a combination of AI analysis and community voting to assess content credibility. Verified cases become part of our educational database, helping others learn from real examples.',
      category: 'verification'
    },
    {
      id: 'ai-detection',
      question: 'How does the AI misinformation detection work?',
      answer: 'Our AI system uses natural language processing and machine learning to analyze patterns commonly found in misinformation. It examines factors like sensationalism, source credibility, emotional manipulation tactics, and consistency with verified information. The AI continuously learns from new data and community feedback.',
      category: 'verification'
    },
    {
      id: 'report-misinformation',
      question: 'How can I report misinformation I find online?',
      answer: 'Use our "Report" feature to submit suspicious content. You\'ll need to provide the content, source, and context. Our system guides you through the verification process and helps you analyze why the content might be misleading.',
      category: 'verification'
    },
    {
      id: 'trust-scores',
      question: 'What are trust scores and how are they calculated?',
      answer: 'Trust scores rate the credibility of content sources based on multiple factors: historical accuracy, transparency, expertise, and community verification results. Higher scores indicate more reliable sources. These scores help users quickly assess source credibility.',
      category: 'verification'
    },

    // Technical Support FAQs
    {
      id: 'browser-support',
      question: 'Which browsers are supported?',
      answer: 'Horizon Truth works on all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, ensure your browser is updated to the latest version. We also have a mobile-responsive design for smartphone access.',
      category: 'technical'
    },
    {
      id: 'mobile-app',
      question: 'Is there a mobile app?',
      answer: 'We\'re currently web-based with a mobile-responsive design. A dedicated mobile app is in development and will be available soon. You can access our platform through your mobile browser in the meantime.',
      category: 'technical'
    },
    {
      id: 'internet-requirements',
      question: 'What are the internet requirements?',
      answer: 'Our platform is optimized for varying internet speeds, including low-bandwidth environments. Basic functionality works with 2G connections, though faster speeds provide a better experience for multimedia content.',
      category: 'technical'
    },
    {
      id: 'technical-issues',
      question: 'What should I do if I encounter technical issues?',
      answer: 'First, try refreshing the page and clearing your browser cache. If the issue persists, contact our support team at support@horizontruth.com with details about the problem, your device, browser, and any error messages you see.',
      category: 'technical'
    },

    // Privacy & Security FAQs
    {
      id: 'data-collection',
      question: 'What data do you collect about me?',
      answer: 'We collect minimal data necessary for platform functionality: account information, learning progress, and content you voluntarily submit for verification. We never sell your data. See our <Link to="/privacy-policy" className="text-sky-600 hover:text-sky-700">Privacy Policy</Link> for complete details.',
      category: 'privacy'
    },
    {
      id: 'data-security',
      question: 'How is my data protected?',
      answer: 'We use industry-standard security measures including encryption, secure servers, and regular security audits. Your personal information is protected and we only use data for educational and platform improvement purposes as outlined in our privacy policy.',
      category: 'privacy'
    },
    {
      id: 'cookies-usage',
      question: 'Do you use cookies?',
      answer: 'We use necessary cookies for platform functionality and optional analytics cookies to improve user experience. You can manage your cookie preferences in our <Link to="/cookies-policy" className="text-sky-600 hover:text-sky-700">Cookies Policy</Link> page.',
      category: 'privacy'
    },
    {
      id: 'research-data',
      question: 'Is my data used for research?',
      answer: 'We may use anonymized, aggregated data for research purposes to improve digital literacy education and misinformation detection. Individual users are never identified in research findings. You can opt out of research data usage in your account settings.',
      category: 'privacy'
    }
  ];

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.category === activeCategory && 
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const allFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayFAQs = searchTerm ? allFAQs : filteredFAQs;

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <div className="bg-sky-500 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-center text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about Horizon Truth and how to make the most of our platform
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(category.id);
                          setSearchTerm('');
                        }}
                        className={`w-full text-left py-3 px-4 rounded-lg transition duration-300 flex items-center ${
                          activeCategory === category.id 
                            ? 'bg-sky-100 text-sky-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <i className={`${category.icon} mr-3 w-5 text-center`}></i>
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Contact Support Card */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-2">Still have questions?</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-2 px-4 rounded-lg transition duration-300 text-sm"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQs Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-8">
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {searchTerm ? `Search Results for "${searchTerm}"` : 
                       categories.find(c => c.id === activeCategory)?.name + ' Questions'}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {displayFAQs.length} {displayFAQs.length === 1 ? 'question' : 'questions'} found
                    </p>
                  </div>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="text-sky-600 hover:text-sky-700 font-medium"
                    >
                      Clear Search
                    </button>
                  )}
                </div>

                {/* FAQs List */}
                <div className="space-y-4">
                  {displayFAQs.length > 0 ? (
                    displayFAQs.map((faq) => (
                      <div key={faq.id} className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <i className={`fas fa-chevron-${openItems.has(faq.id) ? 'up' : 'down'} text-sky-500 transition duration-300`}></i>
                        </button>
                        <div className={`px-6 pb-6 ${openItems.has(faq.id) ? 'block' : 'hidden'}`}>
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <i className="fas fa-search text-gray-300 text-5xl mb-4"></i>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No questions found</h3>
                      <p className="text-gray-600 mb-6">
                        {searchTerm ? `No results found for "${searchTerm}". Try searching with different keywords.` : 'No questions in this category yet.'}
                      </p>
                      {searchTerm && (
                        <button
                          onClick={() => setSearchTerm('')}
                          className="bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                        >
                          View All Questions
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Still Need Help Section */}
                {displayFAQs.length > 0 && (
                  <div className="mt-12 p-6 bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Still need help?</h3>
                        <p className="text-blue-100">
                          Can't find the answer you're looking for? Please contact our support team.
                        </p>
                      </div>
                      <div className="flex space-x-4">
                        <Link 
                          to="/contact" 
                          className="bg-white text-sky-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300"
                        >
                          Contact Support
                        </Link>
                        <a 
                          href="mailto:support@horizontruth.com" 
                          className="border border-white text-white hover:bg-white hover:text-sky-600 font-medium py-3 px-6 rounded-lg transition duration-300"
                        >
                          Email Us
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;