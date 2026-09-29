import { motion } from "motion/react";
import MaterialIcon from "./MaterialIcon";
import SpecularButton from "./SpecularButton";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto hero-ambient-glow">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtitle Badge with Animated Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-alabaster/90 backdrop-blur-sm border border-primary/20 px-4 py-2 mb-6 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-antique-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold">
              Lithos Adhesive LLP • Har Bond Mein Mazbooti
            </span>
            <span className="text-[11px] text-antique-gold font-semibold">• Morbi, Gujarat</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Next-Generation Adhesive & Polymer Solutions
          </motion.h1>

          {/* Description */}
          <motion.p
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Powering India's woodworking, packaging, construction, and converting industries since 1986.
            Home to premier industrial brands including <strong>Mahacol</strong>, <strong>Emdilith</strong>, <strong>Mahafix</strong>, and <strong>Emditex</strong> with an aggregate installed capacity exceeding <strong>120,000 MT/year</strong>.
          </motion.p>

          {/* Action CTAs including SpecularButton */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {/* Ultra-Premium WebGL Specular Button */}
            <div className="inline-block">
              <SpecularButton
                size="md"
                radius={2}
                tint="#5D473A"
                tintOpacity={0.25}
                textColor="#FFFFFF"
                lineColor="#C5A059"
                baseColor="#443125"
                intensity={1.4}
                shineSize={18}
                speed={0.45}
                followMouse={true}
                onClick={() => scrollToSection("products")}
                className="font-label-caps uppercase tracking-wider text-xs shadow-md"
              >
                <span className="flex items-center gap-2">
                  <span>Explore Adhesive Grades</span>
                  <MaterialIcon name="arrow_downward" className="text-sm" />
                </span>
              </SpecularButton>
            </div>

            <motion.a
              href="#markets"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-alabaster/90 hover:bg-alabaster text-primary border border-outline-variant/60 font-label-caps text-label-caps uppercase px-6 py-3.5 transition-all shadow-sm"
            >
              <span>Target Markets</span>
              <MaterialIcon name="domain" className="text-base" />
            </motion.a>

            <motion.a
              href="#depots"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 bg-transparent hover:text-primary text-secondary font-label-caps text-label-caps uppercase px-4 py-3.5 transition-colors"
            >
              <span>Distribution Network</span>
              <MaterialIcon name="hub" className="text-base" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual Product Showcase Strip with Motion */}
      <motion.div
        className="mt-16 pt-10 border-t border-onyx/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-antique-gold"></span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold">
              Flagship Adhesive Formulations & Packaging
            </span>
          </div>
          <a
            href="#products"
            className="text-xs font-label-caps uppercase text-secondary hover:text-primary transition-colors flex items-center gap-1 group"
          >
            <span>View All Grades</span>
            <MaterialIcon name="arrow_forward" className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Mahacol N3", brand: "Mahacol", img: "/images/adhesives/mahacol-n3.png", category: "Synthetic Resin" },
            { name: "Mahacol Mica", brand: "Mahacol", img: "/images/adhesives/mahacol-mica-special.png", category: "Laminate Bonding" },
            { name: "Mahacol Jalveer", brand: "Mahacol", img: "/images/adhesives/mahacol-jalveer.png", category: "D3 Waterproof" },
            { name: "Nail Free", brand: "Mahacol", img: "/images/adhesives/mahacol-nail-free.png", category: "Instant Grab" },
            { name: "Mahacol SR-501", brand: "Mahacol", img: "/images/adhesives/mahacol-sr-501.jpg", category: "Rubber Adhesive" },
            { name: "Mahafix Polymer", brand: "Mahafix", img: "/images/adhesives/mahafix-tile-adhesive.jpg", category: "Tile Mortar" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href="#products"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-outline-variant/30 p-3 hover:border-primary/50 shadow-sm transition-all flex flex-col items-center text-center group"
            >
              <div className="w-full h-28 bg-surface-container-lowest flex items-center justify-center p-2 mb-2 border border-outline-variant/10 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                  loading="lazy"
                />
              </div>
              <span className="font-headline-sm text-xs font-semibold text-primary truncate w-full group-hover:text-earth-brown transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-secondary font-label-caps uppercase mt-0.5">
                {item.category}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
