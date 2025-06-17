import { EmailCaptureForm } from "./EmailCaptureForm";
import AnimatedSection from "./AnimatedSection";

export function FinalCtaSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-900 text-primary-foreground relative overflow-hidden">
      {/* Placeholder for particle/network animation */}
      <div className="absolute inset-0 z-0 particle-background opacity-20">
        {/* This div is for the particle animation. Implement animation here. */}
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center relative z-10">
        <AnimatedSection as="div" className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline text-slate-100">
            Construa o futuro da liderança em engenharia. <span className="text-gradient-primary">Comece hoje.</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-xl" delay="delay-150">
          <p className="text-lg leading-8 font-body text-slate-300">
            Junte-se à nossa lista de espera. Os primeiros a entrar terão acesso exclusivo e a chance de moldar o futuro da gestão de engenharia com IA.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <EmailCaptureForm
            formId="final-cta"
            buttonText="Garantir Acesso Antecipado!"
            inputClassName="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-primary-highlight-from"
            buttonClassName="button-gradient-primary button-glow-hover shadow-lg"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}

// Renaming CtaSection to FinalCtaSection. If the old CtaSection is not used, it can be deleted.
// For this exercise, I'm replacing its content with FinalCtaSection.
// If you intended to keep the original CtaSection AND add a new FinalCtaSection,
// then this file should be renamed to FinalCtaSection.tsx and a new CtaSection.tsx might be needed or the old one removed.
// Given the PRD, it seems like this is the "CTA Final", so replacing the content of CtaSection.tsx is appropriate if it's the only CTA.
// If another CTA section was meant to be preserved, this change needs adjustment.
// For clarity, if this is the new only CTA, renaming the file to FinalCtaSection.tsx and updating imports in page.tsx would be cleaner.
// For now, just changing the component name inside the file.

export { FinalCtaSection as CtaSection }; // Keep export name if page.tsx uses CtaSection
