
"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Usaremos o Label do ShadCN para consistência de estilo
import { cn } from "@/lib/utils";

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
  return (
    <form
      action={formSpreeEndpoint}
      method="POST"
      id={formId}
      className="w-full max-w-md space-y-6"
    >
      <div>
        <Label htmlFor={`${formId}-email`} className="text-slate-300">
          {emailLabel}
        </Label>
        <Input
          id={`${formId}-email`}
          type="email"
          name="email" // Important: 'name' attribute is required for form submission
          placeholder={emailPlaceholder}
          className={cn(
            "mt-2 h-12 text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
            inputClassName
          )}
          aria-label="Endereço de e-mail"
          required // HTML5 validation
        />
      </div>
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
  );
}
