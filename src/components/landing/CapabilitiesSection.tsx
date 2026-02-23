import { Brain, Eye, Code, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Reasoning with depth and nuance",
    description: "Smart, concise responses with genuine insight — not clichés or surface‑level summaries.",
  },
  {
    icon: Eye,
    title: "World‑leading multimodal understanding",
    description: "Reason across text, images, video, audio and code in a single seamless experience.",
  },
  {
    icon: Code,
    title: "Best models for learning",
    description: "Improved instruction following and tool‑use for guided, step‑by‑step learning journeys.",
  },
  {
    icon: Sparkles,
    title: "Adaptive to your style",
    description: "Maintor adjusts its explanations, pace and depth to match how you learn best.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="section-padding bg-surface">
      <div className="section-container">
        <h2 className="heading-lg text-center">What Maintor can do</h2>
        <p className="text-body text-center mt-4 max-w-2xl mx-auto">
          Built to understand deeply and respond with clarity
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="card-surface p-6 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-sky-muted flex items-center justify-center mb-4">
                <cap.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
