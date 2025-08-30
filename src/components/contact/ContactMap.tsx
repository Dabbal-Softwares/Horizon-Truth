const ContactMap = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-sky-500 font-semibold tracking-wider">OUR LOCATION</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us in Addis Ababa</h2>
                <p className="text-gray-700">Visit our office in Ethiopia's capital city or connect with us remotely from anywhere in the world.</p>
            </div>
            
            <div className="map-container">
                <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-200 rounded-xl overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126766.105124034!2d38.69681255!3d9.010787399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1667829911662!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Addis Ababa, Ethiopia Map"
                    ></iframe>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                    <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-bus text-sky-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Public Transportation</h3>
                    <p className="text-gray-700">Addis Ababa has an extensive bus network and a light rail system. We're easily accessible from major transit routes throughout the city.</p>
                </div>
                
                <div className="text-center">
                    <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-car text-sky-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Parking</h3>
                    <p className="text-gray-700">Secure parking is available near our office. The closest parking facility is just a 2-minute walk from our main entrance.</p>
                </div>
                
                <div className="text-center">
                    <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-wheelchair text-sky-500 text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibility</h3>
                    <p className="text-gray-700">Our facility is fully accessible with ramps, elevators, and accessible restrooms. Please contact us in advance if you need special accommodations.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMap