import Image from "next/image";
import Navbar from "../components/Navbar";
import LayoutContainer from "../components/LayoutContainer";
import ContactSection from "../components/ContactSection";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
    { value: "Low", label: "Commissions" },
    { value: "Zero", label: "Signup Fees" },
    { value: "Global", label: "Marketplace" },
    { value: "24/7", label: "Support" },
];

const platformFeatures = [
    {
        number: "01",
        title: "Real-Time Booking Engine",
        description:
            "Instant availability, live pricing, and seamless confirmations — all powered by a robust API-first architecture built for speed and reliability.",
    },
    {
        number: "02",
        title: "Price Bidding System",
        description:
            "Our proprietary bidding model lets operators set competitive prices and fill idle vehicles faster, giving customers more choice and operators more control.",
    },
    {
        number: "03",
        title: "Operator Dashboard",
        description:
            "A dedicated management console for fleet tracking, booking management, earnings analytics, and customer communication — all in one place.",
    },
    {
        number: "04",
        title: "Verified Operator Network",
        description:
            "Every operator on YalaRide goes through a structured verification process, ensuring customers always rent from trusted, professional providers.",
    },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar forceWhite />
            {/* Preload hero image */}
            <link rel="preload" as="image" href="/about-us/about-hero.png" />

            {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
            <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[480px]">
                {/* Background image — anchored right so subject is visible */}
                <Image
                    src="/about-us/about-hero.png"
                    alt="About YalaRide background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-[60%_center]"
                />
                {/* Gradient: strong on left for text, fades out before right edge */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/50 to-gray-950/10" />

                <LayoutContainer className="relative z-10 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                        {/* Left: text */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
                                About YalaRide
                            </p>
                            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-8">
                                Built for the people<br />
                                who keep cars<span className="text-primary"> moving.</span>
                            </h1>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
                                YalaRide is a technology-driven car rental marketplace that connects
                                customers with verified operators — transparently, efficiently, and
                                on fair terms.
                            </p>
                        </div>
                        {/* Right: empty — image shows through here */}
                        <div className="hidden lg:block" />
                    </div>
                </LayoutContainer>

                {/* Bottom fade into stats bar */}
                <div className="absolute bottom-0 left-0 right-0 h-20" />
            </section>

            {/* ── Stats Bar ───────────────────────────────────────────────────────── */}


            {/* ── About Us ────────────────────────────────────────────────────────── */}
            <section className="bg-white py-24 md:py-32">
                <LayoutContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

                        {/* Left */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
                                What Is YALARIDE?
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                A marketplace built<br /><span className="text-primary">on fairness</span>
                            </h2>
                            <div className="w-10 h-0.5 bg-primary mb-8" />
                            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-6">
                                YalaRide was founded with a single conviction: the car rental industry
                                needed a platform that worked equally well for operators and customers —
                                not one that extracted value from both sides.
                            </p>
                            <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
                                We built a marketplace where operators keep more of what they earn,
                                customers get transparent pricing, and every interaction is backed by
                                technology that removes friction. No hidden fees. No inflated commissions.
                                Just a clean, scalable system that grows with you.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-6">
                            {/* Dark card */}
                            <div className="bg-primary rounded-[0.2em] p-10">
                                <p className="text-white text-sm font-bold uppercase tracking-widest mb-4">★ Our Mission</p>
                                <p className="text-white text-base lg:text-lg leading-relaxed">
                                    To make car rental fair, transparent, and technology-driven — for
                                    every operator and every customer.
                                </p>
                            </div>


                        </div>

                    </div>
                </LayoutContainer>
            </section>

            {/* ── Founder's Message ───────────────────────────────────────────────── */}


            {/* ── What is YalaRide ────────────────────────────────────────────────── */}
            <section className="bg-white py-18 md:py-24 border-t border-gray-100">
                <LayoutContainer>

                    <div className="max-w-2xl mb-16">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
                            What is YalaRide
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            More than a<span className="text-primary"> rental app</span>
                        </h2>
                        <div className="w-10 h-0.5 bg-primary mb-8" />
                        <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
                            YalaRide is a two-sided marketplace — a platform where car rental
                            operators list and manage their fleets, and customers discover, compare,
                            and book vehicles with full pricing transparency. Think of it as the
                            infrastructure layer that connects supply and demand in the rental market,
                            without the bloat of traditional aggregators.
                        </p>
                    </div>

                    {/* Two-column layout: text left, visual right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Left: key points */}
                        <div className="space-y-8">
                            {[
                                {
                                    title: "For Operators",
                                    body: "List your fleet, set your prices, manage bookings, and grow your business — all from a single dashboard with zero recurring fees.",
                                },
                                {
                                    title: "For Customers",
                                    body: "Browse verified vehicles, compare real-time prices, and book instantly with the confidence that every listing is legitimate and fairly priced.",
                                },
                                {
                                    title: "For the Industry",
                                    body: "A healthier ecosystem where operators are profitable, customers are satisfied, and technology drives efficiency rather than extracting margin.",
                                },
                            ].map((point, i) => (
                                <div key={i} className="flex gap-5">
                                    <div className="w-0.5 bg-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-base font-bold text-gray-900 mb-2">{point.title}</h3>
                                        <p className="text-base lg:text-lg text-gray-500 leading-relaxed">{point.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right: dark feature card */}
                        <div className="bg-primary rounded-[0.2em] p-10 flex flex-col gap-8">
                            <p className="text-white text-sm font-bold uppercase tracking-widest">★ How it works</p>
                            {[
                                { step: "1", text: "Operators register and list their fleet for free" },
                                { step: "2", text: "Customers search, compare, and bid or book directly" },
                                { step: "3", text: "YalaRide handles payments, confirmations, and support" },
                                { step: "4", text: "Operators receive payouts with full earnings transparency" },
                            ].map((s, i) => (
                                <div key={i} className="flex items-start gap-5">
                                    <span className="text-white font-mono text-sm font-bold flex-shrink-0 mt-0.5">
                                        {s.step.padStart(2, "0")}
                                    </span>
                                    <p className="text-white text-base lg:text-lg leading-relaxed">{s.text}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </LayoutContainer>
            </section>

            {/* ── What Our Platform Provides ──────────────────────────────────────── */}
            <section className="bg-gray-50 py-24 md:py-32 border-t border-gray-100">
                <LayoutContainer>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">
                                Platform Capabilities
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                What our platform<br /><span className="text-primary">provides</span>
                            </h2>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 mb-12" />

                    {/* Feature grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {platformFeatures.map((feature, i) => (
                            <div key={i} className="group bg-white border border-gray-100 rounded-[0.2em] p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                <span className="text-xs font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">
                                    {feature.number}
                                </span>
                                <div className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 leading-snug">{feature.title}</h3>
                                <p className="text-base lg:text-lg text-gray-500 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </LayoutContainer>
            </section>

            {/* ── CTA Strip ───────────────────────────────────────────────────────── */}
            <section className="relative bg-primary py-20 overflow-hidden">
                <LayoutContainer className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="relative">
                            {/* Localized gradient behind heading */}
                            <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-black/30 to-transparent blur-2xl rounded-full" />

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                                    Ready to grow with YalaRide?
                                </h2>
                                <p className="text-white text-base">
                                    Join hundreds of operators already earning more on our platform.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-shrink-0 relative z-10">
                            <a
                                href="https://yalaride.com/become-a-partner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-7 py-4 rounded-[0.2em] hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95"
                            >
                                Become a Partner
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="https://yalaride.com/contact-us"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-bold px-7 py-4 rounded-[0.2em] border border-white/20 hover:scale-105 transition-all duration-300 hover:bg-white/20 active:scale-95"
                            >
                                <span className="hidden md:inline">Contact Us</span>
                                <svg className="md:hidden" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            <ContactSection />

        </main>
    );
}
