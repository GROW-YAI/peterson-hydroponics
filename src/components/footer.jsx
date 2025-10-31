import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 md:py-12 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-row justify-around items-start gap-4 md:gap-8">
          {/* Company Info Section */}
          <div className="text-center group flex-shrink-0">
            <div className="mb-2 md:mb-4 transform transition-transform duration-300 group-hover:scale-105 flex justify-center">
              <img
                src={logo}
                alt="Peterson Hydroponics"
                loading="lazy"
                className="w-auto brightness-0 invert object-contain"
                style={{ 
                  height: '50px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-xs md:text-sm max-w-[120px] md:max-w-xs leading-relaxed transition-colors duration-300 group-hover:text-white mx-auto">
              Fresh Vegetables even in dry season
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center flex-shrink-0">
            <div className="flex justify-center mb-2 md:mb-4">
              <h3 className="text-sm md:text-lg font-semibold text-white relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </h3>
            </div>
            <ul className="space-y-1 md:space-y-3 flex flex-col items-center">
              <li>
                <NavLink 
                  to="/about-us" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs md:text-sm"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/collection" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs md:text-sm"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/more-products" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs md:text-sm"
                >
                  Produce
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact-us" 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-xs md:text-sm"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="text-center flex-shrink-0">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4 text-white">Get In Touch</h3>
            <div className="flex gap-2 md:gap-3 justify-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61573921437821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook size={16} className="md:w-[18px] md:h-[18px] transition-transform duration-300 hover:rotate-12" />
              </a>
              <a 
                href="https://www.instagram.com/peter.sonhydrophonics/?next=%2F&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram size={16} className="md:w-[18px] md:h-[18px] transition-transform duration-300 hover:rotate-12" />
              </a>
              <a 
                href="https://www.linkedin.com/company/petersonhydrophonics/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="md:w-[18px] md:h-[18px] transition-transform duration-300 hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
