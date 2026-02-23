import { useState } from "react";

const footerLinks = [
  { label: "How it works", href: "#capabilities" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Safety", href: "#safety" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const FooterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer id="newsletter" className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <h3 className="font-display text-2xl font-bold mb-3">Stay in the loop</h3>
          <p className="text-primary-foreground/70 text-sm mb-6">
            Get the latest updates on Maintor features and learning tips.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary-foreground/50"
              required
            />
            <button
              type="submit"
              className="pill-button bg-primary-foreground text-primary px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
            >
              Sign up
            </button>
          </form>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {["X", "Instagram", "YouTube", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {s}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Maintor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
