import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import giftBoxAsset from "@/assets/shivrra-luxury.jpg.asset.json";
const giftBox = giftBoxAsset.url;

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-32">
      <img
        src={giftBox}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal via-charcoal/85 to-charcoal" />
      <div className="mx-auto grid min-h-[80vh] max-w-4xl place-items-center px-6 py-24 text-center md:px-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gold-divider"
          >
            <span className="gold-divider-line" />{eyebrow}<span className="gold-divider-line" />
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-6xl leading-[0.95] text-ivory md:text-8xl lg:text-9xl"
          >
            <span className="text-gold-gradient">{title}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <Link
              to="/moon-oud"
              className="inline-flex items-center gap-3 border border-gold/60 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-charcoal"
            >
              Discover Moon Oud
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}