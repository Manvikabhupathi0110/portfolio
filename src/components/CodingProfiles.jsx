import React from 'react';
import { Terminal, Github, ExternalLink, Code2, Globe, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function CodingProfiles() {
  const profiles = [
    {
      name: 'LeetCode',
      iconCode: 'LC',
      color: 'from-amber-500 to-orange-600',
      textColor: 'text-amber-500',
      username: portfolioData.socialLinks.leetcode.username,
      url: portfolioData.socialLinks.leetcode.url,
      focus: 'Data Structures, Algorithms & Problem Solving',
      tag: 'Active Practice'
    },
    {
      name: 'GeeksforGeeks',
      iconCode: 'GFG',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-500',
      username: portfolioData.socialLinks.geeksforgeeks.username,
      url: portfolioData.socialLinks.geeksforgeeks.url,
      focus: 'Algorithmic Concepts, Core CS & Coding Exercises',
      tag: 'Verified Profile'
    },
    {
      name: 'GitHub',
      icon: Github,
      color: 'from-slate-700 to-slate-900',
      textColor: 'text-slate-700 dark:text-slate-300',
      username: portfolioData.socialLinks.github.username,
      url: portfolioData.socialLinks.github.url,
      focus: 'Open Source Repositories, Full-Stack & Android Codebases',
      tag: '6+ Repositories'
    },
    {
      name: 'LinkedIn',
      iconCode: 'in',
      color: 'from-blue-600 to-indigo-700',
      textColor: 'text-blue-600 dark:text-blue-400',
      username: portfolioData.socialLinks.linkedin.username,
      url: portfolioData.socialLinks.linkedin.url,
      focus: 'Professional Network, Verified Credentials & Industry Updates',
      tag: 'Connected'
    }
  ];

  return (
    <section className="py-16 sm:py-20 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Terminal className="w-3.5 h-3.5" />
              Developer Footprint
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Coding Profiles & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Platforms</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Direct authenticated handles on premier engineering and competitive programming communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {profiles.map((p, i) => (
            <ScrollReveal key={i} delay={i * 120} direction="up">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-purple-500/50 hover:translate-y-[-4px] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-md font-extrabold text-base`}>
                      {p.icon ? <p.icon className="w-6 h-6" /> : p.iconCode}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                      {p.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {p.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    @{p.username}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {p.focus}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Visit Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
