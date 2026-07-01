import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Leaf, Gem, Award, Gift } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { useCart } from "@/lib/cart";
import { MOON_OUD } from "@/lib/product";
import heroAsset from "@/assets/shivrra-spray.jpg.asset.json";
import campaignAsset from "@/assets/shivrra-hero.jpg.asset.json";
import oudAsset from "@/assets/notes.png.asset.json";
import giftBoxAsset from "@/assets/shivrra-luxury.jpg.asset.json";
import detail1Asset from "@/assets/bottle-side.jpg.asset.json";
const hero = heroAsset.url;
const campaign = campaignAsset.url;
const oud = oudAsset.url;
const giftBox = giftBoxAsset.url;
const detail1 = detail1Asset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SHIVRRA — Moon Oud Luxury Eau de Parfum" },
      { name: "description", content: "Discover Moon Oud by SHIVRRA — a deep, mysterious, unforgettable unisex eau de parfum crafted under moonlight." },
      { property: "og:title", content: "SHIVRRA — Moon Oud" },
      { property: "og:description", content: "Deep. Mysterious. Unforgettable. The signature scent of SHIVRRA." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Showcase />
      <FragranceExperience />
      <WhyMoonOud />
      <CampaignQuote />
      <Testimonials />
      <Newsletter />
    </SiteLayout>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Moon Oud perfume bottle in moonlight"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
      </motion.div>
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal" />

      <div className="mx-auto flex min-h-[80svh] max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="gold-divider"
        >
          <span className="gold-divider-line" /> Unisex Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-display text-[18vw] leading-[0.9] tracking-tight text-ivory md:text-[10rem] lg:text-[12rem]"
        >
          Moon <span className="italic text-gold-gradient">Oud</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-5 max-w-md font-display text-2xl italic text-ivory/85 md:text-3xl"
        >
          Deep. Mysterious. Unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/moon-oud"
            className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition-all hover:bg-gold-soft"
          >
            Explore Fragrance
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
          <Link
            to="/moon-oud"
            hash="buy"
            className="inline-flex items-center gap-3 border border-ivory/30 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-ivory transition-all hover:border-gold hover:text-gold"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-ivory/40 md:block"
      >
        Scroll
      </motion.div>
    </section>
  );
}

