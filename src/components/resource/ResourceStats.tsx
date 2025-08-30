const ResourceStats = () => {
  return (
    <section className="py-16 bg-sky-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">150+</div>
            <p className="text-blue-100">Resources Available</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">98%</div>
            <p className="text-blue-100">User Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">25k+</div>
            <p className="text-blue-100">Downloads</p>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Weekly</div>
            <p className="text-blue-100">New Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceStats;
