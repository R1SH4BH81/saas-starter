'use client';

import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <header className="relative z-20 w-full pt-2.5 sm:pt-4 flex-shrink-0">


      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-1.5 sm:py-2.5 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:rotate-45"
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
        <div className="hidden md:flex items-center gap-8 text-[14.5px] font-normal text-gray-200/90">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            Platform
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            Solutions
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <Link href="#community" className="hover:text-white transition-colors">
            Community
          </Link>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            Resources
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#signin"
            className="text-sm sm:text-[15px] font-normal text-gray-200/90 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#demo"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#5252ff] hover:bg-[#4343f0] text-white text-xs sm:text-sm font-medium shadow-[0_2px_14px_rgba(82,82,255,0.4)] hover:shadow-[0_4px_20px_rgba(82,82,255,0.6)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Request a demo
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
