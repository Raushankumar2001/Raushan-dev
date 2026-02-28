import React from 'react';
import { Download } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <Section id="about" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Image Column */}
             <Reveal width="100%">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-2xl transform rotate-6 scale-105 opacity-20 blur-xl"></div>
                    <img 
                    src='../raushan.png'
                        alt="Profile" 
                        className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 transform hover:-translate-y-2"
                    />
                    
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                         <div className="flex items-center gap-4">
                             <div>
                                 <div className="text-4xl font-bold text-primary">6+</div>
                                 <div className="text-xs text-muted font-bold uppercase tracking-wider">Years Exp.</div>
                             </div>
                             <div className="h-10 w-px bg-gray-200"></div>
                             <div>
                                 <div className="text-4xl font-bold text-accent">50+</div>
                                 <div className="text-xs text-muted font-bold uppercase tracking-wider">Projects</div>
                             </div>
                         </div>
                    </div>
                </div>
             </Reveal>

             {/* Text Column */}
             <div className="space-y-8">
                <Reveal width="100%">
                    <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-2">About Me</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-primary relative z-10 leading-tight">
                        Bridging the Gap Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">Design</span> & Code
                    </h3>
                </Reveal>
                
                <Reveal width="100%" delay={0.1}>
                    <p className="text-lg text-muted leading-relaxed relative z-10">
                        I’m a WordPress and Frontend Developer with professional experience building real-world web applications and business websites.
                    </p>
                </Reveal>
                
                <Reveal width="100%" delay={0.2}>
                    <p className="text-lg text-muted leading-relaxed relative z-10">
                        I enjoy turning ideas into clean, functional, and reliable digital experiences. I care deeply about writing maintainable code, meeting deadlines, and communicating clearly throughout a project.
                    </p>
                    <p className="text-lg text-muted leading-relaxed relative z-10 mt-4">
                        I don’t just build websites — I build solutions businesses can trust.
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                   <div className="pt-4">
                       <a 
                           href="/resume.pdf" 
                           download="Raushan_Kumar_CV.pdf"
                           className="inline-flex items-center justify-center px-8 py-3 text-base font-bold transition-all duration-300 rounded-xl focus:outline-none bg-primary text-white hover:bg-gradient-to-r hover:from-accent hover:to-purple-600 hover:shadow-lg hover:-translate-y-1 shadow-md"
                       >
                           <Download className="mr-2" size={20} />
                           Download CV
                       </a>
                   </div>
                </Reveal>
             </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
