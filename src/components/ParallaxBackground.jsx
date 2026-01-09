import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
       {/* Abstract background shapes moving at different speeds */}
       <motion.div 
         style={{ y, opacity }}
         className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -mr-32 -mt-32"
       />
       <motion.div 
         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity }}
         className="absolute top-[40%] left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -ml-20"
       />
       
       <motion.div 
         style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]), opacity: 0.5 }}
         className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]"
       />
    </div>
  );
};

export default ParallaxBackground;
