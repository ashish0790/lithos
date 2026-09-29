export interface ProductItem {
  id: string;
  name: string;
  brand: "Mahacol" | "Emdilith" | "Mahafix" | "Jelfix" | "Multiseal" | "Formisol";
  category: "Wood Adhesives" | "Industrial Adhesives" | "Packaging & Lamination" | "Tapes & Stickers" | "Construction Chemicals";
  tagline: string;
  description: string;
  applications: string[];
  keyFeatures: string[];
  specs?: {
    base?: string;
    viscosity?: string;
    solids?: string;
    density?: string;
    pH?: string;
  };
  image: string;
  badge?: string;
}

export interface MarketItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  recommendedProducts: string[];
  features: string[];
}

export interface PlantLocation {
  id: string;
  name: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  focus: string;
}

export const COMPANY_STATS = [
  { value: "40+", label: "Years of Heritage", sublabel: "Pioneering adhesives since 1986" },
  { value: "120,000+", label: "Tons Per Year", sublabel: "Combined manufacturing capacity" },
  { value: "12+", label: "Strategic Depots", sublabel: "Nationwide express logistics" },
  { value: "1,000+", label: "Enterprise Clients", sublabel: "Domestic & global footprint" },
];

export const CORE_VALUES = [
  {
    title: "Trust",
    icon: "handshake",
    description: "We consistently build trust in every interaction by conducting ourselves with absolute transparency and high professional ethics.",
  },
  {
    title: "Teamwork",
    icon: "groups",
    description: "We believe diverse talents and cultures keep our minds receptive to breakthroughs, working together toward a shared commitment.",
  },
  {
    title: "Passion for Excellence",
    icon: "verified",
    description: "We bring energy to our partners and customers, raising industry benchmarks in adhesive performance every single year.",
  },
  {
    title: "Innovation",
    icon: "lightbulb",
    description: "Going beyond conventional formulations, exploring sustainable green chemistries and tailored polymer solutions.",
  },
  {
    title: "Prosperity",
    icon: "trending_up",
    description: "Creating enduring value and financial growth for our customers, dealers, partners, and our dedicated team.",
  },
];

export const MILESTONES = [
  { year: "1986", title: "Inception", description: "Founded as Hans Marketing and Services Pvt. Ltd. trading polymer emulsions and adhesives." },
  { year: "1992", title: "BSE Listing", description: "Renamed to Lithos Adhesive Ltd., integrated manufacturing operations and listed on the Bombay Stock Exchange." },
  { year: "2003", title: "Acquisition of Mafatlal Dyes & Chemicals", description: "Acquired emulsion & adhesives business, bringing iconic brands Mahacol, Emditex, Emdilith & Emdicryl into sole ownership." },
  { year: "2007-2012", title: "Infrastructure & Technology Expansion", description: "Commissioned modern multi-stream synthesis facilities and scalable chemical reactors targeting international exports." },
  { year: "2019", title: "Capacity Expansion", description: "Commissioned high-volume polymer synthesis lines to serve accelerated nationwide industrial demand." },
  { year: "2020-2022", title: "Pan-India Depot Network", description: "Established regional depots across Mumbai, Ahmedabad, Surat, Kolkata, Hyderabad, Ludhiana, Meerut, Agra, Patna, and Ranchi." },
];

