export type Category = "Large Format Slabs" | "Porcelain Floor Tiles";

export type Tile = {
  id: string;
  category: Category;
  collection: string;
  name: string;
  size: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const tiles: Tile[] = [
  {
    id: "calacatta-borghini",
    category: "Large Format Slabs",
    collection: "Calacatta Borghini",
    name: "Polished Marble Effect",
    size: "1200x2400mm / 9mm Thickness",
    image: "/images/tiles/calacatta-borghini.jpg",
    alt: "A sprawling, luxurious living space featuring expansive marble-look large format porcelain floor tiles. The tiles have intricate veining in shades of gold and deep gray, set against a bright, light-mode minimalist interior. Soft natural sunlight streams through floor-to-ceiling windows, highlighting the polished finish and seamless grout lines.",
    featured: true,
  },
  {
    id: "urban-concrete",
    category: "Large Format Slabs",
    collection: "Urban Concrete",
    name: "Matte Finish",
    size: "1200x2800mm",
    image: "/images/tiles/urban-concrete.jpg",
    alt: "Close up shot of a textured, matte finish dark gray concrete-look porcelain slab in a high-end architectural setting. Minimalist lighting casts soft shadows across the subtle texture. The aesthetic is industrial chic, moody, and highly detailed.",
  },
  {
    id: "travertino-navona",
    category: "Large Format Slabs",
    collection: "Travertino Navona",
    name: "Honed Finish",
    size: "1600x3200mm",
    image: "/images/tiles/travertino-navona.jpg",
    alt: "A bright, minimalist commercial lobby featuring warm beige travertine-look large format porcelain tiles on both the floor and walls. The lighting is crisp and modern, emphasizing the natural stone aesthetic and clean architectural lines of the space.",
  },
  {
    id: "oakwood-chevron",
    category: "Porcelain Floor Tiles",
    collection: "Oakwood Chevron",
    name: "Natural Wood Finish",
    size: "200x1200mm",
    image: "/images/tiles/oakwood-chevron.jpg",
    alt: "A beautifully styled kitchen floor featuring classic wood-look porcelain tiles arranged in a chevron pattern. The tiles have warm honey and oak tones. Sunlight highlights the realistic wood grain texture, creating a cozy yet highly durable surface.",
  },
  {
    id: "pietra-sand",
    category: "Porcelain Floor Tiles",
    collection: "Pietra Sand",
    name: "Anti-Slip Exterior",
    size: "800x800mm / 20mm",
    image: "/images/tiles/pietra-sand.jpg",
    alt: "A serene outdoor patio setting showcasing thick, textured stone-look porcelain pavers in soft sand colors. The scene includes minimalist outdoor furniture and subtle landscaping. The lighting suggests early morning, emphasizing the anti-slip texture of the tiles.",
  },
  {
    id: "nero-slate",
    category: "Porcelain Floor Tiles",
    collection: "Nero Slate",
    name: "Structured Finish",
    size: "600x1200mm",
    image: "/images/tiles/nero-slate.jpg",
    alt: "A sleek, modern bathroom featuring dark, dramatic slate-look porcelain floor tiles. The tiles have subtle metallic undertones that catch the light from modern vanity fixtures. The overall mood is sophisticated, dark-mode inspired luxury.",
  },
];

export const categories: (Category | "All")[] = [
  "All",
  "Porcelain Floor Tiles",
  "Large Format Slabs",
];
