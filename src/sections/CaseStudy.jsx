import React from 'react';
import { Check } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const CaseStudy = () => {
  return (
    <Section id="case-study" background="light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <Reveal width="100%">
            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 transform -rotate-1 hover:rotate-0 transition-all duration-500 group">
               <div className="bg-gray-50 rounded-xl overflow-hidden aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop" 
                    alt="E-commerce Dashboard" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
                      <div className="text-xl font-bold text-green-600">98%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Performance</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1 delay-75">
                      <div className="text-xl font-bold text-accent">2s</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Load Time</div>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1 delay-150">
                      <div className="text-xl font-bold text-primary">+45%</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted font-bold mt-1">Traffic</div>
                    </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
        
        <div className="order-1 lg:order-2 space-y-6">
          <Reveal>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide uppercase">
              How I Work
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Building Websites That Are Easy to Use and Easy to Maintain
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="text-lg text-muted leading-relaxed space-y-4">
              <p>
                Many businesses struggle with slow, hard-to-manage websites. My goal is always to create solutions that are simple for users and easy for teams to manage.
              </p>
              <p>
                The result is a website that feels reliable, scalable, and ready for growth.
              </p>
            </div>
          </Reveal>
          
          <div className="pt-6 space-y-4">
             <Reveal delay={0.3}>
               <div className="flex gap-4 items-start">
                 <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                   <Check size={14} strokeWidth={3} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-primary">Clean WordPress Architecture</h4>
                   <p className="text-sm text-muted">Scalable and easy to maintain.</p>
                 </div>
               </div>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="flex gap-4 items-start">
                 <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                   <Check size={14} strokeWidth={3} />
                 </div>
                 <div>
                   <h4 className="font-semibold text-primary">Flexible ACF-based Content</h4>
                   <p className="text-sm text-muted">Empowering teams to edit content easily.</p>
                 </div>
               </div>
             </Reveal>
             <Reveal delay={0.5}>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">SEO & Performance Focused</h4>
                    <p className="text-sm text-muted">Built for speed and search engine visibility.</p>
                  </div>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CaseStudy;
