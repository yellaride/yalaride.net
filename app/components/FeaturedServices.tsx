import React from "react";

const services = [
  {
    number: "01",
    title: "Luxury Rentals",
    description:
      "Access premium high-end vehicles for special occasions, high-profile business travel, or an elevated experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Daily Commute",
    description:
      "Reliable and efficient cars for your everyday needs. Safe, well-maintained, and ready for the city.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Long-Term Leasing",
    description:
      "Flexible, cost-effective solutions for extended stays, seasonal needs, or corporate fleet requirements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Chauffeur Services",
    description:
      "Professional, vetted drivers for a stress-free, premium travel experience from door to door.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    ),
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-gray-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Our Offerings
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Services Built<br />for Every Journey
            </h2>
          </div>
          <p className="text-gray-400 text-base md:text-sm leading-relaxed max-w-xs md:text-right">
            Tailored car rental solutions designed to simplify your travel and
            empower your commute.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-950 p-10 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono text-primary/60">{service.number}</span>
                <div className="text-gray-600">{service.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-base md:text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
              <div className="mt-auto pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-600"
                >
                  Learn More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
