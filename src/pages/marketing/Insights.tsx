import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { posts } from "@/data/insights";

const Insights = () => {
  return (
    <>
      <PageHero
        eyebrow="Field notes"
        title={<>Things we've <em className="text-primary not-italic">learned</em> the hard way.</>}
        description="Long-form essays from our partners on operations, strategy, energy and the unglamorous craft of running engineering businesses."
      />

      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <Link
              key={p.title}
              to={`/insights/${p.slug}`}
              className="reveal group block"
              style={{ animationDelay: `${i * 60}ms` }}
              aria-label={`Read ${p.title}`}
            >
              <article>
                <div className="overflow-hidden rounded-2xl border border-border/60 aspect-[4/3]">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary uppercase tracking-[0.18em] font-medium">{p.cat}</span>
                    <span>·</span>
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{p.read}</span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mt-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium underline-grow">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;
