import React, { useState, useEffect } from 'react';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-50">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:bg-accent transition-colors">
              R
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              Raushan<span className="text-accent">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pl-8 border-l border-gray-200">
               <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg focus:outline-none bg-primary text-white hover:bg-gradient-to-r hover:from-accent hover:to-purple-600 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
                  Get in Touch
               </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary p-2 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Navigation Overlay */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-bold text-primary hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" 
               className="mt-8 px-8 py-4 text-xl font-bold text-white bg-primary rounded-xl hover:bg-accent transition-colors shadow-lg"
               onClick={() => setIsMobileMenuOpen(false)}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
