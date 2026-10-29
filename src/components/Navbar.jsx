import React, { useState, useEffect } from 'react';
import { Sun, Moon, Download, Menu, X, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-extrabold text-lg tracking-tight">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Manvika
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 -mt-1 hidden sm:block">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700/70 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all cursor-pointer focus:outline-none"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-5 h-5 text-indigo-600 hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Download Resume Button */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Manvika_Bhupathi_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-mono">Manvika Bhupathi</span>
            <a
              href={portfolioData.personal.resumeUrl}
              download="Manvika_Bhupathi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
