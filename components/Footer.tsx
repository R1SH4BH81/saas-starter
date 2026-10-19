import React from "react";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help center", "API docs", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#070919] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-12">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-white transition-transform duration-500 ease-out group-hover:rotate-90"
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
              <span className="text-lg font-bold tracking-tight text-white">
                Clarasight
              </span>
            </Link>
            <p className="mt-4 text-sm leading-[1.7] text-[#8f99cc] max-w-xs">
              The AI platform for trusted travel data, decisions and automation.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5">
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
              <span className="text-xs font-medium text-[#a4addb]">
                SOC 2 Type II certified
              </span>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-[#8f99cc] hover:text-white hover:pl-0.5 transition-all duration-200"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8f99cc]/70">
            © 2026 Clarasight, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[#8f99cc]/70">
            Template for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
