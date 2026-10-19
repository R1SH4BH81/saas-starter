'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '#features', label: 'Platform' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#customers', label: 'Customers' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 w-full flex-shrink-0 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070919]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-500 ease-out group-hover:rotate-90"
            >
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2.2" strokeOpacity="0.8" />
              <path
                d="M20 5V12M20 28V35M5 20H12M28 20H35M9.4 9.4L14.3 14.3M25.7 25.7L30.6 30.6M9.4 30.6L14.3 25.7M25.7 14.3L30.6 9.4"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="4.5" fill="currentColor" />
            </svg>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-white font-sans">
            Clarasight
          </span>
        </Link>

        {/* Center: Menu Items */}
        <div className="hidden md:flex items-center gap-8 text-[14.5px] font-normal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-gray-200/80 hover:text-white transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-indigo-300 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#signin"
            className="hidden sm:inline text-sm sm:text-[15px] font-normal text-gray-200/80 hover:text-white transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="#demo"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#5252ff] hover:bg-[#6161ff] text-white text-xs sm:text-sm font-medium shadow-[0_2px_14px_rgba(82,82,255,0.45)] hover:shadow-[0_6px_24px_rgba(82,82,255,0.65)] transition-all duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
          >
            Request a demo
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
