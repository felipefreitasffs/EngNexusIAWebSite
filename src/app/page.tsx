import { HeroSection } from "@/components/landing/HeroSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { FeaturesGridSection } from "@/components/landing/FeaturesGridSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { FooterSection } from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <SolutionSection />
      <FeaturesGridSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
