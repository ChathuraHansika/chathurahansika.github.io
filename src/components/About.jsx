import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center transform hover:-translate-y-2 transition-transform duration-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">About Me</h2>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            “A passionate Java developer with experience in building scalable applications and cloud-ready services. 
            I thrive on complex backend logic, cleaner code architectures, and exploring the depths of the Spring ecosystem.”
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
             {['Fast', 'Scalable', 'Secure', 'Modern'].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                   <span className="font-semibold text-purple-500">{item}</span>
                </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;