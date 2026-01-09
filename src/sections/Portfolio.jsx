import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      title: "UK Plumbing Business Website",
      description: "A 5-page brochure website for a local plumbing business in Manchester. Focused on quick contact options and local SEO.",
      tags: "Sample Project"
    },
    {
      title: "UK Startup Landing Page",
      description: "Conversion-optimised landing page for a Fintech startup in London. Built with React and integrated with HubSpot.",
      tags: "Sample Project"
    }
  ];

  return (
    <Section id="portfolio">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Selected Work</h2>
        <p className="text-gray-600">Recent projects built for UK clients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
