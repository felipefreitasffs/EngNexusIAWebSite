import { FeatureCard } from "./FeatureCard";
import AnimatedSection from "./AnimatedSection";
import {
  Users,
  LibraryBig,
  ClipboardList,
  DollarSign,
  Smile,
  Rocket,
  BarChart3,
  Brain,
} from "lucide-react";

const features = [
  { icon: Users, title: "Gestão de 1:1s e PDIs" },
  { icon: LibraryBig, title: "Catálogo de Sistemas" },
  { icon: ClipboardList, title: "Matriz de Competências" },
  { icon: DollarSign, title: "Análise de Custos (FinOps)" },
  { icon: Smile, title: "Pesquisas DEVEX" },
  { icon: Rocket, title: "Processos de Onboarding" },
  { icon: BarChart3, title: "Métricas DORA Contextuais" },
  { icon: Brain, title: "Insights com IA Proativa" },
];

export function FeaturesGridSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-800/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Uma plataforma <span className="text-gradient-primary">completa</span> para a liderança moderna.
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Desde o acompanhamento individual até a otimização de processos e custos, EngNexus AI oferece as ferramentas que você precisa.
          </p>
        </AnimatedSection>
        {/* 
          PRD mentions "masonry" style grid. This is complex with pure Tailwind.
          Using a standard responsive grid for now. 
          For true masonry, consider CSS Grid with specific column spans or a library.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              as="div"
              delay={`delay-${index * 100}`}
              className="h-full" // Ensures cards in the same row can have same height if content differs slightly
            >
              <FeatureCard icon={feature.icon} title={feature.title} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
