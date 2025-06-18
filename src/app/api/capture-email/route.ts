
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const EmailSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
});

const TARGET_EMAIL_ADDRESS = 'felipefreitas.ffs@gmail.com';

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

    // Em uma aplicação real, você usaria um serviço de e-mail (SendGrid, Mailgun, Nodemailer, etc.)
    // para enviar o e-mail capturado para o endereço de destino.
    console.log(`E-mail capturado: ${email}. Simulação de envio para: ${TARGET_EMAIL_ADDRESS}`);

    // Exemplo de como você poderia chamar uma função de envio de e-mail (não implementada aqui):
    // await sendEmail({
    //   to: TARGET_EMAIL_ADDRESS,
    //   from: 'noreply@engnexus.ai', // Ou um e-mail verificado do seu domínio
    //   subject: 'Novo Lead Capturado - EngNexus AI',
    //   text: `Um novo usuário se inscreveu para acesso antecipado com o e-mail: ${email}`,
    //   html: `<p>Um novo usuário se inscreveu para acesso antecipado com o e-mail: <strong>${email}</strong></p>`,
    // });

    // Simula um atraso de rede para fins de demonstração
    await new Promise(resolve => setTimeout(resolve, 750));

    return NextResponse.json({ message: `Obrigado! ${email} foi adicionado à nossa lista.` }, { status: 200 });
  } catch (error) {
    console.error("Erro ao capturar e-mail:", error);
    let errorMessage = "Ocorreu um erro ao processar sua solicitação.";
    if (error instanceof Error) {
        // Potentially log more detailed error or customize message
    }
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

// Função de exemplo (não funcional sem um serviço de e-mail configurado)
// async function sendEmail(options: { to: string, from: string, subject: string, text: string, html: string }) {
//   // Lógica para integrar com SendGrid, Nodemailer, AWS SES, etc.
//   console.log(`Tentativa de envio de e-mail para ${options.to} com assunto "${options.subject}"`);
//   // Exemplo com Nodemailer (requer instalação e configuração):
//   // const nodemailer = require('nodemailer');
//   // const transporter = nodemailer.createTransport({ /* ...configurações do seu provedor de e-mail... */ });
//   // await transporter.sendMail(options);
//   return Promise.resolve();
// }
