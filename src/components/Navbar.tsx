import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import MaterialIcon from "./MaterialIcon";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Markets", href: "#markets" },
  { label: "Adhesives Catalog", href: "#products" },
  { label: "Distribution & Depots", href: "#depots" },
  { label: "Contact Us", href: "#network" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-md border-b border-onyx/10 py-0"
          : "bg-background/70 backdrop-blur-md border-b border-onyx/5 py-1"
      }`}
    >
      <div className="flex justify-between items-center h-24 md:h-28 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto py-2">
        {/* Brand Logo */}
        <a
          className="flex items-center gap-3 group cursor-pointer py-1"
          href="#"
        >
          <img
            src="/images/logo.jpg"
            alt="Lithos Adhesive LLP - Har Bond Mein Mazbooti"
            className="h-16 sm:h-20 md:h-24 w-auto max-w-[260px] md:max-w-[340px] object-contain mix-blend-multiply group-hover:scale-103 transition-transform duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-label-caps text-xs text-secondary hover:text-primary transition-colors uppercase tracking-wider py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-alabaster font-label-caps text-xs uppercase px-5 py-2.5 rounded-none hover:bg-earth-brown transition-colors cursor-pointer shadow-sm"
          >
            <span>Request Quote</span>
            <MaterialIcon name="arrow_forward" className="text-xs" />
          </motion.a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-10 h-10 text-primary border border-onyx/15 hover:bg-surface-container transition-colors focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MaterialIcon name={menuOpen ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background/98 backdrop-blur-2xl border-t border-onyx/10 shadow-2xl"
          >
            <div className="px-margin-mobile py-6 flex flex-col gap-3">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-label-caps text-sm text-primary uppercase tracking-wider py-2 border-b border-outline-variant/30 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <MaterialIcon name="chevron_right" className="text-secondary text-base" />
                </motion.a>
              ))}

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-alabaster font-label-caps text-xs uppercase px-6 py-3.5 hover:bg-earth-brown transition-colors w-full"
                >
                  <span>Request Quote & Samples</span>
                  <MaterialIcon name="arrow_forward" className="text-xs" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
