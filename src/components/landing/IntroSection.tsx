import { useEffect, useRef } from "react";
import { Play } from "lucide-react";

const IntroSection = () => {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="section-padding" ref={sectionRef}>
      <div className="section-container">
        <h2 className="reveal heading-lg text-center max-w-4xl mx-auto leading-snug">
          Learning made easy
          <br />
          <span className="gradient-text">and consistent</span>
        </h2>

        {/* Video card */}
        <div className="reveal reveal-delay-2 mt-16 max-w-4xl mx-auto">
          <div className="card-surface-static overflow-hidden group">
            <div className="aspect-video bg-gradient-to-br from-muted to-secondary flex items-center justify-center relative cursor-pointer">
              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-sky/5 group-hover:from-navy/8 group-hover:to-sky/8 transition-colors duration-500" />

              {/* Floating shapes for visual interest */}
              <div className="absolute top-8 right-12 w-24 h-24 rounded-2xl bg-sky/10 rotate-12 group-hover:rotate-6 transition-transform duration-700" />
              <div className="absolute bottom-12 left-8 w-16 h-16 rounded-full bg-accent/8 group-hover:scale-110 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                  <Play size={28} className="text-primary-foreground ml-1" fill="hsl(var(--primary-foreground))" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  Bring any idea to life with Maintor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
