import { Link } from "react-router-dom"

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">Whether you want to use our tools, contribute content, or partner with us, there are many ways to get involved in the fight against misinformation.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/game" className="bg-white hover:bg-gray-100 text-sky-600 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                    Try Our Game
                </Link>
                <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg border border-white">
                    Contact Us
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTASection
