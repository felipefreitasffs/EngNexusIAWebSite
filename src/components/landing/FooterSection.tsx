import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react"; // Added Github as an example
import AnimatedSection from "./AnimatedSection";

export function FooterSection() {
  return (
    <footer className="w-full py-8 md:py-12 bg-slate-900 border-t border-slate-800 text-slate-400">
      <AnimatedSection as="div" className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold text-slate-200 font-headline hover:text-gradient-primary transition-all">
              EngNexus AI
            </Link>
            <p className="text-sm mt-1">
              © {new Date().getFullYear()} EngNexus. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-5">
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter/X"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </Link>
             <Link
              href="#"
              aria-label="GitHub"
              className="text-slate-400 hover:text-slate-200 transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
          </div>
          <div className="text-center md:text-right">
            <Link
              href="#"
              className="text-sm hover:text-violet-400 transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
}
