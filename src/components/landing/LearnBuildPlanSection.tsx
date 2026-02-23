import { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Hammer,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    id: "learn",
    label: "Learn anything",
    icon: BookOpen,
    headline: "Learn anything",
    description:
      "Understand complex topics in a way that makes sense for you — with clear, concise, and helpful responses that adapt to your level.",
    features: ["Adaptive explanations", "Visual breakdowns", "Quiz yourself"],
    color: "bg-blue-50 text-blue-600",
    accentBg: "from-blue-50 to-indigo-50",
  },
  {
    id: "build",
    label: "Build anything",
    icon: Hammer,
    headline: "Build anything",
    description:
      "Turn ideas into reality with guided, step-by-step walkthroughs. From code to creative projects, Maintor helps you ship.",
    features: ["Step-by-step guides", "Code assistance", "Project templates"],
    color: "bg-emerald-50 text-emerald-600",
    accentBg: "from-emerald-50 to-teal-50",
  },
  {
    id: "plan",
    label: "Plan anything",
    icon: CalendarDays,
    headline: "Plan anything",
    description:
      "Break ambitious goals into manageable milestones. Maintor helps you create realistic roadmaps and stay on track.",
    features: ["Smart roadmaps", "Progress tracking", "Milestone alerts"],
    color: "bg-amber-50 text-amber-600",
    accentBg: "from-amber-50 to-orange-50",
  },
];

const LearnBuildPlanSection = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const slide = slides[active];

  const changeSlide = (index: number) => {
    if (index === active || animating) return;
    setAnimating(true);
    setActive(index);
    setTimeout(() => setAnimating(false), 400);
  };

  const prev = () =>
    changeSlide(active === 0 ? slides.length - 1 : active - 1);
  const next = () =>
    changeSlide(active === slides.length - 1 ? 0 : active + 1);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a === slides.length - 1 ? 0 : a + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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
    <section id="features" className="section-padding" ref={sectionRef}>
      <div className="section-container">
        {/* Tabs */}
        <div className="reveal flex items-center justify-center gap-2 mb-12">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => changeSlide(i)}
              className={`pill-button text-sm font-medium transition-all duration-300 ${i === active
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              <s.icon size={16} className="mr-2" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="reveal reveal-delay-1 card-surface-static overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Visual */}
            <div
              className={`aspect-video md:aspect-auto bg-gradient-to-br ${slide.accentBg} flex items-center justify-center p-8 md:p-12 transition-all duration-500`}
            >
              <div
                key={slide.id}
                className={`slide-enter w-24 h-24 rounded-3xl ${slide.color} flex items-center justify-center shadow-lg`}
              >
                <slide.icon size={44} />
              </div>
            </div>

            {/* Text */}
            <div className="p-8 md:p-12 flex flex-col justify-center" key={slide.id}>
              <h3 className="slide-enter heading-md">{slide.headline}</h3>
              <p className="slide-enter text-body mt-4">{slide.description}</p>

              {/* Feature pills */}
              <div className="slide-enter flex flex-wrap gap-2 mt-6">
                {slide.features.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} className="text-muted-foreground" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => changeSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === active
                    ? "bg-accent w-8"
                    : "bg-border w-2.5 hover:bg-muted-foreground/30"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnBuildPlanSection;
