import { FeatureCard } from "./FeatureCard";
import AnimatedSection from "./AnimatedSection";
import {
  Users,
  LibraryBig,
  ClipboardList,
  DollarSign,
  Smile,
  Rocket,
} from "lucide-react";

const features = [
  { icon: Users, title: "Gestão de 1:1s e PDIs" },
  { icon: LibraryBig, title: "Catálogo de Sistemas" },
  { icon: ClipboardList, title: "Matriz de Competências" },
  { icon: DollarSign, title: "Análise de Custos (FinOps)" },
  { icon: Smile, title: "Pesquisas DEVEX" },
  { icon: Rocket, title: "Processos de Onboarding" },
];

export function FeaturesGridSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Tudo o que você precisa para liderar times de alta performance.
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              as="div"
              delay={`delay-${index * 100}`}
              className="h-full"
            >
              <FeatureCard icon={feature.icon} title={feature.title} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
