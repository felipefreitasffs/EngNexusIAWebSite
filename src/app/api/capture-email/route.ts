
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const EmailSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
});

const TARGET_EMAIL_ADDRESS = 'felipefreitas.ffs@gmail.com';
// Ao usar o SMTP do Gmail, o 'from' DEVE ser o e-mail autenticado (GMAIL_APP_USER).
// Opcionalmente, você pode definir um nome "From" no formato "Seu Nome <seu_email@gmail.com>"
// const FROM_NAME = 'EngNexus AI Notificações';

// --- Configuração do Nodemailer com Gmail SMTP ---
// Adicione estas variáveis ao seu arquivo .env.local:
// GMAIL_APP_USER=seu_email_para_envio@gmail.com
// GMAIL_APP_PASSWORD=sua_senha_de_app_gerada_no_gmail

const GMAIL_USER = process.env.GMAIL_APP_USER;
const GMAIL_PASSWORD = process.env.GMAIL_APP_PASSWORD;

let transporter: nodemailer.Transporter | null = null;

if (GMAIL_USER && GMAIL_PASSWORD) {
  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });
  console.log("Nodemailer transporter configurado com Gmail SMTP.");
} else {
  console.warn("Credenciais GMAIL_APP_USER ou GMAIL_APP_PASSWORD não configuradas. O envio de e-mails real não funcionará. Simulando envio.");
}

async function sendEmailWithNodemailer(to: string, fromEmail: string, subject: string, text: string, html: string) {
  if (!transporter) {
    console.error("Tentativa de enviar e-mail sem o transporter do Nodemailer configurado (credenciais ausentes). Simulação ativada.");
    // Simula um envio bem-sucedido para fins de desenvolvimento local sem a chave
    console.log(`Simulação de envio de e-mail: Para: ${to}, De: ${fromEmail}, Assunto: ${subject}`);
    return Promise.resolve();
  }

  const mailOptions = {
    from: `"${process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI'}" <${GMAIL_USER}>`, // O e-mail DEVE ser o GMAIL_USER
    to: to,
    subject: subject,
    text: text,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`E-mail enviado para ${to} via Nodemailer (Gmail SMTP) com sucesso.`);
  } catch (error: any) {
    console.error("Erro ao enviar e-mail via Nodemailer (Gmail SMTP):", error);
    // Re-throw para ser pego no bloco catch principal da API
    throw new Error("Falha ao enviar o e-mail através do serviço.");
  }
}

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

    // Lógica de envio de e-mail real:
    try {
      // O e-mail 'from' aqui é o do usuário autenticado no Gmail (GMAIL_APP_USER)
      await sendEmailWithNodemailer(
        TARGET_EMAIL_ADDRESS,
        GMAIL_USER || 'noreply@engnexus.ai', // Fallback se GMAIL_USER não estiver definido (embora o envio falhará)
        'Novo Lead Capturado - EngNexus AI',
        `Um novo usuário se inscreveu para acesso antecipado com o e-mail: ${email}`,
        `<p>Um novo usuário se inscreveu para acesso antecipado com o e-mail: <strong>${email}</strong></p><p>Este e-mail foi capturado através do formulário da landing page EngNexus AI.</p>`
      );
      console.log(`E-mail capturado: ${email}. Solicitação de envio para: ${TARGET_EMAIL_ADDRESS} via Nodemailer (Gmail SMTP) processada.`);
    } catch (emailError) {
      // A mensagem de erro já foi logada dentro de sendEmailWithNodemailer.
      return NextResponse.json({ message: "Ocorreu um erro ao tentar registrar seu e-mail. Por favor, tente novamente mais tarde." }, { status: 500 });
    }
    
    // Simula um atraso de rede para fins de demonstração se não estiver usando envio real
    if (!transporter) {
        await new Promise(resolve => setTimeout(resolve, 750));
    }

    return NextResponse.json({ message: `Obrigado! ${email} foi adicionado à nossa lista de espera.` }, { status: 200 });

  } catch (error) {
    console.error("Erro geral ao processar a solicitação de captura de e-mail:", error);
    let errorMessage = "Ocorreu um erro inesperado ao processar sua solicitação.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
