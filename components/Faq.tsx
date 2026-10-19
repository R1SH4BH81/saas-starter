import React from "react";
import Section from "./Section";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does implementation take?",
    a: "Most teams connect their first data source the same day they sign up. A full rollout — policy rules, integrations, and historical backfill — typically takes two to four weeks with our onboarding team.",
  },
  {
    q: "Does Clarasight replace our TMC?",
    a: "No. Clarasight sits on top of your existing TMC and booking tools. We ingest their data, normalize it, and give finance and travel leaders one trustworthy layer to work from.",
  },
  {
    q: "Which systems do you integrate with?",
    a: "NetSuite, SAP, Workday, Coupa, major card programs, and all leading TMCs — 40+ native integrations in total, plus a REST API and SFTP for anything custom.",
  },
  {
    q: "Is our travel data secure?",
    a: "Yes. Clarasight is SOC 2 Type II certified with encryption in transit and at rest, SSO/SAML and SCIM on Enterprise plans, and EU data residency available for regulated programs.",
  },
  {
    q: "Can finance use this without help from the travel team?",
    a: "That is the point. Dashboards are built for finance first — spend by cost center, vendor, and traveler — while the travel team keeps the operational controls they need.",
  },
];

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="relative w-full bg-[#070919] scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 border-t border-white/[0.06]">
        <Reveal>
          <Section
            eyebrow="FAQ"
            title="Questions, answered"
            description="The things every travel and finance leader asks us before the pilot."
          />
        </Reveal>
        <div className="mt-12 sm:mt-14 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 60, 240)}>
              <details className="faq-item group rounded-2xl border border-white/[0.08] bg-white/[0.025] open:border-indigo-300/25 open:bg-white/[0.045] open:shadow-[0_16px_48px_-24px_rgba(82,82,255,0.3)] transition-colors duration-300">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] font-semibold tracking-[-0.01em] text-white/90 group-hover:text-white transition-colors duration-200">
                    {f.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-open:rotate-180 group-open:border-indigo-300/40 group-open:bg-indigo-500/20">
                    <svg
                      className="w-3.5 h-3.5 text-indigo-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer">
                  <div>
                    <p className="px-6 pb-6 text-sm leading-[1.75] text-[#a4addb]">
                      {f.a}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
