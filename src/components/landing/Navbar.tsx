import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Safety", href: "#safety" },
];

const sectionIds = ["hero", "intro", "capabilities", "features", "get-started", "testimonials", "safety", "newsletter"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const isLinkActive = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      return activeSection === id;
    },
    [activeSection]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "nav-floating mx-3 sm:mx-6 mt-3 rounded-full border border-border"
          : "bg-transparent"
        }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky to-sky-light flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:shadow-md transition-shadow">
            M
          </div>
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            maintor
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`pill-button text-sm transition-all duration-200 ${isLinkActive(link.href)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#newsletter"
            className="pill-button bg-secondary text-secondary-foreground hover:bg-muted border border-border/50"
          >
            Pricing
          </a>
          <a
            href="#hero"
            className="pill-button bg-primary text-primary-foreground hover:opacity-90 shadow-sm hover:shadow-md transition-all"
          >
            Try it now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-card/95 backdrop-blur-lg border-t border-border rounded-b-2xl overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`block py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${isLinkActive(link.href)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-3">
            <a
              href="#newsletter"
              className="pill-button bg-secondary text-secondary-foreground flex-1 text-center border border-border/50"
            >
              Pricing
            </a>
            <a
              href="#hero"
              className="pill-button bg-primary text-primary-foreground flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Try it now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
