import { useEffect, useRef } from "react";
import { Brain, Eye, Code, Sparkles, Zap, Target, ChevronLeft, ChevronRight } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Reasoning with depth and nuance",
    description:
      "Smart, concise responses with genuine insight — not clichés or surface-level summaries.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Eye,
    title: "World-leading multimodal understanding",
    description:
      "Reason across text, images, video, audio and code in a single seamless experience.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Code,
    title: "Best models for learning",
    description:
      "Improved instruction following and tool-use for guided, step-by-step learning journeys.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Sparkles,
    title: "Adaptive to your style",
    description:
      "Adjusts its explanations, pace and depth to match how you learn best.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Zap,
    title: "Instant feedback loops",
    description:
      "Get real-time corrections and encouragement as you work through problems.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Target,
    title: "Goal-oriented pathways",
    description:
      "Set your objectives and follow structured paths designed to get you there efficiently.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const CapabilitiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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

  return (
    <section id="capabilities" className="section-padding bg-surface" ref={sectionRef}>
      <div className="section-container">
        <h2 className="reveal heading-lg text-center">What Maintor can do</h2>
        <p className="reveal reveal-delay-1 text-body text-center mt-4 max-w-2xl mx-auto">
          Built to understand deeply and respond with clarity
        </p>

        {/* Scrollable card row */}
        <div className="reveal reveal-delay-2 mt-16 relative">
          <div ref={scrollRef} className="scroll-row">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="card-surface p-7 flex flex-col w-[300px] sm:w-[320px]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${cap.color} flex items-center justify-center mb-5`}
                >
                  <cap.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
