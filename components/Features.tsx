import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const iconWrap =
  "w-11 h-11 rounded-xl bg-indigo-500/[0.12] border border-indigo-300/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-center text-indigo-200 transition-all duration-300 group-hover:bg-indigo-500/[0.22] group-hover:border-indigo-300/40 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(82,82,255,0.35)]";

const features: Feature[] = [
  {
    title: "Unified travel data",
    description:
      "Every booking, invoice, and expense lands in one clean record. Clarasight normalizes data across TMCs, airlines, and card feeds, so finance always works from the same numbers.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Policy automation",
    description:
      "Encode travel policy once. Fare caps, cabin rules, and approval chains apply themselves at booking time, with genuine exceptions routed to the right approver.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M4 8h10M18 8h2M4 16h4M12 16h8" />
        <circle cx="16" cy="8" r="2.2" />
        <circle cx="10" cy="16" r="2.2" />
      </svg>
    ),
  },
  {
    title: "Savings analytics",
    description:
      "See exactly where spend goes and what it should cost. Benchmarks across routes, vendors, and teams surface savings you can act on this quarter, not next year.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V10M10 20V4M16 20v-8M22 20H2" />
      </svg>
    ),
  },
  {
    title: "ERP & HRIS integrations",
    description:
      "Sync with NetSuite, SAP, Workday, and 40+ more. Traveler profiles, cost centers, and GL codes stay aligned automatically — no more manual imports before close.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a5 5 0 007.1 0l2-2a5 5 0 00-7.1-7.1l-1 1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10a5 5 0 00-7.1 0l-2 2a5 5 0 007.1 7.1l1-1" />
      </svg>
    ),
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative w-full bg-[#070919] scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-80 section-glow pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <Reveal>
          <Section
            eyebrow="Platform"
            title="Everything travel spend touches, in one place"
            description="Clarasight connects the tools your teams already use and turns fragmented bookings into decisions finance can trust."
          />
        </Reveal>
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="h-full">
              <div className="group card-lift h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7 hover:border-indigo-300/25 hover:bg-white/[0.045] hover:shadow-[0_24px_60px_-24px_rgba(82,82,255,0.35)]">
                <div className={iconWrap}>{f.icon}</div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em] text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] text-[#a4addb]">
                  {f.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
