"use client";

import Image from "next/image";
import LayoutContainer from "./LayoutContainer";
import { motion } from "framer-motion";



const highlights = [
  "Trusted operator connections",
  "Easy rental process",
  "Growth tools for operators",
  "Transparent & innovative",
  "Connecting rentals & customers",
];

const carCategories = [
  { name: "Economy", color: "bg-blue-500/10", emoji: "🚙" },
  { name: "Compact", color: "bg-green-500/10", emoji: "🚗" },
  { name: "Sedan / Standard", color: "bg-purple-500/10", emoji: "🚕" },
  { name: "SUV", color: "bg-orange-500/10", emoji: "🚐" },
  { name: "Luxury", color: "bg-amber-500/10", emoji: "✨" },
  { name: "Convertible", color: "bg-red-500/10", emoji: "🏎️" },
  { name: "Mini-van", color: "bg-teal-500/10", emoji: "🚌" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 lg:py-32">
      <LayoutContainer>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* ... (rest remains the same) */}

          {/* Left: Text */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              What Is YalaRide?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Who Are <span className="text-primary">We?</span>
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-8" />
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">
              YalaRide is a modern car rental marketplace built to seamlessly connect
              customers with trusted and verified car rental operators. Our platform
              simplifies the rental experience while empowering operators with the
              tools to grow and scale efficiently. Built on a scalable architecture
              with API integration and a real-time booking engine, we focus on a system that is fair, transparent, and technology-driven.
            </p>

            <ul className="space-y-3 mb-12">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/about-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
            >
              Learn more about us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Stats + Visual Mockup */}
          <div className="hidden md:block relative w-full h-[400px] md:h-[450px] lg:h-[500px]">

            {/* Desktop / Browser Mockup UI (Background Right) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute top-0 right-0 w-full h-[85%] md:h-[90%] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col z-0"
            >
              {/* Browser/Window Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-2 md:py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 flex-1">
                  <div className="mx-auto w-1/2 md:w-1/3 h-3 md:h-4 bg-white border border-gray-200 rounded-sm"></div>
                </div>
              </div>

              {/* Browser Content Area */}
              <div className="p-4 md:p-8 md:pl-[35%] lg:pl-[40%] bg-gray-50/30 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1">Partner Benefits</h3>
                    <p className="text-xs md:text-sm text-gray-500">Everything you need to grow</p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    {[
                      { title: "Training Programme", desc: "Expert-led sessions for operators", icon: "🎓" },
                      { title: "24/7 Chat Support", desc: "Instant help whenever you need it", icon: "💬" },
                      { title: "Damage Protection", desc: "Full coverage for your fleet", icon: "🛡️" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] md:text-xs font-bold text-gray-800">{item.title}</h4>
                          <p className="text-[9px] md:text-[10px] text-gray-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 flex justify-center">
                  <motion.button
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="px-6 py-2 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                  >
                    Join YalaRide Now
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Mobile Phone Mockup UI (Foreground Left) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 w-[45%] md:w-[35%] max-w-[220px] h-[80%] md:h-[85%] bg-white rounded-[24px] md:rounded-[36px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[4px] md:border-[8px] border-gray-100 overflow-hidden flex flex-col z-10"
            >

              {/* Phone Notch/Hardware Area */}
              <div className="absolute top-0 inset-x-0 h-4 md:h-5 flex justify-center z-20">
                <div className="w-[45%] h-full bg-gray-100 rounded-b-xl md:rounded-b-2xl relative">
                  {/* Tiny camera dot */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Phone Side Buttons (Optical Illusion using absolute positioning on the outside? Actually we can just do the screen) */}

              {/* Phone Content Area */}
              <div className="pt-8 md:pt-10 px-3 md:px-4 pb-4 bg-gray-50/50 flex-1 flex flex-col overflow-hidden relative">
                <div className="mb-3 relative z-10 bg-gray-50/90 pb-2 pt-1 backdrop-blur-sm shadow-[0_4px_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">We Cover :</div>
                  <div className="h-2 w-1/2 bg-primary rounded"></div>
                </div>

                {/* Mobile Dashboard Mini-Cards - Vertical Carousel */}
                <div className="flex-1 relative w-full overflow-hidden mask-image-bottom-fade">
                  <motion.div
                    className="absolute top-0 left-0 w-full flex flex-col gap-3"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                  >
                    {/* Original 8 items */}
                    {carCategories.map((cat, i) => (
                      <div key={i} className="w-full bg-white p-2.5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between flex-shrink-0">
                        <div className={`h-8 w-8 rounded-full ${cat.color} flex-shrink-0 flex items-center justify-center text-sm`}>
                          {cat.emoji}
                        </div>
                        <div className="flex-1 ml-3 space-y-1.5">
                          <div className="text-[10px] md:text-xs font-bold text-gray-800">{cat.name}</div>
                          <div className="h-1.5 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    ))}
                    {/* Duplicated 8 items for infinite scroll */}
                    {carCategories.map((cat, i) => (
                      <div key={`dup-${i}`} className="w-full bg-white p-2.5 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between flex-shrink-0">
                        <div className={`h-8 w-8 rounded-full ${cat.color} flex-shrink-0 flex items-center justify-center text-sm`}>
                          {cat.emoji}
                        </div>
                        <div className="flex-1 ml-3 space-y-1.5">
                          <div className="text-[10px] md:text-xs font-bold text-gray-800">{cat.name}</div>
                          <div className="h-1.5 w-1/2 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <style dangerouslySetInnerHTML={{
                  __html: `
                   .mask-image-bottom-fade {
                     mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
                     -webkit-mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
                   }
                 `}} />
              </div>
            </motion.div>

          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
