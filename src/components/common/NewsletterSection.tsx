import { useState } from "react";
import { toast } from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const commonClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source: 'website' }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setEmail("");
        toast.success("Successfully subscribed to our newsletter!");
      } else {
        toast.error(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section
        id="newsletter"
        className="py-16 bg-gradient-to-r bg-sky-500 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Thank You for Subscribing!
            </h2>
            <p className="text-blue-100 mb-8">
              You've been added to our newsletter list. Keep an eye on your inbox 
              for the latest updates on digital literacy and misinformation alerts.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-white hover:bg-gray-100 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="newsletter"
      className="py-16 bg-gradient-to-r bg-sky-500 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on Digital Literacy
          </h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter to receive new resources, misinformation
            alerts, and tips for staying informed.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className={commonClasses}
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>

          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;