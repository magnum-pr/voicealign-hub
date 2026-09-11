import { Link } from "@tanstack/react-router";
import { Mic2, Phone } from "lucide-react";

const links = [
  { to: "/about", label: "The Team" },
  { to: "/services", label: "Coaching" },
  { to: "/testimonials", label: "Results" },
  { to: "/contact", label: "Studio" },
] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30 border-b border-border/70"
          : "sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur"
      }
    >
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" aria-label="Dallas Voice Coach home">
          <span className="flex size-10 items-center justify-center border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
            <Mic2 className="size-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl uppercase leading-none">Dallas Voice Coach</span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs font-semibold uppercase text-muted-foreground md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+12143171090"
          className="inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 text-xs font-bold uppercase text-gold-foreground transition-colors hover:bg-gold-bright"
        >
          <Phone className="size-3.5" aria-hidden="true" />
          214-317-1090
        </a>
      </div>
    </header>
  );
}
