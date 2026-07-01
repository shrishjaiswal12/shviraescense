import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/moon-oud", label: "Moon Oud" },
  { to: "/our-story", label: "Our Story" },
  { to: "/gifting", label: "Gifting" },
  { to: "/corporate-gifting", label: "Corporate Gifting" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Link
          to="/"
          className="font-display text-2xl tracking-[0.25em] text-ivory md:text-3xl"
          aria-label="SHIVRRA home"
        >
          SHIVRRA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.25em] text-ivory/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center text-ivory transition-colors hover:text-gold"
            aria-label={`Open cart, ${count} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-gold text-[10px] font-medium text-charcoal">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobile(true)}
            className="grid h-10 w-10 place-items-center text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-charcoal transition-opacity duration-500 lg:hidden ${
          mobile ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-2xl tracking-[0.25em] text-ivory">SHIVRRA</span>
          <button
            onClick={() => setMobile(false)}
            className="grid h-10 w-10 place-items-center text-ivory"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-7 px-6 pb-20 pt-16">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobile(false)}
              className="font-display text-3xl text-ivory transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <span className="gold-divider mt-6">
            <span className="gold-divider-line" /> Moon Oud <span className="gold-divider-line" />
          </span>
        </nav>
      </div>
    </header>
  );
}