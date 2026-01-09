import React from 'react';
import Section from '../components/Section';

const CaseStudy = () => {
  return (
    <Section id="case-study" background="light">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
             {/* Abstract wireframe representation for case study image */}
             <div className="space-y-4">
                <div className="flex gap-2 mb-6">
                   <div className="h-3 w-3 rounded-full bg-red-400"></div>
                   <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                   <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="h-8 bg-gray-100 rounded w-3/4"></div>
                <div className="grid grid-cols-3 gap-4 h-32">
                   <div className="bg-gray-50 rounded col-span-2"></div>
                   <div className="bg-gray-50 rounded"></div>
                </div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
             </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            Case Study
          </div>
          <h2 className="text-3xl font-bold text-primary">
            WordPress Website for a UK Small Business
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-semibold text-primary mb-1">Goal</h4>
              <p>Build a professional and fast website to increase local leads.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Solution</h4>
              <p>Custom WordPress theme development using ACF for easy content management.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-1">Result</h4>
              <p>Clean design, easy content updates, and significantly improved page speed scores.</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudy;
