import { useState } from 'react';
import { Link } from 'react-router-dom';

// Type definitions
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqsData: FAQItem[];
  title?: string;
  description?: string;
  sectionTitle?: string;
  contactLink?: string;
  contactText?: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="faq-question w-full px-6 py-4 text-left font-medium text-gray-900 flex justify-between items-center hover:bg-gray-50 transition duration-300"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <i
          className={`fas fa-chevron-down text-sky-500 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        ></i>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2 text-gray-700">{answer}</div>
      </div>
    </div>
  );
};

// Main FAQs Component
const FAQs = ({ 
  faqsData, 
  title = "Frequently Asked Questions", 
  description = "Find answers to common questions", 
  sectionTitle = "HELP & SUPPORT",
}: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sky-500 font-semibold tracking-wider">
            {sectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {faqsData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-700">
              explore more FAQs?{" "}
              <Link
                to={'/faqs'}
                className="text-sky-500 font-medium hover:text-sky-600"
              >
                {'Click here'}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pre-configured components for specific pages
const ResourcesPageFAQs = () => {
  const resourcesFAQs: FAQItem[] = [
    {
      question: "How often are new resources added?",
      answer: "We add new resources weekly. Our team continuously monitors the misinformation landscape and develops new tools and guides to address emerging trends. Subscribe to our newsletter to receive updates when new resources are published."
    },
    {
      question: "Are these resources completely free?",
      answer: "Yes, all resources on Horizon Truth are completely free to access. We believe that digital literacy education should be accessible to everyone. Our platform is supported by grants, donations, and organizational partnerships."
    },
    {
      question: "Can I request a specific resource?",
      answer: "Absolutely! We welcome suggestions for new resources. Please use our contact form to submit your ideas. We prioritize requests based on current misinformation trends and user demand."
    },
    {
      question: "How can I contribute to your resources?",
      answer: "We accept contributions from digital literacy experts, educators, and researchers. Please visit our 'Contribute' page to learn more about our submission guidelines and review process. All contributions are credited to the author."
    }
  ];

  return (
    <FAQs
      faqsData={resourcesFAQs}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our resources and digital literacy."
      sectionTitle="HELP & SUPPORT"
      contactLink="/contact"
      contactText="Contact our support team"
    />
  );
};

const ContactPageFAQs = () => {
  const contactFAQs: FAQItem[] = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours on business days. For urgent matters, please call our hotline at +1 (123) 456-7891, which is available 24/7 for pressing misinformation concerns."
    },
    {
      question: "Do you offer virtual consultations or meetings?",
      answer: "Yes, we offer virtual meetings via Zoom, Microsoft Teams, or Google Meet. When scheduling an appointment, please indicate your preference for a virtual meeting, and we will send you the appropriate link and instructions."
    },
    {
      question: "I'm a journalist seeking comment. Who should I contact?",
      answer: "Please direct all media inquiries to media@horizontruth.org or call our media hotline at +1 (123) 456-7892. Our communications team will respond promptly to coordinate interviews or provide statements."
    },
    {
      question: "Do you offer workshops or training sessions for organizations?",
      answer: "Absolutely! We offer customized digital literacy workshops for schools, businesses, and community organizations. Please email education@horizontruth.org with details about your organization and training needs, and our education team will develop a proposal tailored to your requirements."
    }
  ];

  return (
    <FAQs
      faqsData={contactFAQs}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about contacting us and our services."
      sectionTitle="HELP & SUPPORT"
      contactLink="#contact-form"
      contactText="Send us a message"
    />
  );
};


export default FAQs;
export { ResourcesPageFAQs, ContactPageFAQs };
export type { FAQItem, FAQsProps };