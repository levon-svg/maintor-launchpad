import { Shield, Users, Rocket, Handshake, Globe, TrendingUp } from "lucide-react";

const values = [
  { icon: Shield, label: "Privacy First", desc: "Your data belongs to you" },
  { icon: Users, label: "Inclusive Learning", desc: "Designed for everyone" },
  { icon: Rocket, label: "Continuous Improvement", desc: "Always evolving" },
  { icon: Handshake, label: "Transparent", desc: "No black boxes" },
  { icon: Globe, label: "Ethically Built", desc: "Human wellbeing centered" },
  { icon: TrendingUp, label: "Empowerment", desc: "Helping you achieve goals" },
];

const SafetySection = () => {
  return (
    <section id="safety" className="section-padding bg-surface">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-lg">Safety &amp; responsibility are core</h2>
          <p className="text-body mt-4">
            We build Maintor with human wellbeing at the centre — prioritising privacy,
            transparency, and ethical AI in every decision.
          </p>
          <a
            href="#"
            className="pill-button bg-primary text-primary-foreground mt-8 px-8 py-3 text-base font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Learn more
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.label} className="card-surface p-5 text-center flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-muted flex items-center justify-center">
                <v.icon size={20} className="text-accent" />
              </div>
              <h4 className="font-display font-semibold text-sm text-foreground">{v.label}</h4>
              <p className="text-xs text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
