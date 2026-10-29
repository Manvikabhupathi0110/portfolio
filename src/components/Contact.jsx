import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, RefreshCw, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          message: result.message || 'Your message has been received! I will get back to you shortly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.error || 'Server responded with an issue. Please retry or send via email.',
          message: ''
        });
      }
    } catch (err) {
      console.warn('Backend API unreachable, providing mailto fallback:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Backend API service is currently waking up or unreachable. You can retry in a moment, or click below to send directly via email.',
        message: ''
      });
    }
  };

  // Pre-filled mailto fallback link
  const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              Let's Start a Conversation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Interested in discussing upcoming internship opportunities, technical projects, or engineering collaborations? Reach out anytime.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left Column: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <ScrollReveal direction="up">
              <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    Contact Information
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    I am actively seeking Software Engineering and Mobile App Development internships. I'm excited to contribute to agile teams and build meaningful products.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  
                  {/* Email Box */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wide block">
                        Direct Email
                      </span>
                      <a
                        href={portfolioData.socialLinks.email.url}
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>

                  {/* Location Box */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wide block">
                        Location
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {portfolioData.personal.location}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Status Note */}
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                  <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                    Available for upcoming technical interviews & internship roles
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-200/60 dark:border-blue-800/40 text-center">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Prefer to compose directly in your email client?
                </span>
                <div className="mt-2">
                  <a
                    href={portfolioData.socialLinks.email.url}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Launch Email App</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Full-Stack Live Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={200}>
              <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  Messages submit directly to the portfolio's Node.js Express backend API.
                </p>

                {status.success && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-start gap-3 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block">Message Received!</span>
                      <span>{status.message}</span>
                    </div>
                  </div>
                )}

                {status.error && (
                  <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-3 animate-fade-in">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-bold block">Notice:</span>
                        <span>{status.error}</span>
                      </div>
                    </div>

                    {/* Instant Fallback Options */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-amber-200/60 dark:border-amber-800/60">
                      <button
                        type="button"
                        onClick={() => handleSubmit()}
                        disabled={status.submitting}
                        className="px-3 py-1.5 rounded-lg bg-amber-200/80 dark:bg-amber-800/80 hover:bg-amber-300 dark:hover:bg-amber-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${status.submitting ? 'animate-spin' : ''}`} />
                        <span>Retry Connection</span>
                      </button>

                      <a
                        href={mailtoUrl}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send Pre-Filled Email Directly</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sandhya"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="b220405@rgukt.ac.in"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Introduction / Internship Opportunity"
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5 font-mono">
                      Message Content *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your note or opportunity details here..."
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
