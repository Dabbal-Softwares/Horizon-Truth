const VerificationSection = () => {
  return (
    <section id="verify-content" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sky-500 font-semibold tracking-wider">COMMUNITY VERIFICATION</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Verify Reported Content</h2>
                <p className="text-gray-700">Contribute to our community verification efforts by analyzing reported content.</p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <h3 className="text-lg font-semibold text-gray-900">Filter Reports:</h3>
                    <div className="flex flex-wrap gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                            <option>All Categories</option>
                            <option>Health/Medical</option>
                            <option>Political</option>
                            <option>Science/Tech</option>
                            <option>Social Issues</option>
                            <option>Financial</option>
                        </select>
                        
                        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
                            <option>All Statuses</option>
                            <option>Needs Review</option>
                            <option>Under Investigation</option>
                            <option>Verified</option>
                            <option>Debunked</option>
                        </select>
                        
                        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition duration-300">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
            

            <div className="space-y-6">
                <div className="report-card pending bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-4">
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending Review</span>
                                <span className="ml-4 text-sm text-gray-500">Posted 2 hours ago</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">"Miracle Cure" for Diabetes Making Rounds on Social Media</h3>
                            <p className="text-gray-700 mb-4">A post claiming that a simple mixture of lemon juice and baking soda can "cure diabetes permanently" is being widely shared across Facebook and WhatsApp groups.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-6"><i className="fas fa-tag mr-1"></i> Health/Medical</span>
                                <span><i className="fas fa-users mr-1"></i> 12 reviewers</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap">
                                Review Report
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="report-card verified bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-4">
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Verified</span>
                                <span className="ml-4 text-sm text-gray-500">Verified 1 day ago</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Political Ad Taken Out of Context in Campaign Material</h3>
                            <p className="text-gray-700 mb-4">A campaign video selectively edits a opponent's statement to completely reverse its meaning. The full context shows the opposite intention.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-6"><i className="fas fa-tag mr-1"></i> Political</span>
                                <span><i className="fas fa-users mr-1"></i> 24 reviewers</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap">
                                View Verification
                            </button>
                        </div>
                    </div>
                </div>
                

                <div className="report-card debunked bg-white rounded-xl shadow-md p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center mb-4">
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Debunked</span>
                                <span className="ml-4 text-sm text-gray-500">Debunked 3 days ago</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Generated Image of Celebrity Endorsement Goes Viral</h3>
                            <p className="text-gray-700 mb-4">Fake image of a famous actor promoting a cryptocurrency scheme has been circulating on Instagram. The image was generated using AI tools.</p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="mr-6"><i className="fas fa-tag mr-1"></i> Financial</span>
                                <span><i className="fas fa-users mr-1"></i> 18 reviewers</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition duration-300 whitespace-nowrap">
                                View Debunking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                    <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">Previous</a>
                    <a href="#" className="px-3 py-1 rounded border border-sky-500 bg-sky-500 text-white">1</a>
                    <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">2</a>
                    <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">3</a>
                    <span className="px-2 text-gray-500">...</span>
                    <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">10</a>
                    <a href="#" className="px-3 py-1 rounded border border-gray-300 text-gray-500 hover:bg-gray-100">Next</a>
                </nav>
            </div>
        </div>
    </section>
  )
}

export default VerificationSection
