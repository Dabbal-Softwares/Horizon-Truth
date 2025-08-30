import { ContactPageFAQs } from "../components/common/FAQs";
import ContactForm from "../components/contact/ContactForm";
import ContactInformation from "../components/contact/ContactInformation";
import ContactMap from "../components/contact/ContactMap";
import Hero from "../components/Hero";

const ContactUsPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Hero
        title="Get in"
        highlightedTitle="Touch"
        description="Have questions about misinformation? Want to collaborate? We're here to help and would love to hear from you."
        primaryButton={{
          text: "Send Message",
          link: "#contact-form",
          isExternal: true,
        }}
        secondaryButton={{
          text: "Contact Info",
          link: "#contact-info",
          isExternal: true,
        }}
        image={{
          url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          alt: "Contact us",
        }}
        badge={{
          icon: "fas fa-headset",
          title: "Quick Response",
          description: "Typically within 24 hours",
        }}
      />
      <ContactInformation />
      <ContactForm />
      <ContactMap />
      <ContactPageFAQs />
    </div>
  );
};

export default ContactUsPage;
