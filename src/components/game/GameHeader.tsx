const GameHeader = () => {
    return (
      <header className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <i className="fas fa-search text-blue-600 text-4xl"></i>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Misinformation Investigator Game</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">Become a digital detective and learn to spot fake news in this interactive challenge!</p>
      </header>
    );
  };
  
  export default GameHeader;