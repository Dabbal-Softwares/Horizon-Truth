
const ComputingImpactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sky-500 font-semibold tracking-wider">OUR IMPACT</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Verification in Action</h2>
                <p className="text-gray-700">See how our community is making a difference in the fight against misinformation.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="text-4xl font-bold text-sky-500 mb-4">2,847</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Reports Submitted</h3>
                    <p className="text-gray-700">Community members have flagged potential misinformation for review.</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="text-4xl font-bold text-sky-500 mb-4">1,592</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Content Pieces Verified</h3>
                    <p className="text-gray-700">Items have been thoroughly reviewed and classified by our community.</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                    <div className="text-4xl font-bold text-sky-500 mb-4">5,247</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Active Contributors</h3>
                    <p className="text-gray-700">Community members participating in verification efforts.</p>
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recent Success Stories</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-start mb-4">
                            <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Preventing Health Misinformation Spread</h4>
                                <p className="text-gray-700 mt-2">Our community quickly identified and debunked a dangerous "miracle cure" that was gaining traction on social media, potentially preventing harm to vulnerable individuals.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-start mb-4">
                            <div className="bg-sky-500 p-3 rounded-full mr-4 flex-shrink-0">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Election Integrity Support</h4>
                                <p className="text-gray-700 mt-2">During recent elections, our contributors verified over 200 claims about voting processes, helping to counter false narratives and promote accurate information.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ComputingImpactSection
