
"use client";

import { useState } from 'react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  LayoutDashboard,
  BrainCircuit,
  Users,
  Smile,
  BarChartBig,
  DollarSign,
  Workflow,
  LibraryBig,
  CalendarDays,
  CheckCircle,
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
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=Dashboard+IA",
    imageAlt: "Dashboard com IA",
    imageHint: "dashboard ai",
  },
  {
    id: "copiloto-ia",
    icon: BrainCircuit,
    title: "Copiloto de IA para Líderes",
    highlight: "Assistência inteligente para otimizar a gestão e identificar oportunidades.",
    features: ["Geração automática de títulos/descrições", "Análise de contexto", "Suporte à tradução"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=JSON+Insight",
    imageAlt: "Animação JSON para InsightCard",
    imageHint: "json insight card animation",
  },
  {
    id: "gestao-pessoas",
    icon: Users,
    title: "Gestão 360° de Pessoas e Times",
    highlight: "Entenda e desenvolva suas equipes de forma completa.",
    features: ["Perfis detalhados", "Perfis de Times com métricas DORA", "Organograma interativo", "Matriz de Competências"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=Perfil+Matriz",
    imageAlt: "Perfil do Colaborador e Matriz de Competências",
    imageHint: "employee profile skills matrix",
  },
  {
    id: "otimizacao-devex",
    icon: Smile,
    title: "Otimização DEVEX",
    highlight: "Meça e melhore a satisfação e produtividade dos seus times.",
    features: ["Criação de Pesquisas de Engajamento", "Acompanhamento do Índice DEVEX", "Insights para melhoria"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=DEVEX+Resultados",
    imageAlt: "Dashboard de Resultados de Pesquisa DEVEX",
    imageHint: "devex survey results",
  },
  {
    id: "metricas-dora",
    icon: BarChartBig,
    title: "Excelência com Métricas DORA",
    highlight: "Monitore e aprimore a performance do seu processo de desenvolvimento.",
    features: ["Acompanhamento da Frequência de Deploy", "Lead Time", "MTTR e Taxa de Falha"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=DORA+Metricas",
    imageAlt: "Página de Métricas de Engenharia DORA",
    imageHint: "dora metrics page",
  },
  {
    id: "controle-custos",
    icon: DollarSign,
    title: "Visibilidade e Controle de Custos",
    highlight: "Tenha clareza sobre os investimentos em engenharia.",
    features: ["Análise de custos de Cloud e Pessoal por time e por sistema"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=FinOps+Pagina",
    imageAlt: "Página de FinOps",
    imageHint: "finops cost page",
  },
  {
    id: "gestao-processos",
    icon: Workflow,
    title: "Gestão Eficiente de Processos",
    highlight: "Padronize e acompanhe processos chave de RH e TI.",
    features: "Reduza o tempo de onboarding e garanta consistência com nossos fluxos de trabalho personalizáveis.",
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=Onboarding+Fluxo",
    imageAlt: "Módulo de Processos Onboarding",
    imageHint: "onboarding process workflow",
  },
  {
    id: "catalogo-sistemas",
    icon: LibraryBig,
    title: "Catálogo de Sistemas Centralizado",
    highlight: "Mantenha um inventário claro e acessível dos seus sistemas.",
    features: ["Registro de sistemas com dono, tecnologias e links para documentação"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=Catalogo+Sistemas",
    imageAlt: "Página do Catálogo de Sistemas",
    imageHint: "system catalog page",
  },
  {
    id: "gestao-ausencias",
    icon: CalendarDays,
    title: "Planejamento de Ausências",
    highlight: "Melhore a visibilidade sobre a disponibilidade da equipe.",
    features: ["Calendário de ausências", "Fluxo de solicitação e aprovação de férias e day-offs"],
    imageSrc: "https://placehold.co/800x500.png/172038/E2E8F0?text=Calendario+Ausencias",
    imageAlt: "Calendário de Ausências do Time",
    imageHint: "team absence calendar",
  },
];

export function InteractiveFeaturesMatrix() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(featuresData[0].id);
  const activeFeature = featuresData.find(f => f.id === activeFeatureId) || featuresData[0];

  return (
    <section className="w-full py-16 md:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Descubra a Amplitude da <span className="text-gradient-primary">Nossa Plataforma.</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] gap-8 md:gap-12 items-start">
          <AnimatedSection as="div" className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 sticky top-24">
            {featuresData.map((feature) => (
              <Button
                key={feature.id}
                variant="outline"
                onClick={() => setActiveFeatureId(feature.id)}
                className={cn(
                  "flex flex-col items-center justify-center text-center p-3 sm:p-4 w-full h-28 sm:h-32 transition-all duration-300 ease-out rounded-xl overflow-hidden",
                  "bg-slate-800/70 border-slate-700/80 text-slate-300",
                  "focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900",
                  activeFeatureId === feature.id ?
                    "bg-gradient-to-br from-violet-600/80 to-cyan-600/70 border-violet-500 text-white shadow-2xl ring-2 ring-violet-500/80 scale-105" :
                    "hover:bg-slate-700/90 hover:text-slate-100 hover:border-violet-500/50"
                )}
              >
                <feature.icon className={cn("h-8 w-8 sm:h-10 mb-2 shrink-0", activeFeatureId === feature.id ? "text-white" : "text-violet-400")} />
                <span className="block w-full text-xs sm:text-sm font-medium leading-tight line-clamp-2">{feature.title}</span>
              </Button>
            ))}
          </AnimatedSection>

          <AnimatedSection
            as="div"
            key={activeFeature.id}
            className="transition-opacity duration-500 ease-in-out"
            initialClassName="opacity-0 translate-y-5"
            animateClassName="opacity-100 translate-y-0"
          >
            <Card className="bg-slate-800/90 border border-slate-700/90 shadow-2xl overflow-hidden rounded-xl">
              <Image
                src={activeFeature.imageSrc}
                alt={activeFeature.imageAlt}
                width={800}
                height={500}
                className="w-full object-cover aspect-[16/10]"
                data-ai-hint={activeFeature.imageHint}
                priority={activeFeature.id === featuresData[0].id}
              />
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary font-headline">
                  {activeFeature.highlight}
                </h3>
                {typeof activeFeature.features === 'string' ? (
                   <p className="text-slate-300 font-body text-sm sm:text-base">{activeFeature.features}</p>
                ) : (
                  <ul className="list-none space-y-1.5 sm:space-y-2">
                    {activeFeature.features.map((item, index) => (
                      <li key={index} className="flex items-start text-slate-300 font-body text-sm sm:text-base">
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
