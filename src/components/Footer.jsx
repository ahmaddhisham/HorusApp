import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-yellow-900 to-black border-t-2 border-yellow-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Column 1 - About */}
          <div className="text-yellow-100">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">𓊹</span> About Horus Shop
            </h3>
            <p className="text-yellow-300 text-sm mb-4">
              Descend into the vaults of ancient Egypt. Our artifacts are 
              curated from the deepest chambers of forgotten pyramids.
            </p>
            <div className="flex space-x-4 text-yellow-500">
              <span className="text-2xl">𓃭</span>
              <span className="text-2xl">𓆣</span>
              <span className="text-2xl">𓂀</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="text-yellow-100">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">𓃢</span> Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Products', 'About', 'Contacts'].map((item) => (
                <li key={item}>
                  <a 
                    href={item} 
                    className="text-yellow-300 hover:text-yellow-100 text-sm transition-colors flex items-center"
                  >
                    <span className="text-yellow-600 mr-2">𓃗</span> {item}
                  </a>
                  
                </li>
              ))}
            </ul>
          </div>

          
          <div className="text-yellow-100">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">𓅓</span> Contact the Pharaoh
            </h3>
            <ul className="space-y-2 text-sm text-yellow-300">
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">𓏎</span> Nile River Valley, Giza
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">𓅱</span> pharaoh@horusshop.com
              </li>
              <li className="flex items-center">
                <span className="text-yellow-600 mr-2">𓋴</span> +20 123 456 789
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="text-yellow-100">
            <h3 className="text-xl font-serif font-bold mb-4 flex items-center">
              <span className="text-yellow-500 mr-2">𓆓</span> Scroll of Updates
            </h3>
            <p className="text-yellow-300 text-sm mb-4">
              Receive messages from the ancients about new artifacts.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your tomb address" 
                className="bg-yellow-900 bg-opacity-50 border border-yellow-700 text-yellow-100 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-600 w-full"
              />
              <button className="bg-yellow-700 hover:bg-yellow-600 text-yellow-900 font-bold px-4 text-sm transition-colors">
                𓅓 Send
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-yellow-400 text-sm">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Horus Shop. All artifacts preserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-yellow-200 transition-colors">
              Terms of Burial
            </a>
            <a href="#" className="hover:text-yellow-200 transition-colors">
              Privacy Scroll
            </a>
            <a href="#" className="hover:text-yellow-200 transition-colors">
              Sarcophagus Policy
            </a>
          </div>
        </div>

        {/* Hieroglyph Row */}
        <div className="text-center text-yellow-600 text-4xl mt-8">
          𓂀 𓃭 𓊹 𓆣 𓋴 𓎼 𓂧 𓅱 𓏎 𓋹 𓎟 𓍯 𓃢 𓅓 𓆓
        </div>
      </div>
    </footer>
  );
};

export default Footer;