import Image from "next/image";
import LayoutContainer from "./LayoutContainer";



const highlights = [
  "Trusted operator connections",
  "Easy rental process",
  "Growth tools for operators",
  "Transparent & innovative",
  "Connecting rentals & customers",
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

          {/* Right: Stats + Visual */}
          <div className="flex flex-col gap-8">


            {/* Founder Profile - Integrated from FoundersMessage */}

          </div>

        </div>
      </LayoutContainer>
    </section>
  );
}
