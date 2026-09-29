import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_STATS, CORE_VALUES, MILESTONES } from "@/data/adhesivesData";
import MaterialIcon from "./MaterialIcon";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"vision" | "values" | "milestones" | "leadership">("vision");

  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto border-t border-onyx/10 section-ambient-glow">
      {/* Section Header with Motion */}
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
              Established 1986 • BSE Listed Company
            </span>
          </div>
          <h2 className="font-headline-md md:text-display-lg-mobile text-headline-md text-primary font-semibold">
            About Lithos Adhesive
          </h2>
        </div>
        <p className="font-body-md text-on-surface-variant max-w-xl text-base md:text-lg">
          India's leading specialty polymer emulsions and industrial adhesive manufacturer.
          Home to premier brands including <strong>Mahacol</strong>, <strong>Emdilith</strong>, <strong>Mahafix</strong>, and <strong>Emditex</strong>.
        </p>
      </motion.div>

      {/* Stats Counter Bar with Staggered Motion */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {COMPANY_STATS.map((stat, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -6 }}
            className="bg-white p-6 md:p-8 border border-outline-variant/30 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
            <div className="font-display-lg text-3xl md:text-5xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <div className="font-headline-sm text-base md:text-lg font-semibold text-on-background mb-1">
              {stat.label}
            </div>
            <p className="font-body-md text-xs md:text-sm text-on-surface-variant">
              {stat.sublabel}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Corporate Overview Story */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white p-8 md:p-12 border border-outline-variant/30 shadow-sm"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="lg:col-span-7 flex flex-col gap-5">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest font-semibold">
            Corporate Profile & Legacy
          </span>
          <h3 className="font-headline-md text-2xl md:text-3xl text-primary font-medium">
            Over Three Decades of Chemical Formulation & Adhesion Excellence
          </h3>
          <p className="font-body-md text-on-surface-variant text-justify leading-relaxed">
            Lithos Adhesive is a publicly listed enterprise on the Bombay Stock Exchange (BSE).
            Founded in 1986, the company operates 5 sophisticated manufacturing complexes across India
            with an aggregate installed capacity exceeding <strong>120,000 Metric Tons per annum</strong>.
          </p>
          <p className="font-body-md text-on-surface-variant text-justify leading-relaxed">
            In 2003, the company acquired the polymer emulsion business of <strong>M/s Mafatlal Dyes & Chemicals Ltd.</strong>,
            solidifying sole ownership of industry-standard formulations such as Mahacol, Emditex, Emdilith, and Emdicryl.
            Operating under rigorous <strong>ISO 9001:2015</strong>, <strong>ISO 14001:2015</strong>, and <strong>ISO 45001:2018</strong> certifications,
            our synthetic adhesives serve mission-critical applications across woodworking, packaging, tapes, construction chemicals, and textiles.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-surface-container px-3 py-1.5 border border-outline-variant/30">
              <MaterialIcon name="verified" className="text-primary text-base" /> ISO 9001:2015 Quality
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-surface-container px-3 py-1.5 border border-outline-variant/30">
              <MaterialIcon name="eco" className="text-primary text-base" /> ISO 14001 Environment
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-surface-container px-3 py-1.5 border border-outline-variant/30">
              <MaterialIcon name="health_and_safety" className="text-primary text-base" /> ISO 45001 Safety
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-surface-container px-3 py-1.5 border border-outline-variant/30">
              <MaterialIcon name="public" className="text-primary text-base" /> Exports: Asia, Africa & Middle East
            </span>
          </div>
        </div>

        <motion.div
          className="lg:col-span-5 bg-primary text-alabaster p-8 md:p-10 flex flex-col justify-between h-full relative overflow-hidden shadow-lg"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
            <MaterialIcon name="science" className="text-[180px]" />
          </div>
          <div>
            <div className="font-label-caps text-label-caps uppercase text-antique-gold tracking-widest mb-4 font-bold">
              R&D & Quality Infrastructure
            </div>
            <h4 className="font-headline-sm text-xl md:text-2xl mb-4 font-normal text-alabaster">
              State-of-the-Art Formulation Laboratories
            </h4>
            <p className="font-body-md text-alabaster/80 text-sm md:text-base leading-relaxed mb-6">
              Our advanced analytical testing labs feature automated viscosity profiling, solids-content thermogravimetry,
              peel-tack-shear testing benches, and accelerated climate simulation chambers. We engineer tailor-made polymer
              chemistries matching client machine speeds and substrates.
            </p>
          </div>
          <div className="border-t border-alabaster/20 pt-6 mt-6">
            <div className="text-xs uppercase tracking-wider text-antique-gold mb-1 font-semibold">
              Brand Motto
            </div>
            <div className="font-display-lg text-lg text-alabaster font-bold">
              Har Bond Mein Mazbooti
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Interactive Tabs Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 border-b border-outline-variant/50 pb-4">
          {[
            { id: "vision", label: "Vision & Mission" },
            { id: "values", label: "Core Values (5 Pillars)" },
            { id: "milestones", label: "Timeline (1986–Present)" },
            { id: "leadership", label: "Leadership Code" },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`relative font-label-caps text-label-caps uppercase px-5 py-2.5 transition-all cursor-pointer font-semibold ${
                  isActive
                    ? "bg-primary text-alabaster shadow-sm"
                    : "bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Animated Tab Content with AnimatePresence */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "vision" && (
            <motion.div
              key="vision"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 border border-outline-variant/30 relative shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <MaterialIcon name="visibility" className="text-2xl" />
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-2 font-semibold">
                  Our Future Horizon
                </span>
                <h4 className="font-headline-sm text-2xl text-primary font-semibold mb-4">
                  Company's Vision
                </h4>
                <p className="font-body-lg text-lg text-on-surface-variant italic leading-relaxed border-l-2 border-primary pl-4">
                  “To be a leading, specialty & performance chemicals company built on trust, innovation & cutting-edge technology.”
                </p>
              </div>

              <div className="bg-white p-8 border border-outline-variant/30 relative shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <MaterialIcon name="rocket_launch" className="text-2xl" />
                </div>
                <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest block mb-2 font-semibold">
                  Our Driving Purpose
                </span>
                <h4 className="font-headline-sm text-2xl text-primary font-semibold mb-4">
                  Company's Mission
                </h4>
                <p className="font-body-lg text-lg text-on-surface-variant italic leading-relaxed border-l-2 border-primary pl-4">
                  “Create customer delight through supply of innovative products and services using world class, lean and sustainable technology through a talented and committed team.”
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "values" && (
            <motion.div
              key="values"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {CORE_VALUES.map((val, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-primary/50 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-sm bg-primary text-alabaster flex items-center justify-center mb-5 group-hover:bg-earth-brown transition-colors">
                      <MaterialIcon name={val.icon} className="text-2xl" />
                    </div>
                    <h4 className="font-headline-sm text-lg text-primary font-semibold mb-3">
                      {val.title}
                    </h4>
                    <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "milestones" && (
            <motion.div
              key="milestones"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="relative border-l-2 border-primary/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-8 py-4"
            >
              {MILESTONES.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <div className="absolute -left-[31px] md:-left-[47px] top-2 w-4 h-4 rounded-full bg-alabaster border-4 border-primary group-hover:scale-125 transition-transform"></div>
                  <div className="bg-white p-5 md:p-6 border border-outline-variant/30 shadow-sm hover:border-primary/50 hover-lift transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="bg-primary text-alabaster font-label-caps text-xs px-2.5 py-1 font-bold">
                        {item.year}
                      </span>
                      <h4 className="font-headline-sm text-lg font-semibold text-primary">
                        {item.title}
                      </h4>
                    </div>
                    <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "leadership" && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {[
                { title: "Stay True To Commitment", desc: "Honoring contractual and quality promises with uninterrupted reliability." },
                { title: "Mutual Respect", desc: "Treating clients, factory workers, and vendors as essential equals." },
                { title: "Quest For Knowledge", desc: "Continual synthesis innovation, learning new polymer science standards." },
                { title: "Empower Our People", desc: "Fostering decentralized authority, initiative, and professional growth." },
                { title: "Ensure Process Discipline", desc: "Uncompromising adherence to lean formulation, batch safety, and quality checks." },
              ].map((lead, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-primary/50"
                >
                  <div>
                    <span className="font-display-lg text-3xl font-bold text-primary/30 mb-2 block">
                      0{i + 1}
                    </span>
                    <h4 className="font-headline-sm text-base md:text-lg font-semibold text-primary mb-3">
                      {lead.title}
                    </h4>
                    <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {lead.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
