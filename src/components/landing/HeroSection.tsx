import Image from "next/image";
import { EmailCaptureForm } from "./EmailCaptureForm";
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-40 bg-slate-900 relative overflow-hidden">
      {/* Placeholder for particle/network animation */}
      <div className="absolute inset-0 z-0 particle-background opacity-20">
        {/* This div is for the particle animation. Implement animation here. */}
        {/* For example, a subtle dot pattern or slow-moving lines */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center relative z-10">
        <AnimatedSection as="div" className="mb-6">
          <Badge
            variant="outline"
            className="border-primary-highlight-to/50 bg-primary-highlight-from/10 text-primary-highlight-to py-1 px-3 text-sm animate-glow"
          >
            ✨ Lançamento Beta em Breve
          </Badge>
        </AnimatedSection>
        <AnimatedSection as="div" className="max-w-4xl">
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl text-gradient-primary">
            Seu Copiloto de IA para Liderança em Engenharia.
          </h1>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-2xl" delay="delay-150">
          <p className="text-lg leading-8 text-slate-300 sm:text-xl font-body">
            EngNexus AI transforma dados dispersos em clareza estratégica, para que você possa liderar times de alta performance.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <EmailCaptureForm
            formId="hero"
            buttonText="Quero Acesso Antecipado!"
            inputClassName="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-primary-highlight-from"
            buttonClassName="button-gradient-primary button-glow-hover shadow-lg"
          />
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-16 w-full max-w-4xl" delay="delay-450">
          {/* Placeholder for Video/Lottie Animation */}
          <div className="aspect-video bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700 flex items-center justify-center">
            <Image
              src="https://placehold.co/800x450.png/172038/E2E8F0?text=UI+Animation+Showcase"
              alt="EngNexus AI UI Showcase"
              width={800}
              height={450}
              className="rounded-lg object-cover"
              data-ai-hint="UI animation platform"
              priority
            />
            {/* <p className="text-slate-400">EngNexus AI UI Video/Lottie Animation Here</p> */}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
