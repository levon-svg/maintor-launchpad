import { useEffect, useRef } from "react";
import {
  Shield,
  Users,
  Rocket,
  Handshake,
  Globe,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    emoji: "🔐",
    label: "Privacy First",
    desc: "Your data belongs to you",
    color: "group-hover:bg-blue-50 group-hover:text-blue-600",
    iconColor: "text-blue-500",
  },
  {
    icon: Users,
    emoji: "✨",
    label: "Inclusive Learning",
    desc: "Designed for everyone",
    color: "group-hover:bg-violet-50 group-hover:text-violet-600",
    iconColor: "text-violet-500",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    label: "Continuous Improvement",
    desc: "Always evolving",
    color: "group-hover:bg-emerald-50 group-hover:text-emerald-600",
    iconColor: "text-emerald-500",
  },
  {
    icon: Handshake,
    emoji: "🤝",
    label: "Transparent",
    desc: "No black boxes",
    color: "group-hover:bg-amber-50 group-hover:text-amber-600",
    iconColor: "text-amber-500",
  },
  {
    icon: Globe,
    emoji: "🌍",
    label: "Ethically Built",
    desc: "Human wellbeing centered",
    color: "group-hover:bg-rose-50 group-hover:text-rose-600",
    iconColor: "text-rose-500",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    label: "Empowerment",
    desc: "Helping you achieve goals",
    color: "group-hover:bg-cyan-50 group-hover:text-cyan-600",
    iconColor: "text-cyan-500",
  },
];

const SafetySection = () => {
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
    <section id="safety" className="section-padding bg-surface" ref={sectionRef}>
      <div className="section-container">
        <div className="reveal text-center max-w-2xl mx-auto">
          <h2 className="heading-lg">
            Safety & responsibility
            <span className="gradient-text"> are core</span>
          </h2>
          <p className="text-body mt-4">
            We build Maintor with human wellbeing at the centre — prioritising
            privacy, transparency, and ethical AI in every decision.
          </p>
          <a
            href="#"
            className="pill-button bg-primary text-primary-foreground mt-8 px-8 py-3 text-base font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] inline-block"
          >
            Learn more
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <div
              key={v.label}
              className={`reveal card-surface p-6 text-center flex flex-col items-center gap-3 group cursor-default`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-sky-muted flex items-center justify-center transition-all duration-300 ${v.color}`}
              >
                <v.icon
                  size={22}
                  className={`transition-colors duration-300 ${v.iconColor}`}
                />
              </div>
              <h4 className="font-display font-semibold text-sm text-foreground">
                {v.label}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
