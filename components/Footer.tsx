import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-slate-500 text-sm font-body">
          © {new Date().getFullYear()} Statslab Technologies. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-slate-500 hover:text-accent transition-colors">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-accent transition-colors">Terms</a>
          <a href="#" className="text-slate-500 hover:text-accent transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};