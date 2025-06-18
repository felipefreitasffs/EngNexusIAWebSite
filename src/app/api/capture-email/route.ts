
import { type NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import sgMail from '@sendgrid/mail';

const EmailSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido." }),
});

const TARGET_EMAIL_ADDRESS = 'felipefreitas.ffs@gmail.com';
const FROM_EMAIL_ADDRESS = 'noreply@engnexus.ai'; // Use um e-mail verificado no seu provedor (ex: SendGrid)

// Configure a chave de API do SendGrid.
// É crucial que esta chave seja guardada em variáveis de ambiente e não diretamente no código.
// Crie um arquivo .env.local na raiz do seu projeto e adicione:
// SENDGRID_API_KEY='SUA_CHAVE_DE_API_DO_SENDGRID'
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.warn("SENDGRID_API_KEY não configurada. O envio de e-mails real não funcionará.");
}

async function sendEmailWithSendGrid(to: string, from: string, subject: string, text: string, html: string) {
  if (!process.env.SENDGRID_API_KEY) {
    console.error("Tentativa de enviar e-mail sem SENDGRID_API_KEY. Simulação ativada.");
    // Simula um envio bem-sucedido para fins de desenvolvimento local sem a chave
    return Promise.resolve(); 
  }

  const msg = { to, from, subject, text, html };
  try {
    await sgMail.send(msg);
    console.log(`E-mail enviado para ${to} via SendGrid com sucesso.`);
  } catch (error: any) {
    console.error("Erro ao enviar e-mail via SendGrid:", error);
    if (error.response) {
      console.error('Corpo do erro SendGrid:', error.response.body);
    }
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
      await sendEmailWithSendGrid(
        TARGET_EMAIL_ADDRESS,
        FROM_EMAIL_ADDRESS,
        'Novo Lead Capturado - EngNexus AI',
        `Um novo usuário se inscreveu para acesso antecipado com o e-mail: ${email}`,
        `<p>Um novo usuário se inscreveu para acesso antecipado com o e-mail: <strong>${email}</strong></p><p>Este e-mail foi capturado através do formulário da landing page EngNexus AI.</p>`
      );
      console.log(`E-mail capturado: ${email}. Solicitação de envio para: ${TARGET_EMAIL_ADDRESS} via SendGrid processada.`);
    } catch (emailError) {
      // Se sendEmailWithSendGrid lançar um erro, ele será pego aqui.
      // A mensagem de erro já foi logada dentro de sendEmailWithSendGrid.
      // Retornamos um erro genérico para o cliente.
      return NextResponse.json({ message: "Ocorreu um erro ao tentar registrar seu e-mail. Por favor, tente novamente mais tarde." }, { status: 500 });
    }
    
    // Simula um atraso de rede para fins de demonstração se não estiver usando SendGrid real
    if (!process.env.SENDGRID_API_KEY) {
        await new Promise(resolve => setTimeout(resolve, 750));
    }

    return NextResponse.json({ message: `Obrigado! ${email} foi adicionado à nossa lista de espera.` }, { status: 200 });

  } catch (error) {
    console.error("Erro geral ao processar a solicitação de captura de e-mail:", error);
    let errorMessage = "Ocorreu um erro inesperado ao processar sua solicitação.";
    // Não exponha detalhes do erro ao cliente por segurança
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
