import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        <div>
          <p className="font-display text-3xl uppercase text-foreground">Dallas Voice Coach</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Building vocal athletes in Dallas–Fort Worth since 2012.
          </p>
        </div>
        <nav className="text-sm" aria-label="Footer navigation">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold">Meet the team</Link></li>
            <li><Link to="/services" className="hover:text-gold">Coaching & rates</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold">Testimonials</Link></li>
            <li><Link to="/process" className="hover:text-gold">Rate & process</Link></li>
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Studio</p>
          <p className="mt-4 leading-relaxed">
            Texas Jam Rehearsal Studios<br />3420 K Avenue<br />Plano, TX 75074
          </p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow">Call or text</p>
          <a href="tel:+12143171090" className="mt-4 block font-display text-3xl text-foreground hover:text-gold">
            214-317-1090
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[90rem] px-5 text-xs uppercase text-muted-foreground sm:px-8 lg:px-12">
        © 2012–2026 Dallas Voice Coach LLC
      </div>
    </footer>
  );
}
