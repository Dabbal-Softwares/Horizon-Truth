const CTAWithButton = () => {
  return (
    <section className="py-16 bg-sky-500 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Verification Community?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">Sign up now to participate in our crowdsourced reporting system and help combat misinformation.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#" className="bg-white hover:bg-blue-50 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                    Create Account
                </a>
                <a href="#verify-content" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg border border-blue-300">
                    Browse Reports
                </a>
            </div>
        </div>
    </section>
  )
}

export default CTAWithButton
