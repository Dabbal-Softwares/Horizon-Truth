const NewsletterSection = () => {
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

                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
                        >
                            Subscribe
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
