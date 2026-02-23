import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import IntroSection from "@/components/landing/IntroSection";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import LearnBuildPlanSection from "@/components/landing/LearnBuildPlanSection";
import GetStartedSection from "@/components/landing/GetStartedSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SafetySection from "@/components/landing/SafetySection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <CapabilitiesSection />
      <LearnBuildPlanSection />
      <GetStartedSection />
      <TestimonialsSection />
      <SafetySection />
      <FooterSection />
    </main>
  );
};

export default Index;
