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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VkOVaTc9AysYkD6DcqO3ynQdj7PN6qD-v9tU_vTYOg81uVn2L8k2vDqrtOANieWvNPADlPtAAWkiEXBzxE16dkLNs2ydi4c-rzPTSXwppGNyPL78lRfloZb2dmjCWMDFNSt0S2w2qvrcxg-NjHZBKh_miHZWfqD4oSUNh4rRMAtmv1jspW5bmKUudHJTZreCuyCedWg6jrbwzj-SS2h3D0HAlqxE4PyReOWqYqxTMuulWgwyr0Pdkt9g0",
    alt: "A sprawling, luxurious living space featuring expansive marble-look large format porcelain floor tiles. The tiles have intricate veining in shades of gold and deep gray, set against a bright, light-mode minimalist interior. Soft natural sunlight streams through floor-to-ceiling windows, highlighting the polished finish and seamless grout lines.",
    featured: true,
  },
  {
    id: "urban-concrete",
    category: "Large Format Slabs",
    collection: "Urban Concrete",
    name: "Matte Finish",
    size: "1200x2800mm",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1V-4sR0g0R90aoDyjIizxcOVCW0oj_Qq_d4hUhjtFy00ZMxknX2QfqCCIskZKEPhJUz-m2DmMm9ruXgBtpyHnXbRLR2rvpJ-J-8dRtIX3nq7P83L5YaxuUe12bU4fh6XmnXX1CKFEd2bsBIpi8Q2UE5Y7_Ws6qqM-rzA-mg4IvAyLFTU048ZOjWRgTxsw5rv4DXUYI51wtGfcC108PosnDfsTosM8njNqzxTIeQ5bx6mopVX0IA87Zy8upT",
    alt: "Close up shot of a textured, matte finish dark gray concrete-look porcelain slab in a high-end architectural setting. Minimalist lighting casts soft shadows across the subtle texture. The aesthetic is industrial chic, moody, and highly detailed.",
  },
  {
    id: "travertino-navona",
    category: "Large Format Slabs",
    collection: "Travertino Navona",
    name: "Honed Finish",
    size: "1600x3200mm",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1U8pa4rfGljz6e5bzisSGlhpYE-ZwU0c3Gm9pNjdsHvQfsZWATaOnc-NvkuSanfSZnib0_6z2IfJPOZZ1LcNfoQqAjV4gPpTd6eyEhJH4quexsoI9IT6Ke_vhCyaJTYNzNmlTDmOvmv_nv5ltjCNpho6q1-6DQZp_Rn2LdHIm3t9DOMxEOn_hhh8gcHXfNVz8sTsp_goR5nKYSp-0PagHXIXh8p0B03n5j3fqv3aS4tux7Acjsc7uU0pWir",
    alt: "A bright, minimalist commercial lobby featuring warm beige travertine-look large format porcelain tiles on both the floor and walls. The lighting is crisp and modern, emphasizing the natural stone aesthetic and clean architectural lines of the space.",
  },
  {
    id: "oakwood-chevron",
    category: "Porcelain Floor Tiles",
    collection: "Oakwood Chevron",
    name: "Natural Wood Finish",
    size: "200x1200mm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXjhIbGYoMe50JYlmlyi4sGMXQ0P-4MPmsyzVj21bhGIINyr4OX5-BVciwLJubt_ooa71Uv-pPQePcKXRObge6Eozq3BG-neIIzTDqQJSkTBaIBd2UqEQAFBk1rrUPr5ax6JDOy79_NxhF-krQRbL0BPCEkj4vsriuGzxaYAvTBmi5vfCglY4sZm2Utw9cLNkFcySU4KdIZeL5RVUiVJim79Gr7lnX0Mr7vpV0HOxTsVK0Sf-IGP6ehw",
    alt: "A beautifully styled kitchen floor featuring classic wood-look porcelain tiles arranged in a chevron pattern. The tiles have warm honey and oak tones. Sunlight highlights the realistic wood grain texture, creating a cozy yet highly durable surface.",
  },
  {
    id: "pietra-sand",
    category: "Porcelain Floor Tiles",
    collection: "Pietra Sand",
    name: "Anti-Slip Exterior",
    size: "800x800mm / 20mm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcjUNRM7g92eonKLs1_jEDRRFBBRVv7FoY66WvNIUCs5YjCJIkAfD2uan8_xzzMx7ZD4SdmR9f8YqX_x8utriH7Ry3ifQ84ZqvrKLq_KtmiWCDphfoCWpFS-2JJ2HTmrXKPi13WHUVwtCl4DXXF2XbgynDEhIpiQf9gpqwHVZ_nFW15RqPSakSG9aKTglNIa_AZeweIB2Qlto5uDRTjKU5ajvTLkHUAj1NmBkWa3iv8FKvvqEl8wvf-g",
    alt: "A serene outdoor patio setting showcasing thick, textured stone-look porcelain pavers in soft sand colors. The scene includes minimalist outdoor furniture and subtle landscaping. The lighting suggests early morning, emphasizing the anti-slip texture of the tiles.",
  },
  {
    id: "nero-slate",
    category: "Porcelain Floor Tiles",
    collection: "Nero Slate",
    name: "Structured Finish",
    size: "600x1200mm",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDz8Gx6dQ-bcEqApwdMxA7DEudxeDEZ2wVcS3sN-pQrpkEMuMcAFDrcdGaME6veDHbADrWT1EIkHTRxmYR2x2xAILr0heWaiK8m4oMXR89vcEJf3VRRHhFFT4ki3kt-A-d6IMWCypeCvVFUvNHyeI-VLZqHQXjdDLaWTamEafcZNqdrbaaNjyJqgTfH5OH5J323LEVOg6SHn77eD1lrIZIHn_-xUay-8MjEOGyGd_jg2tMtHrbfLdFKZw",
    alt: "A sleek, modern bathroom featuring dark, dramatic slate-look porcelain floor tiles. The tiles have subtle metallic undertones that catch the light from modern vanity fixtures. The overall mood is sophisticated, dark-mode inspired luxury.",
  },
];

export const categories: (Category | "All")[] = [
  "All",
  "Porcelain Floor Tiles",
  "Large Format Slabs",
];
