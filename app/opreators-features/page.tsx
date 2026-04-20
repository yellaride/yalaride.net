"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import LayoutContainer from "../components/LayoutContainer";
import ContactSection from "../components/ContactSection";

const stats = [
    { value: "0%", label: "Signup Fees" },
    { value: "Low", label: "Commissions" },
    { value: "Transparent", label: "Operations" },
    { value: "24/7", label: "Support" },
];

const features = [
    { number: "01", title: "Lowest Commission in the Market", tag: "Earnings", description: "Yala Ride offers one of the lowest commissions in the car rental marketplace, while most platforms charge 25%–40%. Our model helps you retain more revenue and maximize profitability." },
    { number: "02", title: "Full Freedom to Grow", tag: "Flexibility", description: "Join YalaRide early and grow with a platform built for control and flexibility. Establish your presence, gain visibility, and attract early demand. Benefit from dedicated support and a system designed to scale with your fleet." },
    { number: "03", title: "Bid My Price — A First in Car Rental", tag: "Innovation", description: "Our proprietary bidding system lets customers submit a price they're willing to pay. Accept, counter, or decline. Fill idle vehicles on slow days without permanently dropping your rates." },
    { number: "04", title: "Add-Ons & Revenue Management", tag: "Revenue", description: "Enhance your bookings and increase revenue with flexible add-ons, fully managed from your dashboard. Offer Additional Driver, Baby/Child Seats, GPS & WiFi, and more." },
    { number: "05", title: "Smart Pricing & Availability Control", tag: "Control", description: "Take full control of your inventory with flexible pricing and availability tools designed for real-time demand. Set Daily, weekly & monthly pricing setup." },
    { number: "06", title: "Operator Training Programme", tag: "Support", description: "Step-by-step onboarding, booking management guidance, and built-in dashboard guidelines to help you maximize bookings from day one." },
    { number: "07", title: "Damage Protection Revenue", tag: "Revenue", description: "YalaRide allows operators to offer CDW directly to customers. Earn through a shared profit model while increasing revenue and building customer trust." },
    { number: "08", title: "Multiple Locations Signup", tag: "Scale", description: "Manage multiple business locations from a single dashboard centrally. Add separate car classes per location, including airport locations." },
    { number: "09", title: "Built for Operator Profitability", tag: "Philosophy", description: "Increase fleet utilization, provide transparent operations, and help operators earn more with low commissions and innovative tools." },
];

const bidSteps = [
    { step: "01", title: "Set Bidding Range", text: "Define your minimum and target bidding range for every vehicle." },
    { step: "02", title: "User Bids", text: "Customers place bids on your cars based on your defined ranges." },
    { step: "03", title: "Review & Optimize", text: "Track all bids in real-time and adjust your ranges to maximize occupancy." },
    { step: "04", title: "Auto-Acceptance", text: "Perfect bids matching your requirements are accepted automatically." },
];

// Live countdown timer component
function BidTimer({ initialSeconds }: { initialSeconds: number }) {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => (s > 0 ? s - 1 : initialSeconds));
        }, 1000);
        return () => clearInterval(interval);
    }, [initialSeconds]);

    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return (
        <span className={`text-[5.5px] font-mono font-bold tabular-nums ${seconds < 60 ? "text-red-400" : "text-primary"
            }`}>
            {mins}:{secs}
        </span>
    );
}

