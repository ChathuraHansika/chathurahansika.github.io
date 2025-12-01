import React from 'react';
import { FaJava, FaAws, FaReact, FaGitAlt, FaLinux, FaLayerGroup, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiGooglecloud, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'Microservices', icon: <FaLayerGroup className="text-blue-400" /> }, 
  { name: 'SQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  { name: 'GCP', icon: <SiGooglecloud className="text-blue-500" /> },
  { name: 'Neo4j', icon: <FaDatabase className="text-indigo-500" /> }, // CORRECTED ICON: FaDatabase
  { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
  { name: 'Linux', icon: <FaLinux className="text-white bg-black rounded-full p-0.5" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Technical Arsenal</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-3 transition-all duration-300 hover:shadow-purple-500/20 group"
            >
              <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;