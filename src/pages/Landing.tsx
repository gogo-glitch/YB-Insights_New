import { useEffect, useState } from "react";
import {
  ArrowRight,
  Cog,
  Factory,
  Zap,
  Building2,
  Truck,
  Cpu,
  GitBranch,
  LineChart,
  Workflow,
  ShieldCheck,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import logo from "@/assets/grocode-logo.png";
import heroImg from "@/assets/consulting-hero.jpg";
import workManufacturing from "@/assets/work-manufacturing.jpg";
import workEnergy from "@/assets/work-energy.jpg";
import workConstruction from "@/assets/work-construction.jpg";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Problems", href: "#problems" },
  { label: "Industries", href: "#industries" },
  { label: "Our Work", href: "#work" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const PROBLEMS = [
  {
    icon: Workflow,
    title: "Operational inefficiency",
    body: "Bottlenecks, idle assets, and disjointed workflows quietly erode margins. We map the actual flow, not the org chart, and rebuild it.",
  },
  {
    icon: GitBranch,
    title: "Stalled digital transformation",
    body: "Pilots that never scale. Tools nobody adopts. We translate engineering reality into systems your teams will actually use.",
  },
  {
    icon: LineChart,
    title: "Unclear growth path",
    body: "When revenue plateaus, the answer is rarely 'work harder'. We model the unit economics and surface where growth is hiding.",
  },
  {
    icon: ShieldCheck,
    title: "Risk and compliance drag",
    body: "Safety, quality, and regulatory load slowing delivery. We design controls that protect without paralysing the business.",
  },
  {
    icon: Cpu,
    title: "Tech stack chaos",
    body: "Twelve tools, four spreadsheets, one source of truth nobody trusts. We rationalise the stack and the data model behind it.",
  },
  {
    icon: Users,
    title: "Org structure misalignment",
    body: "Brilliant engineers reporting into the wrong functions. We redesign teams around the work, not legacy hierarchy.",
  },
];

const INDUSTRIES = [
  { icon: Factory, name: "Manufacturing", note: "Discrete & process" },
  { icon: Zap, name: "Energy", note: "Renewables & utilities" },
  { icon: Building2, name: "Construction", note: "Infra & EPC" },
  { icon: Truck, name: "Logistics", note: "Supply chain & fleet" },
  { icon: Cpu, name: "Industrial Tech", note: "IIoT & automation" },
  { icon: Cog, name: "Heavy Engineering", note: "Capital projects" },
];

const WORK = [
  {
    img: workManufacturing,
    sector: "Manufacturing",
    title: "32% throughput lift in 90 days",
    body: "Re-engineered the production line scheduling for a mid-cap auto-parts manufacturer. Cut changeover time in half.",
  },
  {
    img: workEnergy,
    sector: "Renewables",
    title: "Scaling a 400 MW pipeline",
    body: "Built the commercial operating model for a solar developer entering three new states. Reduced bid-to-PPA cycle by 11 weeks.",
  },
  {
    img: workConstruction,
    sector: "Construction",
    title: "Margin recovery on EPC contracts",
    body: "Diagnosed cost overruns across 14 active projects. Recovered 6.4% margin through procurement and progress-billing redesign.",
  },
];

const INSIGHTS = [
  {
    tag: "Operations",
    date: "Apr 2026",
    title: "Why most lean transformations fail in their second year",
    excerpt: "The dashboards stay green long after the gains have stopped. Here's how to spot decay before it shows up in the P&L.",
  },
  {
    tag: "Strategy",
    date: "Mar 2026",
    title: "The engineer-CEO playbook for raising prices",
    excerpt: "Technical founders systematically underprice. A four-step framework for repricing without losing your best accounts.",
  },
  {
    tag: "Org Design",
    date: "Feb 2026",
    title: "Squad models in heavy industry: what actually transfers",
    excerpt: "Spotify-style squads weren't built for safety-critical work. What to keep, what to drop, and what to redesign from scratch.",
  },
  {
    tag: "Digital",
    date: "Jan 2026",
    title: "ERP migrations: a survival guide for COOs",
    excerpt: "Eighteen months, three vendors, no business case. The questions to ask before you sign anything.",
  },
];

export default function Landing() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.documentElement.classList.add("force-light");
    return () => document.documentElement.classList.remove("force-light");
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within one business day.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#about" className="flex items-center gap-2">
            <img src={logo} alt="Grocode Advisory" width={36} height={36} className="h-9 w-9" />
            <span className="text-base font-semibold tracking-tight">Grocode Advisory</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href="#contact">
              Talk to us <ArrowRight />
            </a>
          </Button>
        </div>
      </header>

      {/* Hero / About */}
      <section id="about" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Engineers who consult for engineering businesses
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Growth advisory for the people who actually build things.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
              Grocode is a management consultancy run by engineers. We work with industrial,
              energy, and infrastructure businesses to fix the operating model — and then
              compound the result into growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#contact">
                  Start a conversation <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#work">See our work</a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { k: "12+", v: "years on the floor" },
                { k: "60+", v: "engagements shipped" },
                { k: "9", v: "industries served" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-3xl font-semibold tracking-tight">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-xl">
              <img
                src={heroImg}
                alt="Engineers collaborating in an industrial facility"
                width={1600}
                height={1000}
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section id="problems" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Problems we solve</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              The kind of problems consultants without grease on their hands miss.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement starts the same way: two weeks on site, listening. Then we put numbers
              on what's broken and a plan on how to fix it.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <Card key={p.title} className="border-border/60 transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Industries</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Built for sectors where downtime is measured in dollars per minute.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              We focus on industries where engineering depth is the difference between
              advice that lands and advice that gets politely shelved.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                className="group flex items-center gap-4 bg-background p-6 transition-colors hover:bg-secondary/60"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                  <ind.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold tracking-tight">{ind.name}</div>
                  <div className="text-xs text-muted-foreground">{ind.note}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Our work</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Outcomes our clients can put on their board deck.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w) => (
              <Card key={w.title} className="group overflow-hidden border-border/60">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">{w.sector}</span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights / Blog */}
      <section id="insights" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Insights</span>
              <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Field notes from the operating model frontier.
              </h2>
            </div>
            <a href="#" className="hidden text-sm font-medium text-primary hover:underline md:inline-flex">
              All articles →
            </a>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {INSIGHTS.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-2xl border border-border/60 p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary">{post.tag}</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-balance text-xl font-semibold tracking-tight group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">Contact</span>
            <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Tell us what's keeping you up at night.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              We reply within one business day. First call is always on us — bring the
              messy version of the problem.
            </p>
            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">hello@grocodeadvisory.com</div>
                  <div className="text-muted-foreground">For new engagements & general queries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">+1 (415) 555-0123</div>
                  <div className="text-muted-foreground">Mon–Fri, 9am–6pm PT</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">San Francisco · Bengaluru</div>
                  <div className="text-muted-foreground">On-site engagements globally</div>
                </div>
              </div>
            </div>
          </div>
          <Card className="border-border/60">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" required placeholder="Acme Industries" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" required placeholder="jane@acme.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">What are you trying to solve?</Label>
                  <Textarea id="message" required rows={5} placeholder="A few sentences is plenty." />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send message <ArrowRight />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Grocode Advisory" width={28} height={28} className="h-7 w-7" />
            <span className="text-sm font-medium">© {new Date().getFullYear()} Grocode Advisory</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
