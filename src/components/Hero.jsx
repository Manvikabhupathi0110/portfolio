import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink, Code2, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [useRealPhoto, setUseRealPhoto] = useState(false);
  const roles = portfolioData.personal.subRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 pb-20 overflow-hidden flex items-center">
      
      {/* Decorative Glow Ambient Blobs */}
      <div className="absolute top-16 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
      <div className="absolute top-36 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-500/10 dark:bg-pink-600/10 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            
            {/* Welcome Chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/60 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
                Welcome to my portfolio
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>
              
              {/* Dynamic Animated Subtitle */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent transition-all duration-300">
                  {roles[currentRoleIndex]}
                </span>
                <span className="inline-block w-0.5 h-6 ml-1.5 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              </div>
            </div>

            {/* Recruiter-Ready Bio Summary */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {portfolioData.personal.bio}
            </p>

            {/* Location & Status Indicator */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Open to SDE & App Internships</span>
              </div>
            </div>

            {/* Verified Social Profiles Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* GitHub */}
              <a
                href={portfolioData.socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-110 shadow-sm transition-all"
                title="GitHub: Manvikabhupathi0110"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-110 shadow-sm transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* LeetCode */}
              <a
                href={portfolioData.socialLinks.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-300 hover:scale-105 shadow-sm transition-all flex items-center gap-2 text-xs font-semibold"
                title="LeetCode Profile"
              >
                <span className="font-mono text-amber-500 font-bold">LC</span>
                <span>LeetCode</span>
              </a>

              {/* GeeksforGeeks */}
              <a
                href={portfolioData.socialLinks.geeksforgeeks.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-300 hover:scale-105 shadow-sm transition-all flex items-center gap-2 text-xs font-semibold"
                title="GeeksforGeeks Profile"
              >
                <span className="font-mono text-emerald-500 font-bold">GFG</span>
                <span>GeeksforGeeks</span>
              </a>

              {/* Email */}
              <a
                href={portfolioData.socialLinks.email.url}
                className="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 hover:scale-110 shadow-sm transition-all"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-105 transition-all flex items-center justify-center"
              >
                <span>Get in Touch</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Status Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96">
              
              {/* Pulsing Gradient Aura Rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-40 dark:opacity-30 animate-pulse"></div>

              {/* Main Avatar Card Container */}
              <div className="relative w-full h-full glass-panel rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border-2 border-white/20 dark:border-white/10 shadow-2xl">
                
                {/* Photo / Avatar Display with Toggle */}
                <div className="relative mb-5 group">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-blue-500/30 dark:ring-purple-500/30 shadow-xl bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                    {useRealPhoto ? (
                      <img
                        src="/passphoto.jpeg"
                        alt="Manvika Bhupathi"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      /* Stylized Developer Illustration Avatar */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 p-4 relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-extrabold shadow-lg">
                          MB
                        </div>
                        <div className="mt-2 text-xs font-mono text-blue-300 font-semibold tracking-wide">
                          &lt;developer /&gt;
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Photo Switch Toggle Button */}
                  <button
                    onClick={() => setUseRealPhoto(!useRealPhoto)}
                    className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-md hover:scale-105 transition-transform"
                    title="Toggle between Avatar and Profile Photo"
                  >
                    {useRealPhoto ? 'Show Avatar' : 'Show Photo'}
                  </button>
                </div>

                {/* Candidate Badge */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono mt-1">
                  RGUKT Basar • CSE '28 (3rd Year)
                </p>

                {/* Floating Tech Badges */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50">
                    React & JS
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                    Python & AI
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                    Android / Kotlin
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
