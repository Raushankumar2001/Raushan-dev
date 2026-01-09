import React from 'react';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "WordPress Websites",
      items: [
        "Custom WordPress themes",
        "ACF-based dynamic content",
        "5–8 page websites",
        "Mobile responsive",
        "Speed optimised"
      ]
    },
    {
      title: "Landing Pages",
      items: [
        "Figma to WordPress / React",
        "Conversion-focused layouts",
        "Fast loading",
        "SEO-ready structure"
      ]
    },
    {
      title: "Fixes & Maintenance",
      items: [
        "Bug fixing",
        "Performance optimisation",
        "Ongoing support",
        "Security updates"
      ]
    }
  ];

  return (
    <Section id="services" background="light">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4">Services</h2>
        <p className="text-gray-600">Specialised development services tailored for UK businesses.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
