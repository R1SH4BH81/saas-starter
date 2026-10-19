import React from "react";
import Link from "next/link";
import Section from "./Section";
import Reveal from "./Reveal";

interface Tier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
}

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$490",
    cadence: "per month",
    description: "For lean teams getting their first real view of travel spend.",
    cta: "Start free trial",
    features: [
      "Up to 50 travelers",
      "Core booking data unification",
      "Policy rules & fare caps",
      "Monthly spend reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$1,490",
    cadence: "per month",
    description: "For growing programs that need automation and proof of savings.",
    cta: "Request a demo",
    highlighted: true,
    features: [
      "Up to 500 travelers",
      "Everything in Starter",
      "Savings analytics & benchmarks",
      "40+ ERP, HRIS & TMC integrations",
      "Approval workflows",
      "Dedicated success manager",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual agreement",
    description: "For global programs with complex entities and compliance needs.",
    cta: "Talk to sales",
    features: [
      "Unlimited travelers & entities",
      "Everything in Professional",
      "SSO / SAML & SCIM provisioning",
      "Custom data residency",
      "99.99% uptime SLA",
      "White-glove onboarding",
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative w-full bg-[#070919] scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-80 section-glow pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-white/[0.06]">
        <Reveal>
          <Section
            eyebrow="Pricing"
            title="Pricing that scales with your program"
            description="Start with a 30-day pilot on your real data. Every plan includes unlimited reports and bank-grade security."
          />
        </Reveal>
        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch md:items-center">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <div
                className={`card-lift relative rounded-3xl p-7 sm:p-8 flex flex-col h-full ${
                  t.highlighted
                    ? "border border-indigo-300/40 bg-indigo-500/[0.1] shadow-[0_20px_80px_-20px_rgba(82,82,255,0.45)] md:scale-[1.045] z-10"
                    : "border border-white/[0.08] bg-white/[0.025] hover:border-white/[0.16] hover:bg-white/[0.04] hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)]"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#5252ff] ring-1 ring-white/25 shadow-[0_4px_20px_rgba(82,82,255,0.6)] text-white text-xs font-semibold tracking-wide whitespace-nowrap">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"
                    />
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
                  {t.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#a4addb] min-h-[42px]">
                  {t.description}
                </p>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="text-[40px] font-bold tracking-[-0.035em] text-white tabular-nums">
                    {t.price}
                  </span>
                  <span className="text-sm text-[#8f99cc]">{t.cadence}</span>
                </p>
                <ul className="mt-7 space-y-3 flex-1">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-[#bcc4ea]"
                    >
                      <svg
                        className="w-[18px] h-[18px] mt-0.5 flex-shrink-0 text-indigo-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#demo"
                  className={`mt-8 block text-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                    t.highlighted
                      ? "bg-white text-[#11142e] shadow-[0_6px_28px_rgba(255,255,255,0.35)] hover:shadow-[0_8px_36px_rgba(255,255,255,0.5)] hover:bg-indigo-50 hover:-translate-y-px"
                      : "bg-white/[0.08] border border-white/[0.14] text-white hover:bg-white/[0.14] hover:border-white/25 hover:-translate-y-px"
                  }`}
                >
                  {t.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
