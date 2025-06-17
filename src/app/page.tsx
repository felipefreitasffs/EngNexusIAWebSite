import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveSolutionSection } from "@/components/landing/InteractiveSolutionSection";
import { AIVisionSection } from "@/components/landing/AIVisionSection";
import { FeaturesGridSection } from "@/components/landing/FeaturesGridSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden relative">
      {/* Placeholder for global particle background if desired across multiple sections */}
      {/* <div className="particle-background fixed inset-0 z-[-1]"></div> */}
      <HeroSection />
      <InteractiveSolutionSection />
      <AIVisionSection />
      <FeaturesGridSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
