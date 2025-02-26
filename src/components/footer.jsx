import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center text-center">
          {/* Logo & About Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">PH Foods</h2>
            <p className="mt-3 text-sm">
              Bringing you the freshest and tastiest <br /> meals made with love and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-3">
              <a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://twitter.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm border-t border-white pt-4 text-gray-200">
          &copy; {new Date().getFullYear()} PH Foods. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
