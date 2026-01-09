import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto bg-white shadow-2xl shadow-gray-200/50 relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-purple-600 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Header />
      <main className="flex-grow pt-20 "> 
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
