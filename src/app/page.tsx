import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveFeaturesMatrix } from "@/components/landing/InteractiveFeaturesMatrix";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { AIVisionSection } from "@/components/landing/AIVisionSection";
import { FaqSection } from "@/components/landing/FaqSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden relative">
      <HeroSection />
      <AIVisionSection />
      <InteractiveFeaturesMatrix />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
