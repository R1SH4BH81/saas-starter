import React from "react";
import Reveal from "./Reveal";

export const Testimonial: React.FC = () => {
  return (
    <section id="customers" className="relative w-full bg-[#070919] scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
        <Reveal>
          <svg
            className="w-8 h-8 mx-auto text-indigo-300/40"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M10 8H6a4 4 0 00-4 4v6h7v-7H6.5A2.5 2.5 0 019 8.5V8h1zm12 0h-4a4 4 0 00-4 4v6h7v-7h-2.5A2.5 2.5 0 0121 8.5V8h1z" />
          </svg>
          <blockquote className="mt-7 text-[22px] sm:text-2xl md:text-[30px] font-medium tracking-[-0.02em] leading-[1.45] text-white text-balance">
            “We replaced four spreadsheets and a quarterly scramble with one
            dashboard our CFO actually opens. Clarasight paid for itself in the
            first renewal cycle.”
          </blockquote>
          <div className="mt-9 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-300/30 flex items-center justify-center text-sm font-bold text-indigo-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              ML
            </div>
            <span
              aria-hidden="true"
              className="h-10 w-px bg-white/10"
            />
            <div className="text-left">
              <p className="text-[15px] font-semibold tracking-tight text-white">
                Maya Lindqvist
              </p>
              <p className="mt-0.5 text-[13px] text-[#8f99cc]">
                VP Global Travel, Northwind
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonial;
