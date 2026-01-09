import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-black focus:ring-primary",
    secondary: "bg-white text-primary border border-gray-200 hover:bg-gray-50 focus:ring-gray-200",
    dark: "bg-white text-primary hover:bg-gray-100 focus:ring-white" // specific for dark background
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
