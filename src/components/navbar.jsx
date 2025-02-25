import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">PH Foods</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-green-700 hover:text-green-300">Home</Link>
          <Link to="/services" className="text-green-700 hover:text-green-300">Services</Link>
          <Link to="/about" className="text-green-700 hover:text-green-300">About</Link>
          <Link to="/contact" className="text-green-700 hover:text-green-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link to="/services" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/about" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-6 py-3 text-gray-700 hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
