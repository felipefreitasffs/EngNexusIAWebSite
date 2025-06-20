
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Lightbulb } from "lucide-react";

const insightExamples = [
  {
    icon: AlertTriangle,
    type: "Risco: Fluxo e Competências",
    title: "Risco de Gargalo",
    description: "O 'Aging Chart' mostra que a tarefa ENG-102 está parada em 'Revisão' há 5 dias. O responsável, João, é iniciante na tecnologia do sistema, segundo a Matriz de Competências. Sugestão: Oferecer ajuda ou pareamento.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30"
  },
  {
    icon: Lightbulb,
    type: "Insight: Alocação e DEVEX",
    title: "Causa Raiz de Insatisfação",
    description: "O time Fênix alocou 45% do tempo para 'Bugs' no último mês. A pesquisa DEVEX para o mesmo time mostrou baixa satisfação com a 'Qualidade do Código'. Sugestão: Priorizar o pagamento de débitos técnicos.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30"
  },
  {
    icon: AlertTriangle,
    type: "Risco: DEVEX e Pessoal",
    title: "Risco de Burnout",
    description: "O 'Activity Heatmap' mostra um padrão de commits tarde da noite para a Maria. Sugestão: Discutir o equilíbrio entre trabalho e vida pessoal na próxima 1:1.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    borderColor: "border-destructive/30"
  },
];

export function AIVisionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection as="div" className="flex justify-center md:justify-start">
            <Image
              src="/images/engnexusia2.jpeg"
              alt="Visualização de uma rede neural brilhante dentro de uma esfera, simbolizando a inteligência artificial do EngNexus AI e sua capacidade de conectar dados."
              width={500}
              height={500}
              className="rounded-xl shadow-2xl object-contain"
              data-ai-hint="AI network"
            />
          </AnimatedSection>
          <AnimatedSection as="div" className="space-y-6" delay="delay-150">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              EngNexus AI não apenas mostra dados. <span className="text-gradient-primary">Ele pensa com você.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Nossos algoritmos analisam sinais de performance, comunicação e processos para entregar insights que você não encontrará em nenhum outro lugar. Antecipe riscos, descubra oportunidades e otimize gargalos com a inteligência proativa da EngNexus AI.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-md md:max-w-lg relative"
            >
              <CarouselContent>
                {insightExamples.map((insight, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1"> {/* Padding for carousel item spacing */}
                      <Card className={`shadow-lg rounded-xl border ${insight.borderColor} ${insight.bgColor}`}>
                        <CardHeader className="flex flex-row items-center gap-3 space-y-0 pb-2">
                          <insight.icon className={`h-6 w-6 ${insight.color}`} />
                          <CardTitle className={`text-xl font-semibold ${insight.color} font-headline`}>{insight.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">
                            {insight.description}
                          </p>
                          <CardDescription className={`mt-2 text-xs ${insight.color} opacity-80`}>
                            {insight.type}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 text-primary-foreground bg-primary/60 hover:bg-primary border-primary/50 disabled:opacity-30 transition-all" />
              <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 text-primary-foreground bg-primary/60 hover:bg-primary border-primary/50 disabled:opacity-30 transition-all" />
            </Carousel>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
