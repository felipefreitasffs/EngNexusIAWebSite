import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export function FooterSection() {
  return (
    <footer className="w-full py-8 md:py-12 bg-secondary text-muted-foreground">
      <AnimatedSection as="div" className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-foreground font-headline">
              EngNexus AI
            </Link>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()}. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter/X"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
