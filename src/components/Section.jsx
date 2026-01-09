import React from 'react';

const Section = ({ id, className = '', children, background = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-light-grey', // #F8FAFC
    dark: 'bg-primary',     // #0F172A
  };

  return (
    <section id={id} className={`w-full py-20 md:py-32 ${bgColors[background] || background} ${className}`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
