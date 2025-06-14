import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/appSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  
  // Safely extract products array with debug logging
  const products = (() => {
    console.log('Raw data from loader:', data); // Debug
    if (Array.isArray(data)) return data;
    if (data?.data && Array.isArray(data.data)) return data.data;
    if (data?.products && Array.isArray(data.products)) return data.products;
    if (data) return [data];
    return [];
  })();

  const maxProducts = 10;

  const handleAddToCart = (product) => {
    const payload = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      image: product.image || product.img || '/placeholder-image.jpg',
      description: product.description || product.desc || 'Ancient artifact',
      quantity: 1
    };
    
    console.log('Dispatching payload:', payload); // Debug
    
    dispatch(addToCart(payload));
    toast.success(`${payload.name} added to cart!`, {
      position: "bottom-right",
      theme: "colored",
      autoClose: 2000
    });
  };

  if (!products.length) {
    return (
      <div className="text-center p-8 bg-gradient-to-br from-black via-yellow-900 to-black min-h-screen">
        <h3 className="text-xl font-semibold text-yellow-100 font-serif">
          𓂀 No treasures found in the tomb 𓂀
        </h3>
        <p className="text-yellow-200 mt-2">
          The pharaoh's vault is empty... return at the next moon cycle
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-5 min-h-screen bg-gradient-to-br from-black via-yellow-900 to-black">
      {/* Pharaonic Header */}
      <div className="w-full text-center mb-10 py-6 border-b-2 border-yellow-800">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-100 font-serif tracking-wider mb-2 text-shadow-lg shadow-yellow-700">
          𓋹𓂀 HORUS BLACK COLLECTION 𓂀𓋹
        </h1>
        <p className="text-yellow-300 text-lg font-serif italic">
          Artifacts from the Dark Pyramids
        </p>
      </div>

      {/* Products Grid */}
      <div className="flex flex-wrap gap-8 justify-center w-full max-w-6xl px-4">
        {products.slice(0, maxProducts).map((product) => {
          console.log('Rendering product:', product); // Debug
          return (
            <div 
              key={product.id} 
              className="w-72 border border-yellow-800 p-5 rounded-lg shadow-xl bg-gradient-to-b from-black to-yellow-900 flex flex-col items-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {product.image && (
                <div className="relative w-full h-52 mb-5 overflow-hidden rounded-lg border-2 border-yellow-900 group-hover:border-yellow-700 transition-colors">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-2 left-2 text-yellow-500 text-xs">
                    𓋴𓎼𓂧𓅱𓃭
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-yellow-100 mb-3 text-center font-serif group-hover:text-yellow-50 transition-colors">
                {product.name}
              </h3>
              
              <p className="text-yellow-300 mb-5 text-center text-sm flex-grow opacity-90 group-hover:opacity-100 transition-opacity">
                {product.description?.length > 80 
                  ? `${product.description.substring(0, 80)}...` 
                  : product.description || 'Mysterious artifact from ancient times'}
              </p>
              
              <div className="w-full flex justify-between items-center mt-auto">
                <p className="text-xl font-bold text-yellow-400 flex items-center">
                  <span className="text-yellow-600 mr-1">𓃭</span> ${product.price?.toFixed(2) || '0.00'}
                </p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-gradient-to-r from-yellow-800 to-yellow-700 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold py-2 px-6 rounded-full border border-yellow-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Claim Artifact
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pharaonic Footer */}
      <div className="mt-16 mb-8 text-center text-yellow-500 font-serif italic border-t-2 border-yellow-800 pt-6 w-full max-w-2xl">
        <p className="text-sm">𓎟 Only the worthy may possess these relics 𓎟</p>
        <div className="text-yellow-600 text-3xl mt-3 flex justify-center gap-4">
          𓂀 𓃭 𓊹 𓆣 𓋴 𓎼 𓂧 𓅱
        </div>
      </div>
    </div>
  );
};

export default Products;