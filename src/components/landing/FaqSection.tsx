
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Como posso medir e melhorar a eficiência do meu time sem cair em \"métricas de vaidade\"?",
    answer: (
      <>
        Nós também não acreditamos em medir &quot;linhas de código&quot; ou &quot;horas no teclado&quot;. O EngNexus AI foca em métricas de fluxo que medem a saúde do seu processo, não a performance individual. Com nossos dashboards de Métricas DORA e de Fluxo, você pode:
        <ul className="list-none space-y-2 mt-3 pl-1">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Identificar Gargalos Reais:</strong> Analise o Cycle Time de Pull Requests e de tarefas para ver exatamente onde o trabalho está lento.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Visualizar Trabalho Parado:</strong> Nosso Gráfico de Envelhecimento (Aging Chart) mostra quais tarefas estão &quot;esquecidas&quot; em uma etapa do processo, permitindo uma ação proativa.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Definir Metas Claras:</strong> Use benchmarks e defina metas para suas métricas, transformando dados em um plano de melhoria contínua.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Minhas reuniões 1:1 parecem desconectadas do trabalho do dia a dia e do crescimento de carreira. Como o EngNexus AI ajuda?",
    answer: (
      <>
        O EngNexus AI transforma suas 1:1s de simples &quot;check-ins&quot; em conversas estratégicas de desenvolvimento. Fazemos isso de três formas:
        <ul className="list-none space-y-2 mt-3 pl-1">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Contexto Completo no Perfil 360°:</strong> Antes de cada 1:1, você acessa o perfil do colaborador e vê, em um só lugar, seu PDI ativo, os feedbacks recentes e até sua atividade técnica. Chega de entrar na conversa &quot;no escuro&quot;.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Painel Agregador de 1:1s:</strong> Nosso painel centralizado te dá uma visão macro de todas as suas próximas reuniões e, mais importante, consolida todos os pontos de ação atribuídos a você, para que nada se perca.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>PDIs Visuais:</strong> Acompanhe os Planos de Desenvolvimento Individual em um painel Kanban, conectando facilmente as conversas de 1:1 aos objetivos de carreira de longo prazo.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Como posso ir além da \"intuição\" para entender a saúde e o risco de burnout do meu time?",
    answer: (
      <>
        Intuição é importante, mas dados são essenciais. O EngNexus AI te dá uma visão dupla sobre a saúde do time:
        <ul className="list-none space-y-2 mt-3 pl-1">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>O que eles sentem (Qualitativo):</strong> Com nosso módulo de Pesquisas DEVEX, você pode medir o sentimento e o engajamento através de pesquisas rápidas e eficazes.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>O que eles fazem (Quantitativo):</strong> Com o Activity Heatmap, você pode visualizar padrões de trabalho, como excesso de commits fora do horário ou nos fins de semana, que são fortes indicadores de risco de burnout.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>A Mágica da Correlação:</strong> Nossa IA cruza esses dois mundos, alertando você quando um time com baixa nota de &quot;equilíbrio vida-trabalho&quot; também apresenta um padrão de atividade noturna, permitindo que você atue antes que o problema se agrave.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Meu time gasta muito tempo \"apagando incêndios\". Como posso visualizar e justificar o investimento em débito técnico e melhorias?",
    answer: (
      <>
        Esta é uma das dores mais comuns que resolvemos. Com o Dashboard de Alocação de Esforço, você consegue:
        <ul className="list-none space-y-2 mt-3 pl-1">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Quantificar o &quot;Trabalho Não Planejado&quot;:</strong> Nosso sistema analisa as etiquetas das suas tarefas (ou títulos de commits) e mostra em um gráfico de pizza qual porcentagem do tempo do seu time foi gasta em Novas Features vs. Bugs vs. Débito Técnico.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Construir um Caso com Dados:</strong> Em vez de dizer &quot;precisamos parar para corrigir coisas&quot;, você pode apresentar um gráfico que mostra &quot;gastamos 40% do nosso tempo corrigindo bugs no último trimestre&quot;. Essa é uma linguagem que a diretoria entende.</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span><strong>Acompanhar a Melhoria:</strong> Após um &quot;sprint de saúde&quot; focado em débito técnico, você pode usar o mesmo dashboard para mostrar como a alocação para &quot;Bugs&quot; diminuiu, provando o ROI (Retorno sobre o Investimento) da sua decisão.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Eu já tenho dados no Jira e no GitHub. Qual a \"mágica\" que a IA do EngNexus AI faz com eles?",
    answer: (
      <>
        A &quot;mágica&quot; está na correlação e no contexto. Ferramentas individuais te dão dados isolados. O EngNexus AI atua como uma camada de inteligência que cruza esses sinais para encontrar padrões que um humano levaria horas para ver.
        <br />
        <strong className="block mt-3 mb-1">Exemplo Prático:</strong>
        <ul className="list-none space-y-2 pl-1">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span>O sistema vê uma tarefa parada há dias no Jira (sinal 1).</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span>Ele consulta a Matriz de Competências e vê que o responsável é iniciante naquela tecnologia (sinal 2).</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 shrink-0" />
            <span>Ele verifica a Análise de Code Review e vê que o PR associado recebeu muitos comentários (sinal 3).</span>
          </li>
        </ul>
        <p className="mt-3">Em vez de três pontos de dados separados, nossa IA te entrega um único insight acionável: &quot;A tarefa X está em risco. O responsável pode precisar de suporte ou mentoria para avançar.&quot; Esse é o poder do nosso Copiloto de IA.</p>
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para suas dúvidas sobre como EngNexus AI pode transformar sua liderança.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="max-w-3xl mx-auto" delay="delay-150">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6">
                  <div className="whitespace-pre-line">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
