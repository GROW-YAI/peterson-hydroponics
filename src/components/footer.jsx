import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          {/* Company Info Section */}
          <div className="text-left">
            <div className="mb-4">
              <img
                src={logo}
                alt="Peterson Hydroponics"
                className="w-auto brightness-0 invert object-contain"
                style={{ 
                  height: '80px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Fresh produce directly from our farms to <br />
              your table. Cutting out middlemen for <br />
              better prices and quality.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61573921437821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://www.instagram.com/peter.sonhydrophonics/?next=%2F&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://twitter.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="https://www.linkedin.com/company/petersonhydrophonics/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/collection" className="text-gray-300 hover:text-white transition-colors text-sm">Categories</NavLink></li>
              <li><NavLink to="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">How it Works</NavLink></li>
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Featured Sellers</NavLink></li>
              <li><NavLink to="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>

          {/* Shop Categories */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Shop categories</h3>
            <ul className="space-y-3">
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Fresh Vegetables</NavLink></li>
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Seasonal Fruits</NavLink></li>
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Grains & Staples</NavLink></li>
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Dairy Products</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
