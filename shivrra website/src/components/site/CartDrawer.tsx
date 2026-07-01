import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useCart, INSTAGRAM_CHECKOUT_URL } from "@/lib/cart";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, subtotal } = useCart();

  const checkout = () => {
    window.open(INSTAGRAM_CHECKOUT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-white/10 bg-charcoal text-ivory"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <div className="gold-divider"><span className="gold-divider-line" />Your Cart</div>
                <h2 className="mt-1 font-display text-2xl">Moonlit Selection</h2>
              </div>
              <button onClick={closeCart} aria-label="Close cart" className="grid h-10 w-10 place-items-center text-ivory hover:text-gold">
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <p className="font-display text-3xl text-ivory">Your cart is empty.</p>
                    <p className="mt-3 text-sm text-ivory/60">Begin your Moon Oud journey.</p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((it) => (
                    <li key={it.id} className="flex gap-4 border-b border-white/5 pb-6">
                      <img src={it.image} alt={it.name} className="h-24 w-20 shrink-0 object-cover" />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className="truncate font-display text-lg">{it.name}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-ivory/50">{it.variant}</p>
                          </div>
                          <button onClick={() => removeItem(it.id)} className="text-ivory/40 hover:text-gold" aria-label="Remove">
                            <X className="h-4 w-4" strokeWidth={1.25} />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="inline-flex items-center border border-white/15">
                            <button onClick={() => updateQty(it.id, it.quantity - 1)} className="grid h-8 w-8 place-items-center text-ivory hover:text-gold" aria-label="Decrease">
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm">{it.quantity}</span>
                            <button onClick={() => updateQty(it.id, it.quantity + 1)} className="grid h-8 w-8 place-items-center text-ivory hover:text-gold" aria-label="Increase">
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="font-display text-lg text-gold">₹{(it.price * it.quantity).toLocaleString("en-IN")}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-white/10 bg-navy-deep px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-ivory/70">
                <span>Subtotal</span>
                <span className="font-display text-2xl text-gold">₹{subtotal.toLocaleString("en-IN")}</span>
              </div>
              <p className="mt-2 text-[11px] text-ivory/40">Final order confirmed via Instagram.</p>
              <button
                onClick={checkout}
                disabled={items.length === 0}
                className="mt-5 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition-all hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue Purchase on Instagram
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}