'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Silk from './Silk';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-[#070919]">
      {/* 1. Base Gradient Background */}
      <div className="absolute inset-0 hero-radial-glow pointer-events-none" />

      {/* 2. Silk Dynamic WebGL Shader Background */}
      <div className="absolute inset-0 w-full h-full opacity-65 mix-blend-screen pointer-events-none">
        <Silk
          speed={2.2}
          scale={1.2}
          color="#3849b8"
          noiseIntensity={0.8}
          rotation={0.15}
          lightMode={false}
        />
      </div>

      {/* 3. Atmospheric Subtle Grid Overlay */}
      <div className="absolute inset-0 hero-grid-pattern pointer-events-none opacity-30" />

      {/* 4. Bottom Soft Lavender Mist Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 hero-bottom-mist pointer-events-none z-0" />

      {/* Top Header / Navigation */}
      <Navbar />

      {/* Main Hero Content (Vertically Balanced in 100vh) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto py-2 sm:py-4">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-bold tracking-[-0.035em] text-white leading-[1.1] max-w-4xl">
          The AI platform for
          <span className="block mt-0.5 sm:mt-1">trusted travel data,</span>
          <span className="block mt-0.5 sm:mt-1">decisions and automation</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base md:text-[17.5px] text-[#c0c8eb] font-normal leading-relaxed tracking-[-0.01em]">
          Purpose-built operating system for enterprise travel and finance
          <span className="sm:block"> leaders to move faster, work smarter and automate savings.</span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#demo"
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#11142e] font-semibold text-xs sm:text-[15px] shadow-[0_4px_24px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_30px_rgba(255,255,255,0.45)] hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Request a demo
          </Link>
          <Link
            href="#how-it-works"
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/20 hover:bg-white/25 border border-white/30 backdrop-blur-md text-white font-medium text-xs sm:text-[15px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            See how it works <span className="text-base sm:text-lg leading-none">›</span>
          </Link>
        </div>
      </div>

      {/* Bottom Trust Tagline */}
      <div className="relative z-10 pb-4 sm:pb-6 text-center px-4 flex-shrink-0">
        <p className="text-xs sm:text-sm md:text-[14px] font-normal text-[#96a0d4] tracking-wide">
          Trusted by modern enterprise teams running complex global travel programs
        </p>
      </div>
    </section>
  );
};

export default Hero;
