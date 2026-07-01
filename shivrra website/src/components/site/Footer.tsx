import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.25em] text-ivory">SHIVRRA</div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/60">
            A luxury fragrance house crafting signature scents of presence, mystery and quiet
            confidence — beginning with Moon Oud.
          </p>
        </div>
        <div>
          <div className="gold-divider mb-4">
            <span className="gold-divider-line" />Explore
          </div>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li><Link to="/moon-oud" className="hover:text-gold">Moon Oud</Link></li>
            <li><Link to="/our-story" className="hover:text-gold">Our Story</Link></li>
            <li><Link to="/gifting" className="hover:text-gold">Gifting</Link></li>
            <li><Link to="/corporate-gifting" className="hover:text-gold">Corporate Gifting</Link></li>
          </ul>
        </div>
        <div>
          <div className="gold-divider mb-4">
            <span className="gold-divider-line" />Connect
          </div>
          <ul className="space-y-3 text-sm text-ivory/70">
            <li>
              <a href="https://www.instagram.com/shivrra_busi_ss" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold">
                <Instagram className="h-4 w-4" strokeWidth={1.25} /> @shivrra_busi_ss
              </a>
            </li>
            <li>
              <a href="mailto:shivrra.busi.ss@gmail.com" className="inline-flex items-center gap-2 hover:text-gold">
                <Mail className="h-4 w-4" strokeWidth={1.25} /> shivrra.busi.ss@gmail.com
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.25em] text-ivory/40 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} SHIVRRA. All rights reserved to Shrish Jaiswal.</span>
          <span>Crafted under moonlight.</span>
        </div>
      </div>
    </footer>
  );
}