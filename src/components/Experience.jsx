import React from 'react';

const experiences = [
  {
    company: "Tech Corp Inc.",
    role: "Senior Java Engineer",
    duration: "2023 - Present",
    desc: "Leading backend microservices architecture migration using Spring Boot and AWS."
  },
  {
    company: "Solutions Ltd",
    role: "Software Engineer",
    duration: "2021 - 2023",
    desc: "Developed REST APIs and optimized SQL queries reducing latency by 40%."
  },
  {
    company: "StartUp X",
    role: "Junior Developer",
    duration: "2019 - 2021",
    desc: "Full stack development with Java and React. Assisted in CI/CD pipeline setup."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Experience Timeline</h2>
        
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 opacity-30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
              
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-100 dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg shadow-purple-500/50"></div>

              {/* Content */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="glass-card p-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <h3 className="text-xl font-bold">{exp.role}</h3>
                   <h4 className="text-purple-500 font-semibold mb-2">{exp.company}</h4>
                   <span className="text-sm text-slate-500 dark:text-slate-400 block mb-3">{exp.duration}</span>
                   <p className="text-slate-700 dark:text-slate-300">{exp.desc}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;