import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../Redux/appSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Cart = () => {
  const dispatch = useDispatch();
  // Debugging: Log cart items to verify Redux state
  const cartItems = useSelector(state => {
    console.log('Redux State:', state.appReducer?.products); // Debug log
    return state.appReducer?.products || [];
  });

  // Calculate totals (memoize these for performance in a real app)
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 0 ? 5.99 : 0; // Only charge shipping if cart isn't empty
  const total = subtotal + shipping;

  // Handlers with additional safeguards
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1; // Double safeguard
    dispatch(updateQuantity({ id, quantity: newQuantity }));
    toast.info('Quantity updated', { position: "bottom-right", autoClose: 1500 });
  };

  const handleRemoveItem = (id, name) => {
    dispatch(removeFromCart(id));
    toast.error(`𓃭 ${name} removed from cart`, { position: "bottom-right" });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.warning('All items removed', { position: "bottom-right" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-black text-yellow-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cart Header */}
        <div className="text-center mb-12 border-b-2 border-yellow-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-wider mb-4">
            𓋹𓃭 Your Sacred Cart 𓃭𓋹
          </h1>
          <p className="text-yellow-300 text-lg">
            {cartItems.length > 0 
              ? `You have ${cartItems.length} sacred artifact${cartItems.length !== 1 ? 's' : ''}` 
              : "The pharaoh's vault awaits your treasures"}
          </p>
        </div>

        {/* Cart Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-2xl text-yellow-300 mb-4">𓂀 Your cart is empty 𓂀</p>
                <Link 
                  to="/" 
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-bold py-3 px-6 rounded-full inline-block transition-transform hover:scale-105"
                >
                  Discover Ancient Artifacts
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Clear Cart Button (Top) */}
                <div className="text-right">
                  <button
                    onClick={handleClearCart}
                    className="text-yellow-500 hover:text-yellow-300 text-sm underline"
                  >
                    Clear Entire Cart
                  </button>
                </div>

                {/* Cart Items List */}
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row border-2 border-yellow-800 rounded-lg p-4 bg-gradient-to-b from-yellow-900/70 to-black/50 hover:shadow-lg transition-all">
                    {/* Item Image */}
                    <div className="sm:w-1/4 mb-4 sm:mb-0 flex justify-center">
                      <img 
                        src={item.image || 'https://via.placeholder.com/150?text=Ancient+Artifact'} 
                        alt={item.name} 
                        className="w-full max-h-40 object-contain rounded-lg border border-yellow-700"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150?text=Image+Missing';
                        }}
                      />
                    </div>

                    {/* Item Details */}
                    <div className="sm:w-3/4 sm:pl-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-serif font-bold text-yellow-100">{item.name}</h3>
                          <p className="text-yellow-300">
                            <span className="text-yellow-600 mr-1">𓃭</span> 
                            ${item.price?.toFixed(2) || '0.00'}
                          </p>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-yellow-500 hover:text-yellow-300 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          𓃗 Remove
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="mt-4 flex items-center">
                        <button 
                          onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                          disabled={item.quantity <= 1}
                          className={`bg-yellow-800 ${
                            item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-700'
                          } text-yellow-100 w-8 h-8 rounded-l transition-colors`}
                        >
                          -
                        </button>
                        <span className="bg-yellow-800 text-yellow-100 px-4 py-1">
                          {item.quantity || 1}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                          className="bg-yellow-800 hover:bg-yellow-700 text-yellow-100 w-8 h-8 rounded-r transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Subtotal */}
                      <div className="mt-4 text-right">
                        <p className="text-lg font-bold text-yellow-100">
                          Item Total: <span className="text-yellow-400">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Summary - Only shows when cart has items */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <div className="border-2 border-yellow-800 rounded-lg p-6 bg-gradient-to-b from-yellow-900/70 to-black/50 sticky top-4">
                <h2 className="text-2xl font-serif font-bold text-yellow-100 mb-6 border-b border-yellow-800 pb-2">
                  𓎟 Order Summary 𓎟
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-yellow-300">Subtotal ({cartItems.length} items)</span>
                    <span className="text-yellow-100">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-300">Shipping</span>
                    <span className="text-yellow-100">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-t border-yellow-800 pt-4 mt-4">
                    <span className="text-xl font-bold text-yellow-100">Total</span>
                    <span className="text-xl font-bold text-yellow-100">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-black font-bold py-3 px-4 rounded-full text-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  Proceed to Checkout
                </button>
                <p className="text-center text-yellow-400 mt-4 text-sm">
                  𓆣 Secure payment through the Temple Gates 𓆣
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Continue Shopping Link */}
        {cartItems.length > 0 && (
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-yellow-300 hover:text-yellow-100 transition-colors group"
            >
              <span className="mr-2 text-xl group-hover:-translate-x-1 transition-transform">←</span>
              Continue Exploring the Vaults
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;