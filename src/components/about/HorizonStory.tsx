import { Link } from "react-router-dom"

const HorizonStory = () => {
  return (
    // <!-- Our Story Section -->
    <section id="our-story" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-12 lg:mb-0">
                    <span className="text-sky-500 font-semibold tracking-wider">OUR STORY</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How Horizon Truth Began</h2>
                    <p className="text-gray-700 mb-6">
                        Horizon Truth was founded in 2023 by a team of digital literacy advocates, educators, and technology experts who recognized the growing threat of misinformation in our increasingly connected world.
                    </p>
                    <p className="text-gray-700 mb-6">
                        What started as a university research project quickly evolved into a comprehensive platform dedicated to helping individuals, especially youth, develop the critical thinking skills needed to navigate today's complex information landscape.
                    </p>
                    <p className="text-gray-700 mb-8">
                        Today, we combine evidence-based educational approaches with innovative technology to create engaging experiences that make learning about misinformation prevention both effective and enjoyable.
                    </p>
                    <Link to="/contact" className="inline-block bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                        Get in Touch
                    </Link>
                </div>
                <div className="lg:w-1/2 lg:pl-16">
                    <div className="bg-blue-50 p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
                        
                        <div className="space-y-8">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="pl-6">
                                    <h4 className="text-lg font-bold text-gray-900">Research Phase</h4>
                                    <p className="text-sm text-sky-500 mb-2">January 2023 - April 2023</p>
                                    <p className="text-gray-700">Conducted extensive research on misinformation patterns and digital literacy gaps among youth populations.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="pl-6">
                                    <h4 className="text-lg font-bold text-gray-900">Platform Development</h4>
                                    <p className="text-sm text-sky-500 mb-2">May 2023 - September 2023</p>
                                    <p className="text-gray-700">Built the initial version of our gamified learning platform and community verification tools.</p>
                                </div>
                            </div>
                            
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="pl-6">
                                    <h4 className="text-lg font-bold text-gray-900">Launch & Growth</h4>
                                    <p className="text-sm text-sky-500 mb-2">October 2023 - Present</p>
                                    <p className="text-gray-700">Launched publicly and continuously expanded our resources based on user feedback and evolving misinformation tactics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HorizonStory