export default function OperatorsFeaturePage() {
    const spotlightRef = useRef<HTMLDivElement>(null);
    const [isSpotlightVisible, setIsSpotlightVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSpotlightVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        if (spotlightRef.current) observer.observe(spotlightRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Navbar forceWhite />

            {/* Hero — image only */}
            <section className="relative bg-gray-950 pt-16 h-[420px] md:h-[520px] overflow-hidden">
                <Image
                    src="/opreators-features/hero-img.png"
                    alt="Operator Features"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </section>

            {/* Hero content */}
            <section className="bg-white py-16 md:py-24 border-b border-gray-100">
                <LayoutContainer>
                    {/* Centered heading */}
                    <div className="text-left mb-14">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6">Operator Features</p>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05]">
                            Built to make<br /><span className="text-primary">operators</span> profitable.
                        </h2>
                    </div>

                    {/* Description + stats side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
                            YalaRide was designed from the ground up with one priority — putting more control, more revenue, and more growth opportunities in the hands of car rental operators.
                        </p>
                        <div className="grid grid-cols-2 gap-px bg-gray-100 rounded-[0.2em] overflow-hidden">
                            {stats.map((s, i) => (
                                <div key={i} className="bg-gray-50 px-7 py-6">
                                    <p className="text-gray-900 text-2xl font-bold mb-1">{s.value}</p>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            {/* Why Partner intro */}
            <section className="bg-white py-20 md:py-24 border-b border-gray-100">
                <LayoutContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Why Partner With Us</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                The case for<br />joining <span className="text-primary">YalaRide</span>
                            </h2>
                            <div className="w-10 h-0.5 bg-primary" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
                                We value fairness, transparency, and tech-driven growth in the car rental industry. Unlike traditional platforms, we deliver unmatched value through core advantages.
                            </p>
                            <div className="bg-primary rounded-[0.2em] px-8 py-6">
                                <p className="text-white font-semibold uppercase tracking-widest mb-3">★ Our Commitment</p>
                                <p className="text-white text-base leading-relaxed">
                                    We will never raise commissions without notice, introduce hidden fees, or prioritise customer acquisition over operator earnings.
                                </p>
                            </div>
                        </div>
                    </div>
                </LayoutContainer>
            </section>

            {/* All 9 Features — card grid */}
            <section className="bg-gray-50 py-20 md:py-28">
                <LayoutContainer>
                    <div className="flex items-end justify-between mb-14 pb-6 border-b border-gray-200">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">Platform Features</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Everything built<br />for your<span className="text-primary"> success</span>
                            </h2>
                        </div>
                        <p className="hidden md:block text-xs text-gray-400 font-medium mb-1">09 features</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="group bg-white border border-gray-100 rounded-[0.2em] p-8 flex flex-col gap-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-primary/40 group-hover:text-primary transition-colors">{f.number}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-100 px-2.5 py-1 rounded-[0.2em] group-hover:bg-primary/5 group-hover:text-primary transition-colors">{f.tag}</span>
                                </div>
                                <div className="w-8 h-px bg-primary group-hover:w-12 transition-all duration-300" />
                                <h3 className="text-base font-bold text-gray-900 leading-snug">{f.title}</h3>
                                <p className="text-base lg:text-lg text-gray-500 leading-relaxed">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </LayoutContainer>
            </section>

            {/* Bid My Price spotlight */}
            <section ref={spotlightRef} className="bg-gray-950 py-13 md:py-13 border-t border-gray-900 overflow-hidden">
                <LayoutContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left: Heading slides in from left */}
                        <div
                            className="transition-all duration-1000 ease-out"
                            style={{
                                opacity: isSpotlightVisible ? 1 : 0,
                                transform: isSpotlightVisible ? "translateX(0)" : "translateX(-80px)",
                            }}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-5">Feature Spotlight</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">Bid My Price</h2>
                            <div className="w-10 h-0.5 bg-primary mb-8" />
                            <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-10">
                                The first automated bidding ecosystem in the UAE car rental market. Set your preferred price ranges and let our engine handle the work. Optimize ranges based on real-time bid data, and let perfect matches auto-book to keep your fleet moving.
                            </p>

                        </div>

                        {/* Right: Mobile (Vertical Cards) + Desktop (Phone + Floating Cards) */}
                        <div
                            className="relative flex flex-col items-center justify-center gap-6 lg:block lg:w-[620px] lg:h-[680px] transition-all duration-1000 ease-out mx-auto pt-10 lg:pt-0"
                            style={{
                                opacity: isSpotlightVisible ? 1 : 0,
                                transform: isSpotlightVisible ? "translateY(0)" : "translateY(80px)",
                                transitionDelay: "300ms",
                                maxWidth: "100%",
                            }}
                        >
                            {/* ── Phone frame (Desktop Only) ── */}
                            <div className="hidden lg:flex relative z-10 w-[240px] h-[480px] rounded-[2.2rem] border-[5px] border-gray-700 bg-gray-900 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden flex-shrink-0 mx-auto">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gray-800 rounded-b-lg z-20" />
                                {/* Power button */}
                                <div className="absolute -right-1.5 top-16 w-1 h-8 bg-gray-600 rounded-r-full" />
                                {/* Volume buttons */}
                                <div className="absolute -left-1.5 top-14 w-1 h-6 bg-gray-600 rounded-l-full" />
                                <div className="absolute -left-1.5 top-22 w-1 h-6 bg-gray-600 rounded-l-full" />

                                {/* Screen */}
                                <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col">
                                    {/* Status bar */}
                                    <div className="flex items-center justify-between px-3 pt-5 pb-1">
                                        <span className="text-[7px] text-gray-300 font-semibold">9:41</span>
                                        <div className="flex gap-0.5 items-center">
                                            <div className="flex gap-px items-end">
                                                {[2, 3, 4, 5].map(h => <div key={h} className="w-0.5 bg-gray-300 rounded-sm" style={{ height: h }} />)}
                                            </div>
                                            <svg width="6" height="6" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300 ml-0.5"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" /></svg>
                                            <div className="w-3 h-1.5 border border-gray-300 rounded-sm relative ml-0.5">
                                                <div className="absolute inset-px bg-gray-300 rounded-sm" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* App header */}
                                    <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                            </div>
                                            <span className="text-white text-[8px] font-bold">YalaRide</span>
                                        </div>
                                        <span className="text-[6px] text-primary font-mono font-bold uppercase tracking-widest bg-primary/10 px-1 py-0.5 rounded">Bid Manager</span>
                                    </div>

                                    {/* Bid list inside screen */}
                                    <div className="flex flex-col gap-1.5 px-2.5 py-2.5 flex-1 overflow-hidden">
                                        <p className="text-[6px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Live Bid Analytics</p>

                                        {/* Bid item 1 */}
                                        <div className="bg-gray-900 border border-green-500/30 rounded-lg px-2 py-1.5">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <p className="text-[7.5px] text-white font-semibold">Toyota Corolla · AED 280</p>
                                                <span className="text-[5.5px] bg-green-600 text-white px-1.5 py-0.5 rounded font-bold uppercase">Auto-Pass</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[5.5px] text-green-500/70">Bid matched requirements</span>
                                            </div>
                                        </div>

                                        {/* Bid item 2 */}
                                        <div className="bg-gray-900 border border-primary/30 rounded-lg px-2 py-1.5">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <p className="text-[7.5px] text-white font-semibold">Nissan Sunny · AED 600</p>
                                                <span className="text-[5.5px] bg-primary text-white px-1.5 py-0.5 rounded font-bold">RE-OPTIMIZE</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[5.5px] text-gray-500">Suggested: AED 620+</span>
                                            </div>
                                        </div>

                                        {/* Bid item 3 */}
                                        <div className="bg-gray-900 border border-gray-800 rounded-lg px-2 py-1.5 opacity-60">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <p className="text-[7.5px] text-white font-semibold">Hyundai Accent · AED 190</p>
                                                <span className="text-[5.5px] bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded font-bold uppercase">Low Bid</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <span className="text-[5.5px] text-gray-500">Below range threshold</span>
                                            </div>
                                        </div>

                                        {/* Adjust Button */}
                                        <div className="mt-auto">
                                            <div className="bg-primary rounded-lg h-7 flex items-center justify-center gap-1 shadow-lg shadow-primary/30">
                                                <span className="text-[7px] font-black text-white uppercase tracking-widest">Adjust Ranges</span>
                                                <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Home bar */}
                                    <div className="flex justify-center pb-1.5"><div className="w-12 h-0.5 bg-gray-700 rounded-full" /></div>
                                </div>

                                {/* Glass sheen */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/[0.03] to-transparent z-20" />
                            </div>

                            {/* ── Step cards — Vertical on mobile, Floating on LG ── */}
                            <div className="flex flex-col gap-4 w-full lg:block">
                                {bidSteps.map((step, idx) => {
                                    // Map absolute positions for LG
                                    const lgPositions = [
                                        "lg:top-[80px] lg:left-[-60px]",
                                        "lg:top-[400px] lg:left-[-60px]",
                                        "lg:top-[80px] lg:right-[-60px]",
                                        "lg:top-[400px] lg:right-[-60px]"
                                    ];

                                    return (
                                        <div
                                            key={idx}
                                            className={`relative w-full lg:absolute lg:w-[180px] bg-gray-900 border border-gray-700 rounded-[0.2em] px-4 py-4 lg:py-3 shadow-xl transition-all duration-700 ${lgPositions[idx]}`}
                                            style={{
                                                opacity: isSpotlightVisible ? 1 : 0,
                                                transform: isSpotlightVisible ? "translate(0)" : idx < 2 ? "translateX(-30px)" : "translateX(30px)",
                                                transitionDelay: `${800 + (idx * 400)}ms`,
                                            }}
                                        >
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-[10px] font-mono font-black text-primary bg-primary/10 px-1.5 py-0.5 rounded">{step.step}</span>
                                                <p className="text-white text-xs font-bold">{step.title}</p>
                                            </div>
                                            <p className="text-gray-400 text-base lg:text-[11px] leading-relaxed">{step.text}</p>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </LayoutContainer>
            </section>

            {/* CTA */}
            <section className="relative bg-primary py-20 overflow-hidden">
                <LayoutContainer className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                        <div className="relative">
                            <div className="absolute -inset-x-8 -inset-y-6 bg-gradient-to-r from-black/30 to-transparent blur-2xl rounded-full" />
                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">Join YalaRide Today</h2>
                                <p className="text-white text-base">Partner with a marketplace that understands operator needs—increase bookings, improve profits, and operate with full transparency.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-shrink-0 relative z-10">
                            <a href="https://yalaride.com/become-a-partner" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-7 py-4 rounded-[0.2em] hover:scale-105 transition-all duration-300 hover:shadow-2xl active:scale-95">
                                Become a Partner
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </a>
                            <a href="https://yalaride.com/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-bold px-7 py-4 rounded-[0.2em] border border-white/20 hover:scale-105 transition-all duration-300 hover:bg-white/20 active:scale-95">
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
