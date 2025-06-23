
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouSuggestionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <div className="bg-card p-8 md:p-12 rounded-xl shadow-2xl max-w-lg w-full border border-border">
        <MessageSquareText className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Sugestão Enviada!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Muito obrigado por compartilhar sua sugestão conosco! Sua opinião é muito valiosa para o EngNexus AI.
        </p>
        <Button asChild size="lg" className="button-gradient-primary button-glow-hover">
          <Link href="/">Voltar para a Home</Link>
        </Button>
      </div>
    </main>
  );
}
