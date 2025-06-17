
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
import { AlertTriangle, Lightbulb, Activity } from "lucide-react";

const insightExamples = [
  {
    icon: AlertTriangle,
    type: "Risco Potencial",
    title: "Risco de Burnout Detectado",
    description: "Maria S. demonstrou um volume de commits significativamente alto fora do horário comercial nas últimas 2 semanas, incluindo finais de semana. Considere uma conversa sobre carga de trabalho.",
    color: "text-red-400", // Specific semantic color
    bgColor: "bg-red-500/10", // Specific semantic color
    borderColor: "border-red-500/30" // Specific semantic color
  },
  {
    icon: Lightbulb,
    type: "Oportunidade",
    title: "Oportunidade de Mentoria",
    description: "João P. completou recentemente módulos de aprendizado em 'Cloud Architecture Avançada' e expressou interesse. Ana L. possui vasta experiência na área e poderia ser uma ótima mentora.",
     color: "text-green-400", // Specific semantic color
    bgColor: "bg-green-500/10", // Specific semantic color
    borderColor: "border-green-500/30" // Specific semantic color
  },
  {
    icon: Activity,
    type: "Observação de Processo",
    title: "Gargalo no Processo de Code Review",
    description: "O tempo médio para primeira revisão de PRs aumentou 30% na última sprint. Issues relacionadas ao Módulo X parecem ser as mais impactadas. Investigar a complexidade ou disponibilidade de revisores.",
    color: "text-yellow-400", // Specific semantic color
    bgColor: "bg-yellow-500/10", // Specific semantic color
    borderColor: "border-yellow-500/30" // Specific semantic color
  },
];

export function AIVisionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <AnimatedSection as="div" className="flex justify-center md:justify-start">
            <Image
              src="https://placehold.co/500x500.png/172038/8B5CF6?text=Nexo+de+Dados"
              alt="Nexo de Dados Inteligente - Abstração de IA"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl object-contain"
              data-ai-hint="abstract data brain"
            />
          </AnimatedSection>
          <AnimatedSection as="div" className="space-y-6" delay="delay-150">
            <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
              EngNexus AI não apenas mostra dados. <span className="text-gradient-primary">Ele pensa com você.</span>
            </h2>
            <p className="text-lg text-slate-400 font-body">
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
                          <p className="text-sm text-slate-300">
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
