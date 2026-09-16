const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Shipping & Returns"];
const COMPANY_LINKS = ["Sitemap", "Technical Catalog", "Distributors"];

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-onyx w-full py-section-gap border-t border-onyx/10 dark:border-alabaster/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="col-span-1 flex flex-col gap-4">
          <span className="font-display-lg text-headline-sm text-primary dark:text-antique-gold">
            LITHOS
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xs">
            Crafting Timeless Tiles with Innovation, Quality, and
            Sustainability. Connect with us for global excellence.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed hover:translate-x-1 transition-transform duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {COMPANY_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed hover:translate-x-1 transition-transform duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-end">
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-secondary-fixed-dim">
            © {new Date().getFullYear()} Lithos. All Rights
            Reserved. Crafted with passion for global excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
