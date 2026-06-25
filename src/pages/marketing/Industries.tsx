import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { unsplashImage } from "@/lib/unsplash";

const industries = [
  {
    name: "Manufacturing and Industrial",
    body: "Discrete and process manufacturers chasing OEE, throughput and supplier resilience.",
    img: unsplashImage("photo-1598302936625-6075fbd98dd7", 900),
  },
  {
    name: "Energy & Utilities",
    body: "Generation, T&D and renewables operators modernizing assets and trading desks.",
    img: unsplashImage("photo-1509391366360-2e959784a276", 900),
  },
  {
    name: "Construction & Infrastructure",
    body: "EPC contractors and developers fixing project delivery, claims and pre-con margin.",
    img: unsplashImage("photo-1503387762-592deb58ef4e", 900),
  },
  {
    name: "Automotive",
    body: "Automotive OEMs and Tier-1 Suppliers shaping their strategies and expanding into new markets and geography.",
    img: "https://plus.unsplash.com/premium_photo-1661877074629-a74292667b72?auto=format&fit=crop&fm=jpg&w=900&q=80",
  },
  {
    name: "Semiconductors and Electricals",
    body: "Electrical and Semiconductor companies sharpening GTM, packaging and customer success.",
    img: unsplashImage("photo-1518770660439-4636190af475", 900),
  },
  {
    name: "Heavy Engineering & EPC",
    body: "Capital-intensive shops modernizing PLM, shop-floor data and engineering hours.",
    img: unsplashImage("photo-1541888946425-d81bb19240f5", 900),
  },
];

const Industries = () => {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>We work where the <em className="text-primary not-italic">work</em> is hard.</>}
        description="We don't generalize. Every partner has shipped product, run a P&L or commissioned an asset in the sectors below."
      />

      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((s, i) => (
            <article
              key={s.name}
              className="reveal group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="font-display text-2xl">{s.name}</p>
                <p className="text-sm text-muted-foreground mt-2">{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="container py-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
            Don't see your sector? <em className="not-italic text-primary">Ask anyway.</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            If the problem is engineering shaped, we can probably help or honestly tell you we can't.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
            Tell us about your problem <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Industries;
