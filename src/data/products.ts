export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  details: string;
  category: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Herbal Soap",
    price: 10,
    description: "Cleanses the aura and brings peace of mind.",
    image: "https://via.placeholder.com/300x300?text=Herbal+Soap",
    details: "Our handcrafted herbal soap is made with sacred herbs and pure intentions. Each bar is energetically cleansed and charged under the full moon.",
    category: "Cleansing",
    isNew: true
  },
  {
    id: 2,
    name: "Scented Candle",
    price: 15,
    description: "Enhances meditation and attracts positive energy.",
    image: "https://via.placeholder.com/300x300?text=Scented+Candle",
    details: "These hand-poured candles are infused with essential oils and blessed crystals. Perfect for creating a sacred space or enhancing your spiritual practice.",
    category: "Rituals"
  },
  {
    id: 3,
    name: "Blessed Ring",
    price: 25,
    description: "Symbol of protection and manifestation.",
    image: "https://via.placeholder.com/300x300?text=Blessed+Ring",
    details: "Each ring is individually blessed and charged with protective energy. Wear it as a reminder of your spiritual journey and manifestation goals.",
    category: "Protection",
    isNew: true
  },
  {
    id: 4,
    name: "Hand Fan",
    price: 12,
    description: "Used in rituals to cleanse and direct energy.",
    image: "https://via.placeholder.com/300x300?text=Hand+Fan",
    details: "Traditional hand fan made from sustainable materials. Use it to direct energy during rituals or to cleanse your sacred space.",
    category: "Rituals"
  },
  {
    id: 5,
    name: "Meditation Cushion",
    price: 35,
    description: "Ergonomic cushion for comfortable meditation sessions.",
    image: "https://via.placeholder.com/300x300?text=Meditation+Cushion",
    details: "Designed for optimal support during long meditation sessions. Made with natural, eco-friendly materials that honor the earth.",
    category: "Meditation"
  },
  {
    id: 6,
    name: "Crystal Bundle",
    price: 40,
    description: "Collection of healing crystals for various purposes.",
    image: "https://via.placeholder.com/300x300?text=Crystal+Bundle",
    details: "A carefully curated set of crystals chosen for their complementary energies. Each crystal is cleansed and charged before being sent to you.",
    category: "Protection",
    isNew: true
  },
  {
    id: 7,
    name: "Sage Smudge Stick",
    price: 8,
    description: "Traditional herb bundle for space clearing.",
    image: "https://via.placeholder.com/300x300?text=Sage+Smudge+Stick",
    details: "Ethically harvested white sage bundled with intention. Use for cleansing your home, objects, or aura of negative energies.",
    category: "Cleansing"
  },
  {
    id: 8,
    name: "Singing Bowl",
    price: 65,
    description: "Tibetan singing bowl for sound healing and meditation.",
    image: "https://via.placeholder.com/300x300?text=Singing+Bowl",
    details: "Handcrafted singing bowl made by traditional artisans. The rich harmonic tones help to quiet the mind and induce a deep meditative state.",
    category: "Meditation"
  }
]; 