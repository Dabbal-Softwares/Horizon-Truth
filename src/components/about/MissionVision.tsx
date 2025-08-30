const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sky-500 font-semibold tracking-wider">OUR CORE</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
                <p className="text-gray-700">Guiding principles that drive everything we do at Horizon Truth.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                <div className="value-card bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-bullseye text-sky-500 text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-700">
                        To empower individuals with the critical thinking skills and digital literacy needed to identify, analyze, and combat misinformation in all its forms, creating a more informed and resilient society.
                    </p>
                </div>
                
                <div className="value-card bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-eye text-sky-500 text-3xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                    <p className="text-gray-700">
                        We envision a world where individuals are equipped to navigate the digital landscape responsibly, where truth prevails over falsehood, and where communities collaboratively foster information integrity.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MissionVision
