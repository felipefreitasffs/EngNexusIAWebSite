
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const SubmissionSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
  suggestion: z.string().min(10, { message: "Sua sugestão precisa ter pelo menos 10 caracteres." }).max(1000, { message: "Sua sugestão não pode exceder 1000 caracteres." }).optional(),
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

async function sendNotificationEmail(to: string, fromEmail: string, userEmail: string, suggestion?: string) {
  if (!transporter) {
    console.error("Tentativa de enviar e-mail sem o transporter do Nodemailer configurado (credenciais ausentes). Simulação ativada.");
    let logMessage = `Simulação de envio de e-mail: Para: ${to}, De: ${fromEmail}, Email do Usuário: ${userEmail}`;
    if (suggestion) {
      logMessage += `, Sugestão: ${suggestion}`;
    } else {
      logMessage += `, Interesse para acesso antecipado.`;
    }
    console.log(logMessage);
    return Promise.resolve();
  }

  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI';
  let subject: string;
  let textBody: string;
  let htmlBody: string;

  if (suggestion) {
    subject = `Nova Sugestão Recebida - ${appName}`;
    textBody = `Um usuário enviou uma sugestão:\n\nE-mail: ${userEmail}\nSugestão:\n${suggestion}`;
    htmlBody = `
      <p>Um usuário enviou uma sugestão através do formulário da landing page ${appName}.</p>
      <p><strong>E-mail do Usuário:</strong> ${userEmail}</p>
      <p><strong>Sugestão:</strong></p>
      <p>${suggestion.replace(/\n/g, '<br>')}</p>
    `;
  } else {
    subject = `Novo Lead para Acesso Antecipado - ${appName}`;
    textBody = `Um usuário registrou interesse para acesso antecipado:\n\nE-mail: ${userEmail}`;
    htmlBody = `
      <p>Um usuário registrou interesse para acesso antecipado na landing page ${appName}.</p>
      <p><strong>E-mail do Usuário:</strong> ${userEmail}</p>
    `;
  }

  const mailOptions = {
    from: `"${appName} Notificações" <${GMAIL_USER}>`,
    to: to,
    subject: subject,
    text: textBody,
    html: htmlBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail de notificação enviado para ${to} via Nodemailer (Gmail SMTP) com sucesso.`);
  } catch (error: any) {
    console.error("Erro ao enviar e-mail de notificação via Nodemailer (Gmail SMTP):", error);
    throw new Error("Falha ao enviar o e-mail de notificação através do serviço.");
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
      await sendNotificationEmail(
        TARGET_EMAIL_ADDRESS,
        GMAIL_USER || 'noreply@engnexus.ai', 
        email,
        suggestion
      );
      const logMessage = suggestion 
        ? `Sugestão capturada de: ${email}. Solicitação de envio para: ${TARGET_EMAIL_ADDRESS} processada.`
        : `Lead para acesso antecipado capturado de: ${email}. Solicitação de envio para: ${TARGET_EMAIL_ADDRESS} processada.`;
      console.log(logMessage);
    } catch (emailError) {
      const userMessage = suggestion
        ? "Ocorreu um erro ao tentar registrar sua sugestão. Por favor, tente novamente mais tarde."
        : "Ocorreu um erro ao tentar registrar seu e-mail. Por favor, tente novamente mais tarde.";
      return NextResponse.json({ message: userMessage }, { status: 500 });
    }
    
    if (!transporter) {
        await new Promise(resolve => setTimeout(resolve, 750));
    }

    const successMessage = suggestion
      ? `Obrigado! Sua sugestão foi enviada com sucesso e será analisada.`
      : `Obrigado! Seu e-mail foi registrado com sucesso. Entraremos em contato em breve.`;
    return NextResponse.json({ message: successMessage }, { status: 200 });

  } catch (error) {
    console.error("Erro geral ao processar a solicitação:", error);
    let userMessage = "Ocorreu um erro inesperado ao processar sua solicitação.";
    if (error instanceof z.ZodError) {
        userMessage = "Por favor, verifique os dados fornecidos e tente novamente.";
    }
    return NextResponse.json({ message: userMessage }, { status: 500 });
  }
}
