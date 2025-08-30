import ResourceFilter from "../components/resource/ResourceFilter";
import ResourceStats from "../components/resource/ResourceStats";
import NewsletterSection from "../components/common/NewsletterSection";
import { ResourcesPageFAQs } from "../components/common/FAQs";
import Hero from "../components/Hero";

const ResourcesPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Hero
        title="Digital Literacy"
        highlightedTitle="Resources"
        description="Empowering you with tools, guides, and knowledge to identify and combat misinformation effectively."
        primaryButton={{
          text: "Explore Resources",
          link: "#featured-resources",
          isExternal: true,
        }}
        secondaryButton={{
          text: "Get Updates",
          link: "#newsletter",
          isExternal: true,
        }}
        image={{
          url: "https://redactive--drupal--facilitate--public-files.s3.eu-west-2.amazonaws.com/s3fs-public/styles/uncropped_small/public/2023-11/web_training-and-skill-development-concept-with-icons-of-online-course-conference_Credit_NicoElNino_iStock-1353769234.png",
          alt: "Learning resources",
        }}
        badge={{
          icon: "fas fa-book",
          title: "Weekly Updates",
          description: "New resources added regularly",
        }}
      />
      <ResourceFilter />
      <ResourceStats />
      <ResourcesPageFAQs />
      <NewsletterSection />
    </div>
  );
};

export default ResourcesPage;
