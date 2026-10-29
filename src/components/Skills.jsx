import React from 'react';
import { Cpu, Code, Layout, Database, Wrench, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: 'Programming Languages',
      icon: Terminal,
      items: skills.languages,
      description: 'Core languages utilized across academic courses, hackathons, and production apps.'
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      items: skills.frontend,
      description: 'Component architecture, responsive styling, and modern client tooling.'
    },
    {
      title: 'Backend, Cloud & Databases',
      icon: Database,
      items: skills.backendAndDatabases,
      description: 'API design, cloud databases, authentication, and relational schema management.'
    },
    {
      title: 'Applied AI & Data Science',
      icon: Sparkles,
      items: skills.aiAndDataScience,
      description: 'Computer vision, biomechanics pose estimation, and data manipulation pipelines.'
    },
    {
      title: 'Developer Tools & Platforms',
      icon: Wrench,
      items: skills.toolsAndCloud,
      description: 'Version control, development environments, Android tooling, and cloud hosting.'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Cpu className="w-3.5 h-3.5" />
              Technical Proficiency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Evidence-based technical capabilities validated through deployed applications, hackathon prototypes, and internship engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Skill Groups Grid */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {skillGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div
                  className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  
                  {/* Group Title Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Items Pill Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-3">
                    {group.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500/60 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </span>
                          
                          {item.level && (
                            <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-tight uppercase ${
                              item.level === 'Proficient'
                                ? 'bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300'
                                : item.level === 'Practicing'
                                ? 'bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300'
                                : 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300'
                            }`}>
                              {item.level}
                            </span>
                          )}
                        </div>

                        {item.desc && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                            {item.desc}
                          </p>
                        )}

                        {item.projects && (
                          <div className="mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-500 font-mono">
                            Used in: <span className="text-slate-700 dark:text-slate-300">{item.projects.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
