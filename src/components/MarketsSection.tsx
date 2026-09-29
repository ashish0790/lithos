import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MARKETS, MarketItem } from "@/data/adhesivesData";
import MaterialIcon from "./MaterialIcon";

export default function MarketsSection() {
  const [selectedMarket, setSelectedMarket] = useState<MarketItem>(MARKETS[0]);

  return (
    <section id="markets" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-t border-onyx/10">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest font-semibold">
              Industry Verticals Served
            </span>
          </div>
          <h2 className="font-headline-md md:text-display-lg-mobile text-headline-md text-primary font-semibold">
            Markets & Strategic Applications
          </h2>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-xl text-base md:text-lg">
          Customized adhesive formulations and polymer emulsions powering high-speed industrial
          conversion and artisan craftsmanship.
        </p>
      </motion.div>

      {/* Grid of Markets + Detailed Highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Industry Cards Grid with Staggered Motion */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MARKETS.map((market) => {
            const isSelected = selectedMarket.id === market.id;
            return (
              <motion.div
                key={market.id}
                onClick={() => setSelectedMarket(market)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.2 }}
                className={`p-6 border transition-all cursor-pointer relative shadow-sm ${
                  isSelected
                    ? "bg-primary text-alabaster border-primary shadow-md"
                    : "bg-white text-on-background border-outline-variant/30 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-alabaster/20 text-alabaster"
                        : "bg-primary text-alabaster"
                    }`}
                  >
                    <MaterialIcon name={market.icon} className="text-2xl" />
                  </div>
                  {isSelected && (
                    <motion.span
                      layoutId="activeMarketTag"
                      className="bg-antique-gold text-onyx font-label-caps text-[10px] px-2.5 py-0.5 font-bold uppercase rounded-none"
                    >
                      Active View
                    </motion.span>
                  )}
                </div>

                <h3
                  className={`font-headline-sm text-lg font-semibold mb-2 ${
                    isSelected ? "text-alabaster" : "text-primary"
                  }`}
                >
                  {market.title}
                </h3>
                <p
                  className={`font-body-md text-xs md:text-sm leading-relaxed ${
                    isSelected ? "text-alabaster/80" : "text-on-surface-variant"
                  }`}
                >
                  {market.shortDesc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Market Explorer Sidebar with AnimatePresence */}
        <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-outline-variant/40 shadow-md sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMarket.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary text-alabaster flex items-center justify-center">
                  <MaterialIcon name={selectedMarket.icon} className="text-xl" />
                </div>
                <div>
                  <span className="font-label-caps text-[11px] uppercase tracking-wider text-secondary font-semibold">
                    Selected Vertical
                  </span>
                  <h3 className="font-headline-sm text-xl text-primary font-bold">
                    {selectedMarket.title}
                  </h3>
                </div>
              </div>

              <p className="font-body-md text-sm md:text-base text-on-surface-variant mb-6 leading-relaxed">
                {selectedMarket.fullDesc}
              </p>

              {/* Key Advantages Checklist */}
              <div className="mb-6">
                <span className="font-label-caps text-xs uppercase tracking-wider text-primary font-bold block mb-3">
                  Application Advantages:
                </span>
                <ul className="space-y-2">
                  {selectedMarket.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-on-surface-variant">
                      <MaterialIcon name="check_circle" className="text-primary text-base flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Product Grades */}
              <div className="border-t border-outline-variant/40 pt-6">
                <span className="font-label-caps text-xs uppercase tracking-wider text-primary font-bold block mb-3">
                  Recommended Product Grades:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedMarket.recommendedProducts.map((prod, i) => (
                    <a
                      key={i}
                      href="#products"
                      className="bg-surface-container-low hover:bg-primary hover:text-alabaster border border-outline-variant/60 text-primary px-3 py-1.5 text-xs font-semibold transition-all shadow-2xs"
                    >
                      {prod}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-earth-brown text-alabaster font-label-caps text-label-caps uppercase py-3.5 transition-colors shadow-sm"
                >
                  <span>Request Custom Formulation</span>
                  <MaterialIcon name="arrow_forward" className="text-base" />
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
