
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
});

interface EmailCaptureFormProps {
  buttonText: ReactNode;
  buttonLoadingText?: ReactNode;
  formId: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function EmailCaptureForm({ 
  buttonText, 
  buttonLoadingText = "Enviando...",
  formId, 
  inputClassName, 
  buttonClassName 
}: EmailCaptureFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/capture-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Ocorreu um erro. Tente novamente.");
      }

      toast({
        title: "Inscrição Recebida!",
        description: result.message,
      });
      form.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Falha ao enviar e-mail. Verifique sua conexão.";
      toast({
        variant: "destructive",
        title: "Erro na Inscrição",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 sm:flex sm:gap-3 sm:space-y-0">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input
                  id={`${formId}-email`}
                  type="email"
                  placeholder="seu.email@empresa.tech"
                  {...field}
                  className={cn(
                    "h-12 text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
                    inputClassName
                  )}
                  aria-label="Endereço de e-mail"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-red-400 text-left"/>
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          size="lg" 
          className={cn(
            "w-full sm:w-auto h-12 text-base font-semibold",
            "button-gradient-primary button-glow-hover shadow-lg",
            buttonClassName
          )}
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
          {isLoading ? buttonLoadingText : buttonText}
        </Button>
      </form>
    </Form>
  );
}
