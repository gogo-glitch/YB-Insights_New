import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  compactEyebrow?: boolean;
}

const PageHero = ({ eyebrow, title, description, align = "left", compactEyebrow = false }: PageHeroProps) => {
  return (
    <section className="relative border-b border-border/60 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className={`container py-20 md:py-28 relative ${align === "center" ? "text-center" : "text-left"}`}>
        {eyebrow && (
          <p className={`reveal text-xs uppercase tracking-[0.2em] text-primary font-medium ${compactEyebrow ? "mb-0" : "mb-4"} ${align === "center" ? "mx-auto" : "ml-0"}`}>
            {eyebrow}
          </p>
        )}
        <h1 className={`reveal reveal-delay-1 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl ${align === "center" ? "mx-auto" : "ml-0"}`}>
          {title}
        </h1>
        {description && (
          <p className={`reveal reveal-delay-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl ${align === "center" ? "mx-auto" : "ml-0"}`}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
