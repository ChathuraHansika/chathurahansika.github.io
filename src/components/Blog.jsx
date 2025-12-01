import React from 'react';

const posts = [
  { title: "Understanding JVM Memory Model", date: "Oct 12, 2023", category: "Java" },
  { title: "Spring Boot 3: What's New?", date: "Nov 05, 2023", category: "Spring" },
  { title: "Optimizing SQL Queries", date: "Dec 01, 2023", category: "Database" },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 bg-slate-50/50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Latest Thoughts</h2>
        <div className="grid gap-6">
          {posts.map((post, i) => (
            <div key={i} className="glass-card p-6 flex justify-between items-center hover:bg-white/20 transition-colors cursor-pointer group">
               <div>
                  <span className="text-xs text-purple-500 font-bold uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-purple-500 transition-colors">{post.title}</h3>
               </div>
               <span className="text-sm text-slate-500">{post.date}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
           <button className="px-6 py-2 rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all">
             Read All Posts
           </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;