import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-400">MyBrand</Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-green-700 hover:text-green-300">Home</Link>
          <Link to="/services" className="text-green-700 hover:text-green-300">Services</Link>
          <Link to="/about" className="text-green-700 hover:text-green-300">About</Link>
          <Link to="/contact" className="text-green-700 hover:text-green-300">Contact</Link>
        </div>

        {/* Sign In & Sign Up */}
        <div className="hidden md:flex space-x-4">
          <Link to="/sign-in" className="text-green-400 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition">Sign In</Link>
          <Link to="/sign-up" className="text-green-400 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white transition">Sign Up</Link>
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
          <div className="px-6 py-3">
            <Link to="/sign-in" className="block text-green-400 border border-green-400 px-4 py-2 rounded-lg text-center hover:bg-blue-600 hover:text-white transition">Sign In</Link>
            <Link to="/sign-up" className="block mt-2 border-green-400 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
