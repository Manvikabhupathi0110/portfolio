import React from 'react';
import { Award, CheckCircle, ExternalLink, Trophy, FileText, Sparkles, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Certifications() {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <Award className="w-3.5 h-3.5" />
              Verified Credentials & Accolades
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Certifications & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Formally authenticated professional credentials, specialized technical courses, and collegiate competition milestones.
            </p>
          </div>
        </ScrollReveal>

        {/* Hackathon & Competition Recognition Banner */}
        <div className="max-w-5xl mx-auto mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-6">
              <Trophy className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Hackathons & Technical Honors
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div
                  className="glass-panel rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-amber-400/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 font-mono font-bold">
                        {item.rank}
                      </span>
                      <span className="text-slate-500 font-mono">{item.date}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white pt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-medium text-purple-600 dark:text-purple-400 font-mono">
                      {item.organization}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Category: {item.type}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Certification Inventory Grid */}
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Certifications & Specialized Courses
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  className="glass-panel rounded-2xl p-6 flex flex-col justify-between border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:shadow-md group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-300 font-mono font-medium border border-blue-200/50 dark:border-blue-800/40">
                        {cert.category}
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">{cert.date}</span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Skills: <span className="text-slate-700 dark:text-slate-300">{cert.skills}</span>
                    </p>

                    {cert.credentialId && (
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        ID: <span className="text-slate-700 dark:text-slate-300">{cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verified
                    </span>

                    <a
                      href={cert.certificateUrl || cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>View Proof</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
