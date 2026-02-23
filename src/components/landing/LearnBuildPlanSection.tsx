import { useState } from "react";
import { BookOpen, Hammer, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "learn",
    label: "Learn anything",
    icon: BookOpen,
    headline: "Learn anything",
    description:
      "Understand complex topics in a way that makes sense for you — with clear, concise, and helpful responses that adapt to your level.",
    color: "bg-sky-muted text-accent",
  },
  {
    id: "build",
    label: "Build anything",
    icon: Hammer,
    headline: "Build anything",
    description:
      "Turn ideas into reality with guided, step‑by‑step walkthroughs. From code to creative projects, Maintor helps you ship.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "plan",
    label: "Plan anything",
    icon: CalendarDays,
    headline: "Plan anything",
    description:
      "Break ambitious goals into manageable milestones. Maintor helps you create realistic roadmaps and stay on track.",
    color: "bg-amber-50 text-amber-600",
  },
];

const LearnBuildPlanSection = () => {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  const prev = () => setActive((a) => (a === 0 ? slides.length - 1 : a - 1));
  const next = () => setActive((a) => (a === slides.length - 1 ? 0 : a + 1));

  return (
    <section id="features" className="section-padding">
      <div className="section-container">
        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`pill-button text-sm font-medium transition-colors ${
                i === active
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card-surface overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Visual */}
            <div className="aspect-video md:aspect-auto bg-muted flex items-center justify-center p-8">
              <div className={`w-20 h-20 rounded-2xl ${slide.color} flex items-center justify-center`}>
                <slide.icon size={36} />
              </div>
            </div>
            {/* Text */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="heading-md">{slide.headline}</h3>
              <p className="text-body mt-4">{slide.description}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors" aria-label="Previous">
            <ChevronLeft size={20} className="text-muted-foreground" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === active ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors" aria-label="Next">
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnBuildPlanSection;
