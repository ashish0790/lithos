import { motion } from "motion/react";
import MaterialIcon from "./MaterialIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-container-highest dark:bg-onyx w-full py-16 border-t border-onyx/10 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-12">
        {/* Column 1: Company & Stock Info */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-3 border border-outline-variant/30 shadow-xs inline-block w-fit">
            <img
              src="/images/logo.jpg"
              alt="Lithos Adhesive LLP"
              className="h-18 md:h-22 w-auto object-contain"
            />
          </div>
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Leading manufacturer and supplier of specialized synthetic adhesives and industrial polymers.
            <br />
            <strong className="text-primary">"Har Bond Mein Mazbooti"</strong>
          </p>
          <div className="bg-alabaster/70 p-3.5 border border-outline-variant/30 text-xs text-on-surface-variant space-y-1.5 shadow-xs">
            <div className="flex justify-between items-center">
              <span><strong>Entity:</strong> Lithos Adhesive LLP</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5 font-bold uppercase">Active</span>
            </div>
            <div><strong>Certifications:</strong> ISO 9001:2015 Quality Assured</div>
          </div>
        </div>

        {/* Column 2: Products & Brands */}
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold mb-1">
            Product Portfolios
          </span>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Mahacol Wood Adhesives (N3, Mica, Jalveer)</span>
          </a>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Emdilith Film Lamination (LM 54, LM 50)</span>
          </a>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Packaging & Folder-Gluer Adhesives</span>
          </a>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Pressure Sensitive Adhesives (DM 47, PS 92)</span>
          </a>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Mahafix Construction & Tile Adhesives</span>
          </a>
          <a href="#products" className="text-xs md:text-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5 group">
            <span className="w-1 h-1 bg-secondary rounded-full group-hover:bg-primary transition-colors"></span>
            <span>Synthetic Rubber Cements (SR 501)</span>
          </a>
        </div>

        {/* Column 3: Distribution Network */}
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold mb-1">
            Distribution Network
          </span>
          <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
            12+ strategically positioned depots ensuring rapid 24-48 hr dispatch across industrial hubs.
          </p>
          <div className="text-xs text-on-surface-variant space-y-1.5 pt-1">
            <div><strong>West Hubs:</strong> Mumbai, Bhiwandi, Pune, Ahmedabad, Morbi</div>
            <div><strong>North Hubs:</strong> Delhi NCR, Noida, Ludhiana, Jaipur</div>
            <div><strong>South Hubs:</strong> Bengaluru, Chennai, Hyderabad</div>
            <div><strong>East Hubs:</strong> Kolkata, Cuttack</div>
          </div>
        </div>

        {/* Column 4: Registered Office */}
        <div className="flex flex-col gap-3">
          <span className="font-label-caps text-xs uppercase tracking-widest text-primary font-bold mb-1">
            Head Office & Works
          </span>
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
            Survey No. 694, Plot No. 11, Jimi Enterprise, Abhay Stone Road, Lajai, Tankara, Morbi – 363 641, Gujarat, India.
          </p>
          <div className="text-xs text-on-surface-variant space-y-1">
            <div><strong>Email:</strong> info@lithosadhesivellp.net</div>
            <div><strong>Web:</strong> www.lithosadhesivellp.net</div>
          </div>
          <div className="pt-2">
            <motion.a
              whileHover={{ x: 3 }}
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-label-caps uppercase text-primary font-bold hover:underline"
            >
              <span>Commercial Enquiry</span>
              <MaterialIcon name="arrow_forward" className="text-xs" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="border-t border-onyx/10 pt-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-4">
        <p>© {new Date().getFullYear()} Lithos Adhesive LLP. All Rights Reserved. Har Bond Mein Mazbooti.</p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-primary transition-colors">Company Profile</a>
          <a href="#markets" className="hover:text-primary transition-colors">Markets</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#network" className="hover:text-primary transition-colors">Contact</a>
          
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-alabaster shadow-sm cursor-pointer ml-2"
          >
            <MaterialIcon name="arrow_upward" className="text-sm" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
