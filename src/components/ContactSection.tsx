import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DEPOTS } from "@/data/adhesivesData";
import MaterialIcon from "./MaterialIcon";

interface ContactSectionProps {
  initialProductInterest?: string;
}

export default function ContactSection({ initialProductInterest = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    productGrade: initialProductInterest,
    industry: "Woodworking & Furniture",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProductInterest) {
      setFormData((prev) => ({ ...prev, productGrade: initialProductInterest }));
    }
  }, [initialProductInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="network" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-t border-onyx/10 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-primary"></span>
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Direct Connectivity • Pan-India Footprint
            </span>
          </div>
          <h2 className="font-headline-md md:text-display-lg-mobile text-headline-md text-primary font-semibold">
            Contact & Distribution Network
          </h2>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-xl text-base md:text-lg">
          Connect with our technical sales division, request product trial samples, or coordinate bulk deliveries across our nationwide distribution network.
        </p>
      </motion.div>

      {/* Corporate Sales Office Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="bg-primary text-alabaster p-8 md:p-12 mb-16 border border-primary relative overflow-hidden shadow-xl"
      >
        {/* Subtle mesh background line */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-alabaster/10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="font-label-caps text-xs uppercase tracking-widest text-antique-gold mb-2 block font-semibold">
              Corporate Headquarters & Works
            </span>
            <h3 className="font-headline-md text-2xl md:text-3xl font-semibold mb-2 text-alabaster">
              Lithos Adhesive LLP
            </h3>
            <p className="font-label-caps text-xs text-antique-gold uppercase tracking-wider mb-4 font-medium">
              Har Bond Mein Mazbooti
            </p>
            <p className="font-body-md text-sm md:text-base text-alabaster/90 leading-relaxed mb-6">
              Survey No. 694, Plot No. 11, Jimi Enterprise,
              <br />
              Abhay Stone Road, Lajai, Tankara, Morbi – 363 641, Gujarat, India.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <a
                href="mailto:info@lithosadhesivellp.net"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-sm bg-alabaster/10 flex items-center justify-center group-hover:bg-alabaster/20 transition-colors">
                  <MaterialIcon name="mail" className="text-antique-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-alabaster/60 font-semibold">Official Email</div>
                  <div className="font-body-md text-sm text-alabaster font-medium group-hover:underline">
                    info@lithosadhesivellp.net
                  </div>
                </div>
              </a>

              <a
                href="https://www.lithosadhesivellp.net"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-sm bg-alabaster/10 flex items-center justify-center group-hover:bg-alabaster/20 transition-colors">
                  <MaterialIcon name="language" className="text-antique-gold" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-alabaster/60 font-semibold">Official Website</div>
                  <div className="font-body-md text-sm text-alabaster font-medium group-hover:underline">
                    www.lithosadhesivellp.net
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-onyx/40 p-6 md:p-8 border border-alabaster/10 backdrop-blur-sm">
            <span className="font-label-caps text-xs uppercase tracking-wider text-antique-gold block mb-2 font-semibold">
              Direct Contact & Support
            </span>
            <p className="font-body-md text-xs md:text-sm text-alabaster/80 mb-4 leading-relaxed">
              Connect directly with our works office in Morbi for commercial orders, industrial dealership, and custom formulations:
            </p>
            <div className="text-xs space-y-2 text-alabaster/90">
              <div className="flex justify-between py-1 border-b border-alabaster/10">
                <span className="text-alabaster/60">Email</span>
                <a href="mailto:info@lithosadhesivellp.net" className="font-semibold text-antique-gold hover:underline">
                  info@lithosadhesivellp.net
                </a>
              </div>
              <div className="flex justify-between py-1 border-b border-alabaster/10">
                <span className="text-alabaster/60">Website</span>
                <a href="https://www.lithosadhesivellp.net" target="_blank" rel="noreferrer" className="font-semibold text-antique-gold hover:underline">
                  www.lithosadhesivellp.net
                </a>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-alabaster/60">Manufacturing Hub</span>
                <span className="font-semibold">Tankara, Morbi, Gujarat</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Grid: Depots & Technical Network + Interactive Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="depots">
        {/* Left: Distribution Network & Capabilities */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Nationwide Depots */}
          <div className="bg-surface-container-low p-6 md:p-8 border border-outline-variant/40 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <MaterialIcon name="hub" className="text-primary text-xl" />
              <h3 className="font-headline-sm text-2xl text-primary font-semibold">
                Strategic Depots & Distribution Network
              </h3>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant mb-6">
              Our regional distribution hubs maintain dedicated safety stock, guaranteeing 24 to 48-hour order dispatch across all major industrial clusters:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
              {DEPOTS.map((depot, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, backgroundColor: "#ffffff" }}
                  className="bg-alabaster px-3 py-2.5 text-xs font-medium text-on-surface border border-outline-variant/20 flex items-center gap-2 transition-colors shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                  <span className="truncate">{depot}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-alabaster p-4 border border-outline-variant/30 flex items-center gap-3">
              <MaterialIcon name="local_shipping" className="text-primary text-2xl flex-shrink-0" />
              <div>
                <div className="font-headline-sm text-xs font-semibold text-primary uppercase tracking-wider">
                  Express Dispatch Protocol
                </div>
                <div className="font-body-md text-xs text-on-surface-variant">
                  Same-day dispatch for standardized bulk drums (50kg / 200kg) and IBC containers.
                </div>
              </div>
            </div>
          </div>

          {/* Technical Laboratory & Quality Assurance */}
          <div className="bg-surface-container p-6 border border-outline-variant/30 space-y-4">
            <div className="flex items-center gap-2">
              <MaterialIcon name="science" className="text-primary text-xl" />
              <h4 className="font-headline-sm text-lg text-primary font-semibold">
                Technical Advisory & Substrate Testing
              </h4>
            </div>
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Lithos Adhesive operates an advanced analytical testing laboratory to formulate customized polymer solutions, conduct viscosity & peel strength tests, and assist OEM customers in production-line trial runs.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-alabaster p-3 border border-outline-variant/30">
                <div className="font-semibold text-primary mb-0.5">Response SLA</div>
                <div className="text-on-surface-variant">Technical reply within 24 hours</div>
              </div>
              <div className="bg-alabaster p-3 border border-outline-variant/30">
                <div className="font-semibold text-primary mb-0.5">Sample Shipments</div>
                <div className="text-on-surface-variant">1kg & 5kg trial batches provided</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Interactive Enquiry Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 bg-surface-container-low p-8 md:p-10 border border-outline-variant/40 shadow-sm"
        >
          <span className="font-label-caps text-xs uppercase tracking-widest text-secondary block mb-2">
            Commercial & Technical Inquiries
          </span>
          <h3 className="font-headline-sm text-2xl text-primary font-semibold mb-2">
            Request Quote or Trial Samples
          </h3>
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant mb-6">
            Share your substrate specifications, expected volume, or required adhesive grade. Our technical team responds within 24 business hours.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-alabaster p-8 border border-primary text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4"
                >
                  <MaterialIcon name="check_circle" className="text-4xl text-emerald-700" />
                </motion.div>
                <h4 className="font-headline-sm text-xl text-primary font-semibold mb-2">
                  Inquiry Received Successfully!
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant mb-6 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. A dedicated technical representative from <strong>Lithos Adhesive</strong> has been assigned to your request for <strong>{formData.productGrade || "our adhesive solutions"}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      productGrade: "",
                      industry: "Woodworking & Furniture",
                      message: "",
                    });
                  }}
                  className="bg-primary hover:bg-earth-brown text-alabaster font-label-caps text-xs uppercase px-6 py-3 cursor-pointer transition-colors"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Company / Enterprise *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Modular Furnishings"
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Product Grade Interest
                    </label>
                    <input
                      type="text"
                      value={formData.productGrade}
                      onChange={(e) => setFormData({ ...formData, productGrade: e.target.value })}
                      placeholder="e.g. Mahacol N3, Emdilith LM 54..."
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                      Industry Sector
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="Woodworking & Furniture">Woodworking & Furniture</option>
                      <option value="Packaging & Paper Converting">Packaging & Paper Converting</option>
                      <option value="Print & Film Lamination">Print & Film Lamination</option>
                      <option value="Tapes & Labels (PSA)">Tapes & Labels (PSA)</option>
                      <option value="Construction Chemicals">Construction Chemicals</option>
                      <option value="Paints & Textile Binders">Paints & Textile Binders</option>
                      <option value="Exports / Global Inquiries">Exports / Global Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-[11px] uppercase tracking-wider text-secondary block mb-1">
                    Application Details & Monthly Quantity
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your substrate materials, machine line speed, drying requirements, or required sample volume..."
                    className="w-full px-3.5 py-2.5 bg-alabaster border border-outline-variant/50 text-sm font-body-md text-on-background focus:outline-none focus:border-primary transition-colors"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-primary hover:bg-earth-brown text-alabaster font-label-caps text-label-caps uppercase py-4 transition-colors font-semibold tracking-wider cursor-pointer shadow-md"
                >
                  Submit Commercial Inquiry
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
