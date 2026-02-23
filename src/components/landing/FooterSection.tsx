import { useState, useEffect, useRef } from "react";
import { Send, Check } from "lucide-react";

const footerLinks = [
  { label: "How it works", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Safety", href: "#safety" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    name: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const FooterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("revealed");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer id="newsletter" className="bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="section-container py-16 md:py-20">
        {/* Newsletter */}
        <div className="reveal max-w-xl mx-auto text-center mb-14">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Stay in the loop
          </h3>
          <p className="text-primary-foreground/60 text-sm mb-8">
            Get the latest updates on Maintor features and learning tips.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/35 text-sm focus:outline-none focus:border-primary-foreground/40 focus:bg-primary-foreground/15 transition-all"
              required
            />
            <button
              type="submit"
              className="pill-button bg-primary-foreground text-primary px-6 py-3.5 font-semibold hover:opacity-90 transition-all inline-flex items-center gap-2"
            >
              {submitted ? (
                <>
                  <Check size={16} /> Done
                </>
              ) : (
                <>
                  Sign up <Send size={14} />
                </>
              )}
            </button>
          </form>
          <p className="text-xs text-primary-foreground/30 mt-3">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {/* Follow us — social icons */}
        <div className="reveal reveal-delay-1 flex items-center justify-center gap-2 mb-12">
          <span className="text-sm text-primary-foreground/50 mr-2">
            Follow us
          </span>
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="w-10 h-10 rounded-full bg-primary-foreground/8 border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 hover:text-primary-foreground hover:bg-primary-foreground/15 transition-all"
              aria-label={`Follow on ${s.name}`}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="reveal reveal-delay-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-sky to-sky-light flex items-center justify-center text-white font-bold text-[10px]">
              M
            </div>
            <span className="font-display font-bold text-sm">maintor</span>
          </div>
          <p className="text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} Maintor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
