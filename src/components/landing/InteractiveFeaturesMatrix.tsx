
"use client";

import { useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  LayoutDashboard,
  BrainCircuit,
  Users,
  Smile,
  DollarSign,
  Workflow,
  LibraryBig,
  CalendarDays,
  CheckCircle,
  TrendingUp,
  type LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

interface FeatureDetail {
  id: string;
  icon: LucideIcon;
  title: string;
  highlight: string;
  features: string[] | string;
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
}

const featuresData: FeatureDetail[] = [
  {
    id: "painel-controle",
    icon: LayoutDashboard,
    title: "Painel de Controle Inteligente",
    highlight: "Visão unificada e em tempo real da saúde da sua engenharia.",
    features: ["KPIs personalizáveis (DEVEX, Saúde do Deploy, Custos)", "Central de Ações", "Insights proativos de IA"],
    imageSrc: "/images/engnexusia3.png",
    imageAlt: "Painel de controle inteligente EngNexus AI com KPIs e insights de IA",
    imageHint: "dashboard analytics",
  },
  {
    id: "copiloto-ia",
    icon: BrainCircuit,
    title: "Copiloto de IA para Líderes",
    highlight: "Assistência inteligente para otimizar a gestão e identificar oportunidades.",
    features: ["Correlação entre métricas de entrega e saúde do time", "Identificação de gargalos de processo com base em múltiplas fontes", "Análise de padrões de colaboração e bem-estar"],
    imageSrc: "https://placehold.co/800x500.png/1E293B/E2E8F0?text=JSON+Insight",
    imageAlt: "Demonstração do copiloto de IA EngNexus AI gerando insights em formato JSON",
    imageHint: "AI insights",
  },
  {
    id: "gestao-pessoas",
    icon: Users,
    title: "Gestão 360° de Pessoas e Times",
    highlight: "Do micro ao macro: gerencie indivíduos e o time com a mesma facilidade.",
    features: ["Navegue por perfis 360° que unificam todo o contexto do colaborador", "Prepare e conduza 1:1s mais estratégicas com um histórico completo", "Impulsione o crescimento de carreira com Planos de Desenvolvimento (PDIs) visuais", "Identifique talentos e gaps de conhecimento com uma Matriz de Competências dinâmica"],
    imageSrc: "/images/engnexusia6.gif",
    imageAlt: "Painel de Planos de Desenvolvimento Individuais (PDIs) em formato Kanban no EngNexus AI",
    imageHint: "PDI kanban",
  },
  {
    id: "otimizacao-devex",
    icon: Smile,
    title: "Otimização DEVEX",
    highlight: "Entenda a experiência do dev com dados qualitativos e quantitativos.",
    features: ["Combine o sentimento das pesquisas com dados reais", "Visualize o foco do seu time com o Mapa de Calor de Atividade", "Garanta um processo de Code Review saudável e equilibrado."],
    imageSrc: "/images/engnexusia2.gif",
    imageAlt: "Mapa de Calor de Atividade (Activity Heatmap) mostrando padrões de trabalho da equipe no EngNexus AI",
    imageHint: "activity heatmap",
  },
  {
    id: "excelencia-engenharia",
    icon: TrendingUp,
    title: "Excelência em Engenharia",
    highlight: "Vá além do DORA para a verdadeira excelência.",
    features: ["Analise o Cycle Time de PRs e Issues", "Identifique gargalos com o Gráfico de Envelhecimento", "Defina metas para seu time"],
    imageSrc: "/images/engnexusia3.gif",
    imageAlt: "Gráfico de Envelhecimento (Aging Chart) para identificar gargalos no fluxo de trabalho no EngNexus AI",
    imageHint: "aging chart",
  },
  {
    id: "controle-custos",
    icon: DollarSign,
    title: "Visibilidade e Controle de Custos (FinOps)",
    highlight: "Conecte cada real investido a um resultado de engenharia.",
    features: ["Entenda para onde vai seu orçamento com a análise de Alocação de Esforço (Features vs. Bugs vs. Débito Técnico)", "Conecte os custos de cloud aos seus sistemas."],
    imageSrc: "/images/engnexusia14.png",
    imageAlt: "Gráfico de Alocação de Esforço mostrando distribuição de trabalho em Features, Bugs e Débito Técnico no EngNexus AI",
    imageHint: "effort allocation",
  },
  {
    id: "gestao-processos",
    icon: Workflow,
    title: "Gestão Eficiente de Processos",
    highlight: "Padronize e acompanhe processos chave de TI.",
    features: ["Fluxos personalizáveis para onboarding e offboarding", "Painel de 1:1s para conversas estratégicas", "Painel de PDIs com visão Kanban para acompanhar o crescimento"],
    imageSrc: "/images/engnexusia4.gif",
    imageAlt: "Módulo de gestão de processos de onboarding de novos colaboradores no EngNexus AI",
    imageHint: "process workflow",
  },
  {
    id: "catalogo-sistemas",
    icon: LibraryBig,
    title: "Catálogo de Sistemas Centralizado",
    highlight: "Mantenha um inventário claro e acessível dos seus sistemas.",
    features: ["Registro de sistemas com dono, tecnologias e links para documentação", "Acompanhamento de métricas de saúde", "Acompanhamento de incidentes"],
    imageSrc: "/images/engnexusia5.gif",
    imageAlt: "Página do Catálogo de Sistemas centralizado no EngNexus AI com detalhes de cada sistema",
    imageHint: "system catalog",
  },
  {
    id: "gestao-ausencias",
    icon: CalendarDays,
    title: "Planejamento de Ausências",
    highlight: "Melhore a visibilidade sobre a disponibilidade da equipe.",
    features: ["Calendário de ausências", "Fluxo de solicitação e aprovação de férias e day-offs"],
    imageSrc: "/images/engnexusia18.png",
    imageAlt: "Calendário de Ausências do Time para planejamento e visibilidade no EngNexus AI",
    imageHint: "team calendar",
  },
];

export function InteractiveFeaturesMatrix() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(featuresData[0].id);
  const activeFeature = featuresData.find(f => f.id === activeFeatureId) || featuresData[0];

  return (
    <section className="w-full py-16 md:py-24 bg-background/70" aria-labelledby="interactive-features-title">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 id="interactive-features-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Descubra a Amplitude da <span className="text-gradient-primary">Nossa Plataforma.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] gap-8 md:gap-12 items-start">
          <AnimatedSection as="div" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 sticky top-24" role="tablist" aria-orientation="vertical">
            {featuresData.map((feature) => (
              <Button
                key={feature.id}
                role="tab"
                aria-selected={activeFeatureId === feature.id}
                aria-controls={`feature-panel-${feature.id}`}
                id={`feature-tab-${feature.id}`}
                variant="outline"
                onClick={() => setActiveFeatureId(feature.id)}
                className={cn(
                  "flex flex-col items-center justify-center text-center p-3 sm:p-2.5 w-full h-28 sm:h-32 transition-all duration-300 ease-out rounded-xl overflow-hidden",
                  "bg-card border-border text-foreground",
                  "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                  activeFeatureId === feature.id ?
                    "bg-gradient-to-br from-primary via-purple-500 to-primary-highlight-to border-primary text-primary-foreground shadow-2xl ring-2 ring-primary/80 scale-105" :
                    "hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
                )}
              >
                <feature.icon className={cn("h-8 w-8 sm:h-9 mb-1.5 shrink-0", activeFeatureId === feature.id ? "text-primary-foreground" : "text-primary")} />
                <span className="block w-full text-xs leading-snug font-medium line-clamp-2">{feature.title}</span>
              </Button>
            ))}
          </AnimatedSection>

          <AnimatedSection
            as="div"
            key={activeFeature.id}
            className="transition-opacity duration-500 ease-in-out"
            initialClassName="opacity-0 translate-y-5"
            animateClassName="opacity-100 translate-y-0"
            role="tabpanel"
            id={`feature-panel-${activeFeature.id}`}
            aria-labelledby={`feature-tab-${activeFeature.id}`}
          >
            <Card className="bg-card border border-border shadow-2xl overflow-hidden rounded-xl">
              <Image
                src={activeFeature.imageSrc}
                alt={activeFeature.imageAlt}
                width={800}
                height={500}
                className="w-full"
                data-ai-hint={activeFeature.imageHint}
                priority={activeFeature.id === featuresData[0].id}
              />
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary font-headline">
                  {activeFeature.highlight}
                </h3>
                {typeof activeFeature.features === 'string' ? (
                   <p className="text-muted-foreground font-body text-sm sm:text-base">{activeFeature.features}</p>
                ) : (
                  <ul className="list-none space-y-1.5 sm:space-y-2">
                    {activeFeature.features.map((item, index) => (
                      <li key={index} className="flex items-start text-muted-foreground font-body text-sm sm:text-base">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 mr-2 mt-0.5 sm:mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
