import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectImg from '../assets/img/project-placeholder.png';

const projects = [
  {
    title: "E-Commerce Microservices",
    desc: "A scalable e-commerce backend built with Spring Boot, handling high concurrency with Kafka.",
    tags: ["Java", "Spring Boot", "Kafka", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Cloud Task Manager",
    desc: "React + Tailwind frontend with a serverless AWS Lambda backend.",
    tags: ["React", "AWS Lambda", "DynamoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Real-time Chat App",
    desc: "WebSocket based chat application with Neo4j relationship mapping for friend suggestions.",
    tags: ["Java", "WebSockets", "Neo4j"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={ProjectImg} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 h-12 overflow-hidden">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-500 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-purple-500 transition-colors"><FaGithub /> Code</a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-semibold hover:text-purple-500 transition-colors"><FaExternalLinkAlt /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;