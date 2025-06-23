
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouEarlyAccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <div className="bg-card p-8 md:p-12 rounded-xl shadow-2xl max-w-lg w-full border border-border">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Inscrição Recebida!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Obrigado por se inscrever para o acesso antecipado ao EngNexus AI. Entraremos em contato em breve com mais informações!
        </p>
        <Button asChild size="lg" className="button-gradient-primary button-glow-hover">
          <Link href="/">Voltar para a Home</Link>
        </Button>
      </div>
    </main>
  );
}
