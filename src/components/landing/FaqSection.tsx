
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Que tipo de dados o EngNexus AI analisa?",
    answer:
      "EngNexus AI integra-se com suas ferramentas existentes (Git, Jira, CI/CD, plataformas de comunicação) para analisar métricas de engenharia (DORA, fluxo de trabalho), padrões de comunicação, e dados de performance de times. Nosso objetivo é fornecer uma visão 360° da saúde e eficiência da sua operação de engenharia.",
  },
  {
    question: "Como EngNexus AI garante a segurança dos meus dados?",
    answer:
      "A segurança dos seus dados é nossa prioridade máxima. Utilizamos criptografia de ponta para dados em trânsito e em repouso, seguimos as melhores práticas de segurança da indústria e oferecemos controles de acesso granulares. Nossa infraestrutura é robusta e projetada para proteger suas informações confidenciais.",
  },
  {
    question: "Quando o beta do EngNexus AI será lançado?",
    answer:
      "Estamos trabalhando arduamente para lançar o beta em breve! Inscreva-se na nossa lista de espera para ser um dos primeiros a receber acesso exclusivo, atualizações e a oportunidade de moldar o futuro da plataforma com seu feedback.",
  },
  {
    question: "EngNexus AI é adequado para que tamanho de equipe?",
    answer:
      "EngNexus AI é projetado para escalar, atendendo desde times de engenharia em crescimento até organizações maiores. As funcionalidades de gestão de pessoas, análise de custos e métricas contextuais são valiosas para líderes em diversos níveis.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Tudo o que você precisa saber para começar com EngNexus AI.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="max-w-3xl mx-auto" delay="delay-150">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-200 hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
