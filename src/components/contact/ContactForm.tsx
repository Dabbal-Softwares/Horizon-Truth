
const ContactForm = () => {
  return (
    <section id="contact-form" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-sky-500 text-white p-6">
                    <h2 className="text-2xl font-bold">Send Us a Message</h2>
                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                
                <form className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">First Name *</label>
                            <input type="text" id="first-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" required/>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">Last Name *</label>
                            <input type="text" id="last-name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" required/>
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address *</label>
                            <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" required/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                            <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"/>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                        <select id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" required>
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="media">Media Inquiry</option>
                            <option value="education">Educational Program</option>
                            <option value="report">Report Misinformation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                        <textarea id="message" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500" placeholder="Please provide details about your inquiry..." required></textarea>
                    </div>
                    
                    <div className="flex items-center">
                        <input id="consent" type="checkbox" className="h-4 w-4 text-sky-500 focus:ring-sky-500 border-gray-300 rounded" required/>
                        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                            I consent to Horizon Truth collecting my details through this form.
                        </label>
                    </div>
                    
                    <div>
                        <button type="submit" className="w-full bg-sky-500 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm
