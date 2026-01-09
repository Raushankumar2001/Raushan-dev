import React from 'react';
import Section from '../components/Section';

const About = () => {
  return (
    <Section id="about" className="text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-primary">About Me</h2>
        <p className="text-xl text-gray-600 leading-relaxed font-light">
          I’m a WordPress developer specialising in custom themes, ACF development, and performance optimisation.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          I help UK small businesses and startups build reliable websites that are easy to manage and built for growth. I focus on writing clean, accessible code and delivering projects on time.
        </p>
      </div>
    </Section>
  );
};

export default About;
