import { useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import PageHero from "@/components/marketing/PageHero";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message received",
        description: "A partner will be in touch within one business day.",
      });
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Tell us what's <em className="text-primary not-italic">broken</em>.</>}
        description="Or what's possible. The first call is on us — 30 minutes, no deck, no sales engineer."
      />

      <section className="container py-20 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          {[
            { icon: Mail, label: "Email", value: "hello@advisorycell.com" },
            { icon: Phone, label: "Phone or Whatsapp", value: <><span className="block">+91 9315033001</span><span className="block">+91 9997634339</span></> },
            { icon: MapPin, label: "Offices", value: "New Delhi" },
          ].map((c) => (
            <div key={c.label} className="reveal flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</p>
                <p className="font-display text-2xl mt-1">{c.value}</p>
              </div>
            </div>
          ))}

          <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6">
            <p className="font-display text-2xl">Office hours</p>
            <p className="text-sm text-muted-foreground mt-2">
              Partners take inbound calls Tue–Thu, 09:00–17:00 local. Email gets a same-day reply.
            </p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="lg:col-span-8 reveal reveal-delay-1 rounded-2xl border border-border/60 bg-card p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" name="name" required />
            <Field label="Work email" name="email" type="email" required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Company" name="company" />
            <Field label="Sector" name="sector" placeholder="Manufacturing, Energy, EPC…" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What's on your mind?</label>
            <textarea
              required
              name="message"
              rows={6}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition resize-none"
              placeholder="The honest version. We don't share with anyone."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-60"
          >
            {submitting ? "Sending…" : (<>Send message <Send className="h-4 w-4" /></>)}
          </button>
        </form>
      </section>

      <section className="border-t border-border/60 bg-secondary/30">
        <div className="container py-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-medium mb-3">Prefer a calendar?</p>
          <h2 className="font-display text-4xl md:text-5xl">Grab any open slot.</h2>
          <a
            href="mailto:hello@advisorycell.example"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Email a partner directly <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) => (
  <div>
    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition"
    />
  </div>
);

export default Contact;
