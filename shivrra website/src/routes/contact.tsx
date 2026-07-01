import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SHIVRRA" },
      { name: "description", content: "Reach SHIVRRA for orders, gifting, and bespoke fragrance inquiries." },
      { property: "og:title", content: "Contact — SHIVRRA" },
      { property: "og:description", content: "We respond personally to every inquiry." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please share your name").max(80),
  email: z.string().trim().email("A valid email, please").max(160),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10, "A few more words, please").max(1500),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-charcoal pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <span className="gold-divider"><span className="gold-divider-line" /> Contact</span>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] text-ivory md:text-8xl">
              In <span className="italic text-gold-gradient">conversation</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65">
              For orders, gifting, press, or a private fragrance consultation —
              we respond personally to every message.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <ul className="space-y-8">
                <li>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Email</p>
                  <a href="mailto:shivrra.busi.ss@gmail.com" className="mt-2 inline-flex items-center gap-3 font-display text-2xl text-ivory hover:text-gold">
                    <Mail className="h-5 w-5" strokeWidth={1.25} /> shivrra.busi.ss@gmail.com
                  </a>
                </li>
                <li>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Instagram</p>
                  <a href="https://www.instagram.com/shivrra_busi_ss" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-3 font-display text-2xl text-ivory hover:text-gold">
                    <Instagram className="h-5 w-5" strokeWidth={1.25} /> @shivrra
                  </a>
                </li>
                <li>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Atelier</p>
                  <p className="mt-2 inline-flex items-center gap-3 font-display text-2xl text-ivory">
                    <MapPin className="h-5 w-5" strokeWidth={1.25} /> India · By appointment
                  </p>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const parsed = schema.safeParse({
                    name: fd.get("name"),
                    email: fd.get("email"),
                    subject: fd.get("subject"),
                    message: fd.get("message"),
                  });
                  if (!parsed.success) {
                    toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
                    return;
                  }
                  setLoading(true);
                  await new Promise((r) => setTimeout(r, 600));
                  setLoading(false);
                  toast.success("Thank you. We'll be in touch shortly.");
                  (e.target as HTMLFormElement).reset();
                }}
                className="grid gap-5 border border-white/10 bg-navy-deep/40 p-8 md:p-10"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Name" autoComplete="name" />
                  <Field name="email" label="Email" type="email" autoComplete="email" />
                </div>
                <Field name="subject" label="Subject" />
                <Field name="message" label="Message" multiline />
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition hover:bg-gold-soft disabled:opacity-50"
                >
                  {loading ? "Sending…" : "Send Inquiry"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  name,
  label,
  type = "text",
  multiline,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const cls =
    "peer w-full border-b border-white/15 bg-transparent py-3 text-sm text-ivory placeholder-transparent focus:border-gold focus:outline-none";
  return (
    <label className="relative block">
      {multiline ? (
        <textarea name={name} placeholder={label} rows={5} maxLength={1500} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={label} autoComplete={autoComplete} maxLength={160} className={cls} />
      )}
      <span className="pointer-events-none absolute left-0 -top-2 text-[10px] uppercase tracking-[0.3em] text-ivory/50 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-ivory/40 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:text-gold">
        {label}
      </span>
    </label>
  );
}