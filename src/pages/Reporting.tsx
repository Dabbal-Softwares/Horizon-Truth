import CTAWithButton from "../components/common/CTAWithButton";
import Hero from "../components/Hero";
import ComputingImpactSection from "../components/reporting/ComputingImpactSection";
import HowItWorkSection from "../components/reporting/HowItWorkSection";
import ReportingForm from "../components/reporting/ReportingForm";
import VerificationSection from "../components/reporting/VerificationSection";

const ReportingPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Hero
        title="Crowdsourced"
        highlightedTitle="Reporting"
        description="Join our community in identifying and verifying information. Together, we can combat misinformation and promote truth."
        primaryButton={{
          text: "Submit a Report",
          link: "#report-form",
          isExternal: true,
        }}
        secondaryButton={{
          text: "Verify Content",
          link: "#verify-content",
          isExternal: true,
        }}
        image={{
          url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          alt: "Crowdsourced verification",
        }}
        badge={{
          icon: "fas fa-users",
          title: "Community Power",
          description: "Join 5,247 truth seekers",
        }}
      />
      <HowItWorkSection />
      <ReportingForm />
      <VerificationSection />
      <ComputingImpactSection />
      <CTAWithButton />
    </div>
  );
};

export default ReportingPage;
