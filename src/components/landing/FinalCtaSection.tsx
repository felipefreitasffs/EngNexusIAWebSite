
import { SuggestionForm } from "./SuggestionForm"; 
import AnimatedSection from "./AnimatedSection";

export function FinalCtaSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-900 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 z-0 particle-background opacity-20">
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center relative z-10">
        <AnimatedSection as="div" className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline text-slate-100">
            Tem alguma ideia ou sugestão? <span className="text-gradient-primary">Compartilhe conosco!</span>
          </h2>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-6 max-w-xl" delay="delay-150">
          <p className="text-lg leading-8 font-body text-slate-300">
            Adoramos ouvir de nossa comunidade. Sua opinião é fundamental para moldarmos o futuro do EngNexus AI.
            Deixe seu e-mail e sua sugestão abaixo.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="mt-10 w-full flex justify-center" delay="delay-300">
          <SuggestionForm
            formId="suggestion-form"
            buttonText="Enviar Sugestão"
            buttonLoadingText="Enviando..."
            emailLabel="Seu E-mail (para contato, se necessário)"
            emailPlaceholder="seu.email@empresa.tech"
            suggestionLabel="Sua Sugestão / Feedback"
            suggestionPlaceholder="Adoraríamos ouvir suas ideias sobre o EngNexus AI..."
            inputClassName="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-primary-highlight-from"
            textareaClassName="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:ring-primary-highlight-from"
            buttonClassName="button-gradient-primary button-glow-hover shadow-lg"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
