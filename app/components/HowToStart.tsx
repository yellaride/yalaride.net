import LayoutContainer from "./LayoutContainer";

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    description: "Reach out to our team. Account setup is handled directly by YalaRide to ensure a seamless onboarding experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Account Activation",
    description: "Receive your secure login credentials and access your dashboard. We verify all details for platform integrity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Manage & Earn",
    description: "Set up your fleet, define your pricing your way, customize availability, and manage bookings with full control.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 7-8.5 8.5-5-5L2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

export default function HowToStart() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <LayoutContainer>

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Getting Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            How to Start with <span className="text-primary">YalaRide</span>
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Number Background */}


              <div className="relative p-8 rounded-[0.2em] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-[0.2em] bg-orange-50 border border-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative bar */}
                <div className="mt-auto pt-8">
                  <div className="w-8 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[1px] bg-gradient-to-r from-gray-200 to-transparent z-0" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://yalaride.com/become-a-partner"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-[0.2em] transition-all duration-300 shadow-xl shadow-primary/20 group hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span className="flex items-center gap-2">
              Start Your Journey Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

      </LayoutContainer>
    </section>
  );
}
