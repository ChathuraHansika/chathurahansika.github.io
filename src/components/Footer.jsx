import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm glass-card rounded-none border-x-0 border-b-0">
      <p>© {new Date().getFullYear()} Chathura Hansika. All rights reserved.</p>
      <p className="mt-2">Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;