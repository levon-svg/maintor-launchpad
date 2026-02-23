import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Safety", href: "#safety" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-floating mx-4 mt-3 rounded-full border border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
          maintor
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="pill-button text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#newsletter" className="pill-button bg-secondary text-secondary-foreground hover:bg-muted">
            Pricing
          </a>
          <a href="#hero" className="pill-button bg-primary text-primary-foreground hover:opacity-90">
            Try it now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border rounded-b-2xl px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <a href="#newsletter" className="pill-button bg-secondary text-secondary-foreground flex-1 text-center">
              Pricing
            </a>
            <a href="#hero" className="pill-button bg-primary text-primary-foreground flex-1 text-center">
              Try it now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
