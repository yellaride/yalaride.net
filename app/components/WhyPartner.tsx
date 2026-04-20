"use client";

import React, { useState, useEffect, useRef } from "react";
import LayoutContainer from "./LayoutContainer";

const items = [
  {
    number: "01",
    subtitle: "LOW COMMISSIONS",
    title: "Market-lowest commissions",
    description:
      "Keep more of every booking with our unbeatable rates",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 14 4-4-4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
  {
    number: "02",
    subtitle: "ZERO FEES",
    title: "Zero signup or recurring fees",
    description:
      "Join us for free, no monthly or yearly fee & no hidden costs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    number: "03",
    subtitle: "BIDDING INNOVATION",
    title: "Price bidding innovation",
    description:
      "Control your pricing and fill low occupancy days faster",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    number: "04",
    subtitle: "TRAINING TOOLS",
    title: "Extended trainings",
    description:
      "Friendly team support and complete guidance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "05",
    subtitle: "SCALABLE GROWTH",
    title: "High volume scalability",
    description:
      "Scale bookings effortlessly—no operational stress required",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function WhyPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;

        // Progress: how much of the section has scrolled past the viewport top
        const startOffset = viewportHeight * 0.2;
        const currentScroll = Math.abs(rect.top) + startOffset;
        const totalScrollable = sectionHeight;

        if (rect.top <= startOffset) {
          const progress = Math.min(100, Math.max(0, (currentScroll / totalScrollable) * 100));
          setScrollProgress(progress);
        } else {
          setScrollProgress(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-white py-16 md:py-24 lg:py-32 overflow-visible"
    >
      <LayoutContainer className="relative">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Sticky Branding Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <div className="relative pl-12">
              {/* Vertical Progress Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-primary transition-all duration-150 ease-out"
                  style={{ height: `${scrollProgress}%` }}
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary border-4 border-white shadow-sm" />
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Partner Benefits
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
                Why Partner with
                <span className="text-primary"> YalaRide?</span>
              </h2>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-10 max-w-sm">
                We value fairness, transparency, and tech-driven growth in the car rental industry. Unlike traditional platforms, we deliver unmatched value through these core advantages:
              </p>

              {/* See All Button */}
              <div className="mb-12">
                <a href="/opreators-features" className="group inline-flex items-center gap-3 bg-primary text-white text-sm font-bold px-10 py-4 rounded-[0.2em] shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95">
                  <span>See all features</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>


            </div>
          </div>

          {/* Right: Scrollable Card Column */}
          <div className="flex-1 space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[0.2em] p-8 lg:p-10 border border-gray-100 shadow-sm transition-all duration-300"
              >
                {/* Number Badge */}
                <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-4 border-white shadow-md">
                  {item.number}
                </div>


                {/* Icon Box */}
                <div className="w-14 h-14 rounded-[0.2em] bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20 transition-transform duration-500">
                  {item.icon}
                </div>

                {/* Content */}
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-3">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg mb-0">
                  {item.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
