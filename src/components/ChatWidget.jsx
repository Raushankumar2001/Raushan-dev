import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true 
});

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Raushan's AI assistant. I can answer questions about his services, experience, and pricing. How can I help?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      if (!import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY === 'your_api_key_here') {
          setTimeout(() => {
              const fallbackResponse = "I'm currently in demo mode as no API key was provided. I can tell you that Raushan is a great developer!";
              setMessages(prev => [...prev, { id: Date.now() + 1, text: fallbackResponse, sender: 'bot' }]);
              setIsTyping(false);
          }, 1000);
          return;
      }

      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful AI assistant for Raushan's portfolio website. Raushan is a Senior WordPress Developer based in the UK. He specializes in custom WordPress themes, ACF, React web apps, and performance optimization. He charges typically from £1,500 for custom sites. He is available for Q1 projects. Be professional, concise, and encourage the user to book a consultation or use the contact form." },
          ...messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
          { role: "user", content: inputValue }
        ],
        model: "gpt-3.5-turbo",
      });

      const botResponse = completion.choices[0].message.content;
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error("OpenAI Error:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting to my brain right now. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 md:right-8 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden ring-1 ring-black/5"
            style={{ height: '550px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-indigo-900 p-4 flex justify-between items-center text-white shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Bot size={20} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-base tracking-wide">Raushan's AI</h3>
                  <div className="text-xs text-blue-200">Usually replies instantly</div>
                </div>
              </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-br from-accent to-purple-600 text-white rounded-br-none' 
                        : 'bg-white text-slate-700 border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
              <div className="flex gap-2 items-end">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about pricing, services..."
                  className="flex-1 bg-gray-50 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all border border-gray-200 focus:border-accent focus:bg-white"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-accent text-white p-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm active:scale-95 transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          boxShadow: ["0 10px 15px -3px rgba(99, 102, 241, 0.3)", "0 0 0 4px rgba(99, 102, 241, 0.2)", "0 10px 15px -3px rgba(99, 102, 241, 0.3)"]
        }}
        transition={{
            boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            },
            default: { duration: 0.2 }
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-gradient-to-r from-accent to-purple-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center group"
      >
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-400 rounded-full border-2 border-white"></span>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </>
  );
};

export default ChatWidget;
