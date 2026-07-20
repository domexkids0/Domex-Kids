import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <div className="text-xs uppercase tracking-[0.28em] text-brand font-medium mb-4">
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
