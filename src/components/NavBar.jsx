import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'; // Added FaUserPlus
import { Tooltip } from '@mui/material';

const NavBar = ({ cartItemCount = 0 }) => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-700 to-yellow-600 shadow-lg border-b-4 border-yellow-900">  
        {/* Left side - Logo and Shop Name (unchanged) */}
        <div className="flex items-center">
          <div className="text-3xl font-bold text-yellow-100 font-serif italic mr-2">𓂀</div>
          <Link to="/" className="text-3xl font-bold text-yellow-100 font-serif hover:text-yellow-200">
            Horus Shop
          </Link>
        </div>
        
        {/* Middle - Search Bar (unchanged) */}
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-yellow-300" />
            </div>
            <input
              type="text"
              placeholder="Search the Pharaoh's treasures..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-yellow-800 bg-opacity-70 border border-yellow-700 text-yellow-100 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Right side - Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="flex gap-8 [&_li]:inline-block">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center">
                <span className="text-xl">𓀀</span>
                <span className="text-yellow-100 text-m font-bold">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center">
                <span className="text-xl">𓊹</span>
                <span className="text-yellow-100 text-m font-bold">Products</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center">
                <span className="text-xl">𓃭</span>
                <span className="text-yellow-100 text-m font-bold">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center">
                <span className="text-xl">𓆣</span>
                <span className="text-yellow-100 text-m font-bold">Contact</span>
              </Link>
            </li>
          </ul>

          {/* Registration Link - Added this new section */}
          <Tooltip title="Register" arrow>
            <Link 
              to="/register" 
              className="hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center"
            >
              <span className="text-2xl">
                <FaUserPlus /> {/* Modern user-plus icon */}
                {/* Alternatively use an Egyptian symbol: <span className="text-xl">𓀡</span> */}
              </span>
              <span className="text-yellow-100 text-m font-bold">Register</span>
            </Link>
          </Tooltip>

          {/* Cart Button with Count (unchanged) */}
          <Link 
            to="/cart" 
            className="relative hover:text-yellow-200 transition-colors duration-300 flex flex-col items-center"
          >
            <span className="text-2xl">
              <FaShoppingCart />
            </span>
            <span className="text-yellow-100 text-m font-bold">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-yellow-100 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;