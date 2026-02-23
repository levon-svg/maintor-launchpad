import { useEffect, useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";

const demos = [
    {
        title: "Learn anything you want",
        description: "Generate rich learning journeys tailored to your goals",
        gradient: "from-blue-50 to-indigo-50",
        iconColor: "bg-blue-100 text-blue-600",
    },
    {
        title: "Master complex topics",
        description: "Break down difficult concepts with visual explanations",
        gradient: "from-violet-50 to-purple-50",
        iconColor: "bg-violet-100 text-violet-600",
    },
    {
        title: "Build real projects",
        description: "Step-by-step guidance from idea to finished product",
        gradient: "from-emerald-50 to-teal-50",
        iconColor: "bg-emerald-100 text-emerald-600",
    },
    {
        title: "Plan your career",
        description: "Create actionable roadmaps for professional growth",
        gradient: "from-amber-50 to-orange-50",
        iconColor: "bg-amber-100 text-amber-600",
    },
    {
        title: "Ace your exams",
        description: "Personalized study plans with active recall techniques",
        gradient: "from-rose-50 to-pink-50",
        iconColor: "bg-rose-100 text-rose-600",
    },
];

const HandsOnSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = 360;
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
        <section id="hands-on" className="section-padding" ref={sectionRef}>
            <div className="section-container">
                <h2 className="reveal heading-lg text-center">
                    Explore what you can do
                </h2>
                <p className="reveal reveal-delay-1 text-body text-center mt-4 max-w-2xl mx-auto">
                    Hands-on examples showcasing Maintor's capabilities
                </p>

                {/* Scrollable demo cards */}
                <div className="reveal reveal-delay-2 mt-16 relative">
                    <div ref={scrollRef} className="scroll-row">
                        {demos.map((demo) => (
                            <div
                                key={demo.title}
                                className="card-surface overflow-hidden w-[320px] sm:w-[340px] group"
                            >
                                {/* Video preview area */}
                                <div
                                    className={`aspect-video bg-gradient-to-br ${demo.gradient} flex items-center justify-center relative cursor-pointer`}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                    <div
                                        className={`w-14 h-14 rounded-full ${demo.iconColor} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Play size={22} className="ml-0.5" fill="currentColor" />
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="p-5">
                                    <h4 className="font-display font-semibold text-foreground">
                                        {demo.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                                        {demo.description}
                                    </p>
                                </div>
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

export default HandsOnSection;
