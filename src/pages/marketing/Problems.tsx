import { Link } from "react-router-dom";
import { ArrowUpRight, AlertTriangle, GitBranch, ShieldAlert, Activity, Boxes, Users, Gauge, FileWarning } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";

const problems = [
  { icon: Activity, title: "Operational drag", body: "Throughput stalls, OEE plateaus, working-capital trapped in queues." },
  { icon: GitBranch, title: "Strategy that won't ship", body: "Boardroom plans that never reach the line, the rig or the depot." },
  { icon: Boxes, title: "Fragmented tech stack", body: "Five point-tools, no shared truth, and engineers stitching CSVs at midnight." },
  { icon: Users, title: "Talent leakage", body: "Senior engineers leaving for cleaner orgs with sharper missions." },
  { icon: Gauge, title: "Cost out of control", body: "Energy, materials, logistics and overhead drifting against benchmarks." },
  { icon: ShieldAlert, title: "Risk you can't quantify", body: "Compliance, supplier and ESG exposure with no live dashboard." },
  { icon: FileWarning, title: "Failed transformations", body: "ERP, MES, or digital programs stuck at 30% adoption." },
  { icon: AlertTriangle, title: "Growth without margin", body: "Topline scaling but unit economics quietly going the wrong way." },
];

const Problems = () => {
  return (
    <>
      <PageHero
        eyebrow="What we solve"
        title={<>The unglamorous problems that <em className="text-primary not-italic">decide</em> whether you scale.</>}
        description="We don't pitch frameworks. We name the eight failure modes we see most in engineering-led businesses — and then we go fix them."
      />

      <section className="container py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="reveal group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <p className="font-display text-2xl mt-5 leading-tight">{p.title}</p>
              <p className="text-sm text-muted-foreground mt-2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/30">
        <div className="container py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-4">Our method</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">A 90-day shape, not a 9-month deck.</h2>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-6">
              {[
                ["01", " Discovery & Diagnostic", "We go deep before we go wide. Two weeks of direct immersion into your operations, financials, and team until we know the root cause."],
                ["02", "Strategic Framework", "We deliver clarity, not volumes. A focused strategy built around the two or three layers that will actually move your business forward."],
                ["03", "Execution & Advisory", "This is where most consulting firms stop, We don't. We work embedded inside your team until the strategy is implemented."],
                ["04", "Transition & Handover", "Documented, measured, and owned by your people. We leave when you don't need us."],
              ].map(([n, t, b]) => (
                <li key={n} className="reveal grid grid-cols-[auto_1fr] gap-5">
                  <span className="font-display text-3xl text-primary">{n}</span>
                  <div>
                    <p className="font-display text-2xl">{t}</p>
                    <p className="text-muted-foreground mt-1">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="container py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto leading-[1.05]">
          Recognize one of these? <em className="not-italic text-primary">Most clients arrive with three.</em>
        </h2>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors">
          Talk to a partner <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
};

export default Problems;
