interface FooterProps {
  onTabChange?: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  return (
    <footer className="w-full py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 bg-white border-t border-neutral-100 mt-auto" id="app-footer">
      {/* Brand logo */}
      <div 
        onClick={() => onTabChange && onTabChange('gallery')}
        className="font-serif text-lg md:text-xl font-bold text-black tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
        id="footer-logo"
      >
        AURELIAN ART
      </div>

      {/* Copy right info */}
      <div 
        className="font-sans text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 text-center"
        id="footer-copyright"
      >
        © 2024 AURELIAN ART. ALL RIGHTS RESERVED.
      </div>

      {/* Social Links & Mail */}
      <div className="flex gap-8 items-center" id="footer-links">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="referrer noopener"
          className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          id="footer-link-instagram"
        >
          Instagram
        </a>
        <a 
          href="mailto:contact@aurelian.art" 
          className="font-sans text-[11px] md:text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors"
          id="footer-link-email"
        >
          contact@aurelian.art
        </a>
      </div>
    </footer>
  );
}
