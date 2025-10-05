import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/phlogo.png"; // Update the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-around max-w-full">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group">
          <img src={logo} alt="Peterson Hydroponics" className="h-14 transition-transform duration-300 group-hover:scale-105" /> 
        </NavLink>

        {/* Desktop Nav - Professional Design */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-green-600 bg-green-50 shadow-sm' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`
            }
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </NavLink>
          
          <NavLink 
            to="/about-us" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-green-600 bg-green-50 shadow-sm' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`
            }
          >
            About
          </NavLink>
          
          <NavLink 
            to="/collection" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-green-600 bg-green-50 shadow-sm' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`
            }
          >
            Services
          </NavLink>
          
          <NavLink 
            to="/more-products" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'text-green-600 bg-green-50 shadow-sm' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`
            }
          >
            Products
          </NavLink>
          
          <NavLink 
            to="/contact-us" 
            className={({ isActive }) => 
              `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isActive 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button - Enhanced */}
        <button 
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav - Professional Design */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-l-4 hover:border-green-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              🏠 Home
            </NavLink>
            
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => 
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-l-4 hover:border-green-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              ℹ️ About
            </NavLink>
            
            <NavLink 
              to="/collection" 
              className={({ isActive }) => 
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-l-4 hover:border-green-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              ⚙️ Services
            </NavLink>
            
            <NavLink 
              to="/more-products" 
              className={({ isActive }) => 
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-600' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-l-4 hover:border-green-300'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              📦 Products
            </NavLink>
            
            <NavLink 
              to="/contact-us" 
              className={({ isActive }) => 
                `block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-green-600 text-white shadow-md' 
                    : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              📞 Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
