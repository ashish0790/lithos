import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS, ProductItem } from "@/data/adhesivesData";
import MaterialIcon from "./MaterialIcon";

interface ProductsSectionProps {
  onSelectProductForEnquiry?: (productName: string) => void;
}

const CATEGORIES = [
  "All",
  "Wood Adhesives",
  "Industrial Adhesives",
  "Packaging & Lamination",
  "Tapes & Stickers",
  "Construction Chemicals",
] as const;

export default function ProductsSection({ onSelectProductForEnquiry }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSpecsId, setExpandedSpecsId] = useState<string | null>(null);
  const [modalProduct, setModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleEnquire = (product: ProductItem) => {
    if (onSelectProductForEnquiry) {
      onSelectProductForEnquiry(product.name);
    }
    setModalProduct(null);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-t border-onyx/10">
      {/* Section Header with Motion */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest font-semibold">
              Engineered Formulations & Resins
            </span>
          </div>
          <h2 className="font-headline-md md:text-display-lg-mobile text-headline-md text-primary font-semibold">
            Product Portfolio & Technical Grades
          </h2>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-xl text-base md:text-lg">
          Explore our certified range of wood adhesives, pressure-sensitive emulsions, solvent contact adhesives, and construction chemicals.
        </p>
      </motion.div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 fine-line-bottom">
        {/* Category Pills with animated motion */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative font-label-caps text-label-caps uppercase px-4 py-2 transition-all cursor-pointer font-semibold ${
                  isActive
                    ? "text-alabaster"
                    : "bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-primary shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <input
            type="text"
            placeholder="Search by grade or application..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-outline-variant/50 font-body-md text-sm text-on-background focus:outline-none focus:border-primary shadow-xs transition-colors"
          />
          <MaterialIcon
            name="search"
            className="absolute left-3 top-3 text-secondary text-lg pointer-events-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-3 text-secondary hover:text-primary text-sm"
            >
              <MaterialIcon name="close" className="text-sm" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs uppercase font-label-caps text-secondary mb-8 flex items-center justify-between">
        <span>Showing {filteredProducts.length} of {PRODUCTS.length} adhesive formulations</span>
        <span className="text-[11px] text-antique-gold font-semibold">✦ High Solids & Zero-Bubble Formulations</span>
      </div>

      {/* Product Cards Grid with Framer Motion layout */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProducts.map((product) => {
            const isSpecsOpen = expandedSpecsId === product.id;
            return (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-outline-variant/30 flex flex-col justify-between hover:border-primary/50 relative group overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                {/* Product Packaging Image Showcase */}
                <div
                  className="w-full h-56 bg-surface-container-lowest flex items-center justify-center p-6 border-b border-outline-variant/20 relative overflow-hidden cursor-pointer"
                  onClick={() => setModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-primary text-alabaster font-label-caps text-[10px] px-2.5 py-1 font-bold uppercase shadow-sm">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-2 left-3">
                    <span className="font-label-caps text-[10px] uppercase text-secondary font-bold bg-white/95 px-2.5 py-0.5 border border-outline-variant/30 shadow-2xs">
                      {product.brand}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-label-caps text-[10px] uppercase text-primary font-bold bg-white/95 px-2.5 py-0.5 border border-primary/30 flex items-center gap-1">
                      <span>Quick View</span>
                      <MaterialIcon name="visibility" className="text-xs" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest text-[11px] font-semibold">
                      {product.category}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <h3
                    className="font-headline-sm text-xl md:text-2xl text-primary font-bold mb-2 group-hover:text-earth-brown transition-colors cursor-pointer"
                    onClick={() => setModalProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="font-body-md text-xs md:text-sm text-secondary italic mb-4">
                    "{product.tagline}"
                  </p>

                  {/* Description */}
                  <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Applications */}
                  <div className="mb-4">
                    <span className="font-label-caps text-[11px] uppercase tracking-wider text-primary font-bold block mb-2">
                      Primary Substrates & Uses:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="bg-surface-container-low text-on-surface-variant text-[11px] px-2.5 py-1 border border-outline-variant/30 font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="mb-4 pt-2">
                    <span className="font-label-caps text-[11px] uppercase tracking-wider text-primary font-bold block mb-2">
                      Performance Highlights:
                    </span>
                    <ul className="space-y-1">
                      {product.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-on-surface-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Technical Specs */}
                  {product.specs && (
                    <div className="mt-4 pt-3 border-t border-outline-variant/30">
                      <button
                        type="button"
                        onClick={() => setExpandedSpecsId(isSpecsOpen ? null : product.id)}
                        className="flex items-center justify-between w-full text-xs font-label-caps uppercase text-primary hover:text-earth-brown transition-colors py-1 cursor-pointer font-bold"
                      >
                        <span>Technical Specifications</span>
                        <MaterialIcon
                          name={isSpecsOpen ? "expand_less" : "expand_more"}
                          className="text-base"
                        />
                      </button>

                      {isSpecsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 bg-surface-container-low p-3.5 border border-outline-variant/30 text-xs space-y-1.5"
                        >
                          {product.specs.base && (
                            <div className="flex justify-between">
                              <span className="text-secondary font-medium">Base / Chemistry:</span>
                              <span className="text-on-background font-semibold text-right">{product.specs.base}</span>
                            </div>
                          )}
                          {product.specs.viscosity && (
                            <div className="flex justify-between">
                              <span className="text-secondary font-medium">Viscosity:</span>
                              <span className="text-on-background font-semibold text-right">{product.specs.viscosity}</span>
                            </div>
                          )}
                          {product.specs.solids && (
                            <div className="flex justify-between">
                              <span className="text-secondary font-medium">Solids %:</span>
                              <span className="text-on-background font-semibold text-right">{product.specs.solids}</span>
                            </div>
                          )}
                          {product.specs.pH && (
                            <div className="flex justify-between">
                              <span className="text-secondary font-medium">pH Range:</span>
                              <span className="text-on-background font-semibold text-right">{product.specs.pH}</span>
                            </div>
                          )}
                          {product.specs.density && (
                            <div className="flex justify-between">
                              <span className="text-secondary font-medium">Density:</span>
                              <span className="text-on-background font-semibold text-right">{product.specs.density}</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-outline-variant/20 flex items-center justify-between bg-surface-container-low/50">
                  <span className="text-xs font-label-caps uppercase text-secondary font-medium">
                    Ready for Dispatch
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => handleEnquire(product)}
                    className="inline-flex items-center gap-1.5 bg-onyx text-alabaster hover:bg-earth-brown text-xs font-label-caps uppercase px-4 py-2.5 transition-colors cursor-pointer font-bold shadow-xs"
                  >
                    <span>Enquire Grade</span>
                    <MaterialIcon name="arrow_forward" className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {modalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-outline-variant shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setModalProduct(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <MaterialIcon name="close" className="text-lg" />
              </button>

              <div className="p-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center mb-6 pb-6 border-b border-outline-variant/30">
                  <div className="w-40 h-40 bg-surface-container-low p-4 flex items-center justify-center border border-outline-variant/20 flex-shrink-0">
                    <img
                      src={modalProduct.image}
                      alt={modalProduct.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-label-caps text-xs uppercase tracking-wider text-secondary font-bold">
                      {modalProduct.brand} • {modalProduct.category}
                    </span>
                    <h3 className="font-headline-sm text-2xl font-bold text-primary mb-1">
                      {modalProduct.name}
                    </h3>
                    <p className="text-sm italic text-secondary mb-3">"{modalProduct.tagline}"</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {modalProduct.description}
                    </p>
                  </div>
                </div>

                {modalProduct.specs && (
                  <div className="mb-6">
                    <h4 className="font-label-caps text-xs uppercase tracking-wider text-primary font-bold mb-3">
                      Technical Data Specifications:
                    </h4>
                    <div className="grid grid-cols-2 gap-3 bg-surface-container-low p-4 border border-outline-variant/30 text-xs">
                      {modalProduct.specs.base && (
                        <div>
                          <div className="text-secondary font-medium">Base Chemistry</div>
                          <div className="font-semibold text-primary">{modalProduct.specs.base}</div>
                        </div>
                      )}
                      {modalProduct.specs.viscosity && (
                        <div>
                          <div className="text-secondary font-medium">Viscosity</div>
                          <div className="font-semibold text-primary">{modalProduct.specs.viscosity}</div>
                        </div>
                      )}
                      {modalProduct.specs.solids && (
                        <div>
                          <div className="text-secondary font-medium">Solids Content</div>
                          <div className="font-semibold text-primary">{modalProduct.specs.solids}</div>
                        </div>
                      )}
                      {modalProduct.specs.pH && (
                        <div>
                          <div className="text-secondary font-medium">pH Range</div>
                          <div className="font-semibold text-primary">{modalProduct.specs.pH}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => handleEnquire(modalProduct)}
                    className="flex-1 bg-primary hover:bg-earth-brown text-alabaster font-label-caps text-xs uppercase py-3.5 transition-colors font-bold cursor-pointer"
                  >
                    Request Trial Sample & Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalProduct(null)}
                    className="px-6 bg-surface-container-low hover:bg-surface-container text-primary font-label-caps text-xs uppercase py-3.5 border border-outline-variant/50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
