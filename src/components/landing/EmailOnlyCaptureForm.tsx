
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
// import { Loader2 } from "lucide-react"; // Pode ser removido

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
});

interface EmailOnlyCaptureFormProps {
  buttonText: ReactNode;
  formId: string;
  formSpreeEndpoint: string; 
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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={formSpreeEndpoint} 
        method="POST" 
        id={formId}
        className="w-full max-w-md space-y-6"
      >
        <FormField
          control={form.control}
          name="email" 
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
                />
              </FormControl>
              <FormMessage className="text-red-400 text-left"/>
            </FormItem>
          )}
        />
        <input type="hidden" name="_next" value="/thank-you-early-access" />
        <input type="hidden" name="_subject" value="Novo Lead para Acesso Antecipado - EngNexus AI!" />

        <Button
          type="submit"
          size="lg"
          className={cn(
            "w-full h-12 text-base font-semibold",
            "button-gradient-primary button-glow-hover shadow-lg",
            buttonClassName
          )}
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}