function Showcase() {
  const { addItem } = useCart();
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden bg-navy-deep shadow-luxe">
            <motion.img
              src={MOON_OUD.image}
              alt="Moon Oud bottle"
              className="h-full w-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <span className="gold-divider">
              <span className="gold-divider-line" /> Signature Bottle
            </span>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory md:text-6xl">
              Crafted to be <span className="italic text-gold-gradient">remembered</span>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/65">
              Heavy obsidian glass cradles 50ml of liquid moonlight. A hand-finished
              gold collar and engraved monogram complete a bottle made to live on
              a vanity, not in a cupboard.
            </p>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-8 text-sm">
              {[
                ["Concentration", "Eau de Parfum"],
                ["Volume", "50 ml"],
                ["Family", "Oriental · Woody"],
                ["Wear", "Unisex"],
              ].map(([k, v]) => (
                <li key={k}>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">{k}</p>
                  <p className="mt-1 font-display text-xl text-ivory">{v}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl text-gold">₹{MOON_OUD.price.toLocaleString("en-IN")}</span>
                  <span className="font-display text-xl text-ivory/40 line-through">₹{MOON_OUD.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gold">Exclusive 50% Discount</span>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: MOON_OUD.id,
                    name: MOON_OUD.name,
                    variant: MOON_OUD.variant,
                    price: MOON_OUD.price,
                    image: MOON_OUD.image,
                  })
                }
                className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition hover:bg-gold-soft"
              >
                Add to Cart
              </button>
              <Link
                to="/moon-oud"
                className="text-[11px] uppercase tracking-[0.3em] text-ivory/70 underline-offset-4 hover:text-gold hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FragranceExperience() {
  const layers = [
    { label: "Top Notes", desc: "First whispers", items: MOON_OUD.notes.top },
    { label: "Heart Notes", desc: "The middle dance", items: MOON_OUD.notes.heart },
    { label: "Base Notes", desc: "The lingering trace", items: MOON_OUD.notes.base },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 md:py-36">
      <img src={oud} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/85 to-charcoal" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <span className="gold-divider"><span className="gold-divider-line" /> Fragrance Experience <span className="gold-divider-line" /></span>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-ivory md:text-7xl">
              A scent that <span className="italic text-gold-gradient">unfolds</span> across the night.
            </h2>
          </div>
        </Reveal>
        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/5 md:grid-cols-3">
          {layers.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.1}>
              <div className="h-full bg-navy-deep p-10 md:p-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{l.label}</p>
                <p className="mt-3 font-display text-2xl italic text-ivory/80">{l.desc}</p>
                <div className="mt-8 h-px w-12 bg-gold/60" />
                <ul className="mt-8 space-y-3">
                  {l.items.map((n) => (
                    <li key={n} className="font-display text-2xl text-ivory">{n}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyMoonOud() {
  const features = [
    { icon: Sparkles, title: "Long Lasting", text: "10+ hours of moonlit projection on skin." },
    { icon: Gem, title: "Unisex", text: "Crafted to be worn by anyone, redefined by you." },
    { icon: Leaf, title: "Premium Ingredients", text: "Aged oud, Damask rose, Mysore sandalwood." },
    { icon: Award, title: "Signature Scent", text: "A presence engineered to be remembered." },
    { icon: Gift, title: "Elegant Packaging", text: "Black lacquered box · gold foil · velvet bed." },
  ];
  return (
    <section className="bg-charcoal py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="gold-divider"><span className="gold-divider-line" /> Why Moon Oud</span>
              <h2 className="mt-6 max-w-2xl font-display text-5xl leading-[1.05] text-ivory md:text-6xl">
                Built for those who choose <span className="italic text-gold-gradient">presence</span>.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
              Every detail of Moon Oud — from raw material to ritual — is shaped
              around a single intent: to be unforgettable.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full bg-charcoal p-8 transition-colors duration-500 hover:bg-navy-deep">
                <f.icon className="h-7 w-7 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.25} />
                <h3 className="mt-6 font-display text-2xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CampaignQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.img
        style={{ y }}
        src={campaign}
        alt="Moon Oud campaign"
        className="h-[80svh] w-full object-cover md:h-[90svh]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 grid place-items-center px-6 md:place-items-start md:p-20">
        <Reveal>
          <blockquote className="max-w-xl text-center md:text-left">
            <p className="font-display text-4xl italic leading-[1.1] text-ivory md:text-6xl">
              “Some fragrances are worn.
              <br />
              <span className="text-gold-gradient">Moon Oud is remembered.</span>”
            </p>
            <footer className="mt-8 text-[11px] uppercase tracking-[0.4em] text-ivory/60">
              — Shivrra Atelier
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Worn this for a month — strangers stop me to ask what I'm wearing. It's mine now.", name: "Aanya R.", city: "Mumbai" },
    { quote: "The bottle alone is worth it. The scent makes it heirloom.", name: "Karan M.", city: "Delhi" },
    { quote: "Deep, smoky, sophisticated. The kind of oud that whispers rather than shouts.", name: "Meher S.", city: "Bengaluru" },
  ];
  return (
    <section className="bg-navy-deep py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center">
            <span className="gold-divider"><span className="gold-divider-line" /> Voices <span className="gold-divider-line" /></span>
            <h2 className="mt-6 font-display text-5xl text-ivory md:text-6xl">From those who wear it.</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="h-full border border-white/10 bg-charcoal/60 p-10 backdrop-blur">
                <div className="text-gold">★★★★★</div>
                <blockquote className="mt-6 font-display text-2xl leading-snug text-ivory">“{t.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.3em] text-ivory/55">
                  {t.name} · {t.city}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal py-24 md:py-36">
      <img src={detail1} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/90 to-charcoal" />
      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <span className="gold-divider"><span className="gold-divider-line" /> The Atelier <span className="gold-divider-line" /></span>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] text-ivory md:text-6xl">
            Receive private editions, <span className="italic text-gold-gradient">before anyone else</span>.
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const email = String(fd.get("email") || "").trim();
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
              import("sonner").then(({ toast }) => toast.success("Welcome to the Atelier."));
              (e.target as HTMLFormElement).reset();
            }}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              maxLength={120}
              placeholder="Your email"
              autoComplete="email"
              className="min-w-0 flex-1 border border-white/20 bg-transparent px-5 py-4 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
            />
            <button type="submit" className="bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition hover:bg-gold-soft">
              Subscribe
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
