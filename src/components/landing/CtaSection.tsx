import { EmailCaptureForm } from "./EmailCaptureForm";
import AnimatedSection from "./AnimatedSection";

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center">
        <AnimatedSection as="div" className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Pronto para revolucionar sua gestão?
          </h2>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-xl" delay="delay-150">
          <p className="text-lg leading-8 font-body opacity-90">
            Junte-se à nossa lista de espera. Os primeiros a entrar terão acesso exclusivo e a chance de moldar o futuro da gestão de engenharia.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <EmailCaptureForm
            formId="cta"
            buttonText="Quero Acesso Antecipado!"
            inputClassName="bg-background text-foreground placeholder:text-muted-foreground border-border focus:ring-primary"
            buttonClassName="bg-primary-foreground hover:bg-primary-foreground/90 text-primary border-transparent"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