export const MARKETS: MarketItem[] = [
  {
    id: "woodworking",
    title: "Woodworking & Furniture",
    icon: "chair",
    shortDesc: "Comprehensive bonding systems for carpentry, PVC/mica lamination, edge banding, and timber joinery.",
    fullDesc: "From luxury furniture makers to interior contractors, Mahacol is trusted across India for quick setting, water resistance, heat resistance, and invisible glue lines.",
    recommendedProducts: ["Mahacol N3", "Mahacol Mica Special", "Mahacol Jalveer", "Mahacol Heatfit", "Mahacol Lam-2-Lam"],
    features: ["Zero bubbles on laminate pressing", "High shear strength & heat resistance", "Fast open-time control", "Termite & moisture resistant"],
  },
  {
    id: "packaging",
    title: "Packaging & Paper Converting",
    icon: "inventory_2",
    shortDesc: "High-speed adhesives for corrugated carton making, side-seaming, tube winding, and window patching.",
    fullDesc: "Engineered for automatic high-speed folder-gluers and rigid box setups, delivering immediate fiber tear and clean machine runnability.",
    recommendedProducts: ["Emdilith SPL", "Emdilith CUR", "Emdilith DM 71", "Emdilith D50P"],
    features: ["Ultra-clean roller application", "Instant fiber-tear tack", "High humidity endurance", "Fast drying for automated lines"],
  },
  {
    id: "lamination-film",
    title: "Print & Film Lamination",
    icon: "layers",
    shortDesc: "Optical-grade water-based emulsions for BOPP, PET, and metallized films onto paper & duplex board.",
    fullDesc: "Emdilith lamination adhesives deliver crystal clarity, high gloss, zero ink bleed, and withstand deep creasing and embossing.",
    recommendedProducts: ["Emdilith LM 54", "Emdilith LM 50", "Emdilith LMEM", "Emdilith LAA"],
    features: ["Crystal-clear optical transparency", "Superior bond with printed/varnished board", "Deep embossing flexibility", "Phthalate-free formulas"],
  },
  {
    id: "tapes-labels",
    title: "Tapes & Label Industry",
    icon: "loyalty",
    shortDesc: "High-performance Pressure Sensitive Adhesives (PSA) for self-adhesive tapes, holographic seals, and labels.",
    fullDesc: "Acrylic emulsion PSAs that provide balanced peel, shear, and loop tack across diverse temperature ranges and release liners.",
    recommendedProducts: ["Emdilith PS 90", "Emdilith PS 92", "Emdilith DM 47", "Formisol PSA(M)"],
    features: ["Phthalate-free & low VOC", "Excellent cohesion & plasticizer resistance", "Smooth coatability on BOPP/PVC", "High shear adhesive strength"],
  },
  {
    id: "construction",
    title: "Construction Chemicals",
    icon: "foundation",
    shortDesc: "Polymer-modified tile adhesives, integral waterproofing admixtures, and concrete bonding agents.",
    fullDesc: "Under our Mahafix brand, we formulate high-tensile cementitious tile adhesives and waterproofing resins designed to withstand extreme thermal movement and moisture.",
    recommendedProducts: ["Mahafix Tile Adhesive", "Mahacol Nail Free", "Mahafix SBR Latex", "Mahafix Waterproofer"],
    features: ["Heavy tile & granite non-sag grip", "High water repellency", "Crack bridging flexibility", "Extended pot life"],
  },
  {
    id: "paints-coatings",
    title: "Paints, Textiles & Polymers",
    icon: "format_paint",
    shortDesc: "Specialty polymer emulsions, Redispersible Polymer Powders (RDP), and textile printing binders.",
    fullDesc: "Formulating 100% pure acrylics, styrene-acrylics, opaque polymers, and binders for exterior paints, textile printing, and technical non-wovens.",
    recommendedProducts: ["Paint Emulsions", "RDP", "Opaque Polymer", "Emditex Binders"],
    features: ["Scrub resistance in paints", "UV stable polymer film", "Soft handle in textile printing", "High pigment binding capacity"],
  },
];

