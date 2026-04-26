import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";

const posts = [
  {
    cat: "Operations",
    title: "Why your OEE dashboard is lying to you",
    excerpt: "Three measurement traps that make plants look 12 points better than they are — and the audit we run to find them.",
    date: "Apr 18, 2026",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Strategy",
    title: "The two-week diagnostic, written down",
    excerpt: "Our internal playbook for the first 14 days of an engagement. Steal it. Adapt it. Just don't skip it.",
    date: "Apr 04, 2026",
    read: "11 min",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Energy",
    title: "Recovering lost yield in a mature solar fleet",
    excerpt: "How we found 6.4% of missing generation hiding inside inverter alarm fatigue and field-service routing.",
    date: "Mar 22, 2026",
    read: "9 min",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Tooling",
    title: "Stop buying ERP modules. Start buying outcomes.",
    excerpt: "A procurement framework that flips vendor conversations from features to delivered metrics.",
    date: "Mar 09, 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "People",
    title: "Why your senior engineers are quitting",
    excerpt: "It's almost never the salary. We mapped 80 exit interviews across industrial firms and the answer is uncomfortable.",
    date: "Feb 21, 2026",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80",
  },
  {
    cat: "Construction",
    title: "Killing the loss-making service line",
    excerpt: "A repeatable five-step protocol for retiring revenue you shouldn't be earning.",
    date: "Feb 02, 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
];

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
            <article
              key={p.title}
              className="reveal group cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
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
          ))}
        </div>
      </section>
    </>
  );
};

export default Insights;
