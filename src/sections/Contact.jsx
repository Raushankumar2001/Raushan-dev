import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  return (
    <Section id="contact" background="dark" className="text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s discuss your project</h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ready to improve your online presence? I am currently accepting new projects for Q1.
        </p>
        <div className="pt-4">
           <Button className="bg-white text-primary hover:bg-gray-100 border-transparent text-lg px-8 py-4">
             Get in touch
           </Button>
        </div>
        <div className="pt-8 text-sm text-gray-500">
           <p className="mb-2">contact@example.com</p>
           <p>Available for UK timezone work</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