export const PRODUCTS: ProductItem[] = [
  // Wood Adhesives (Mahacol)
  {
    id: "mahacol-n3",
    name: "Mahacol N3",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "The Benchmark in Woodworking Adhesives",
    description: "Premium synthetic resin adhesive providing unbreakable bonding for hardwood, plywood, laminate, and blockboard furniture joinery.",
    applications: ["Plywood to laminate bonding", "Furniture carpentry & modular kitchens", "Hardwood tongue-and-groove joints", "Veneer pressing"],
    keyFeatures: ["Unmatched tensile bond strength", "Resistant to heat and normal humidity", "Uniform spreading with low consumption", "Non-staining glue line"],
    specs: { base: "Polyvinyl Acetate Emulsion", viscosity: "20,000 - 35,000 cps", solids: "45% ± 1", pH: "4.0 - 5.5" },
    image: "/images/adhesives/mahacol-n3.png",
    badge: "Flagship",
  },
  {
    id: "mahacol-mica-special",
    name: "Mahacol Mica Special",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Specialized High-Tack Adhesive for Mica & Laminates",
    description: "Engineered specifically to prevent air-bubbles and de-lamination when pressing decorative laminates and mica sheets onto wood and MDF.",
    applications: ["Decorative mica sheets", "0.8mm to 1.5mm laminates", "Vertical and horizontal furniture panels", "Commercial office workstations"],
    keyFeatures: ["Zero bubbling formulation", "Quick initial grab", "Superior resistance against thermal expansion", "Easy brush and comb-trowel spread"],
    specs: { base: "Modified Synthetic Polymer", viscosity: "22,000 - 32,000 cps", solids: "46% ± 1", pH: "4.5 - 5.5" },
    image: "/images/adhesives/mahacol-mica-special.png",
    badge: "Best Seller",
  },
  {
    id: "mahacol-jalveer",
    name: "Mahacol Jalveer",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Advanced Waterproof & Moisture-Resistant Adhesive",
    description: "Specially formulated water-resistant adhesive ideal for kitchens, bathrooms, coastal regions, and furniture subjected to damp environments.",
    applications: ["Kitchen cabinets & under-sink counters", "Bathroom vanity units", "Outdoor patio furniture", "Coastal zone woodwork"],
    keyFeatures: ["Compliant with D3 water resistance", "Protects joints from continuous moisture exposure", "Fast setting speed", "Prevents fungal and mold growth"],
    specs: { base: "Cross-linking Polymer Emulsion", viscosity: "25,000 - 40,000 cps", solids: "48% ± 1", pH: "3.5 - 5.0" },
    image: "/images/adhesives/mahacol-jalveer.png",
    badge: "Waterproof D3",
  },
  {
    id: "mahacol-heatfit",
    name: "Mahacol Heatfit",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Extreme Temperature Resistant Adhesive (Up to 170°C)",
    description: "Formulated for high-heat environments where conventional adhesives fail, such as dining table tops, kitchen cooktops, and sun-facing panels.",
    applications: ["Near cooking ranges & ovens", "Hot utensil table surfaces", "Sun-exposed balcony paneling", "Industrial acoustic enclosures"],
    keyFeatures: ["Withstands heat exposure up to 170°C", "Prevents laminate edge curling", "Superior thermal shock stability", "Fast cure time"],
    specs: { base: "Thermosetting Modified Polymer", viscosity: "20,000 - 30,000 cps", solids: "47% ± 1", pH: "4.0 - 5.0" },
    image: "/images/adhesives/mahacol-heatfit.png",
    badge: "Heat Resistant",
  },
  {
    id: "mahacol-mahaquick",
    name: "Mahacol Mahaquick",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Super Fast Setting Wood Adhesive",
    description: "Enables carpenters and production workshops to clamp and handle bonded elements in just 2 hours, drastically speeding turnaround.",
    applications: ["Express modular furniture manufacturing", "Quick site repairs and assembly", "Factory production line lamination", "Edge banding"],
    keyFeatures: ["Clamping time reduced to 2 hours", "Saves labor and clamp inventory", "High early bond strength", "Smooth spreadability"],
    specs: { base: "Fast-Curing PVA Emulsion", viscosity: "28,000 - 38,000 cps", solids: "50% ± 1", pH: "4.0 - 5.0" },
    image: "/images/adhesives/mahacol-mahaquick.png",
  },
  {
    id: "mahacol-nail-free",
    name: "Mahacol Nail Free",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Instant Grab Construction Adhesive Eliminating Nails",
    description: "Heavy-duty instant-grab adhesive designed to bond wood, skirting, tiles, stone, metal, and plaster without drilling or computer nail punctures.",
    applications: ["Wall paneling & skirting boards", "Mirror & decorative trim mounting", "Tile & stone accent fixing", "Acoustic foam bonding"],
    keyFeatures: ["Instant high green strength", "Fills gaps up to 9mm", "Eliminates drill holes & nail marks", "Works on vertical surfaces without slip"],
    specs: { base: "Elastomeric High-Polymer", viscosity: "Thixotropic Paste", solids: "75% ± 2", density: "1.25 ± 0.05" },
    image: "/images/adhesives/mahacol-nail-free.png",
    badge: "High Strength",
  },
  {
    id: "mahacol-lam-2-lam",
    name: "Mahacol Lam-2-Lam",
    brand: "Mahacol",
    category: "Wood Adhesives",
    tagline: "Direct Laminate to Laminate Bonding",
    description: "Revolutionary adhesive engineered to bond non-porous laminate sheets directly onto existing laminates without prior sanding or roughing.",
    applications: ["Refurbishing old laminate furniture", "Double-sided decorative panels", "Post-forming edges", "Commercial shop fitting"],
    keyFeatures: ["No sanding or roughing needed", "Bonds non-porous to non-porous substrates", "High flexibility to absorb movement", "Rapid tack development"],
    specs: { base: "Specialty Co-Polymer", viscosity: "15,000 - 25,000 cps", solids: "49% ± 1", pH: "5.0 - 6.5" },
    image: "/images/adhesives/mahacol-lam-2-lam.png",
  },

  // Industrial Adhesives (Rubber / Solvent)
  {
    id: "mahacol-sr-501",
    name: "Mahacol SR 501 / 501 HV",
    brand: "Mahacol",
    category: "Industrial Adhesives",
    tagline: "High-Strength Synthetic Rubber Contact Adhesive",
    description: "Solvent-based contact adhesive providing immediate high-tack bonding for foam, leather, rubber, wood, and automotive upholstery.",
    applications: ["Foam-to-foam & foam-to-wood fixing", "Automotive coach building & roof lining", "Footwear and leather goods manufacturing", "Carpeting and acoustic padding"],
    keyFeatures: ["Instant bond on contact", "High heat tolerance", "Excellent flexibility", "Uniform brush and spray consistency"],
    specs: { base: "Synthetic Rubber (Solvent)", viscosity: "800 - 1,600 cps", density: "0.85 ± 0.03", solids: "22% ± 1" },
    image: "/images/adhesives/mahacol-sr-501.jpg",
  },
  {
    id: "mahacol-hr-thermo",
    name: "Mahacol HR-Thermo",
    brand: "Mahacol",
    category: "Industrial Adhesives",
    tagline: "Extreme Heat-Resistant Contact Adhesive",
    description: "Formulated for critical automotive roof headliners, marine boat building, and vertical decorative lamination under continuous sun exposure.",
    applications: ["Automotive roof headlining", "Marine boat interiors", "Vertical facade cladding", "Heavy footwear manufacturing"],
    keyFeatures: ["High thermal resistance", "Immediate high green strength", "Excellent resistance to plasticizers", "Moisture and vibration resistant"],
    specs: { base: "Polychloroprene Rubber", viscosity: "1,900 - 2,200 cps", density: "0.86 ± 0.05", solids: "24% ± 1" },
    image: "/images/adhesives/mahacol-sr-501.jpg",
  },
  {
    id: "multiseal-sb-83",
    name: "Multiseal SB 82 / 83 / 84",
    brand: "Multiseal",
    category: "Industrial Adhesives",
    tagline: "Sprayable Contact Adhesive for Furniture & Mattresses",
    description: "Fast-drying sprayable contact cement for bonding PU foam to decorative laminates, particle board, MDF, high-density foams, and metal frames.",
    applications: ["Mattress manufacturing", "Ergonomic office seating", "Sofa & cushion fabrication", "Partition panels"],
    keyFeatures: ["Non-clogging spray consistency", "Fast flash-off time", "High bond strength with low odor", "Cost-effective mileage"],
    specs: { base: "Rubber in Quick-Dry Solvents", viscosity: "100 - 260 cps", density: "0.80 ± 0.03", solids: "20% ± 1" },
    image: "/images/adhesives/mahacol-formistik.png",
  },

  // Packaging & Lamination
  {
    id: "emdilith-lm-54",
    name: "Emdilith LM 54",
    brand: "Emdilith",
    category: "Packaging & Lamination",
    tagline: "High-Gloss BOPP / Film Lamination Adhesive",
    description: "Industry standard water-based acrylic emulsion for laminating BOPP and polyester films onto printed duplex boards and paper.",
    applications: ["Cosmetics & pharmaceutical mono-cartons", "Book covers & catalog covers", "Window lamination", "Luxury shopping bags"],
    keyFeatures: ["Crystal-clear optical depth", "Can cover anti-setoff powder sprays smoothly", "No delamination during deep creasing", "Excellent machine runnability"],
    specs: { base: "Acrylic Polymer Emulsion", viscosity: "50 - 65 PS", solids: "53% ± 1", pH: "4.0 - 5.5" },
    image: "/images/adhesives/emdilith-lm-54.jpg",
    badge: "Industry Standard",
  },
  {
    id: "emdilith-spl",
    name: "Emdilith SPL / DM 71",
    brand: "Emdilith",
    category: "Packaging & Lamination",
    tagline: "High-Speed Carton Flap & Side-Seam Adhesive",
    description: "Formulated for automated folder-gluers, delivering immediate fiber tear on challenging varnished, UV-coated, and metallized carton flaps.",
    applications: ["Automatic carton folder-gluers", "Varnished & UV-coated flaps", "Corrugated box side-seaming", "Rigid setup boxes"],
    keyFeatures: ["Instant fiber tear within seconds", "Non-splattering at high line speeds", "Bonds tough varnished surfaces", "Clean nozzle jetting"],
    specs: { base: "Vinyl Acetate Copolymer", viscosity: "200 - 350 PS", solids: "56% ± 1", pH: "4.0 - 5.0" },
    image: "/images/adhesives/emdilith-lm-54.jpg",
  },
  {
    id: "emdilith-cur",
    name: "Emdilith CUR",
    brand: "Emdilith",
    category: "Packaging & Lamination",
    tagline: "Corrugated Paper Tube Winding & Flute Bonding",
    description: "High-efficiency emulsion for paper core winding, edge protectors, composite containers, and multi-ply corrugated paperboard pasting.",
    applications: ["Paper tube & core winding", "Angle board / edge protector manufacturing", "Heavy-duty paper cones", "Carton laminate pasting"],
    keyFeatures: ["High radial crush strength in tubes", "Fast water release for rapid drying", "Economical coverage", "High stiffness of finished cores"],
    specs: { base: "Polymer Emulsion", viscosity: "20 - 30 PS", solids: "30% ± 2", pH: "4.0 - 5.5" },
    image: "/images/adhesives/emdilith-lm-54.jpg",
  },

  // Tapes & Stickers (PSA)
  {
    id: "emdilith-dm-47",
    name: "Emdilith DM 47 (Phthalate-Free)",
    brand: "Emdilith",
    category: "Tapes & Stickers",
    tagline: "Eco-Friendly Pressure Sensitive Adhesive (Screen/Roll)",
    description: "Phthalate-free pressure-sensitive emulsion for self-adhesive stickers, product labels, and security decals requiring clean peel or permanent tack.",
    applications: ["Pharmaceutical and food labels", "Decorative vinyl stickers", "Screen-printed decals", "Carpet backing"],
    keyFeatures: ["Certified phthalate-free and low VOC", "Excellent cohesion with no adhesive transfer", "High shear strength", "Smooth surface wet-out"],
    specs: { base: "Pure Acrylic PSA", viscosity: "70 - 90 PS", solids: "55% ± 1", pH: "4.0 - 5.0" },
    image: "/images/adhesives/formisol.png",
    badge: "Phthalate Free",
  },
  {
    id: "emdilith-ps-92",
    name: "Emdilith PS 92",
    brand: "Emdilith",
    category: "Tapes & Stickers",
    tagline: "High Tack Adhesive for BOPP & Industrial Tapes",
    description: "Water-based acrylic adhesive for direct coating on high-speed tape manufacturing machines producing packaging tapes and masking rolls.",
    applications: ["Packaging tape rolls (BOPP)", "Stationery tapes", "Double-sided tissue tapes", "Foam mounting tapes"],
    keyFeatures: ["Aggressive initial grab & high loop tack", "High shear holding power", "Clean release from silicone liners", "Resistant to aging and UV discoloration"],
    specs: { base: "Modified Acrylic Emulsion", viscosity: "< 500 cps", solids: "60% ± 1", pH: "8.5 - 9.5" },
    image: "/images/adhesives/masking-tape.jpg",
  },

  // Construction Chemicals (Mahafix)
  {
    id: "mahafix-tile-adhesive",
    name: "Mahafix Polymer Tile Adhesive",
    brand: "Mahafix",
    category: "Construction Chemicals",
    tagline: "Heavy-Duty Polymer-Modified Tile & Stone Adhesive",
    description: "High performance factory-blended adhesive for fixing large format vitrified tiles, granite, and marble on floors and vertical facades.",
    applications: ["Large format vitrified tiles (1200x2400mm+)", "Granite & Italian marble fixing", "Swimming pools & wet areas", "External facade cladding"],
    keyFeatures: ["Zero vertical slip on wall tiles", "High polymer modification for thermal flexibility", "Waterproof and weather proof", "Self-curing with extended open time"],
    specs: { base: "Polymer-Modified Cementitious Matrix", solids: "100%", pH: "Alkaline" },
    image: "/images/adhesives/mahafix-tile-adhesive.jpg",
    badge: "Heavy Duty",
  },
  {
    id: "mahafix-sbr-latex",
    name: "Mahafix SBR Bonding Latex",
    brand: "Mahafix",
    category: "Construction Chemicals",
    tagline: "High-Performance Waterproofing & Repair Latex",
    description: "Styrene-butadiene rubber latex emulsion used as a bonding agent for old-to-new concrete, plaster repair, and structural waterproofing coats.",
    applications: ["Structural concrete repairs", "Basement and terrace waterproofing", "Floor screeds and plaster bonding", "Corrosion protection slurry for rebar"],
    keyFeatures: ["Increases compressive and flexural strength", "Drastically reduces water permeability", "Exceptional bond to masonry", "Improves chemical resistance"],
    specs: { base: "Styrene Butadiene Copolymer Latex", solids: "42% ± 1", pH: "9.0 - 10.5" },
    image: "/images/adhesives/mahafix-tile-adhesive.jpg",
  },
];

