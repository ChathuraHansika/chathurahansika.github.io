import React from 'react';

const Education = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Education</h2>
        <div className="glass-card p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-2xl transition-shadow">
          <div>
            <h3 className="text-2xl font-bold">BSc in Computer Science</h3>
            <p className="text-lg text-purple-500">University of Colombo</p>
            <p className="text-sm text-slate-500 mt-1">2015 - 2019</p>
          </div>
          <div className="md:text-right">
             <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20 text-sm font-semibold">First Class Honours</span>
             <p className="mt-2 text-slate-600 dark:text-slate-400">Specialized in Software Engineering & Algorithms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;