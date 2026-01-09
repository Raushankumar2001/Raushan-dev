import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const Portfolio = () => {
  const projects = [
    {
      title: "Manchester Plumbing Services",
      description: "A high-performance brochure website designed to capture local leads. Features include instant quote forms, local SEO optimization, and fast mobile loading times.",
      tags: "Local Business",
      image: "https://plus.unsplash.com/premium_photo-1750594941118-145ef7a1791d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "FinTech Startup Dashboard",
      description: "A React-based client portal for a London fintech startup. Integrated with secure APIs/HubSpot to provide real-time data visualization and user management.",
      tags: "SaaS / Startup",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <Section id="portfolio" className="relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal width="100%">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Selected Work</h2>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Recent UK Projects</h3>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-xl text-muted font-light">A selection of work delivering tangible business results.</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <Reveal key={index} delay={index * 0.2 + 0.3} width="100%">
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
      
      <Reveal width="100%" delay={0.5}>
        <div className="mt-20 text-center">
          <a href="#" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors text-lg group">
            <span className="border-b-2 border-transparent group-hover:border-accent transition-all pb-0.5">View all case studies</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </Reveal>
    </Section>
  );
};

export default Portfolio;
