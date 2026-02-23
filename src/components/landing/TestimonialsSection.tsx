import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Maintor completely changed how I study. I went from overwhelmed to actually finishing my courses.",
    name: "Sarah K.",
    role: "Graduate Student",
    avatar: "SK",
    color: "bg-blue-100 text-blue-700",
  },
  {
    quote:
      "The adaptive learning is incredible — it feels like having a private tutor who never gets tired.",
    name: "James L.",
    role: "Software Engineer",
    avatar: "JL",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    quote:
      "I used Maintor to plan my entire career transition. It broke everything into manageable steps.",
    name: "Priya M.",
    role: "Career Changer",
    avatar: "PM",
    color: "bg-violet-100 text-violet-700",
  },
  {
    quote:
      "Best learning tool I've ever used. The AI understands what I need before I even finish asking.",
    name: "David R.",
    role: "Product Designer",
    avatar: "DR",
    color: "bg-amber-100 text-amber-700",
  },
  {
    quote:
      "My team's onboarding time dropped 40% after we started using Maintor for training materials.",
    name: "Lisa T.",
    role: "Engineering Manager",
    avatar: "LT",
    color: "bg-rose-100 text-rose-700",
  },
];

const partners = [
  "Stanford",
  "MIT",
  "Google",
  "Microsoft",
  "Coursera",
  "Khan Academy",
  "Duolingo",
  "Notion",
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () =>
    setCurrentTestimonial((c) =>
      c === 0 ? testimonials.length - 1 : c - 1
    );
  const nextTestimonial = () =>
    setCurrentTestimonial((c) =>
      c === testimonials.length - 1 ? 0 : c + 1
    );

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

  // Visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentTestimonial + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="section-padding" ref={sectionRef}>
      <div className="section-container">
        {/* Partner logos */}
        <div className="reveal mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6 tracking-wide uppercase">
            Trusted by learners from
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span
                key={p}
                className="text-lg font-display font-semibold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <h2 className="reveal heading-lg text-center">
          What people are saying
        </h2>
        <p className="reveal reveal-delay-1 text-body text-center mt-4 max-w-2xl mx-auto">
          Real stories from learners around the world
        </p>

        {/* Testimonial cards */}
        <div className="reveal reveal-delay-2 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((t, i) => (
              <div
                key={`${t.name}-${currentTestimonial}`}
                className="slide-enter card-surface-static p-8 flex flex-col relative"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Accent border */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl bg-gradient-to-b from-accent to-sky-light" />

                <Quote
                  size={24}
                  className="text-accent/20 mb-4 flex-shrink-0"
                />
                <p className="text-foreground leading-relaxed flex-1 text-[15px]">
                  "{t.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={18} className="text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial
                      ? "bg-accent w-6"
                      : "bg-border w-2 hover:bg-muted-foreground/30"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2.5 rounded-full bg-card border border-border hover:bg-secondary hover:shadow-sm transition-all"
              aria-label="Next testimonials"
            >
              <ChevronRight size={18} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
