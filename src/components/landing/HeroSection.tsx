import { EmailCaptureForm } from "./EmailCaptureForm";
import AnimatedSection from "./AnimatedSection";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <AnimatedSection as="div" className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground font-headline">
            O copiloto de IA para líderes de engenharia.
          </h1>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-2xl" delay="delay-150">
          <p className="text-lg leading-8 text-muted-foreground sm:text-xl font-body">
            EngNexus AI conecta os pontos entre pessoas, código e métricas para que você possa parar de gerenciar planilhas e começar a liderar com clareza e confiança.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <EmailCaptureForm
            formId="hero"
            buttonText="Receber Acesso Antecipado"
            inputClassName="bg-card border-border focus:ring-primary" // slate-100 bg with slate-300 border
            buttonClassName="bg-primary hover:bg-primary/90 text-primary-foreground"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
