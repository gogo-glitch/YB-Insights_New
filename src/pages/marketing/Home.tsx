import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, Cog, LineChart, Network, Sparkles, Wrench } from "lucide-react";

const stats = [
  { v: "120+", l: "Engagements delivered" },
  { v: "18", l: "Industrial sectors" },
  { v: "$2.4B", l: "Cost & revenue impact" },
  { v: "11 yrs", l: "Average partner experience" },
];

const principles = [
  { icon: Compass, title: "Diagnose first", body: "Two weeks of structured listening before a single recommendation." },
  { icon: Wrench, title: "Build with you", body: "We sit inside your team — not behind a glass wall of decks." },
  { icon: LineChart, title: "Measure the lift", body: "Every engagement closes with a baseline and a verified delta." },
  { icon: Network, title: "Wire the systems", body: "Org, process and software changed together. No orphaned pilots." },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="reveal text-xs uppercase tracking-[0.22em] text-primary font-medium mb-5 inline-flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 icon-float" /> Growth & management consulting
              </p>
              <h1 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]">
                Engineers who run the <em className="text-primary not-italic">consulting room</em>.
              </h1>
              <p className="reveal reveal-delay-2 mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                Grocode Advisory helps industrial, energy and infrastructure businesses fix
                broken operations and build the next layer of growth — without the slide-deck theatre.
              </p>
              <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
                  Start a conversation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/work" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors">
                  See our work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 reveal reveal-delay-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/60 shadow-2xl shadow-black/5">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"
                  alt="Engineer reviewing operational dashboards on a factory floor"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-background/90 backdrop-blur p-4 border border-border/60">
                  <p className="font-display text-xl leading-tight">"They cut our quote-to-cash by 41% in one quarter."</p>
                  <p className="mt-1 text-xs text-muted-foreground">— COO, Tier-1 industrial OEM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl md:text-5xl">{s.v}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">About Grocode</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              We were the engineers <em className="not-italic text-muted-foreground">in the room</em> when the consultants left.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground">
            <p>
              Grocode Advisory was founded by operators who spent a decade building, scaling and turning
              around engineering-led businesses — from steel plants to grid-scale solar to logistics networks.
            </p>
            <p>
              We saw the same gap repeatedly: brilliant technical companies handed strategy decks they
              couldn't operationalize. So we built a firm that <span className="text-foreground">does both</span> —
              the diagnosis and the build.
            </p>
            <Link to="/problems" className="inline-flex items-center gap-1.5 text-foreground font-medium underline-grow">
              See what we solve <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="container py-20 md:py-24">
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">How we actually work.</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className="reveal group rounded-2xl border border-border/60 bg-background p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <p className="font-display text-2xl mt-5">{p.title}</p>
                <p className="text-sm text-muted-foreground mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20 md:py-28">
        <div className="rounded-3xl bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Got a problem worth <em className="not-italic text-primary">engineering</em>?
            </h2>
            <p className="mt-4 text-background/70 text-lg">
              Tell us what's broken or what's possible. First call is on us — we'll either help, or point you to who can.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors">
              Book a discovery call <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
