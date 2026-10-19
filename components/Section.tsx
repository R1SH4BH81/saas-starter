import React from "react";

interface SectionProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export const Section: React.FC<SectionProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl mx-auto`}>
      <p className="inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.3em] text-indigo-300">
        <span
          aria-hidden="true"
          className="inline-block h-px w-6 bg-indigo-400/60"
        />
        {eyebrow}
        {align === "center" && (
          <span
            aria-hidden="true"
            className="inline-block h-px w-6 bg-indigo-400/60"
          />
        )}
      </p>
      <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[44px] font-bold tracking-[-0.035em] text-white leading-[1.08] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] sm:text-base md:text-[17px] text-[#b9c1e6] leading-[1.7] max-w-xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
};

export default Section;
