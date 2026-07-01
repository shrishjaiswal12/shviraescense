import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Minus, Plus, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { MOON_OUD } from "@/lib/product";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/moon-oud")({
  head: () => ({
    meta: [
      { title: "Moon Oud — SHIVRRA" },
      { name: "description", content: "Moon Oud by SHIVRRA — a luxury unisex eau de parfum (50ml) with aged oud, Damask rose, amber and sandalwood." },
      { property: "og:title", content: "Moon Oud — SHIVRRA" },
      { property: "og:description", content: "Deep. Mysterious. Unforgettable. The signature SHIVRRA fragrance." },
    ],
  }),
  component: MoonOudPage,
});

function MoonOudPage() {
  return (
    <SiteLayout>
      <ProductHero />
      <Story />
    </SiteLayout>
  );
}

function ProductHero() {
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  return (
    <section id="buy" className="bg-charcoal pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10 lg:gap-20">
        {/* Gallery */}
        <div>
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] overflow-hidden bg-navy-deep shadow-luxe"
          >
            <img src={MOON_OUD.gallery[active]} alt={`Moon Oud view ${active + 1}`} className="h-full w-full object-cover" />
          </motion.div>
          <div className="mt-4 grid grid-cols-5 gap-3">
            {MOON_OUD.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`aspect-square overflow-hidden border transition ${
                  active === i ? "border-gold" : "border-white/10 hover:border-white/30"
                }`}
                aria-label={`Show image ${i + 1}`}
              >
                <img src={g} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="gold-divider">
            <span className="gold-divider-line" /> Unisex Collection
          </span>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-ivory md:text-7xl">
            Moon <span className="italic text-gold-gradient">Oud</span>
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-ivory/55">{MOON_OUD.variant}</p>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/70">
            A nocturne in three movements: bright saffron and pink pepper open over
            smoked iris and dark plum, settling into a rich base of aged oud, amber,
            and Mysore sandalwood. The kind of scent that becomes a memory.
          </p>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-white/10 pt-8">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-5xl text-gold">₹{MOON_OUD.price.toLocaleString("en-IN")}</span>
              <span className="font-display text-2xl text-ivory/40 line-through">₹{MOON_OUD.originalPrice.toLocaleString("en-IN")}</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Exclusive 50% Discount</span>
            <span className="text-xs uppercase tracking-[0.3em] text-ivory/40">Incl. of taxes</span>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center border border-white/15">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-12 w-12 place-items-center text-ivory hover:text-gold" aria-label="Decrease quantity">
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-10 text-center font-display text-xl">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(10, q + 1))} className="grid h-12 w-12 place-items-center text-ivory hover:text-gold" aria-label="Increase quantity">
                <Plus className="h-3 w-3" />
              </button>
            </div>
            <button
              onClick={() =>
                addItem(
                  {
                    id: MOON_OUD.id,
                    name: MOON_OUD.name,
                    variant: MOON_OUD.variant,
                    price: MOON_OUD.price,
                    image: MOON_OUD.image,
                  },
                  qty
                )
              }
              className="flex-1 bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition hover:bg-gold-soft sm:min-w-[260px] sm:flex-none"
            >
              Add to Cart
            </button>
          </div>

          <ul className="mt-10 space-y-4 border-t border-white/10 pt-8 text-sm text-ivory/70">
            <li className="flex items-start gap-3"><Sparkles className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} /> 10+ hour projection · Eau de Parfum strength</li>
            <li className="flex items-start gap-3"><Truck className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} /> Hand-packed in a black lacquered box with gold foil</li>
            <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-4 w-4 text-gold" strokeWidth={1.5} /> Order confirmed personally via Instagram @shivrra</li>
          </ul>

          <div className="mt-12">
            <h2 className="font-display text-3xl text-ivory">The Composition</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {[
                ["Top", MOON_OUD.notes.top],
                ["Heart", MOON_OUD.notes.heart],
                ["Base", MOON_OUD.notes.base],
              ].map(([label, items]) => (
                <div key={label as string} className="border border-white/10 p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{label as string}</p>
                  <ul className="mt-3 space-y-1.5 font-display text-lg text-ivory">
                    {(items as string[]).map((n) => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-navy-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <Reveal>
          <span className="gold-divider"><span className="gold-divider-line" /> The Inspiration <span className="gold-divider-line" /></span>
          <p className="mt-8 font-display text-3xl italic leading-snug text-ivory md:text-4xl">
            “Moon Oud was bottled on the third night of a winter moon — when the air
            held the smoke of burning agarwood and the quiet of a city that had finally
            stopped speaking.”
          </p>
          <p className="mt-8 text-[11px] uppercase tracking-[0.4em] text-gold">— Founder, SHIVRRA</p>
        </Reveal>
      </div>
    </section>
  );
}