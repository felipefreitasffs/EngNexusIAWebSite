
"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

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
  successRedirectUrl: string; // URL para redirecionar em caso de sucesso
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
  successRedirectUrl,
}: SuggestionFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [emailValue, setEmailValue] = useState("");
  const [suggestionValue, setSuggestionValue] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        window.location.href = successRedirectUrl;
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setSubmitError(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          setSubmitError("Ocorreu um erro ao enviar sua sugestão. Tente novamente.");
        }
      }
    } catch (error) {
      setSubmitError("Ocorreu um erro ao enviar sua sugestão. Verifique sua conexão e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={formSpreeEndpoint} // Mantido para fallback ou semântica
      method="POST"
      id={formId}
      className="w-full max-w-md space-y-4"
    >
      <div>
        <Label htmlFor={`${formId}-email`} className="text-slate-300">
          {emailLabel}
        </Label>
        <Input
          id={`${formId}-email`}
          type="email"
          name="email"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          placeholder={emailPlaceholder}
          className={cn(
            "mt-1 h-12 text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
            inputClassName
          )}
          aria-label="Endereço de e-mail"
          required
          disabled={isLoading}
        />
      </div>
      <div>
        <Label htmlFor={`${formId}-suggestion`} className="text-slate-300">
          {suggestionLabel}
        </Label>
        <Textarea
          id={`${formId}-suggestion`}
          name="suggestion"
          value={suggestionValue}
          onChange={(e) => setSuggestionValue(e.target.value)}
          placeholder={suggestionPlaceholder}
          className={cn(
            "mt-1 min-h-[120px] text-base text-slate-200 bg-slate-800/80 border-slate-700 placeholder:text-slate-500 focus:ring-offset-slate-900 focus:border-primary-highlight-from focus:ring-primary-highlight-from",
            textareaClassName
          )}
          aria-label="Sua sugestão"
          required
          minLength={10}
          disabled={isLoading}
        />
      </div>
      <input type="hidden" name="_subject" value="Nova Sugestão Recebida - EngNexus AI!" />
      
      {submitError && (
        <p className="text-red-400 text-sm text-left">{submitError}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className={cn(
          "w-full h-12 text-base font-semibold",
          "button-gradient-primary button-glow-hover shadow-lg",
          buttonClassName
        )}
        disabled={isLoading}
      >
        {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        {isLoading ? "Enviando..." : buttonText}
      </Button>
    </form>
  );
}
