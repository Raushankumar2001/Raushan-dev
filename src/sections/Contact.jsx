import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        // TODO: Replace this with real email service (e.g., EmailJS, Formspree)
        // console.log("Form Data:", formState); 
        console.log("Configuration: To connect this form to a real email service, you can use EmailJS or Formspree. See documentation.");
        
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

  return (
    <Section id="contact" background="dark" className="text-white relative overflow-hidden">
        {/* Abstract shapes for visual interest on dark background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
            <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let’s discuss your project</h2>
            </Reveal>
            <Reveal delay={0.1}>
                <p className="text-gray-300 text-xl font-light max-w-lg leading-relaxed">
                I am currently accepting new projects for Q1. Whether you have a strict deadline or are just planning ahead, let's talk.
                </p>
            </Reveal>
            
            <Reveal delay={0.2}>
                <div className="pt-4 flex flex-col gap-6 text-sm text-gray-400">
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span>Available for UK timezone work</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>contact@example.com</span>
                    </div>
                </div>
            </Reveal>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
            {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                     <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                     </div>
                     <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                     <p className="text-gray-400">Thank you for getting in touch. I'll get back to you within 24 hours.</p>
                     <button onClick={() => setIsSubmitted(false)} className="text-accent hover:text-white transition-colors mt-4 text-sm font-medium">Send another message</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                value={formState.name}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                value={formState.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-500"
                                placeholder="john@company.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required
                            rows={4}
                            value={formState.message}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder-gray-500"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <Button 
                        type="submit" 
                        variant="primary" 
                        disabled={isSubmitting}
                        className="w-full justify-center py-4 text-base font-bold shadow-lg hover:shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                Sending...
                            </span>
                        ) : "Send Message"}
                    </Button>
                </form>
            )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
