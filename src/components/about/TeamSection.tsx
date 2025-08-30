
const TeamSection = () => {
  return (
    <section id="our-team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-sky-500 font-semibold tracking-wider">OUR TEAM</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Horizon Truth Team</h2>
                <p className="text-gray-700">Dedicated professionals working together to combat misinformation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="team-card bg-white p-6 rounded-xl shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Sarah Johnson</h3>
                    <p className="text-sky-500 font-medium mb-3">Founder & CEO</p>
                    <p className="text-gray-700 text-sm">Digital literacy advocate with 10+ years in education technology.</p>
                    <div className="flex justify-center space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                
                <div className="team-card bg-white p-6 rounded-xl shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Michael Chen</h3>
                    <p className="text-sky-500 font-medium mb-3">Tech Lead</p>
                    <p className="text-gray-700 text-sm">Software engineer specializing in gamified learning platforms.</p>
                    <div className="flex justify-center space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                
                <div className="team-card bg-white p-6 rounded-xl shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Elena Rodriguez</h3>
                    <p className="text-sky-500 font-medium mb-3">Research Director</p>
                    <p className="text-gray-700 text-sm">PhD in Media Studies with focus on misinformation patterns.</p>
                    <div className="flex justify-center space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fas fa-graduation-cap"></i></a>
                    </div>
                </div>
                
                <div className="team-card bg-white p-6 rounded-xl shadow-md text-center">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">David Kim</h3>
                    <p className="text-sky-500 font-medium mb-3">Education Specialist</p>
                    <p className="text-gray-700 text-sm">Former teacher developing curriculum for digital literacy.</p>
                    <div className="flex justify-center space-x-3 mt-4">
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="text-gray-400 hover:text-sky-500"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <a href="https://truth.debbal.com/contact" className="inline-block bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                    Join Our Team
                </a>
            </div>
        </div>
    </section>

  )
}

export default TeamSection
