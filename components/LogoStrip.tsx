import React from "react";

const companies = [
  { name: "NORTHWIND", cls: "font-bold tracking-[0.28em] text-sm" },
  { name: "Vantacore", cls: "font-semibold tracking-tight text-xl" },
  { name: "HELIOS", cls: "font-extrabold tracking-[0.18em] text-lg" },
  { name: "Meridian", cls: "font-medium tracking-tight text-xl italic" },
  { name: "OSTARA", cls: "font-bold tracking-[0.34em] text-sm" },
  { name: "Kestrel", cls: "font-semibold tracking-tight text-xl" },
  { name: "BLUEPINE", cls: "font-bold tracking-[0.22em] text-base" },
  { name: "Corvus", cls: "font-medium tracking-tight text-xl" },
];

export const LogoStrip: React.FC = () => {
  return (
    <section className="relative w-full bg-[#070919] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-14">
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.28em] text-[#8b94c9]">
          Powering travel programs at
        </p>
        <div
          aria-hidden="true"
          className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-7 items-center justify-items-center [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          {companies.map((c) => (
            <span
              key={c.name}
              className={`${c.cls} text-white/30 hover:text-white/65 transition-all duration-300 select-none whitespace-nowrap cursor-default`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
