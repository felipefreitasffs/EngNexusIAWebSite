
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { toast } from "@/hooks/use-toast"; // Removido
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react"; // Pode ser removido

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
});

interface EmailOnlyCaptureFormProps {
  buttonText: ReactNode;
  // buttonLoadingText?: ReactNode; // Removido
  formId: string;
  formSpreeEndpoint: string; // Nova prop para o endpoint do Formspree
  inputClassName?: string;
  buttonClassName?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
}

export function EmailOnlyCaptureForm({
  buttonText,
  formId,
  formSpreeEndpoint,
  inputClassName,
  buttonClassName,
  emailLabel = "Seu melhor e-mail",
  emailPlaceholder = "nome@dominio.com",
}: EmailOnlyCaptureFormProps) {
  // const [isLoading, setIsLoading] = useState(false); // Removido
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  // A função onSubmit que fazia o fetch foi removida.
  // O formulário agora fará um submit HTML padrão para o endpoint do Formspree.

  return (
    <Form {...form}>
      <form
        action={formSpreeEndpoint} // Aponta para o endpoint do Formspree
        method="POST" // Método POST para Formspree
        id={formId}
        className="w-full max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="email" // Nome do campo para Formspree
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={`${formId}-email`} className="text-slate-300">{emailLabel}</FormLabel>
              <FormControl>
                <Input
                  id={`${formId}-email`}
                  type="email"
                  placeholder={emailPlaceholder}
                  {...field}
                  className={cn(
                    "h-12 text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
                    inputClassName
                  )}
                  aria-label="Endereço de e-mail"
                  // disabled={isLoading} // Removido
                />
              </FormControl>
              <FormMessage className="text-red-400 text-left"/>
            </FormItem>
          )}
        />
        {/* Campo oculto para Formspree, se quiser redirecionar para uma página de agradecimento customizada */}
        {/* <input type="hidden" name="_next" value="URL_DA_SUA_PAGINA_DE_OBRIGADO_HERO" /> */}
        {/* Campo para assunto do e-mail que o Formspree envia */}
        <input type="hidden" name="_subject" value="Novo Lead para Acesso Antecipado - EngNexus AI!" />

        <Button
          type="submit"
          size="lg"
          className={cn(
            "w-full h-12 text-base font-semibold",
            "button-gradient-primary button-glow-hover shadow-lg",
            buttonClassName
          )}
          // disabled={isLoading} // Removido
        >
          {/* {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />} // Removido */}
          {/* {isLoading ? buttonLoadingText : buttonText} // Modificado */}
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}
