const IntroSection = () => {
  return (
    <section id="intro" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg text-center max-w-4xl mx-auto leading-snug">
          Learning made easy<br />
          <span className="gradient-text">and consistent</span>
        </h2>

        {/* Video card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-surface overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center relative group cursor-pointer">
              <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-1">
                    <path d="M8 5v14l11-7L8 5z" fill="hsl(var(--primary-foreground))" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
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
