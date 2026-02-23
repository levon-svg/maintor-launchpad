const testimonials = [
  {
    quote: "Maintor completely changed how I study. I went from overwhelmed to actually finishing my courses.",
    name: "Sarah K.",
    role: "Graduate Student",
  },
  {
    quote: "The adaptive learning is incredible — it feels like having a private tutor who never gets tired.",
    name: "James L.",
    role: "Software Engineer",
  },
  {
    quote: "I used Maintor to plan my entire career transition. It broke everything into manageable steps.",
    name: "Priya M.",
    role: "Career Changer",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg text-center">What people are saying</h2>
        <p className="text-body text-center mt-4 max-w-2xl mx-auto">
          Real stories from learners around the world
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-surface p-8 flex flex-col border-l-4 border-l-accent">
              <p className="text-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
