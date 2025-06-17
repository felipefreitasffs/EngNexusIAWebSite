
import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Fernanda L.",
    role: "Tech Lead, InovaTech Soluções",
    avatar: "https://placehold.co/100x100.png/8B5CF6/E2E8F0?text=FL",
    avatarFallback: "FL",
    avatarHint: "woman portrait",
    quote: "EngNexus AI nos deu clareza sobre onde nossa equipe realmente precisava de apoio. Os insights sobre burnout e mentoria foram cruciais!",
    rating: 5,
  },
  {
    name: "Rodrigo M.",
    role: "Gerente de Engenharia, DevMasters Co.",
    avatar: "https://placehold.co/100x100.png/22D3EE/172038?text=RM",
    avatarFallback: "RM",
    avatarHint: "man portrait",
    quote: "Finalmente uma plataforma que entende os desafios da liderança de engenharia. O copiloto de IA economiza horas de análise manual.",
    rating: 5,
  },
  {
    name: "Juliana C.",
    role: "VP de Engenharia, ScaleUp Digital",
    avatar: "https://placehold.co/100x100.png/E2E8F0/172038?text=JC",
    avatarFallback: "JC",
    avatarHint: "woman professional",
    quote: "A capacidade de cruzar métricas DORA com o sentimento da equipe é algo que não encontramos em nenhum outro lugar. Recomendo!",
    rating: 4,
  },
];

export function TestimonialSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Idealizado para <span className="text-gradient-primary">Líderes de Engenharia</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            EngNexus AI foi desenhado para transformar desafios comuns em oportunidades de crescimento e eficiência para líderes como você.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} as="div" delay={`delay-${index * 150}`}>
              <Card className="bg-slate-800/70 backdrop-blur-md border border-slate-700/80 shadow-xl h-full flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-slate-200 font-headline">{testimonial.name}</CardTitle>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-300 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
                          }`}
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
