import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Shield, Smartphone, Globe, Layers, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showArchive, setShowArchive] = useState(false);

  const categories = ['All', 'Web & AI', 'Mobile', 'Security', 'Data Science'];

  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const archiveProjects = portfolioData.projects.filter(p => !p.featured);

  const filteredFeatured = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  const filteredArchive = selectedCategory === 'All'
    ? archiveProjects
    : archiveProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Layers className="w-3.5 h-3.5" />
              Engineering Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              A collection of verified full-stack applications, native mobile apps, applied computer vision systems, and security tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Primary Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredFeatured.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150} direction="up">
              <div
                className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl group h-full"
              >
                
                <div className="space-y-4">
                  
                  {/* Top Badge & Category */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono">
                      {project.category}
                    </span>
                    
                    {project.badge && (
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                        project.badge.includes('Live')
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : project.badge.includes('SIH')
                          ? 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                          : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                      }`}>
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 mt-0.5 font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Problem & Solution Mini Cards */}
                  <div className="space-y-2 pt-2">
                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-200">Problem Solved: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.problem}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs">
                      <span className="font-semibold text-slate-900 dark:text-slate-200">Architecture / Approach: </span>
                      <span className="text-slate-600 dark:text-slate-400">{project.solution}</span>
                    </div>
                  </div>

                  {/* Key Features List */}
                  <ul className="space-y-1.5 pt-1">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Footer: Tech Stack & Actions */}
                <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-slate-800 space-y-4">
                  
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 hover:scale-105 transition-all"
                      >
                        <span>Live Deployment</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-sm hover:scale-105 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Project Archive Collapsible */}
        <div className="text-center pt-4">
          <button
            onClick={() => setShowArchive(!showArchive)}
            className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Code className="w-4 h-4 text-blue-500" />
            <span>{showArchive ? 'Hide Project Archive' : 'View Project Archive & Supporting Work'}</span>
          </button>

          {showArchive && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-fade-in">
              {filteredArchive.map((proj, idx) => (
                <ScrollReveal key={proj.id} delay={idx * 100} direction="up">
                  <div
                    className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400/40 transition-all h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold">{proj.category}</span>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">{proj.title}</h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-mono mb-2">{proj.subtitle}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{proj.summary}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
