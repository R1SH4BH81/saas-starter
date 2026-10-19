import React from "react";
import Reveal from "./Reveal";

const metrics = [
  { value: "99.9%", label: "booking data accuracy" },
  { value: "18%", label: "average travel spend saved" },
  { value: "40+", label: "native integrations" },
  { value: "2,400+", label: "travel programs managed" },
];

export const Metrics: React.FC = () => {
  return (
    <section className="relative w-full bg-[#070919]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <Reveal>
          <div className="relative rounded-3xl border border-indigo-300/[0.16] bg-indigo-500/[0.06] px-6 sm:px-10 py-12 sm:py-14 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/50 to-transparent"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:divide-x lg:divide-white/[0.07]">
              {metrics.map((m) => (
                <div key={m.label} className="text-center lg:px-6">
                  <p className="text-[34px] sm:text-4xl md:text-[44px] font-bold tracking-[-0.03em] text-white tabular-nums">
                    {m.value}
                  </p>
                  <p className="mt-2.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-[#8f99cc]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Metrics;
