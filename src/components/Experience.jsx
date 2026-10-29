import React from 'react';
import { Briefcase, Calendar, CheckCircle, ExternalLink, FileCheck, Sparkles, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              Practical Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Experience & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Hands-on technical development experience across mobile engineering, innovation sprints, and industry practices.
            </p>
          </div>
        </ScrollReveal>

        {/* Experience Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div
                className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl group"
              >
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-200/70 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.verified && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="py-5 space-y-2.5">
                  <h4 className="text-xs uppercase font-mono font-semibold tracking-wider text-slate-400">
                    Key Responsibilities & Outcomes:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Certificate Action if present */}
                  {exp.credentialId && (
                    <div className="flex items-center gap-2">
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
                        title={`Credential ID: ${exp.credentialId}`}
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Certificate ({exp.credentialId})</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
