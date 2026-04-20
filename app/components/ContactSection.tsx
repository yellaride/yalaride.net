"use client";

import React from "react";
import LayoutContainer from "./LayoutContainer";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen pt-24 pb-12 flex items-center overflow-hidden bg-black"
    >
      {/* Background Image - Full Visibility */}
      <div className="absolute inset-0 z-0 text-white">
        <img
          src="/contact-us/background.png"
          alt="Contact background"
          className="w-full h-full object-cover opacity-100"
        />
        {/* Subtle Vignette for edges only */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <LayoutContainer className="relative z-10">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">

          {/* Responsive Branding Header/Footer/Sidebar */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-between lg:justify-start gap-6 lg:gap-16 border-t lg:border-t-0 lg:border-r border-white/10 pt-8 lg:pt-0 lg:pr-12 order-last lg:order-first mt-8 lg:mt-0">

            <h3 className="text-xl lg:text-xl font-black tracking-[0.4em] text-white/30 uppercase lg:[writing-mode:vertical-rl] lg:rotate-180 py-0 lg:py-4">
              YALA RIDE
            </h3>

            {/* Social Matrix */}
            <div className="flex flex-row lg:flex-col gap-5 lg:gap-6">
              {/* TikTok */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.1-3.44-3.37-3.5-5.75-.12-2.95 1.76-5.83 4.6-6.66.86-.25 1.75-.32 2.64-.26l.01 4.22c-1.12-.13-2.31.28-2.91 1.25-.33.49-.49 1.1-.48 1.69.05 1.51 1.34 2.87 2.85 2.82 1.51-.01 2.83-1.2 2.85-2.73.01-4.32-.01-8.64.02-12.96z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.22 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/yalaride" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.14.63c-.78.3-1.45.71-2.1 1.36-.65.65-1.06 1.32-1.36 2.1-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.78.71 1.45 1.36 2.1.65.65 1.32 1.06 2.1 1.36.76.3 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56.78-.3 1.45-.71 2.1-1.36.65-.65 1.06-1.32 1.36-2.1.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91-.3-.78-.71-1.45-1.36-2.1-.65-.65-1.32-1.06-2.1-1.36-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z" /><path d="M12 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.85-11.45c0-.8-.65-1.45-1.45-1.45-.8 0-1.45.65-1.45 1.45 0 .8.65 1.45 1.45 1.45.8 0 1.45-.65 1.45-1.45z" /></svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@yalaride" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.19c-.27-1.03-1.08-1.83-2.11-2.11C19.5 3.61 12 3.61 12 3.61s-7.5 0-9.39.47c-1.03.28-1.84 1.08-2.11 2.11C0 8.08 0 12 0 12s0 3.92.5 5.81c.27 1.03 1.08 1.83 2.11 2.11 1.89.48 9.39.48 9.39.48s7.5 0 9.39-.48c1.03-.28 1.84-1.08 2.11-2.11.5-1.89.5-5.81.5-5.81s0-3.92-.5-5.81zM9.54 15.57V8.43l6.27 3.57-6.27 3.57z" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/yalaride/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24H12.82v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.78 4.66-4.78 1.33 0 2.47.1 2.8.14v3.25l-1.92.01c-1.51 0-1.8.72-1.8 1.77v2.32h3.61l-.47 3.62h-3.14V24h6.12c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z" /></svg>
              </a>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left Column: Contact Form */}
            <div className="bg-black/40 backdrop-blur-xl p-5 md:p-8 rounded-[0.2em] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Send us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-gray-100 text-sm md:text-base lg:text-lg mb-6 leading-relaxed font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Have questions about becoming a partner? Fill out the form below and
                our team will get back to you within 24 hours.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-[0.2em] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-[0.2em] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-[0.2em] px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  >
                    <option className="bg-black">Partnership Inquiry</option>
                    <option className="bg-black">Technical Support</option>
                    <option className="bg-black">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-[0.2em] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-[0.2em] hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-98"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info */}
            <div className="lg:pt-12 order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Reach Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Stay Connected <br />with <span className="text-primary">YalaRide</span>
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-12 shadow-sm" />

              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-[0.2em] bg-black/40 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 font-sans">Call Us Any Time</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">+1 407-590-6100</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-[0.2em] bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 font-sans">Email Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">support@yalaride.com</p>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>

      </LayoutContainer>
    </section>
  );
}
