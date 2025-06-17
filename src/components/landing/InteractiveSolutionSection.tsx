import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layers, BarChartBig, ShieldAlert } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutionTabs = [
  {
    id: "fragmentada",
    icon: Layers,
    title: "Visão Fragmentada",
    problemText: "Dados de equipe espalhados por várias ferramentas? Difícil ter uma visão completa.",
    solutionImage: "https://placehold.co/700x500.png/172038/E2E8F0?text=Perfil+360",
    imageAlt: "Perfil 360° do Colaborador",
    imageHint: "employee profile unified",
    solutionText: "Unifique 1:1s, PDIs e feedbacks em um perfil completo e contextualizado.",
  },
  {
    id: "metricas",
    icon: BarChartBig,
    title: "Métricas sem Contexto",
    problemText: "Gráficos DORA bonitos, mas que não contam a história real da sua equipe?",
    solutionImage: "https://placehold.co/700x500.png/172038/E2E8F0?text=Dashboard+DORA",
    imageAlt: "Dashboard DORA com Contexto",
    imageHint: "DORA metrics dashboard",
    solutionText: "Entenda a história por trás dos números conectando métricas à saúde do time e eventos chave.",
  },
  {
    id: "reativa",
    icon: ShieldAlert,
    title: "Gestão Reativa",
    problemText: "Apagando incêndios em vez de prevenir problemas e identificar oportunidades?",
    solutionImage: "https://placehold.co/700x500.png/172038/E2E8F0?text=AI+Insight",
    imageAlt: "Insight Card Gerado por IA",
    imageHint: "AI insight alert",
    solutionText: "Receba alertas proativos sobre riscos e oportunidades antes que eles se tornem crises.",
  },
];

export function InteractiveSolutionSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Chega de gerenciar o caos. <span className="text-gradient-primary">Assuma o controle.</span>
          </h2>
        </AnimatedSection>

        <Tabs defaultValue={solutionTabs[0].id} className="flex flex-col md:flex-row gap-8 md:gap-12">
          <TabsList className="flex md:flex-col md:w-1/3 bg-transparent p-0 space-y-2 h-auto">
            {solutionTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="w-full justify-start text-left h-auto py-4 px-5 data-[state=active]:bg-violet-500/20 data-[state=active]:text-violet-300 data-[state=active]:shadow-lg hover:bg-slate-700/50 hover:text-slate-300 text-slate-400 rounded-lg border border-transparent data-[state=active]:border-violet-500/50"
              >
                <tab.icon className="mr-3 h-6 w-6 shrink-0" />
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">{tab.title}</span>
                    <p className="text-sm text-slate-500 data-[state=active]:text-violet-400">{tab.problemText}</p>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="md:w-2/3">
            {solutionTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <AnimatedSection as="div">
                  <Card className="bg-slate-800 border-slate-700 shadow-xl overflow-hidden rounded-xl">
                    <CardContent className="p-0">
                       <Image
                        src={tab.solutionImage}
                        alt={tab.imageAlt}
                        width={700}
                        height={500}
                        className="object-cover w-full h-auto"
                        data-ai-hint={tab.imageHint}
                      />
                    </CardContent>
                  </Card>
                  <div className="mt-6 p-6 bg-slate-800/50 rounded-lg border border-slate-700/50">
                    <p className="text-lg text-slate-300 font-medium">
                      {tab.solutionText}
                    </p>
                  </div>
                </AnimatedSection>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
