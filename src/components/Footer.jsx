import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-12 relative bg-white/40 dark:bg-[#070A11] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60 dark:border-slate-800">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              M
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-base">
                Manvika Bhupathi
              </h4>
              <p className="text-xs text-slate-500 font-mono">
                RGUKT Basar • CSE '28 (3rd Year)
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all cursor-pointer shadow-sm"
            aria-label="Back to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Manvika Bhupathi. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono">
            <span>Built with React, Tailwind CSS & Node.js</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
