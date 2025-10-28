import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-8">
          {/* Company Info Section */}
          <div className="text-center md:text-left group">
            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-105 flex justify-center md:justify-start">
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
            
            {/* Tagline */}
            <p className="text-gray-300 text-sm max-w-xs leading-relaxed transition-colors duration-300 group-hover:text-white mx-auto md:mx-0">
              Fresh Vegetables even in dry season
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <NavLink 
                  to="/about-us" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm inline-flex items-center group hover:translate-x-2"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/collection" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm inline-flex items-center group hover:translate-x-2"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/more-products" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm inline-flex items-center group hover:translate-x-2"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  Produce
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact-us" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm inline-flex items-center group hover:translate-x-2"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              <a 
                href="https://www.facebook.com/profile.php?id=61573921437821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={18} className="transition-transform duration-300 hover:rotate-12" />
              </a>
              <a 
                href="https://www.instagram.com/peter.sonhydrophonics/?next=%2F&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={18} className="transition-transform duration-300 hover:rotate-12" />
              </a>
              <a 
                href="https://www.linkedin.com/company/petersonhydrophonics/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="transition-transform duration-300 hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
