import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import campaignAsset from "@/assets/shivrra-hero.jpg.asset.json";
import oudAsset from "@/assets/notes.png.asset.json";
import bottleAsset from "@/assets/bottle-front.png.asset.json";
const campaign = campaignAsset.url;
const oud = oudAsset.url;
const bottle = bottleAsset.url;

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — SHIVRRA" },
      { name: "description", content: "The story of SHIVRRA — a luxury fragrance house born from the belief that scent is memory, identity and presence." },
      { property: "og:title", content: "Our Story — SHIVRRA" },
      { property: "og:description", content: "Crafted under moonlight. Built to be remembered." },
    ],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <SiteLayout>
      <section ref={ref} className="relative isolate min-h-[90svh] overflow-hidden pt-32">
        <motion.img style={{ y }} src={campaign} alt="Moon Oud campaign" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal/60 via-charcoal/80 to-charcoal" />
        <div className="mx-auto grid min-h-[70svh] max-w-5xl place-items-center px-6 text-center md:px-10">
          <Reveal>
            <span className="gold-divider"><span className="gold-divider-line" /> Our Story <span className="gold-divider-line" /></span>
            <h1 className="mt-8 font-display text-6xl leading-[0.95] text-ivory md:text-8xl">
              A house built on <span className="italic text-gold-gradient">memory</span>.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ivory/65 md:text-lg">
              SHIVRRA was born from the belief that fragrance is more than scent — it
              is memory, identity, and presence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden shadow-luxe">
              <img src={oud} alt="Burning oud wood" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-ivory/75">
              <span className="gold-divider"><span className="gold-divider-line" /> The Founder</span>
              <h2 className="font-display text-4xl leading-tight text-ivory md:text-5xl">Years spent listening to scent.</h2>
              <p className="leading-relaxed">
                The founder spent years fascinated by how a single fragrance could
                transport someone back to a forgotten moment, a distant place, or a
                cherished memory.
              </p>
              <p className="leading-relaxed">
                Moon Oud became the embodiment of that philosophy: a fragrance crafted
                not merely to be worn, but to leave an impression that lingers long
                after the moment has passed.
              </p>
              <p className="leading-relaxed">
                Inspired by quiet moonlit nights, timeless elegance, and the richness
                of oud, SHIVRRA was created for individuals who seek depth over noise
                and presence over attention.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-deep py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Reveal>
            <div className="text-center">
              <span className="gold-divider"><span className="gold-divider-line" /> The Journey <span className="gold-divider-line" /></span>
              <h2 className="mt-6 font-display text-5xl text-ivory md:text-6xl">From a single idea to a bottle.</h2>
            </div>
          </Reveal>
          <ol className="mt-16 space-y-12">
            {[
              ["I", "The Quiet Hour", "A founder's nightly ritual — burning agarwood, taking notes by candle. The first sketch of Moon Oud."],
              ["II", "The Search", "Years sourcing aged oud from Assam, Damask rose from the Valley of Roses, sandalwood from the Mysore forests."],
              ["III", "The Composition", "Forty-three formulations. One survived. The version you wear today."],
              ["IV", "The Bottle", "Hand-finished obsidian glass and a brass collar engraved with the SHIVRRA monogram."],
              ["V", "The Beginning", "A single fragrance. A single intention. A house built for those who choose presence."],
            ].map(([num, title, body], i) => (
              <Reveal key={String(num)} delay={i * 0.05}>
                <li className="grid grid-cols-[auto_1fr] items-start gap-6 border-l border-gold/40 pl-8 md:grid-cols-[80px_1fr] md:gap-12 md:pl-12">
                  <span className="font-display text-4xl text-gold-gradient md:text-5xl">{num}</span>
                  <div>
                    <h3 className="font-display text-3xl text-ivory md:text-4xl">{title}</h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-ivory/65">{body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src={bottle} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <p className="font-display text-3xl italic leading-snug text-ivory md:text-5xl">
              Every bottle represents craftsmanship, emotion, and the pursuit of
              creating <span className="text-gold-gradient">a signature scent that becomes part of a person's story.</span>
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}