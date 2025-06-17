import { HeroSection } from "@/components/landing/HeroSection";
import { InteractiveFeaturesMatrix } from "@/components/landing/InteractiveFeaturesMatrix";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { AIVisionSection } from "@/components/landing/AIVisionSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden relative">
      {/* Placeholder for global particle background if desired across multiple sections */}
      {/* <div className="particle-background fixed inset-0 z-[-1]"></div> */}
      <HeroSection />
      {/* AIVisionSection (carrossel de insights) pode ser reavaliada.
          Por enquanto, vamos mantê-la para destacar a IA de forma isolada,
          mas sua funcionalidade principal já está no "Copiloto de IA" da InteractiveFeaturesMatrix.
      */}
      <AIVisionSection />
      <InteractiveFeaturesMatrix />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
