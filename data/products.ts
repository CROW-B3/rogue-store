import { Product, ProductVariant } from "@/lib/types";

export const products: Product[] = [
  // Apparel Products
  {
    id: "1",
    slug: "classic-cotton-tee",
    title: "Classic Cotton T-Shirt",
    description:
      "Premium 100% organic cotton t-shirt with a comfortable fit. Perfect for everyday wear, this timeless piece features reinforced seams and a soft, breathable fabric that gets better with every wash.",
    category: "apparel",
    tags: ["new", "bestseller", "sustainable"],
    price: 2500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Navy", "Gray"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-15T00:00:00Z",
    specs: {
      Material: "100% Organic Cotton",
      Fit: "Regular",
      "Care Instructions": "Machine wash cold",
      Origin: "Sri Lanka",
    },
  },
  {
    id: "2",
    slug: "slim-fit-jeans",
    title: "Slim Fit Denim Jeans",
    description:
      "Modern slim-fit jeans crafted from premium stretch denim. Features a contemporary cut that flatters your silhouette while providing comfort and flexibility for all-day wear.",
    category: "apparel",
    tags: ["bestseller"],
    price: 6500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1542272454315-7f6c8803b722?w=800&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
    ],
    variants: [
      {
        id: "size",
        name: "Size",
        values: ["28", "30", "32", "34", "36", "38"],
      },
      {
        id: "color",
        name: "Color",
        values: ["Dark Blue", "Light Blue", "Black"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-10T00:00:00Z",
    specs: {
      Material: "98% Cotton, 2% Elastane",
      Fit: "Slim",
      Rise: "Mid Rise",
      "Care Instructions": "Machine wash cold, tumble dry low",
    },
  },
  {
    id: "3",
    slug: "wool-blend-coat",
    title: "Premium Wool Blend Coat",
    description:
      "Luxurious wool blend coat with a tailored silhouette. Perfect for cooler months, this sophisticated outerwear piece features premium buttons, deep pockets, and a timeless design.",
    category: "apparel",
    tags: ["premium", "new"],
    price: 18500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "color", name: "Color", values: ["Charcoal", "Camel", "Navy"] },
    ],
    rating: 4.8,
    createdAt: "2025-01-20T00:00:00Z",
    specs: {
      Material: "70% Wool, 30% Polyester",
      Fit: "Tailored",
      "Care Instructions": "Dry clean only",
      Lining: "Satin",
    },
  },
  {
    id: "4",
    slug: "linen-summer-dress",
    title: "Linen Summer Dress",
    description:
      "Breathable linen dress perfect for warm weather. Features a relaxed fit, adjustable straps, and a flattering midi length. The lightweight fabric keeps you cool and comfortable all day.",
    category: "apparel",
    tags: ["sustainable", "new"],
    price: 5500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["White", "Beige", "Terracotta", "Sage"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-18T00:00:00Z",
    specs: {
      Material: "100% Linen",
      Length: "Midi",
      "Care Instructions": "Hand wash cold, line dry",
      Origin: "Handcrafted",
    },
  },
  {
    id: "5",
    slug: "leather-jacket",
    title: "Genuine Leather Jacket",
    description:
      "Premium genuine leather jacket with classic biker styling. Features asymmetric zip closure, multiple pockets, and quilted shoulder detailing. A wardrobe staple that ages beautifully.",
    category: "apparel",
    tags: ["premium", "limited-edition"],
    price: 28500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL"] },
      { id: "color", name: "Color", values: ["Black", "Brown"] },
    ],
    rating: 4.9,
    createdAt: "2025-01-22T00:00:00Z",
    specs: {
      Material: "100% Genuine Leather",
      Lining: "Polyester",
      "Care Instructions": "Professional leather clean",
      Hardware: "YKK Zippers",
    },
  },
  {
    id: "6",
    slug: "cashmere-sweater",
    title: "Pure Cashmere Sweater",
    description:
      "Luxuriously soft cashmere sweater with ribbed detailing. This elegant piece offers unmatched warmth and comfort while maintaining a sophisticated, refined look.",
    category: "apparel",
    tags: ["premium", "bestseller"],
    price: 12500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Cream", "Gray", "Navy", "Burgundy"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-12T00:00:00Z",
    specs: {
      Material: "100% Cashmere",
      Fit: "Regular",
      "Care Instructions": "Hand wash cold, lay flat to dry",
      Weight: "Lightweight",
    },
  },

  // Accessories Products
  {
    id: "7",
    slug: "leather-tote-bag",
    title: "Genuine Leather Tote Bag",
    description:
      "Spacious leather tote bag perfect for work or travel. Features reinforced handles, interior pockets, and a secure zip closure. The full-grain leather develops a beautiful patina over time.",
    category: "accessories",
    tags: ["bestseller", "premium"],
    price: 9500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Tan", "Black", "Cognac"] },
    ],
    rating: 4.7,
    createdAt: "2025-01-14T00:00:00Z",
    specs: {
      Material: "Full-Grain Leather",
      Dimensions: "38cm x 30cm x 12cm",
      "Strap Drop": "25cm",
      Closure: "Zip",
    },
  },
  {
    id: "8",
    slug: "minimalist-watch",
    title: "Minimalist Steel Watch",
    description:
      "Elegant minimalist watch with a clean dial and premium stainless steel case. Features sapphire crystal glass, Japanese quartz movement, and genuine leather strap.",
    category: "accessories",
    tags: ["new", "premium"],
    price: 8500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Silver", "Gold", "Rose Gold"] },
      {
        id: "strap",
        name: "Strap",
        values: ["Black Leather", "Brown Leather", "Steel Mesh"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-19T00:00:00Z",
    specs: {
      "Case Material": "Stainless Steel",
      "Case Diameter": "40mm",
      Movement: "Japanese Quartz",
      "Water Resistance": "3ATM",
      Glass: "Sapphire Crystal",
    },
  },
  {
    id: "9",
    slug: "silk-scarf",
    title: "Pure Silk Scarf",
    description:
      "Luxurious hand-rolled silk scarf with vibrant prints. Made from 100% mulberry silk, this versatile accessory adds elegance to any outfit.",
    category: "accessories",
    tags: ["premium", "sustainable"],
    price: 4500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
      "https://images.unsplash.com/photo-1591360236480-4ed861025fa1?w=800&q=80",
    ],
    variants: [
      {
        id: "pattern",
        name: "Pattern",
        values: ["Floral", "Geometric", "Abstract", "Classic"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-16T00:00:00Z",
    specs: {
      Material: "100% Mulberry Silk",
      Dimensions: "90cm x 90cm",
      "Care Instructions": "Dry clean or hand wash cold",
      Finish: "Hand-rolled edges",
    },
  },
  {
    id: "10",
    slug: "sunglasses-aviator",
    title: "Classic Aviator Sunglasses",
    description:
      "Timeless aviator sunglasses with UV400 protection. Features polarized lenses, metal frame, and adjustable nose pads for a comfortable fit.",
    category: "accessories",
    tags: ["bestseller"],
    price: 3500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Frame Color", values: ["Gold", "Silver", "Black"] },
      { id: "lens", name: "Lens", values: ["Gray", "Brown", "Green"] },
    ],
    rating: 4.4,
    createdAt: "2025-01-11T00:00:00Z",
    specs: {
      "UV Protection": "UV400",
      "Lens Type": "Polarized",
      "Frame Material": "Metal Alloy",
      "Lens Width": "58mm",
    },
  },
  {
    id: "11",
    slug: "crossbody-bag",
    title: "Canvas Crossbody Bag",
    description:
      "Practical canvas crossbody bag with leather trim. Perfect for everyday use, featuring multiple compartments and an adjustable strap.",
    category: "accessories",
    tags: ["new", "sustainable"],
    price: 3800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590136905004-54f54c2228f5?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Olive", "Navy", "Black", "Tan"] },
    ],
    rating: 4.3,
    createdAt: "2025-01-17T00:00:00Z",
    specs: {
      Material: "Canvas with Leather Trim",
      Dimensions: "24cm x 18cm x 8cm",
      Strap: "Adjustable",
      Pockets: "3 interior, 1 exterior",
    },
  },
  {
    id: "12",
    slug: "wallet-leather",
    title: "Slim Leather Wallet",
    description:
      "Minimalist leather wallet with RFID protection. Compact design holds up to 8 cards plus cash, perfect for those who prefer to travel light.",
    category: "accessories",
    tags: ["bestseller", "new"],
    price: 2800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
      "https://images.unsplash.com/photo-1606011334315-025e4baab810?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "Brown", "Navy"] },
    ],
    rating: 4.6,
    createdAt: "2025-01-21T00:00:00Z",
    specs: {
      Material: "Full-Grain Leather",
      "Card Slots": "8",
      "RFID Protection": "Yes",
      Dimensions: "11cm x 8cm x 1cm",
    },
  },

  // Home Products
  {
    id: "13",
    slug: "ceramic-vase",
    title: "Handcrafted Ceramic Vase",
    description:
      "Beautiful handcrafted ceramic vase with organic shape and matte finish. Each piece is unique, featuring subtle variations that add character.",
    category: "home",
    tags: ["sustainable", "premium"],
    price: 4200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
    ],
    variants: [
      {
        id: "color",
        name: "Color",
        values: ["White", "Terracotta", "Sage", "Charcoal"],
      },
      { id: "size", name: "Size", values: ["Small", "Medium", "Large"] },
    ],
    rating: 4.7,
    createdAt: "2025-01-13T00:00:00Z",
    specs: {
      Material: "Ceramic",
      Finish: "Matte",
      "Care Instructions": "Hand wash",
      "Made In": "Sri Lanka",
    },
  },
  {
    id: "14",
    slug: "throw-blanket",
    title: "Chunky Knit Throw Blanket",
    description:
      "Cozy chunky knit throw blanket made from soft cotton yarn. Perfect for adding warmth and texture to your living space.",
    category: "home",
    tags: ["bestseller", "sustainable"],
    price: 7500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1614856917121-c0ae9c90738e?w=800&q=80",
      "https://images.unsplash.com/photo-1631048331259-cee0a7a87333?w=800&q=80",
    ],
    variants: [
      {
        id: "color",
        name: "Color",
        values: ["Cream", "Gray", "Dusty Pink", "Navy"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-09T00:00:00Z",
    specs: {
      Material: "100% Cotton",
      Dimensions: "130cm x 170cm",
      "Care Instructions": "Hand wash cold, lay flat to dry",
      Weight: "1.5kg",
    },
  },
  {
    id: "15",
    slug: "table-lamp",
    title: "Modern Table Lamp",
    description:
      "Sleek modern table lamp with adjustable arm and touch dimmer. Features energy-efficient LED technology and a stylish minimalist design.",
    category: "home",
    tags: ["new"],
    price: 6800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
      "https://images.unsplash.com/photo-1534105615012-ec4f4c6d44e4?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "White", "Brass"] },
    ],
    rating: 4.5,
    createdAt: "2025-01-15T00:00:00Z",
    specs: {
      "Light Source": "LED",
      Wattage: "10W",
      "Color Temperature": "3000K Warm White",
      Dimmer: "Touch Control",
    },
  },
  {
    id: "16",
    slug: "wall-mirror",
    title: "Round Wall Mirror",
    description:
      "Elegant round wall mirror with brass frame. Perfect for entryways, bedrooms, or bathrooms. The clean design complements any decor style.",
    category: "home",
    tags: ["premium"],
    price: 8900,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["60cm", "80cm", "100cm"] },
      { id: "frame", name: "Frame", values: ["Brass", "Black", "White"] },
    ],
    rating: 4.6,
    createdAt: "2025-01-10T00:00:00Z",
    specs: {
      Material: "Glass with Metal Frame",
      Thickness: "5mm",
      Mounting: "Wall-mounted",
      Includes: "Hanging hardware",
    },
  },
  {
    id: "17",
    slug: "cushion-covers",
    title: "Linen Cushion Covers Set",
    description:
      "Set of premium linen cushion covers with envelope closure. Natural, breathable fabric that adds texture and comfort to any room.",
    category: "home",
    tags: ["sustainable", "bestseller"],
    price: 3200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    ],
    variants: [
      {
        id: "color",
        name: "Color",
        values: ["Natural", "Stone", "Terracotta", "Sage"],
      },
      {
        id: "size",
        name: "Size",
        values: ["45cm x 45cm", "50cm x 50cm", "60cm x 40cm"],
      },
    ],
    rating: 4.4,
    createdAt: "2025-01-08T00:00:00Z",
    specs: {
      Material: "100% Linen",
      Quantity: "Set of 2",
      Closure: "Envelope",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "18",
    slug: "wooden-tray",
    title: "Acacia Wood Serving Tray",
    description:
      "Beautiful serving tray handcrafted from sustainable acacia wood. Features handles for easy carrying and a food-safe finish.",
    category: "home",
    tags: ["sustainable", "premium"],
    price: 4500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1615719413546-198b25453f85?w=800&q=80",
      "https://images.unsplash.com/photo-1595429927043-8d74c3502491?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["Small", "Medium", "Large"] },
    ],
    rating: 4.7,
    createdAt: "2025-01-12T00:00:00Z",
    specs: {
      Material: "Acacia Wood",
      Finish: "Food-safe Oil",
      "Care Instructions": "Hand wash, oil occasionally",
      "Made In": "Handcrafted",
    },
  },

  // Tech Products
  {
    id: "19",
    slug: "wireless-earbuds",
    title: "Premium Wireless Earbuds",
    description:
      "High-fidelity wireless earbuds with active noise cancellation. Features 30-hour battery life, IPX5 water resistance, and premium sound quality.",
    category: "tech",
    tags: ["new", "bestseller"],
    price: 15500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "White", "Navy"] },
    ],
    rating: 4.6,
    createdAt: "2025-01-20T00:00:00Z",
    specs: {
      Battery: "30 hours total",
      Connectivity: "Bluetooth 5.3",
      "Water Resistance": "IPX5",
      "Noise Cancellation": "Active ANC",
      "Driver Size": "10mm",
    },
  },
  {
    id: "20",
    slug: "laptop-sleeve",
    title: "Leather Laptop Sleeve",
    description:
      "Premium leather laptop sleeve with soft interior lining. Slim profile design with magnetic closure and additional pocket for accessories.",
    category: "tech",
    tags: ["premium"],
    price: 5800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      "https://images.unsplash.com/photo-1624948464449-e654b8937c5e?w=800&q=80",
    ],
    variants: [
      {
        id: "size",
        name: "Size",
        values: ["13 inch", "14 inch", "15 inch", "16 inch"],
      },
      { id: "color", name: "Color", values: ["Black", "Brown", "Tan"] },
    ],
    rating: 4.5,
    createdAt: "2025-01-18T00:00:00Z",
    specs: {
      Material: "Full-Grain Leather",
      Interior: "Soft Microfiber",
      Closure: "Magnetic",
      Pockets: "1 exterior",
    },
  },
  {
    id: "21",
    slug: "smart-watch",
    title: "Fitness Smart Watch",
    description:
      "Advanced fitness smartwatch with heart rate monitoring, GPS, and sleep tracking. Features AMOLED display and 7-day battery life.",
    category: "tech",
    tags: ["new", "bestseller"],
    price: 22500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "Silver", "Rose Gold"] },
      {
        id: "band",
        name: "Band",
        values: ["Sport Band", "Leather Band", "Metal Link"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-22T00:00:00Z",
    specs: {
      Display: '1.4" AMOLED',
      Battery: "7 days",
      "Water Resistance": "5ATM",
      Sensors: "Heart rate, GPS, Accelerometer",
      Compatibility: "iOS & Android",
    },
  },
  {
    id: "22",
    slug: "portable-charger",
    title: "High-Capacity Portable Charger",
    description:
      "20000mAh portable charger with fast charging and multiple ports. Compact design with LED battery indicator and premium aluminum body.",
    category: "tech",
    tags: ["bestseller"],
    price: 4800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80",
      "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "Silver", "Blue"] },
    ],
    rating: 4.4,
    createdAt: "2025-01-16T00:00:00Z",
    specs: {
      Capacity: "20000mAh",
      Output: "USB-C PD 20W",
      Ports: "2x USB-A, 1x USB-C",
      "Charge Time": "6-8 hours",
      Weight: "400g",
    },
  },
  {
    id: "23",
    slug: "phone-stand",
    title: "Aluminum Phone Stand",
    description:
      "Sleek aluminum phone stand with adjustable viewing angle. Compatible with all smartphones and features anti-slip silicone pads.",
    category: "tech",
    tags: ["new"],
    price: 2200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1633181344136-bfb00f6f0a68?w=800&q=80",
      "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Silver", "Space Gray", "Gold"] },
    ],
    rating: 4.3,
    createdAt: "2025-01-14T00:00:00Z",
    specs: {
      Material: "Aluminum Alloy",
      Adjustability: "Multi-angle",
      Compatibility: "Universal",
      "Non-slip": "Silicone pads",
    },
  },
  {
    id: "24",
    slug: "wireless-keyboard",
    title: "Mechanical Wireless Keyboard",
    description:
      "Premium mechanical keyboard with tactile switches and RGB backlighting. Features 75% compact layout and connects via Bluetooth or USB-C.",
    category: "tech",
    tags: ["premium", "new"],
    price: 12800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
    ],
    variants: [
      { id: "switch", name: "Switch Type", values: ["Red", "Blue", "Brown"] },
      { id: "color", name: "Color", values: ["Black", "White"] },
    ],
    rating: 4.8,
    createdAt: "2025-01-21T00:00:00Z",
    specs: {
      Layout: "75% Compact",
      Switches: "Hot-swappable Mechanical",
      Connectivity: "Bluetooth 5.1 & USB-C",
      Battery: "2000mAh rechargeable",
      Backlighting: "RGB per-key",
    },
  },
];
