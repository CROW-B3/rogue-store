import { Product, ProductVariant } from "@/lib/types";

export const products: Product[] = [
  // ============================================
  // MEN'S APPAREL
  // ============================================

  // Men's Tanks
  {
    id: "m1",
    slug: "mens-muscle-tank-black",
    title: "Essential Muscle Tank",
    description:
      "Classic muscle tank in premium cotton blend. Perfect for workouts or casual wear. Features a modern fit with reinforced seams and breathable fabric.",
    category: "apparel",
    gender: "men",
    tags: ["new", "bestseller"],
    price: 1800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&q=80",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Gray", "Navy"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-25T00:00:00Z",
    specs: {
      Material: "95% Cotton, 5% Elastane",
      Fit: "Athletic Fit",
      "Care Instructions": "Machine wash cold",
    },
  },

  // Men's T-Shirts
  {
    id: "m2",
    slug: "mens-premium-cotton-tee",
    title: "Premium Cotton T-Shirt",
    description:
      "Timeless crew neck t-shirt crafted from 100% organic cotton. Soft, breathable, and built to last. The perfect everyday essential.",
    category: "apparel",
    gender: "men",
    tags: ["bestseller", "sustainable"],
    price: 2500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Gray", "Navy", "Olive"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-24T00:00:00Z",
    specs: {
      Material: "100% Organic Cotton",
      Fit: "Regular Fit",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "m3",
    slug: "mens-oversized-tee",
    title: "Oversized Drop Shoulder Tee",
    description:
      "Contemporary oversized tee with dropped shoulders and extended length. Made from heavyweight cotton for a premium feel and relaxed silhouette.",
    category: "apparel",
    gender: "men",
    tags: ["new", "premium"],
    price: 3200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
      "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Sand", "Charcoal"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-23T00:00:00Z",
    specs: {
      Material: "100% Heavyweight Cotton",
      Weight: "240gsm",
      Fit: "Oversized",
      "Care Instructions": "Machine wash cold",
    },
  },

  // Men's Shirts
  {
    id: "m4",
    slug: "mens-linen-shirt-white",
    title: "Pure Linen Button-Up Shirt",
    description:
      "Breathable linen shirt perfect for warm weather. Features a relaxed fit, chest pocket, and classic button-down collar. Effortlessly stylish.",
    category: "apparel",
    gender: "men",
    tags: ["new", "sustainable"],
    price: 4800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["White", "Light Blue", "Beige", "Sage"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-22T00:00:00Z",
    specs: {
      Material: "100% Linen",
      Fit: "Relaxed Fit",
      "Care Instructions": "Machine wash cold, iron while damp",
    },
  },
  {
    id: "m5",
    slug: "mens-oxford-shirt",
    title: "Classic Oxford Button-Down",
    description:
      "Versatile Oxford shirt in premium cotton. Features button-down collar and tailored fit. Perfect for both casual and smart-casual occasions.",
    category: "apparel",
    gender: "men",
    tags: ["bestseller"],
    price: 4200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&q=80",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["White", "Light Blue", "Pink", "Navy"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-21T00:00:00Z",
    specs: {
      Material: "100% Cotton Oxford",
      Fit: "Tailored Fit",
      "Care Instructions": "Machine wash warm, tumble dry low",
    },
  },

  // Men's Hoodies & Jackets
  {
    id: "m6",
    slug: "mens-zip-hoodie",
    title: "Premium Zip-Up Hoodie",
    description:
      "Comfortable zip-up hoodie in soft cotton blend. Features kangaroo pockets, adjustable hood, and ribbed cuffs. Your new go-to layering piece.",
    category: "apparel",
    gender: "men",
    tags: ["new", "bestseller"],
    price: 5800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Gray", "Navy", "Olive"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-20T00:00:00Z",
    specs: {
      Material: "80% Cotton, 20% Polyester",
      Fit: "Regular Fit",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "m7",
    slug: "mens-bomber-jacket",
    title: "Classic Bomber Jacket",
    description:
      "Timeless bomber jacket with ribbed collar, cuffs, and hem. Features zip pockets and lightweight construction. Perfect transitional piece.",
    category: "apparel",
    gender: "men",
    tags: ["premium"],
    price: 8900,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Navy", "Olive", "Burgundy"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-19T00:00:00Z",
    specs: {
      Material: "Nylon with Polyester Lining",
      Fit: "Regular Fit",
      "Care Instructions": "Machine wash cold, hang dry",
    },
  },

  // Men's Jeans
  {
    id: "m8",
    slug: "mens-slim-fit-jeans",
    title: "Slim Fit Denim Jeans",
    description:
      "Modern slim-fit jeans in premium stretch denim. Features a contemporary cut with five-pocket styling and comfortable flex fabric.",
    category: "apparel",
    gender: "men",
    tags: ["bestseller"],
    price: 6500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
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
        values: ["Dark Blue", "Light Blue", "Black", "Gray"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-18T00:00:00Z",
    specs: {
      Material: "98% Cotton, 2% Elastane",
      Fit: "Slim Fit",
      Rise: "Mid Rise",
      "Care Instructions": "Machine wash cold, tumble dry low",
    },
  },
  {
    id: "m9",
    slug: "mens-straight-jeans",
    title: "Straight Leg Denim",
    description:
      "Classic straight-leg jeans with a timeless fit. Made from durable denim with just the right amount of stretch for all-day comfort.",
    category: "apparel",
    gender: "men",
    tags: ["new"],
    price: 6200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&q=80",
      "https://images.unsplash.com/photo-1582552938357-32b906d05f80?w=800&q=80",
    ],
    variants: [
      {
        id: "size",
        name: "Size",
        values: ["28", "30", "32", "34", "36", "38"],
      },
      { id: "color", name: "Color", values: ["Indigo", "Black", "Light Wash"] },
    ],
    rating: 4.5,
    createdAt: "2025-01-17T00:00:00Z",
    specs: {
      Material: "99% Cotton, 1% Elastane",
      Fit: "Straight Leg",
      Rise: "Regular Rise",
      "Care Instructions": "Machine wash cold",
    },
  },

  // Men's Shorts
  {
    id: "m10",
    slug: "mens-chino-shorts",
    title: "Classic Chino Shorts",
    description:
      "Versatile chino shorts in lightweight cotton twill. Features a comfortable fit with four-pocket styling. Perfect for warm weather.",
    category: "apparel",
    gender: "men",
    tags: ["bestseller"],
    price: 3800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["28", "30", "32", "34", "36"] },
      {
        id: "color",
        name: "Color",
        values: ["Khaki", "Navy", "Olive", "Black"],
      },
    ],
    rating: 4.4,
    createdAt: "2025-01-16T00:00:00Z",
    specs: {
      Material: "100% Cotton Twill",
      Length: "9 inch inseam",
      "Care Instructions": "Machine wash warm",
    },
  },

  // Men's Joggers & Pants
  {
    id: "m11",
    slug: "mens-tech-joggers",
    title: "Technical Joggers",
    description:
      "Modern joggers in moisture-wicking fabric. Features tapered leg, zip pockets, and elastic waistband with drawstring. Perfect for active lifestyle.",
    category: "apparel",
    gender: "men",
    tags: ["new"],
    price: 4500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Gray", "Navy", "Charcoal"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-15T00:00:00Z",
    specs: {
      Material: "Polyester blend with moisture-wicking",
      Fit: "Tapered",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "m12",
    slug: "mens-cargo-pants",
    title: "Utility Cargo Pants",
    description:
      "Functional cargo pants with multiple pockets. Features a relaxed fit, adjustable waist, and durable fabric. Utility meets style.",
    category: "apparel",
    gender: "men",
    tags: ["new", "bestseller"],
    price: 5500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Olive", "Khaki", "Navy"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-14T00:00:00Z",
    specs: {
      Material: "Cotton Twill",
      Pockets: "6 pockets total",
      "Care Instructions": "Machine wash cold",
    },
  },

  // ============================================
  // WOMEN'S APPAREL
  // ============================================

  // Women's Tanks & Tops
  {
    id: "w1",
    slug: "womens-ribbed-tank",
    title: "Ribbed Cotton Tank Top",
    description:
      "Classic ribbed tank in soft cotton blend. Features a fitted silhouette and versatile design. Perfect for layering or wearing solo.",
    category: "apparel",
    gender: "women",
    tags: ["bestseller"],
    price: 1800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["White", "Black", "Gray", "Beige"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-25T00:00:00Z",
    specs: {
      Material: "95% Cotton, 5% Elastane",
      Fit: "Fitted",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "w2",
    slug: "womens-silk-cami",
    title: "Silk Camisole Top",
    description:
      "Luxurious silk camisole with adjustable straps. Features a flattering V-neck and delicate hem. Elevate your basics collection.",
    category: "apparel",
    gender: "women",
    tags: ["premium", "new"],
    price: 4500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=800&q=80",
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Champagne", "Sage"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-24T00:00:00Z",
    specs: {
      Material: "100% Silk",
      "Care Instructions": "Dry clean or hand wash cold",
      Lining: "None",
    },
  },

  // Women's T-Shirts
  {
    id: "w3",
    slug: "womens-boyfriend-tee",
    title: "Boyfriend Fit T-Shirt",
    description:
      "Relaxed boyfriend tee in soft cotton. Features a loose fit, crew neck, and comfortable drape. Effortlessly cool everyday staple.",
    category: "apparel",
    gender: "women",
    tags: ["bestseller", "new"],
    price: 2400,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["White", "Black", "Gray", "Beige"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-23T00:00:00Z",
    specs: {
      Material: "100% Cotton",
      Fit: "Relaxed/Boyfriend",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "w4",
    slug: "womens-fitted-tee",
    title: "Fitted Crew Neck Tee",
    description:
      "Classic fitted t-shirt with a flattering silhouette. Made from premium cotton with a soft hand feel. Your wardrobe essential.",
    category: "apparel",
    gender: "women",
    tags: ["bestseller"],
    price: 2200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Navy", "Burgundy"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-22T00:00:00Z",
    specs: {
      Material: "100% Cotton",
      Fit: "Fitted",
      "Care Instructions": "Machine wash cold",
    },
  },

  // Women's Dresses
  {
    id: "w5",
    slug: "womens-linen-dress",
    title: "Linen Midi Dress",
    description:
      "Breathable linen dress in a flattering midi length. Features adjustable straps and relaxed fit. Perfect for warm weather elegance.",
    category: "apparel",
    gender: "women",
    tags: ["new", "sustainable"],
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
    rating: 4.8,
    createdAt: "2025-01-21T00:00:00Z",
    specs: {
      Material: "100% Linen",
      Length: "Midi",
      "Care Instructions": "Hand wash cold, line dry",
    },
  },
  {
    id: "w6",
    slug: "womens-slip-dress",
    title: "Silk Slip Dress",
    description:
      "Elegant silk slip dress with bias cut. Features delicate straps and a fluid drape. Versatile piece for day to night styling.",
    category: "apparel",
    gender: "women",
    tags: ["premium", "bestseller"],
    price: 7800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Champagne", "Sage", "Burgundy"],
      },
    ],
    rating: 4.9,
    createdAt: "2025-01-20T00:00:00Z",
    specs: {
      Material: "100% Silk",
      Length: "Midi",
      "Care Instructions": "Dry clean",
    },
  },

  // Women's Bottoms
  {
    id: "w7",
    slug: "womens-high-waist-jeans",
    title: "High-Waist Skinny Jeans",
    description:
      "Flattering high-waist skinny jeans in stretch denim. Features a comfortable waistband and sleek silhouette. Your new favorite denim.",
    category: "apparel",
    gender: "women",
    tags: ["bestseller"],
    price: 6200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=800&q=80",
    ],
    variants: [
      {
        id: "size",
        name: "Size",
        values: ["24", "26", "28", "30", "32", "34"],
      },
      {
        id: "color",
        name: "Color",
        values: ["Dark Blue", "Black", "Light Wash"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-19T00:00:00Z",
    specs: {
      Material: "98% Cotton, 2% Elastane",
      Fit: "Skinny",
      Rise: "High Rise",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "w8",
    slug: "womens-wide-leg-pants",
    title: "Wide Leg Trousers",
    description:
      "Sophisticated wide-leg trousers with a relaxed fit. Features a flattering high waist and flowing silhouette. Effortlessly elegant.",
    category: "apparel",
    gender: "women",
    tags: ["new", "premium"],
    price: 5800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Beige", "Navy", "Charcoal"],
      },
    ],
    rating: 4.6,
    createdAt: "2025-01-18T00:00:00Z",
    specs: {
      Material: "Polyester blend",
      Fit: "Wide Leg",
      "Care Instructions": "Machine wash cold, hang dry",
    },
  },

  // Women's Activewear
  {
    id: "w9",
    slug: "womens-sports-bra",
    title: "High-Support Sports Bra",
    description:
      "Performance sports bra with high support and moisture-wicking fabric. Features adjustable straps and breathable mesh panels.",
    category: "apparel",
    gender: "women",
    tags: ["new"],
    price: 3200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1596131397077-f36fa1619d1f?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "White", "Navy", "Sage"],
      },
    ],
    rating: 4.5,
    createdAt: "2025-01-17T00:00:00Z",
    specs: {
      Material: "Polyester with moisture-wicking",
      Support: "High",
      "Care Instructions": "Machine wash cold",
    },
  },
  {
    id: "w10",
    slug: "womens-leggings",
    title: "High-Waist Performance Leggings",
    description:
      "Premium leggings with four-way stretch and compression support. Features a high waistband and squat-proof fabric. Gym to street ready.",
    category: "apparel",
    gender: "women",
    tags: ["bestseller", "new"],
    price: 4200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      {
        id: "color",
        name: "Color",
        values: ["Black", "Navy", "Gray", "Burgundy"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-16T00:00:00Z",
    specs: {
      Material: "Nylon/Spandex blend",
      Features: "Four-way stretch, moisture-wicking",
      "Care Instructions": "Machine wash cold",
    },
  },

  // Women's Outerwear
  {
    id: "w11",
    slug: "womens-cashmere-sweater",
    title: "Pure Cashmere Sweater",
    description:
      "Luxuriously soft cashmere sweater with ribbed detailing. Offers unmatched warmth and comfort while maintaining a sophisticated look.",
    category: "apparel",
    gender: "women",
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
    rating: 4.9,
    createdAt: "2025-01-15T00:00:00Z",
    specs: {
      Material: "100% Cashmere",
      Fit: "Regular",
      "Care Instructions": "Hand wash cold, lay flat to dry",
    },
  },
  {
    id: "w12",
    slug: "womens-trench-coat",
    title: "Classic Trench Coat",
    description:
      "Timeless trench coat with belted waist. Features double-breasted buttons, storm flap, and water-resistant fabric. A wardrobe investment piece.",
    category: "apparel",
    gender: "women",
    tags: ["premium", "new"],
    price: 16800,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["XS", "S", "M", "L", "XL"] },
      { id: "color", name: "Color", values: ["Beige", "Black", "Navy"] },
    ],
    rating: 4.8,
    createdAt: "2025-01-14T00:00:00Z",
    specs: {
      Material: "Water-resistant cotton blend",
      Fit: "Classic",
      "Care Instructions": "Dry clean only",
    },
  },

  // ============================================
  // ACCESSORIES
  // ============================================

  // Bags
  {
    id: "a1",
    slug: "leather-tote-bag",
    title: "Genuine Leather Tote Bag",
    description:
      "Spacious leather tote bag perfect for work or travel. Features reinforced handles, interior pockets, and secure zip closure.",
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
    createdAt: "2025-01-13T00:00:00Z",
    specs: {
      Material: "Full-Grain Leather",
      Dimensions: "38cm x 30cm x 12cm",
      "Care Instructions": "Leather conditioner recommended",
    },
  },
  {
    id: "a2",
    slug: "crossbody-bag",
    title: "Canvas Crossbody Bag",
    description:
      "Practical canvas crossbody bag with leather trim. Perfect for everyday use with multiple compartments and adjustable strap.",
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
    rating: 4.5,
    createdAt: "2025-01-12T00:00:00Z",
    specs: {
      Material: "Canvas with Leather Trim",
      Dimensions: "24cm x 18cm x 8cm",
    },
  },

  // Watches
  {
    id: "a3",
    slug: "minimalist-watch",
    title: "Minimalist Steel Watch",
    description:
      "Elegant minimalist watch with clean dial and premium stainless steel case. Features sapphire crystal glass and Japanese quartz movement.",
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
        values: ["Black Leather", "Brown Leather", "Steel"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-11T00:00:00Z",
    specs: {
      "Case Material": "Stainless Steel",
      "Case Diameter": "40mm",
      Movement: "Japanese Quartz",
      "Water Resistance": "3ATM",
    },
  },

  // Sunglasses
  {
    id: "a4",
    slug: "aviator-sunglasses",
    title: "Classic Aviator Sunglasses",
    description:
      "Timeless aviator sunglasses with UV400 protection. Features polarized lenses and metal frame with adjustable nose pads.",
    category: "accessories",
    tags: ["bestseller"],
    price: 3500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Frame", values: ["Gold", "Silver", "Black"] },
      { id: "lens", name: "Lens", values: ["Gray", "Brown", "Green"] },
    ],
    rating: 4.6,
    createdAt: "2025-01-10T00:00:00Z",
    specs: {
      "UV Protection": "UV400",
      "Lens Type": "Polarized",
      "Frame Material": "Metal Alloy",
    },
  },

  // Wallets
  {
    id: "a5",
    slug: "leather-wallet",
    title: "Slim Leather Wallet",
    description:
      "Minimalist leather wallet with RFID protection. Compact design holds up to 8 cards plus cash. Perfect for those who travel light.",
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
    rating: 4.5,
    createdAt: "2025-01-09T00:00:00Z",
    specs: {
      Material: "Full-Grain Leather",
      "Card Slots": "8",
      "RFID Protection": "Yes",
      Dimensions: "11cm x 8cm x 1cm",
    },
  },

  // Jewelry
  {
    id: "a6",
    slug: "silver-necklace",
    title: "Sterling Silver Chain Necklace",
    description:
      "Delicate sterling silver chain necklace. Features a minimalist design that layers beautifully. Everyday luxury piece.",
    category: "accessories",
    tags: ["new", "premium"],
    price: 4200,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
    variants: [
      {
        id: "length",
        name: "Length",
        values: ["16 inch", "18 inch", "20 inch"],
      },
    ],
    rating: 4.7,
    createdAt: "2025-01-08T00:00:00Z",
    specs: {
      Material: "925 Sterling Silver",
      Clasp: "Spring Ring",
      "Care Instructions": "Polish with soft cloth",
    },
  },
  {
    id: "a7",
    slug: "gold-hoop-earrings",
    title: "Gold-Plated Hoop Earrings",
    description:
      "Classic hoop earrings in gold-plated brass. Features a lightweight design and secure clasp. Timeless accessory for any occasion.",
    category: "accessories",
    tags: ["bestseller"],
    price: 2500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=80",
    ],
    variants: [
      { id: "size", name: "Size", values: ["Small", "Medium", "Large"] },
    ],
    rating: 4.6,
    createdAt: "2025-01-07T00:00:00Z",
    specs: {
      Material: "Gold-Plated Brass",
      Closure: "Hinged Clasp",
      "Care Instructions": "Avoid water and perfume",
    },
  },

  // Silk Scarf
  {
    id: "a8",
    slug: "silk-scarf",
    title: "Pure Silk Scarf",
    description:
      "Luxurious hand-rolled silk scarf with vibrant prints. Made from 100% mulberry silk. Versatile accessory for any outfit.",
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
        values: ["Floral", "Geometric", "Abstract"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-06T00:00:00Z",
    specs: {
      Material: "100% Mulberry Silk",
      Dimensions: "90cm x 90cm",
      "Care Instructions": "Dry clean or hand wash cold",
    },
  },

  // ============================================
  // GIFTS CATEGORY (Premium & Gift-Worthy Items)
  // ============================================

  {
    id: "g1",
    slug: "gift-set-leather",
    title: "Premium Leather Gift Set",
    description:
      "Curated gift set featuring a leather wallet and cardholder in premium packaging. Perfect gift for any occasion.",
    category: "gifts",
    tags: ["premium", "bestseller"],
    price: 8500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
      "https://images.unsplash.com/photo-1606011334315-025e4baab810?w=800&q=80",
    ],
    variants: [
      { id: "color", name: "Color", values: ["Black", "Brown", "Navy"] },
    ],
    rating: 4.9,
    createdAt: "2025-01-05T00:00:00Z",
    specs: {
      Includes: "Wallet + Cardholder",
      Material: "Full-Grain Leather",
      Packaging: "Premium Gift Box",
    },
  },
  {
    id: "g2",
    slug: "gift-cashmere-set",
    title: "Cashmere Scarf & Beanie Set",
    description:
      "Luxurious cashmere scarf and beanie gift set. Beautifully packaged for gifting. The ultimate in comfort and style.",
    category: "gifts",
    tags: ["premium", "new"],
    price: 14500,
    currency: "LKR",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    ],
    variants: [
      {
        id: "color",
        name: "Color",
        values: ["Gray", "Navy", "Burgundy", "Cream"],
      },
    ],
    rating: 4.8,
    createdAt: "2025-01-04T00:00:00Z",
    specs: {
      Material: "100% Cashmere",
      Includes: "Scarf + Beanie",
      Packaging: "Premium Gift Box with Ribbon",
    },
  },
];
