import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20"> {/* Add padding top to account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
