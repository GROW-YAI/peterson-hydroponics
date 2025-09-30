import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/phlogo.png"; // Update the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center max-w-full">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14" /> 
          {/* Adjust height and width as needed */}
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink to="/" className="text-green-700 hover:text-green-300">Home</NavLink>
          <NavLink to="/collection" className="text-green-700 hover:text-green-300">Services</NavLink>
          <NavLink to="/more-products" className="text-green-700 hover:text-green-300">Products</NavLink>
          <NavLink to="/about-us" className="text-green-700 hover:text-green-300">About</NavLink>
          <NavLink to="/contact-us" className="text-green-700 hover:text-green-300">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <NavLink to="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/collection" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/more-products" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/about-us" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact-us" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
