import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 rounded-b-3xl overflow-hidden">
        <img
          src={heroBg}
          alt="Abstract learning technology visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-24 pb-16">
        <h1 className="heading-xl text-primary-foreground animate-slide-up">
          Maintor
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light animate-slide-up-delayed">
          Your learning partner that helps you to actually finish
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed-2">
          <a
            href="#get-started"
            className="pill-button bg-primary-foreground text-primary px-8 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
          >
            Try now
          </a>
          <a
            href="#newsletter"
            className="pill-button border border-primary-foreground/30 text-primary-foreground px-8 py-3 text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Pricing
          </a>
        </div>
      </div>

      {/* Explore link */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
      >
        <span className="text-sm font-medium">Explore the latest</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
