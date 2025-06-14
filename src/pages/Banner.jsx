const Banner = () => {
  return (
    <div 
      className="relative bg-cover bg-center p-8 text-center overflow-hidden min-h-[500px] flex items-center justify-center"
      style={{ backgroundImage: "url('/Horusshirt.jpg')" }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 text-yellow-400 text-6xl opacity-30">𓃭𓃭𓃭𓃭𓃭</div>
      <div className="absolute bottom-0 right-0 text-yellow-400 text-6xl opacity-30">𓆣𓆣𓆣𓆣𓆣</div>
      
      {/* Main content */}
      <div className="relative z-10 w-full">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-100 mb-6 font-serif italic tracking-wider drop-shadow-lg">
        Horus 𓂀
        </h1>
        
        {/* Product categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
          {['OVERSIZED T-SHIRT', 'SWEATPANT', 'SHORT', 'HOODIES', 'WINTER SWEATPANT'].map((item) => (
            <div 
              key={item} 
              className="bg-yellow-900 bg-opacity-70 p-3 rounded border border-yellow-600 backdrop-blur-sm"
            >
              <p className="text-yellow-100 text-sm md:text-base font-medium drop-shadow-md">{item}</p>
            </div>
          ))}
        </div>
        
        {/* Promotion section */}
        <div className=" bg-opacity-70 p-6 rounded-lg max-w-2xl mx-auto mb-6 backdrop-blur-sm">
          <p className="text-yellow-100 text-3xl font-bold mb-2 drop-shadow-md">20% off</p>
          <p className="text-yellow-200 text-xl mb-4 drop-shadow-md">all items</p>
          <p className="text-yellow-100 italic mb-4 drop-shadow-md">Don't miss out!</p>
          <button className="bg-yellow-800 hover:bg-yellow-700 text-yellow-100 font-bold py-3 px-8 rounded-full border border-yellow-600 transition duration-300 shadow-lg hover:scale-105">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;