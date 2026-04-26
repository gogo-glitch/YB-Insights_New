import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";

const industries = [
  {
    name: "Manufacturing",
    body: "Discrete and process manufacturers chasing OEE, throughput and supplier resilience.",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Energy & Utilities",
    body: "Generation, T&D and renewables operators modernizing assets and trading desks.",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Construction & Infrastructure",
    body: "EPC contractors and developers fixing project delivery, claims and pre-con margin.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Logistics & Supply Chain",
    body: "Networks and 3PLs rewiring nodes, lanes and demand-shaping for unit economics.",
    img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Industrial Tech & SaaS",
    body: "Hardware-software companies sharpening GTM, packaging and customer success.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Heavy Engineering & EPC",
    body: "Capital-intensive shops modernizing PLM, shop-floor data and engineering hours.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
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
            If the problem is engineering-shaped, we can probably help — or honestly tell you we can't.
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
