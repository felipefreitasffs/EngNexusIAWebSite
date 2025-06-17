import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

const solutionItems = [
  {
    title: "Entenda o contexto completo de cada pessoa.",
    description:
      "Chega de procurar informações em vários lugares. No EngNexus AI, o histórico de 1:1s, os objetivos de desenvolvimento (PDI) e os feedbacks vivem no mesmo lugar, fornecendo uma visão completa para conversas mais ricas e impactantes.",
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Painel de Perfil do Colaborador no EngNexus AI",
    imageHint: "employee profile dashboard",
    layout: "image-left",
  },
  {
    title: "Métricas DORA que contam uma história.",
    description:
      "Vá além dos números. Conecte as métricas de entrega (Deployment Frequency, Lead Time) ao sentimento do time e a eventos importantes. Entenda não apenas 'o quê', mas 'o porquê' da performance da sua equipe.",
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Dashboard de Métricas de Engenharia no EngNexus AI",
    imageHint: "engineering metrics DORA",
    layout: "image-right",
  },
  {
    title: "Receba insights, não apenas dados.",
    description:
      "Nossa IA analisa os sinais da sua equipe e dos seus projetos para te alertar sobre riscos de burnout, dependências críticas e oportunidades de melhoria antes que se tornem problemas.",
    imageUrl: "https://placehold.co/600x450.png",
    imageAlt: "Exemplo de Insight Card gerado por IA no EngNexus AI",
    imageHint: "AI insight suggestion",
    layout: "image-left",
  },
];

export function SolutionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 space-y-16 md:space-y-24">
        {solutionItems.map((item, index) => (
          <AnimatedSection
            key={index}
            as="div"
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div
              className={`flex justify-center ${
                item.layout === "image-right" ? "md:order-last" : ""
              }`}
            >
              <Card className="overflow-hidden rounded-xl shadow-lg bg-card">
                <CardContent className="p-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.imageAlt}
                    width={600}
                    height={450}
                    className="object-cover w-full h-auto"
                    data-ai-hint={item.imageHint}
                  />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                {item.title}
              </h2>
              <p className="text-lg text-muted-foreground font-body">
                {item.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
