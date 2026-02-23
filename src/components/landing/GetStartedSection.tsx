import { ArrowRight } from "lucide-react";

const GetStartedSection = () => {
  return (
    <section id="get-started" className="section-padding bg-surface">
      <div className="section-container max-w-3xl">
        <div className="card-surface p-8 md:p-12 text-center">
          <h2 className="heading-md">Get started with Maintor</h2>
          <p className="text-body mt-3 max-w-lg mx-auto">
            Start your learning journey today — free, fast, and tailored to you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="pill-button bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Start now <ArrowRight size={16} />
            </a>
            <a
              href="#capabilities"
              className="pill-button bg-secondary text-secondary-foreground px-8 py-3 text-base hover:bg-muted transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
