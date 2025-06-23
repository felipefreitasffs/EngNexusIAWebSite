import Image from "next/image";
import { EmailOnlyCaptureForm } from "./EmailOnlyCaptureForm"; 
import AnimatedSection from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="w-full py-24 md:py-40 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0 particle-background opacity-20">
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
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl md:text-7xl text-gradient-primary leading-snug">
            Seu Copiloto de IA para Liderança em Engenharia.
          </h1>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-2xl" delay="delay-150">
          <p className="text-lg leading-8 text-slate-300 sm:text-xl font-body">
            EngNexus AI conecta os pontos entre pessoas, código, fluxo de trabalho e custos, para que você possa parar de gerenciar planilhas e começar a liderar com clareza estratégica.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <EmailOnlyCaptureForm
            formId="hero-email-capture"
            formSpreeEndpoint="https://formspree.io/f/xzzgavng" 
            buttonText="Quero Acesso Antecipado!"
            emailLabel="Seu melhor e-mail para acesso antecipado:"
            emailPlaceholder="seu.email@empresa.tech"
            inputClassName="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-primary-highlight-from"
            buttonClassName="button-gradient-primary button-glow-hover shadow-lg"
            successRedirectUrl="/thank-you-early-access"
          />
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-16 w-full max-w-5xl" delay="delay-450">
          <div className="aspect-video bg-slate-800/50 rounded-xl shadow-2xl border border-slate-700 flex items-center justify-center">
            <Image
              src="/images/engnexusia1.png"
              alt="Demonstração da Interface EngNexus AI"
              width={960}
              height={540}
              className="rounded-lg"
              data-ai-hint="dashboard interface"
              priority
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
