import bottleAsset from "@/assets/bottle-front.png.asset.json";
import sideAsset from "@/assets/bottle-side.jpg.asset.json";
import backAsset from "@/assets/bottle-back.jpg.asset.json";
import notesAsset from "@/assets/notes.png.asset.json";
import luxuryAsset from "@/assets/shivrra-luxury.jpg.asset.json";
import sprayAsset from "@/assets/shivrra-spray.jpg.asset.json";

const bottle = bottleAsset.url;
const detail1 = sideAsset.url;
const detail2 = backAsset.url;
const oud = notesAsset.url;
const giftBox = luxuryAsset.url;
const spray = sprayAsset.url;

export const MOON_OUD = {
  id: "moon-oud-50",
  name: "Moon Oud",
  variant: "Eau de Parfum · 50ml",
  price: 499,
  originalPrice: 999,
  image: bottle,
  gallery: [bottle, detail1, spray, detail2, giftBox, oud],
  tagline: "Deep. Mysterious. Unforgettable.",
  notes: {
    top: ["Bergamot", "Pink Pepper", "Saffron"],
    heart: ["Damask Rose", "Smoked Iris", "Dark Plum"],
    base: ["Aged Oud", "Amber", "Sandalwood", "Vanilla Musk"],
  },
};