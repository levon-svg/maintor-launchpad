import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const GetStartedSection = () => {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="get-started" className="section-padding bg-surface" ref={sectionRef}>
      <div className="section-container max-w-3xl">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-navy-light to-primary p-[1px]">
          {/* Gradient border wrapper */}
          <div className="rounded-3xl bg-card p-8 md:p-14 text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-sky/5 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 blur-[60px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-muted text-accent text-xs font-semibold mb-6">
                <Sparkles size={12} />
                Free to start
              </div>

              <h2 className="heading-md">Get started with Maintor</h2>
              <p className="text-body mt-3 max-w-lg mx-auto">
                Start your learning journey today — free, fast, and tailored to
                you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="pill-button bg-primary text-primary-foreground px-8 py-3.5 text-base font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
                >
                  Start now <ArrowRight size={16} />
                </a>
                <a
                  href="#capabilities"
                  className="pill-button bg-secondary text-secondary-foreground px-8 py-3.5 text-base hover:bg-muted transition-colors border border-border/50"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
