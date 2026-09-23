import { linkedInUrl } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-brand-ink px-6 py-10 text-white md:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img
            src="/source-assets/image2-removebg-preview.png"
            alt="Braided Borders"
            className="h-14 w-auto"
          />
          <span className="text-mono text-[15px] uppercase tracking-[0.15em] text-white/50">
            Braided Borders
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Braided Borders. All rights
            reserved.
          </p>
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white transition-colors hover:text-brand-sand"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
