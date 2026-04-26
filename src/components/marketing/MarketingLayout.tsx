import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import grocodeLogo from "@/assets/grocode-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/problems", label: "Problems" },
  { to: "/industries", label: "Industries" },
  { to: "/work", label: "Our work" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

const MarketingLayout = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={grocodeLogo} alt="Grocode Advisory" className="h-8 w-8 rounded-md object-contain" />
            <span className="font-display text-2xl leading-none">Grocode<span className="text-primary">.</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-md transition-colors ${
                    isActive
                      ? "text-foreground bg-secondary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="container py-3 flex flex-col">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `py-3 text-base ${isActive ? "text-primary" : "text-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background px-4 py-3 text-sm font-medium"
              >
                Book a call <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-24">
        <div className="container py-12 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={grocodeLogo} alt="Grocode Advisory" className="h-8 w-8 rounded-md object-contain" />
              <span className="font-display text-2xl leading-none">Grocode<span className="text-primary">.</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              A management consultancy run by engineers. We help industrial,
              energy and infrastructure businesses fix what's broken and grow what works.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@grocode.example</li>
              <li>+1 (555) 014-2200</li>
              <li>Bengaluru · Houston · Berlin</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Grocode Advisory. All rights reserved.</p>
            <p className="font-display italic">Engineered counsel for engineered businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingLayout;
