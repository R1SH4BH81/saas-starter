import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Connect",
    description:
      "Plug in your TMC, booking tools, and expense feeds. Historical data backfills automatically, so day one starts with a complete picture.",
  },
  {
    n: "02",
    title: "Configure",
    description:
      "Set policy rules, approval chains, and budgets to match how your company actually travels — by team, region, or traveler level.",
  },
  {
    n: "03",
    title: "Automate",
    description:
      "Bookings check themselves against policy, savings opportunities get flagged, and month-end reports write themselves.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative w-full bg-[#070919] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-white/[0.06]">
        <Reveal>
          <Section
            eyebrow="How it works"
            title="Live in weeks, not quarters"
            description="No rip-and-replace. Clarasight layers onto your existing travel stack and starts producing clean data from the first sync."
          />
        </Reveal>
        <div className="relative mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Desktop connector line behind the step numerals */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110} className="h-full">
              <div className="group card-lift relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8 overflow-hidden hover:border-indigo-300/25 hover:bg-white/[0.045] hover:shadow-[0_24px_60px_-24px_rgba(82,82,255,0.3)]">
                <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-indigo-300/30 bg-[#0b0e24] text-[13px] font-bold tracking-[0.12em] text-indigo-200 transition-colors duration-300 group-hover:border-indigo-300/60 group-hover:text-white">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#a4addb]">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
