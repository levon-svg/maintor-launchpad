import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — gradient with animated glow orbs */}
      <div className="absolute inset-0 rounded-b-[2.5rem] overflow-hidden">
        {/* Deep navy gradient background */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />

        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-sky/10 blur-[120px] animate-pulse-soft" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-light/8 blur-[100px] animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sky/5 blur-[150px] animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(213 94% 58% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(213 94% 58% / 0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-28 pb-20">
        {/* Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
          <Sparkles size={14} className="text-sky-light" />
          <span className="text-sm font-medium text-primary-foreground/80">
            AI-powered learning platform
          </span>
        </div>

        <h1 className="heading-xl text-primary-foreground animate-slide-up">
          Maintor
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up-delayed">
          Your learning partner that helps you
          <span className="text-primary-foreground font-medium">
            {" "}
            actually finish
          </span>
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed-2">
          <a
            href="#get-started"
            className="pill-button bg-primary-foreground text-primary px-8 py-3.5 text-base font-semibold hover:shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-[1.02]"
          >
            Try now
          </a>
          <a
            href="#newsletter"
            className="pill-button border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 text-base hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Pricing
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 animate-slide-up-delayed-3">
          {[
            { value: "50K+", label: "Active learners" },
            { value: "98%", label: "Completion rate" },
            { value: "4.9★", label: "User rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/50 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore link */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
      >
        <span className="text-sm font-medium">Explore the latest</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
