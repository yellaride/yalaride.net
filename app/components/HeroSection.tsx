"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import LayoutContainer from "./LayoutContainer";
import PlatformMarquee from "./PlatformMarquee";

export default function HeroSection() {
  const navigateToPartner = () => {
    window.open("https://yalaride.com/become-a-partner", "_blank");
  };

  return (
    <section
      className="w-full bg-white overflow-hidden cursor-pointer"
      onClick={navigateToPartner}
    >
      <div onClick={(e) => e.stopPropagation()} className="cursor-default">
        <Navbar />
      </div>

      {/* Fluid container — height is driven by content + vh-based padding for a natural look */}
      <div className="relative pt-[22vh] pb-[10vh] md:pt-[24vh] md:pb-[14vh] lg:pt-[25vh] lg:pb-[15vh]">
        <LayoutContainer isHero className="!px-8 md:!px-12 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-20">

            {/* Left Side: Content */}
            <div className="flex flex-col items-start gap-8 w-full lg:w-[45%] z-10">
              <div className="relative">
                {/* Subtle background gradient glow behind heading */}
                <div className="absolute -left-20 -top-10 w-[150%] h-[150%] bg-primary/[0.15] blur-[140px] rounded-full -z-10 transition-all duration-1000" />

                <h1 className="font-sans text-5xl sm:text-4xl font-black  text-black md:text-6xl lg:text-7xl">
                  EMPOWERING
                  <br />
                </h1>
                <h2 className="text-primary text-5xl sm:text-4xl pt-3 font-semibold md:text-5xl lg:text-6xl">
                  <span className="tracking-wider"> CAR RENTAL</span><br />
                  OPERATORS
                </h2>
              </div>

              {/* Feature card */}
              <div className="relative -ml-4 md:-ml-12 w-[90%] md:w-full max-w-sm overflow-hidden rounded-r-[0.2em] border border-white/20 px-9 py-6 shadow-2xl md:px-11 md:py-8">
                <Image
                  src="/hero-section/semi-headings.png"
                  alt="Semi-headings background"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/10" />

                <div className="relative z-10 border-l-2 border-primary pl-5 md:pl-6">
                  <ul className="space-y-5 text-base leading-snug text-white font-medium">
                    <li className="flex items-start gap-4">
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary mt-[0.45rem]" />
                      <span>Expand Your Reach.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary mt-[0.45rem]" />
                      <span>Maximize Your Earnings.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary mt-[0.45rem]" />
                      <span className="leading-tight">
                        <span className="font-bold text-primary">BID MY PRICE:</span><br />
                        Fill Idle Cars Fast.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-4 flex justify-start gap-4">
                    <a
                      href="https://yalaride.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-xl active:scale-95"
                    >
                      Join YalaRide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Hero Image — hidden on mobile, visible lg+ */}
            <div className="hidden lg:block relative w-full lg:w-[70%] overflow-visible">
              {/* Darker background shadow effect */}
              <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] bg-black/[0.22] blur-[140px] rounded-full z-0" />

              <Image
                src="/hero-section/hero-img.svg"
                alt="YalaRide Hero Illustration"
                width={1200}
                height={1200}
                priority
                className="relative z-10 object-contain w-full h-auto scale-[1.4] origin-center"
                style={{ height: 'auto' }}
              />
            </div>

          </div>
        </LayoutContainer>
      </div>
    </section>
  );
}
