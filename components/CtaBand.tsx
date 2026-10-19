import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export const CtaBand: React.FC = () => {
  return (
    <section
      id="demo"
      className="relative w-full bg-[#070919] scroll-mt-24 overflow-hidden border-t border-white/[0.06]"
    >
      <div className="absolute inset-0 hero-radial-glow opacity-40 pointer-events-none" />
      <div className="absolute inset-0 hero-grid-pattern opacity-20 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
        <Reveal>
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold tracking-[-0.035em] text-white leading-[1.1] text-balance">
            See what your travel program is really costing you
          </h2>
          <p className="mt-5 text-[15px] sm:text-base md:text-[17px] text-[#b9c1e6] leading-[1.7] max-w-xl mx-auto text-pretty">
            A 30-day pilot on your real data. No rip-and-replace, no six-month
            implementation.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="#demo"
              className="px-7 py-3.5 rounded-full bg-white text-[#11142e] font-semibold text-[15px] shadow-[0_6px_28px_rgba(255,255,255,0.35)] hover:shadow-[0_8px_36px_rgba(255,255,255,0.5)] hover:bg-indigo-50 hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-200"
            >
              Request a demo
            </Link>
            <Link
              href="#pricing"
              className="px-7 py-3.5 rounded-full bg-white/[0.12] hover:bg-white/[0.18] border border-white/25 backdrop-blur-md text-white font-medium text-[15px] hover:-translate-y-px active:translate-y-0 active:scale-[0.98] transition-all duration-200"
            >
              View pricing
            </Link>
          </div>
          <p className="mt-7 text-xs text-[#8f99cc] tracking-wide">
            Free 30-day pilot
            <span aria-hidden="true" className="mx-2.5 text-white/20">·</span>
            Works with your current TMC
            <span aria-hidden="true" className="mx-2.5 text-white/20">·</span>
            Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
