import React from 'react';
import { Code, Monitor, Wrench } from 'lucide-react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

// eslint-disable-next-line no-unused-vars
const ServiceIcon = ({ icon: Icon }) => (
  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
    <Icon size={24} />
  </div>
);

const ServiceCard = ({ title, items, icon, delay }) => {
  return (
    <Reveal delay={delay} width="100%">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
        <ServiceIcon icon={icon} />
        <h3 className="text-xl font-bold text-primary mb-6">{title}</h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-muted text-sm group-hover:text-gray-600 transition-colors">
              <span className="mr-3 text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Services = () => {
  const services = [
    {
      title: "WordPress Development",
      icon: Code,
      items: [
        "Custom WordPress theme development",
        "ACF-based dynamic content",
        "Gutenberg block development",
        "WooCommerce implementation",
        "API & third-party integrations"
      ]
    },
    {
      title: "React & Frontend Development",
      icon: Monitor,
      items: [
        "React (Vite / Next.js) applications",
        "Headless WordPress integration",
        "Authentication & protected routes",
        "Performance optimisation",
        "Modern JavaScript (ES6+)"
      ]
    },
    {
      title: "Support & Maintenance",
      icon: Wrench,
      items: [
        "Bug fixing & issue resolution",
        "Core, theme & plugin updates",
        "Speed & performance improvements",
        "Accessibility enhancements",
        "Ongoing technical support"
      ]
    }
  ];

  return (
    <Section id="services" background="light">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Reveal width="100%">
          <h2 className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">How I Can Help You</h2>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">I focus on building websites that are easy to manage, fast to load, and ready to grow with your business.</h3>
        </Reveal>
        <Reveal width="100%" delay={0.2}>
          <p className="text-lg text-muted">Your website should work for you, not against you.</p>
        </Reveal>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} delay={index * 0.1 + 0.3} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
