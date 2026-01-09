import React from 'react';

const Section = ({ id, className = '', children, background = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-light-grey', // #F7F7F7
    dark: 'bg-primary',     // #111111
  };

  return (
    <section id={id} className={`w-full py-16 md:py-24 ${bgColors[background] || background} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
