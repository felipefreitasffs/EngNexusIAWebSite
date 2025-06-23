
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8 -ml-4 hover:bg-accent">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Home
          </Link>
        </Button>
        <div className="bg-card p-8 md:p-12 rounded-xl shadow-2xl border border-border">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-headline">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground mb-8">
            Última atualização: 29 de Maio de 2024
          </p>

          <div className="space-y-6 text-muted-foreground">
            <p>
              A sua privacidade é importante para nós. É política do EngNexus AI respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site EngNexus AI.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">1. Informações que coletamos</h2>
            <p>
              Coletamos informações que você nos fornece diretamente. Por exemplo, coletamos informações quando você se inscreve na nossa lista de espera ou preenche o formulário de sugestões. As informações que podemos coletar incluem seu endereço de e-mail e qualquer outra informação que você escolha fornecer, como suas sugestões e feedback.
            </p>
            <p>
              Quando você utiliza nosso site, podemos usar serviços de terceiros como o Formspree para processar os envios de formulário. Esses serviços podem coletar informações de acordo com suas próprias políticas de privacidade.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">2. Como usamos suas informações</h2>
            <p>
              Usamos as informações que coletamos para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comunicar com você sobre o lançamento beta do EngNexus AI e outras atualizações.</li>
              <li>Responder às suas sugestões, comentários e perguntas.</li>
              <li>Melhorar nossos serviços, produtos e a experiência geral do usuário.</li>
              <li>Monitorar e analisar tendências, uso e atividades em conexão com nossos serviços.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">3. Compartilhamento de informações</h2>
            <p>
              Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias limitadas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Com provedores de serviços:</strong> Podemos compartilhar informações com fornecedores, consultores e outros prestadores de serviços que precisam de acesso a tais informações para realizar trabalhos em nosso nome (por exemplo, Formspree para gerenciamento de e-mails).
              </li>
              <li>
                <strong>Por motivos legais:</strong> Podemos divulgar informações se acreditarmos que a divulgação está de acordo com, ou é exigida por, qualquer lei, regulamento ou processo legal aplicável.
              </li>
              <li>
                <strong>Com o seu consentimento:</strong> Podemos compartilhar informações de outras formas se tivermos o seu consentimento explícito.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">4. Segurança</h2>
            <p>
              Tomamos medidas razoáveis para ajudar a proteger as informações sobre você contra perda, roubo, uso indevido e acesso não autorizado, divulgação, alteração e destruição.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">5. Seus direitos</h2>
            <p>
              Você tem o direito de solicitar acesso, correção ou exclusão de suas informações pessoais. Para fazer tal solicitação, por favor, entre em contato conosco no endereço de e-mail fornecido abaixo.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">6. Alterações a esta política</h2>
            <p>
              Podemos alterar esta Política de Privacidade de tempos em tempos. Se fizermos alterações, notificaremos você revisando a data no topo da política e, em alguns casos, poderemos fornecer um aviso adicional.
            </p>

            <h2 className="text-2xl font-semibold text-foreground pt-4 !mt-10">7. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco em: <a href="mailto:privacidade@engnexus.ai" className="text-primary hover:underline">privacidade@engnexus.ai</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
