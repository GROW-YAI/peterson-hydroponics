import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, url, variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50 focus:ring-green-500 shadow-md hover:shadow-lg"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <Link to={url} className={buttonClasses}>
      {text}
    </Link>
  );
};

export default Button;
