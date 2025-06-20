
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const SubmissionSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
  suggestion: z.string().min(10, { message: "Sua sugestão precisa ter pelo menos 10 caracteres." }).max(1000, { message: "Sua sugestão não pode exceder 1000 caracteres." }),
});

const TARGET_EMAIL_ADDRESS = process.env.TARGET_EMAIL_ADDRESS || 'felipefreitas.ffs@gmail.com';
const GMAIL_USER = process.env.GMAIL_APP_USER;
const GMAIL_PASSWORD = process.env.GMAIL_APP_PASSWORD;

let transporter: nodemailer.Transporter | null = null;

if (GMAIL_USER && GMAIL_PASSWORD) {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });
  console.log("Nodemailer transporter configurado com Gmail SMTP.");
} else {
  console.warn("Credenciais GMAIL_APP_USER ou GMAIL_APP_PASSWORD não configuradas. O envio de e-mails real não funcionará. Simulando envio.");
}

async function sendSuggestionEmail(to: string, fromEmail: string, userEmail: string, suggestion: string) {
  if (!transporter) {
    console.error("Tentativa de enviar e-mail sem o transporter do Nodemailer configurado (credenciais ausentes). Simulação ativada.");
    console.log(`Simulação de envio de e-mail de sugestão: Para: ${to}, De: ${fromEmail}, Email do Usuário: ${userEmail}, Sugestão: ${suggestion}`);
    return Promise.resolve();
  }

  const subject = `Nova Sugestão Recebida - ${process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI'}`;
  const textBody = `Um usuário enviou uma sugestão:\n\nE-mail: ${userEmail}\nSugestão:\n${suggestion}`;
  const htmlBody = `
    <p>Um usuário enviou uma sugestão através do formulário da landing page ${process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI'}.</p>
    <p><strong>E-mail do Usuário:</strong> ${userEmail}</p>
    <p><strong>Sugestão:</strong></p>
    <p>${suggestion.replace(/\n/g, '<br>')}</p>
  `;

  const mailOptions = {
    from: `"${process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI'} Feedback" <${GMAIL_USER}>`,
    to: to,
    subject: subject,
    text: textBody,
    html: htmlBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail de sugestão enviado para ${to} via Nodemailer (Gmail SMTP) com sucesso.`);
  } catch (error: any) {
    console.error("Erro ao enviar e-mail de sugestão via Nodemailer (Gmail SMTP):", error);
    throw new Error("Falha ao enviar o e-mail de sugestão através do serviço.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = SubmissionSchema.safeParse(body);

    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      let message = "Dados inválidos.";
      if (firstError) {
        message = `${firstError.path.join('.')}: ${firstError.message}`;
      }
      
      return NextResponse.json({
        message: message,
        errors: validationResult.error.flatten().fieldErrors
      }, { status: 400 });
    }

    const { email, suggestion } = validationResult.data;

    try {
      await sendSuggestionEmail(
        TARGET_EMAIL_ADDRESS,
        GMAIL_USER || 'noreply@engnexus.ai', 
        email,
        suggestion
      );
      console.log(`Sugestão capturada de: ${email}. Solicitação de envio para: ${TARGET_EMAIL_ADDRESS} processada.`);
    } catch (emailError) {
      return NextResponse.json({ message: "Ocorreu um erro ao tentar registrar sua sugestão. Por favor, tente novamente mais tarde." }, { status: 500 });
    }
    
    if (!transporter) {
        await new Promise(resolve => setTimeout(resolve, 750));
    }

    return NextResponse.json({ message: `Obrigado! Sua sugestão foi enviada com sucesso e será analisada.` }, { status: 200 });

  } catch (error) {
    console.error("Erro geral ao processar a solicitação de envio de sugestão:", error);
    return NextResponse.json({ message: "Ocorreu um erro inesperado ao processar sua solicitação." }, { status: 500 });
  }
}
