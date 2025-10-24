import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
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
              <li><NavLink to="/about-us" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</NavLink></li>
              <li><NavLink to="/collection" className="text-gray-300 hover:text-white transition-colors text-sm">Services</NavLink></li>
              <li><NavLink to="/more-products" className="text-gray-300 hover:text-white transition-colors text-sm">Produce</NavLink></li>
              <li><NavLink to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</NavLink></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">For More Enquiries</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div>
                <p className="text-gray-400 text-xs mb-1">Chief Executive Officer</p>
                <p className="font-medium text-white">Peterson Nyonyu</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Phone</p>
                <a href="tel:+233245272906" className="font-medium hover:text-white transition-colors">+233 24 527 2906</a>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">WhatsApp</p>
                <a href="https://wa.me/233245272906" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">+233 24 527 2906</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
