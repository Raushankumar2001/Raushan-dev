import React from 'react';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 ease-out rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide transform will-change-transform active:scale-95 cursor-pointer no-underline";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-purple-600 text-white hover:text-white hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1 focus:ring-accent",
    secondary: "bg-white text-primary border-2 border-gray-100 hover:border-accent/30 hover:bg-gray-50 focus:ring-gray-200 shadow-sm hover:shadow",
    dark: "bg-white text-primary hover:bg-gray-100 focus:ring-white"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
