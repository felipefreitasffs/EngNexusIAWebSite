"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const FormSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um endereço de e-mail válido.",
  }),
});

interface EmailCaptureFormProps {
  buttonText: string;
  formId: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export function EmailCaptureForm({ buttonText, formId, inputClassName, buttonClassName }: EmailCaptureFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Email captured:", data.email);
    toast({
      title: "Inscrição Recebida!",
      description: `Obrigado por seu interesse! Adicionamos ${data.email} à nossa lista de acesso antecipado.`,
    });
    form.reset();
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
                  placeholder="seuemail@exemplo.com"
                  {...field}
                  className={cn("h-12 text-base placeholder:text-muted-foreground", inputClassName)}
                  aria-label="Endereço de e-mail"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" size="lg" className={cn("w-full sm:w-auto h-12 text-base", buttonClassName)}>
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}
