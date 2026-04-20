"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LayoutContainer from "./LayoutContainer";

const navItems = [
  { name: "About", href: "/#about", scroll: true },
  { name: "Features", href: "/#features", scroll: true },
  { name: "Dashboard", href: "/#dashboard", scroll: true },
  { name: "How it Works", href: "/#how-it-works", scroll: true },
  { name: "Contact", href: "https://yalaride.com/contact-us", scroll: false },
];

interface NavbarProps {
  forceWhite?: boolean;
}

export default function Navbar({ forceWhite = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, scroll: boolean) => {
    if (!scroll) return;

    const targetId = href.split("#")[1];
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    } else {
      // If not on home page, let it navigate
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-4"}`}>
      <LayoutContainer isHero className="flex items-center justify-between !px-6 md:!px-12">
        <Link
          href="/"
          className="z-50 cursor-pointer"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(false);
            }
          }}
        >
          <Image
            src="/nav-bar/YalaRide Logo.png"
            alt="YalaRide logo"
            width={220}
            height={52}
            priority
            className="h-auto w-[130px] md:w-[180px]"
            style={{ height: 'auto' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black/80 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.scroll)}
              className="transition-colors hover:text-black cursor-pointer relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://yalaride.com/become-a-partner"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-2 text-md font-bold tracking-wide text-black"
          >
            Become a Partner
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-black transition-all duration-300 transform ${isMenuOpen ? "rotate-45 translate-y-2.25" : ""}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 transform ${isMenuOpen ? "-rotate-45 -translate-y-2.25" : ""}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col pt-32 px-10 transition-all duration-700 ease-[cubic-bezier(0.32,0,0.07,1)] md:hidden ${isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-90"
            }`}
        >
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }
              }}
              className={`text-2xl font-bold text-black transition-all duration-700 ease-[cubic-bezier(0.32,0,0.07,1)] ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              Home
            </Link>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.scroll)}
                className={`text-2xl font-bold text-black transition-all duration-700 ease-[cubic-bezier(0.32,0,0.07,1)] ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                  }`}
                style={{ transitionDelay: `${(index + 2) * 80 + 200}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div
              className={`mt-4 pt-10 border-t border-gray-100 transition-all duration-700 ease-[cubic-bezier(0.32,0,0.07,1)] ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                }`}
              style={{ transitionDelay: `${(navItems.length + 2) * 80 + 250}ms` }}
            >
              <a
                href="https://yalaride.com/become-a-partner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-5 text-lg font-bold tracking-wide text-white bg-primary rounded-2xl shadow-xl shadow-black/10 active:scale-[0.98] transition-transform"
              >
                Become a Partner
              </a>
            </div>
          </div>

          <div
            className={`mt-auto pb-12 transition-all duration-700 ease-out ${isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <p className="text-gray-400 text-sm font-semibold tracking-wide uppercase">© 2026 YalaRide</p>
          </div>
        </div>
      </LayoutContainer>
    </nav>
  );
}
