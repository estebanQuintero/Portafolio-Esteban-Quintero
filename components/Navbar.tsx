
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Esteban Quintero Zuluaga
          </div>
          <div className="text-xs font-medium text-slate-400 uppercase tracking-widest hidden sm:block">
            Senior QA Automation Engineer
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
