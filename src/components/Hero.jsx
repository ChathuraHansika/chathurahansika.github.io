import React from 'react';
import { motion } from 'framer-motion';
import ProfileImg from '../assets/img/profile-placeholder.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-purple-600 dark:text-purple-400 font-semibold mb-4"
          >
            Hello, I'm
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Chathura <span className="text-gradient">Hansika</span>
          </motion.h1>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8"
          >
            Java Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 glass-card hover:bg-white/20 transition-all font-medium rounded-full">
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-80 h-80 md:w-96 md:h-96"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
             <div className="glass-card w-full h-full p-4 transform transition-transform hover:scale-105 duration-500 relative overflow-hidden flex items-center justify-center">
                <img src={ProfileImg} alt="Chathura Hansika" className="w-full h-full object-cover rounded-xl shadow-inner" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;