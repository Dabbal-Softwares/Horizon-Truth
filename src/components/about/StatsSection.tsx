
const StatsSection = () => {
    return (
        <section className="py-16 bg-sky-500 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold mb-2">5,247+</div>
                        <p className="text-blue-100">Active Users</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">2,847+</div>
                        <p className="text-blue-100">Reports Submitted</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">1,592+</div>
                        <p className="text-blue-100">Content Verified</p>
                    </div>
                    <div>
                        <div className="text-4xl font-bold mb-2">98%</div>
                        <p className="text-blue-100">User Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection
