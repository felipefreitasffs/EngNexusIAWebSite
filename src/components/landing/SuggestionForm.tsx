
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
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
  suggestion: z.string().min(10, {
    message: "Sua sugestão precisa ter pelo menos 10 caracteres.",
  }).max(1000, {
    message: "Sua sugestão não pode exceder 1000 caracteres.",
  }),
});

interface SuggestionFormProps {
  buttonText: ReactNode;
  formId: string;
  formSpreeEndpoint: string; 
  inputClassName?: string;
  textareaClassName?: string;
  buttonClassName?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  suggestionLabel?: string;
  suggestionPlaceholder?: string;
}

export function SuggestionForm({
  buttonText,
  formId,
  formSpreeEndpoint,
  inputClassName,
  textareaClassName,
  buttonClassName,
  emailLabel = "Seu E-mail",
  emailPlaceholder = "seu.email@empresa.tech",
  suggestionLabel = "Sua Sugestão",
  suggestionPlaceholder = "Descreva sua ideia ou sugestão para o EngNexus AI aqui...",
}: SuggestionFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      suggestion: "",
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
        <FormField
          control={form.control}
          name="suggestion" 
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={`${formId}-suggestion`} className="text-slate-300">{suggestionLabel}</FormLabel>
              <FormControl>
                <Textarea
                  id={`${formId}-suggestion`}
                  placeholder={suggestionPlaceholder}
                  {...field}
                  className={cn(
                    "min-h-[120px] text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
                    textareaClassName
                  )}
                  aria-label="Sua sugestão"
                />
              </FormControl>
              <FormMessage className="text-red-400 text-left"/>
            </FormItem>
          )}
        />
        <input type="hidden" name="_next" value="/thank-you-suggestion" />
        <input type="hidden" name="_subject" value="Nova Sugestão Recebida - EngNexus AI!" />
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
