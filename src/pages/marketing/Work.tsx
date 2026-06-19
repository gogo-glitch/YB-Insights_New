import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp, Clock, DollarSign } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { unsplashImage } from "@/lib/unsplash";

const cases = [
  {
    sector: "Industrial OEM",
    title: "Cut quote-to-cash from 38 to 22 days.",
    body: "Rebuilt the order desk, retired three legacy tools, trained 60 engineers on a single config-to-quote flow.",
    stats: [
      { icon: Clock, k: "-42%", l: "Cycle time" },
      { icon: DollarSign, k: "+$14M", l: "Working capital freed" },
    ],
    img: unsplashImage("photo-1581092580497-e0d23cbdf1dc", 1200),
  },
  {
    sector: "Renewables Operator",
    title: "Recovered 6.4% lost yield across 1.2 GW.",
    body: "Built an asset-performance war-room, rewrote inverter alarms, fixed the field-service routing that was eating uptime.",
    stats: [
      { icon: TrendingUp, k: "+6.4%", l: "Annual yield" },
      { icon: DollarSign, k: "$22M", l: "Recurring revenue" },
    ],
    img: unsplashImage("photo-1509391366360-2e959784a276", 1200),
  },
  {
    sector: "EPC Contractor",
    title: "Turned a -8% project portfolio to +6% in 14 months.",
    body: "Stood up a pre-con cost desk, killed three loss-making service lines, repriced the rest with engineered confidence.",
    stats: [
      { icon: TrendingUp, k: "+14 pts", l: "Portfolio margin" },
      { icon: DollarSign, k: "$48M", l: "EBITDA swing" },
    ],
    img: unsplashImage("photo-1541888946425-d81bb19240f5", 1200),
  },
];

const Work = () => {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Outcomes, not <em className="text-primary not-italic">case studies</em>.</>}
        description="Three engagements, three measured deltas. Names withheld — we share them under NDA on request."
      />

      <section className="container py-20 space-y-20">
        {cases.map((c, i) => (
          <article key={c.title} className={`reveal grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
            <div className={`lg:col-span-7 ${i % 2 ? "[direction:ltr]" : ""}`}>
              <div className="overflow-hidden rounded-2xl border border-border/60 aspect-[4/3]">
                <img src={c.img} alt={c.sector} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "[direction:ltr]" : ""}`}>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">{c.sector}</p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">{c.title}</h2>
              <p className="text-muted-foreground mt-4">{c.body}</p>
              <div className="grid grid-cols-2 gap-4 mt-7">
                {c.stats.map((s) => (
                  <div key={s.l} className="rounded-xl border border-border/60 bg-card p-4">
                    <s.icon className="h-4 w-4 text-primary" />
                    <p className="font-display text-3xl mt-2">{s.k}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="container py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Want the <em className="not-italic text-primary">unredacted</em> versions?
          </h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
            Request the case pack <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Work;
