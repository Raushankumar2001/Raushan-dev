import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';

const Portfolio = () => {
  const projects = [
    {
      title: "The Profit First Prophet",
      description: "Professional project. Built a responsive business website with a strong focus on performance, accessibility, and clean UI. Converted designs into semantic HTML and improved performance/accessibility.",
      tags: "Business Website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
    },
    {
      title: "Techostack",
      description: "Company project. Developed a CMS-driven blog website designed for easy content management and SEO. Handled WordPress CMS setup, responsive layout, and SEO-friendly markup.",
      tags: "Company Blog",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2370&auto=format&fit=crop"
    },
    {
      title: "Employee Management System",
      description: "Internal React application built to manage employee data efficiently. Features authentication, protected routes, and CRUD functionality with a Tailwind CSS UI.",
      tags: "Internal Tool",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <Section id="portfolio" className="relative overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal width="100%">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Selected Professional Work</h2>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6">Real Business Results</h3>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-xl text-muted font-light">Projects I’ve worked on as part of my professional roles, focusing on real business needs.</p>
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
