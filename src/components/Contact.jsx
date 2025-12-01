import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gradient">Get In Touch</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
          Interested in working together or have a question? Feel free to drop me a message.
        </p>

        <form className="glass-card p-8 md:p-10 text-left space-y-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea rows="4" className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"></textarea>
          </div>
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 transition-all">
            Send Message
          </button>
        </form>

        <div className="flex justify-center gap-8">
          <a href="#" className="text-3xl text-slate-500 hover:text-blue-600 transition-colors hover:-translate-y-1"><FaLinkedin /></a>
          <a href="#" className="text-3xl text-slate-500 hover:text-black dark:hover:text-white transition-colors hover:-translate-y-1"><FaGithub /></a>
          <a href="#" className="text-3xl text-slate-500 hover:text-blue-400 transition-colors hover:-translate-y-1"><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;