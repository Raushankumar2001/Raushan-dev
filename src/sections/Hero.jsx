import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Hero = () => {
  return (
    <Section id="hero" className="min-h-[80vh] flex items-center pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
            WordPress Developer for UK Small Businesses & Startups
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            I build fast, secure, and scalable WordPress websites using custom themes, ACF, and modern development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary">Get a free consultation</Button>
            <span className="flex items-center text-sm font-medium text-gray-500 my-auto">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Available for UK timezone projects
            </span>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative hidden md:block">
          <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden relative shadow-lg border border-gray-100">
             {/* Abstract minimal coding representation */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
               <div className="text-gray-300 transform -rotate-12 select-none pointer-events-none text-9xl font-bold opacity-20">
                 &lt;/&gt;
               </div>
               
               {/* Floating elements for visual interest */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
             </div>
             
             <img 
               src="https://placehold.co/600x600/f3f4f6/111111?text=Minimal+Workspace" 
               alt="Developer Workspace" 
               className="object-cover w-full h-full opacity-0" // Using opacity 0 to show the CSS design below, or valid image if avail.
               // Actually user asked for "Subtle image/placeholder". 
               // I will construct a CSS composition instead of external image to keep it self-contained and fast.
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-xs transform rotate-3">
                   <div className="h-3 w-1/3 bg-gray-200 rounded mb-4"></div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                      <div className="h-2 w-4/6 bg-gray-100 rounded"></div>
                   </div>
                   <div className="mt-4 flex gap-2">
                      <div className="h-8 w-20 bg-primary/10 rounded"></div>
                      <div className="h-8 w-8 bg-accent/20 rounded-full"></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
