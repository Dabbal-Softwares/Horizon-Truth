

const ContactInformation = () => {
  return (
    <section id="contact-info" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-sky-500 font-semibold tracking-wider">WAYS TO CONNECT</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700">Choose the method that works best for you. We're here to help combat misinformation together.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="contact-card bg-blue-50 p-8 rounded-xl text-center">
                    <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-envelope text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                    <p className="text-gray-700 mb-4">Send us a message and we'll respond as quickly as possible.</p>
                    <a href="mailto:info@horizontruth.org" className="text-sky-500 font-medium">info@horizontruth.org</a>
                    <p className="text-sm text-gray-500 mt-2">For general inquiries</p>
                    <a href="mailto:support@horizontruth.org" className="text-sky-500 font-medium block mt-2">support@horizontruth.org</a>
                    <p className="text-sm text-gray-500 mt-2">For technical support</p>
                </div>
                
                <div className="contact-card bg-blue-50 p-8 rounded-xl text-center">
                    <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-phone-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
                    <p className="text-gray-700 mb-4">Speak directly with our team during business hours.</p>
                    <a href="tel:+11234567890" className="text-sky-500 font-medium">+251 (941) 667-729</a>
                    <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-5pm EAT</p>
                    <a href="tel:+11234567891" className="text-sky-500 font-medium block mt-2">+251 (921) 859-449</a>
                    <p className="text-sm text-gray-500 mt-2">For urgent matters</p>
                </div>
                
                <div className="contact-card bg-blue-50 p-8 rounded-xl text-center">
                    <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
                    <p className="text-gray-700 mb-4">Our office is open for scheduled meetings and consultations.</p>
                    <p className="text-sky-500 font-medium">China Africa Street</p>
                    <p className="text-sky-500 font-medium">Digital Literacy District</p>
                    <p className="text-sky-500 font-medium">Addis Ababa, ADD 1000</p>
                    <p className="text-sm text-gray-500 mt-2">By appointment only</p>
                </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Office Hours</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                        <p className="font-semibold text-gray-900">Monday - Friday</p>
                        <p className="text-gray-700">9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">Saturday</p>
                        <p className="text-gray-700">10:00 AM - 2:00 PM</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">Sunday</p>
                        <p className="text-gray-700">Closed</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900">Emergency</p>
                        <p className="text-gray-700">24/7 Hotline Available</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInformation
