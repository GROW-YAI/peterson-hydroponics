import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/phlogo.png"; // Update the path based on your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14" /> 
          {/* Adjust height and width as needed */}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-lg">
          <a href="#home" className="text-green-700 hover:text-green-300">Home</a>
          <a href="#services" className="text-green-700 hover:text-green-300">Services</a>
          <a href="#about" className="text-green-700 hover:text-green-300">About</a>
          <a href="#contact" className="text-green-700 hover:text-green-300">Contact</a>
          <a href="#contact" className="text-green-700 hover:text-green-300">Resources</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a href="#home" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
