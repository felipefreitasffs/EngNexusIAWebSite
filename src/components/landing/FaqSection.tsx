
import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como posso medir e melhorar a eficiência do meu time sem cair em \"métricas de vaidade\"?",
    answer:
      "Nós também não acreditamos em medir \"linhas de código\" ou \"horas no teclado\". O EngNexus AI foca em métricas de fluxo que medem a saúde do seu processo, não a performance individual. Com nossos dashboards de Métricas DORA e de Fluxo, você pode:\n\nIdentificar Gargalos Reais: Analise o Cycle Time de Pull Requests e de tarefas para ver exatamente onde o trabalho está lento.\nVisualizar Trabalho Parado: Nosso Gráfico de Envelhecimento (Aging Chart) mostra quais tarefas estão \"esquecidas\" em uma etapa do processo, permitindo uma ação proativa.\nDefinir Metas Claras: Use benchmarks e defina metas para suas métricas, transformando dados em um plano de melhoria contínua.",
  },
  {
    question: "Minhas reuniões 1:1 parecem desconectadas do trabalho do dia a dia e do crescimento de carreira. Como o EngNexus AI ajuda?",
    answer:
      "O EngNexus AI transforma suas 1:1s de simples \"check-ins\" em conversas estratégicas de desenvolvimento. Fazemos isso de três formas:\n\nContexto Completo no Perfil 360°: Antes de cada 1:1, você acessa o perfil do colaborador e vê, em um só lugar, seu PDI ativo, os feedbacks recentes e até sua atividade técnica. Chega de entrar na conversa \"no escuro\".\nPainel Agregador de 1:1s: Nosso painel centralizado te dá uma visão macro de todas as suas próximas reuniões e, mais importante, consolida todos os pontos de ação atribuídos a você, para que nada se perca.\nPDIs Visuais: Acompanhe os Planos de Desenvolvimento Individual em um painel Kanban, conectando facilmente as conversas de 1:1 aos objetivos de carreira de longo prazo.",
  },
  {
    question: "Como posso ir além da \"intuição\" para entender a saúde e o risco de burnout do meu time?",
    answer:
      "Intuição é importante, mas dados são essenciais. O EngNexus AI te dá uma visão dupla sobre a saúde do time:\n\nO que eles sentem (Qualitativo): Com nosso módulo de Pesquisas DEVEX, você pode medir o sentimento e o engajamento através de pesquisas rápidas e eficazes.\nO que eles fazem (Quantitativo): Com o Activity Heatmap, você pode visualizar padrões de trabalho, como excesso de commits fora do horário ou nos fins de semana, que são fortes indicadores de risco de burnout.\nA Mágica da Correlação: Nossa IA cruza esses dois mundos, alertando você quando um time com baixa nota de \"equilíbrio vida-trabalho\" também apresenta um padrão de atividade noturna, permitindo que você atue antes que o problema se agrave.",
  },
  {
    question: "Meu time gasta muito tempo \"apagando incêndios\". Como posso visualizar e justificar o investimento em débito técnico e melhorias?",
    answer:
      "Esta é uma das dores mais comuns que resolvemos. Com o Dashboard de Alocação de Esforço, você consegue:\n\nQuantificar o \"Trabalho Não Planejado\": Nosso sistema analisa as etiquetas das suas tarefas (ou títulos de commits) e mostra em um gráfico de pizza qual porcentagem do tempo do seu time foi gasta em Novas Features vs. Bugs vs. Débito Técnico.\nConstruir um Caso com Dados: Em vez de dizer \"precisamos parar para corrigir coisas\", você pode apresentar um gráfico que mostra \"gastamos 40% do nosso tempo corrigindo bugs no último trimestre\". Essa é uma linguagem que a diretoria entende.\nAcompanhar a Melhoria: Após um \"sprint de saúde\" focado em débito técnico, você pode usar o mesmo dashboard para mostrar como a alocação para \"Bugs\" diminuiu, provando o ROI (Retorno sobre o Investimento) da sua decisão.",
  },
  {
    question: "Eu já tenho dados no Jira e no GitHub. Qual a \"mágica\" que a IA do EngNexus AI faz com eles?",
    answer:
      "A \"mágica\" está na correlação e no contexto. Ferramentas individuais te dão dados isolados. O EngNexus AI atua como uma camada de inteligência que cruza esses sinais para encontrar padrões que um humano levaria horas para ver.\n\nExemplo Prático:\n\nO sistema vê uma tarefa parada há dias no Jira (sinal 1).\nEle consulta a Matriz de Competências e vê que o responsável é iniciante naquela tecnologia (sinal 2).\nEle verifica a Análise de Code Review e vê que o PR associado recebeu muitos comentários (sinal 3).\nEm vez de três pontos de dados separados, nossa IA te entrega um único insight acionável: \"A tarefa X está em risco. O responsável pode precisar de suporte ou mentoria para avançar.\" Esse é o poder do nosso Copiloto de IA.",
  },
];

export function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection as="div" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-4xl font-headline">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Respostas para suas dúvidas sobre como EngNexus AI pode transformar sua liderança.
          </p>
        </AnimatedSection>
        <AnimatedSection as="div" className="max-w-3xl mx-auto" delay="delay-150">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-700">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-200 hover:no-underline hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-400 pb-6 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
