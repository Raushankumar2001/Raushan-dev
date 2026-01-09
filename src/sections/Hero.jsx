import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import ParallaxBackground from '../components/ParallaxBackground';

const Hero = () => {
  return (
    <Section id="hero" className="min-h-[90vh] flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <ParallaxBackground />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 max-w-2xl">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
              WordPress Developer for <br className="hidden lg:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-purple-600">
                UK Small Businesses
              </span> & Startups
            </h1>
          </Reveal>
          
          <Reveal delay={0.35}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg font-medium">
              I build <span className="text-primary font-semibold">fast, secure, and scalable</span> websites using custom themes, ACF, and modern React technology.
            </p>
          </Reveal>
          
          <Reveal delay={0.45}>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="#contact" variant="primary" className="text-lg px-10 py-5">
                Book a free consultation
              </Button>
              <Button href="#portfolio" variant="secondary" className="text-lg px-10 py-5">
                View my work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="pt-8 flex flex-col sm:flex-row gap-6 text-sm font-semibold text-muted">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100 text-green-600">
                  <Check size={16} strokeWidth={3} />
                </div>
                Custom Themes
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100 text-green-600">
                  <Check size={16} strokeWidth={3} />
                </div>
                Clean Code
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-full bg-green-100 text-green-600">
                  <Check size={16} strokeWidth={3} />
                </div>
                UK Timezone
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual Content - Animated Mockup */}
        <div className="relative hidden lg:block perspective-[2000px]">
          <motion.div 
            initial={{ opacity: 0, rotateY: -10, rotateX: 5 }}
            animate={{ opacity: 1, rotateY: -5, rotateX: 2 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative rounded-2xl bg-white shadow-2xl border border-gray-100/50 p-3 transform transition-transform duration-500 hover:rotate-0"
          >
             {/* Glow effect behind */}
             <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 blur-3xl -z-10 rounded-3xl"></div>

             <div className="absolute top-0 left-0 right-0 h-10 bg-gray-50/50 backdrop-blur rounded-t-xl border-b border-gray-100 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             
             {/* Content Mockup */}
             <div className="mt-10 bg-white h-[500px] rounded-b-lg overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Dashboard Mockup" 
                  className="w-full h-full object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating animated elements */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 -left-6 bg-white p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 max-w-xs z-20"
                >
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white shadow-lg shadow-accent/20">
                         <div className="font-bold text-xl">Aa</div>
                      </div>
                      <div>
                         <div className="text-sm font-bold text-primary">Pixel Perfect</div>
                         <div className="text-xs text-muted font-medium mt-1">Design System</div>
                      </div>
                   </div>
                </motion.div>

                <motion.div 
                   animate={{ y: [0, 20, 0] }}
                   transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                   className="absolute top-24 -right-6 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 z-20"
                >
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg text-green-600">
                        <Check size={20} strokeWidth={3} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">Optimised</div>
                        <div className="text-xs text-green-600 font-bold">100% Performance</div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