export const PLANTS: PlantLocation[] = [
  {
    id: "dahanu",
    name: "Dahanu Manufacturing Unit",
    state: "Maharashtra",
    address: "Shreeji Estate, Vadkun, College Road, Dahanu, Maharashtra - 401602",
    phone: "02528-224463 / 223107",
    email: "dahanu@lithosadhesives.com",
    focus: "Specialty Polymer Emulsions & Mahacol Consumer Range",
  },
  {
    id: "silvassa",
    name: "Silvassa Manufacturing Unit",
    state: "Dadra & Nagar Haveli",
    address: "7A, Government Industrial Estate, Post - Pipria, Silvassa - 396230",
    phone: "0260-2640045",
    email: "silvassa@lithosadhesives.com",
    focus: "High-Volume Polymer Emulsions, Industrial Adhesives & Textile Binders",
  },
  {
    id: "dahej",
    name: "Dahej Mega Export Plant",
    state: "Gujarat",
    address: "Plot No. D-2/CH/49, Industrial Phase, Dahej - 2, GIDC Industrial Estate, Taluka Vagra, Dist. Bharuch - 392130",
    phone: "+91 93778 24268",
    email: "dahej@lithosadhesives.com",
    focus: "Largest Modern Plant - Exports, Corporate Enterprise Lines & Bulk Polymers",
  },
  {
    id: "mehatpur",
    name: "Mehatpur Manufacturing Unit",
    state: "Himachal Pradesh",
    address: "Industrial Area Mehatpur, Dist. Una, Himachal Pradesh - 174315",
    phone: "+91 1975 238245",
    email: "mehatpur@lithosadhesives.com",
    focus: "Northern Regional Hub for Consumer Adhesives & Paint Emulsions",
  },
  {
    id: "tumkur",
    name: "Tumkur Manufacturing Unit",
    state: "Karnataka",
    address: "KIADB Industrial Area, Antharasanahalli, Tumkur, Karnataka - 572106",
    phone: "+91 816 2284900",
    email: "tumkur@lithosadhesives.com",
    focus: "Southern Hub for Construction Chemicals, Mahafix & Emulsions",
  },
];

export const COMPANY_INFO = {
  name: "Lithos Adhesive LLP",
  tagline: "Har Bond Mein Mazbooti",
  address: "Survey No. 694, Plot No. 11, Jimi Enterprise, Abhay Stone Road, Lajai, Tankara Morbi, 363 641, Gujarat, India",
  email: "info@lithosadhesivellp.net",
  website: "www.lithosadhesivellp.net",
  websiteUrl: "https://www.lithosadhesivellp.net",
};

export const DEPOTS = [
  "Morbi (Headquarters & Works, Gujarat)",
  "Ahmedabad (Gujarat)",
  "Surat (Gujarat)",
  "Mumbai (Maharashtra)",
  "Delhi NCR",
  "Kolkata (West Bengal)",
  "Hyderabad (Telangana)",
  "Ludhiana (Punjab)",
  "Lucknow (Uttar Pradesh)",
  "Meerut (Uttar Pradesh)",
  "Agra (Uttar Pradesh)",
  "Patna (Bihar)",
  "Ranchi (Jharkhand)",
];
