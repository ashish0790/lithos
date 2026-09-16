"use client";

import { useState } from "react";
import MaterialIcon from "./MaterialIcon";

const NAV_LINKS = [
  { label: "Collections", active: true },
  { label: "Applications", active: false },
  { label: "Heritage", active: false },
  { label: "Innovation", active: false },
  { label: "Global Reach", active: false },
  { label: "Contact", active: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background dark:bg-onyx fixed top-0 w-full z-50 border-b border-onyx/10 dark:border-alabaster/10 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <a
          className="font-display-lg text-headline-sm tracking-widest text-primary dark:text-antique-gold hover:opacity-80 transition-opacity duration-300"
          href="#"
        >
          LITHOS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? "font-label-caps text-label-caps text-primary dark:text-antique-gold border-b-2 border-primary dark:border-antique-gold pb-1 hover:opacity-80 transition-opacity duration-300"
                  : "font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors hover:opacity-80 duration-300"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-onyx text-alabaster font-label-caps text-label-caps uppercase px-6 py-3 rounded-none hover:bg-earth-brown transition-colors">
            Request Quote
          </button>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="md:hidden flex items-center text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MaterialIcon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background dark:bg-onyx border-t border-onyx/10 dark:border-alabaster/10 px-margin-mobile py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? "font-label-caps text-label-caps text-primary dark:text-antique-gold"
                  : "font-label-caps text-label-caps text-secondary dark:text-secondary-fixed-dim"
              }
            >
              {link.label}
            </a>
          ))}
          <button className="bg-onyx text-alabaster font-label-caps text-label-caps uppercase px-6 py-3 mt-2 hover:bg-earth-brown transition-colors">
            Request Quote
          </button>
        </div>
      )}
    </nav>
  );
}
