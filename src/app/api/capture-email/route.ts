
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = EmailSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json({ 
        message: validationResult.error.errors[0]?.message || "Endereço de e-mail inválido.",
        errors: validationResult.error.flatten().fieldErrors 
      }, { status: 400 });
    }

    const { email } = validationResult.data;

    // In a real application, you would save the email to a database
    // or send it to an email marketing service (e.g., SendGrid, Mailchimp).
    console.log(`Email capturado via API: ${email}`);

    // Simulate a network delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 750));

    return NextResponse.json({ message: `Obrigado! ${email} foi adicionado à nossa lista.` }, { status: 200 });
  } catch (error) {
    console.error("Erro ao capturar e-mail:", error);
    // Generic error message for the client
    let errorMessage = "Ocorreu um erro ao processar sua solicitação.";
    if (error instanceof Error) {
        // Potentially log more detailed error or customize message
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
