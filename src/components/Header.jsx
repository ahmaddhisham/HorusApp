import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserPlus } from 'react-icons/fa'; // Import the user plus icon

const Header = () => {
  // Get total items in cart from Redux
  const cartItems = useSelector(state => state.appReducer?.products || []);
  const itemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="bg-black text-yellow-100 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-serif">
          𓋹 HORUS 𓋹
        </Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link to="/contacts" className="hover:text-yellow-300 transition-colors">
            Contacts
          </Link>
          <Link to="/about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          
          {/* Registration Link - Added Here */}
          <Link 
            to="/register" 
            className="hover:text-yellow-300 transition-colors flex items-center gap-1"
          >
            <FaUserPlus className="text-lg" /> {/* Modern icon */}
            <span>Register</span>
            
            {/* Alternative Egyptian Symbol Option: */}
            {/* <span className="text-xl mr-1">𓀡</span> Register */}
          </Link>
          
          <Link to="/cart" className="relative hover:text-yellow-300 transition-colors flex items-center">
            <span className="text-xl mr-1">𓃭</span>
            <span>Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-yellow-600 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;