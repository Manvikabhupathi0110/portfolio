import React from 'react';
import { GraduationCap, Award, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const { education, personal } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <BookOpen className="w-3.5 h-3.5" />
              Background & Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Driven by curiosity, analytical thinking, and the goal of engineering software solutions that deliver genuine real-world value.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlight Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {personal.stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="glass-panel rounded-2xl p-5 text-center hover:translate-y-[-4px] transition-all duration-300 shadow-sm">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1.5">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Narrative & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  My Journey & Aspirations
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  I am a third-year Computer Science and Engineering undergraduate at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Basar. My journey in technology began with a strong foundation in mathematics and logical problem-solving, which naturally propelled me toward software engineering.
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Whether building full-stack web platforms like <span className="font-semibold text-blue-600 dark:text-blue-400">NaariDhan</span> for financial empowerment, engineering cryptographic tools like <span className="font-semibold text-purple-600 dark:text-purple-400">StegoShield</span>, or creating native Android apps with Kotlin and Firebase (<span className="font-semibold text-indigo-600 dark:text-indigo-400">SparkFix</span>), I thrive on turning complex problems into clean, accessible digital products.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Full-Stack Development</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">React, Node.js, Express, REST APIs</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Mobile Development</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Android Studio, Kotlin, Firebase</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">AI & Computer Vision</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Python, OpenCV, MediaPipe, ML</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-900 dark:text-white">Security & Systems</h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">Steganography, AES Cryptography</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Technical Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="up" delay={150}>
              <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-blue-500/20 dark:border-purple-500/20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-800/80 dark:to-slate-900">
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  Career Objective
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  "Actively pursuing Software Development Engineer (SDE) and Mobile App Development internships where I can contribute to high-scale production systems, write maintainable code, and collaborate with experienced engineering teams."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              <div className="glass-panel rounded-3xl p-6 sm:p-7 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Languages & Communication</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 font-medium">English (Professional)</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">Telugu (Native)</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">Hindi (Working)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Education Timeline
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Academic credentials and consistent high-performance track record
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-blue-500/40 dark:hover:border-blue-400/30 transition-all duration-300 hover:shadow-xl group h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold font-mono">
                        {edu.duration}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
                        {edu.grade}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                        {edu.field}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {edu.institution} — <span className="italic">{edu.campus}</span>
                      </p>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-1.5">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-3 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/50">
                    Status: <span className="text-slate-800 dark:text-slate-200 font-semibold">{edu.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
