# EngNexus AI - Seu Copiloto de IA para Liderança em Engenharia

[![EngNexus AI](./public/og-image.png)](https://yourdomain.com) <!-- Substitua pela URL do seu app -->

EngNexus AI é uma plataforma inovadora projetada para ser o copiloto de IA para líderes de engenharia. Nossa missão é conectar os pontos entre pessoas, código, fluxo de trabalho e custos, permitindo que líderes de tecnologia parem de gerenciar planilhas e comecem a liderar com clareza estratégica e insights proativos.

Esta landing page foi construída para apresentar o EngNexus AI, suas funcionalidades e convidar usuários para a lista de espera do lançamento beta.

## ✨ Funcionalidades da Landing Page

*   **Hero Section Impactante**: Apresenta a proposta de valor principal e um CTA para acesso antecipado.
*   **Visão da IA (AIVisionSection)**: Demonstra o poder da IA em gerar insights correlacionando diferentes domínios de dados, com exemplos práticos em um carrossel.
*   **Matriz de Funcionalidades Interativa**: Permite aos usuários explorar as diversas capacidades da plataforma EngNexus AI, com descrições detalhadas e visuais para cada módulo (Painel Inteligente, Copiloto de IA, Gestão de Pessoas, Otimização DEVEX, Excelência em Engenharia, FinOps, etc.).
*   **FAQ (Perguntas Frequentes)**: Responde às dúvidas comuns dos visitantes.
*   **CTA Final**: Reforça o convite para a lista de espera.
*   **Rodapé Informativo**: Links para políticas e redes sociais.
*   **Captura de E-mail Funcional**: Integração com uma API backend para registrar e-mails de interessados, com envio de notificação para um endereço específico.
*   **Design Moderno e Responsivo**: Utiliza ShadCN UI e Tailwind CSS para uma experiência visual agradável em todos os dispositivos.
*   **Otimizada para SEO**: Metadados ricos, dados estruturados (JSON-LD), `robots.txt` e `sitemap.xml` para melhor indexação.

## 🚀 Tecnologias Utilizadas

*   **Framework**: [Next.js](https://nextjs.org/) (com App Router)
*   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI**: [ShadCN UI](https://ui.shadcn.com/)
*   **Ícones**: [Lucide React](https://lucide.dev/)
*   **Formulários**: [React Hook Form](https://react-hook-form.com/) com [Zod](https://zod.dev/) para validação.
*   **Animações**: Animações sutis com CSS e Intersection Observer.
*   **Backend (API para E-mail)**: Next.js API Routes.
*   **Envio de E-mail**: [Nodemailer](https://nodemailer.com/) com SMTP do Gmail (para o exemplo da landing page).
*   **Inteligência Artificial (Genkit)**:
    *   `@genkit-ai/next`: Integração do Genkit com Next.js.
    *   `genkit`: Core do Genkit.
    *   Exemplo de fluxo (`generateInsightCard`) para demonstrar a capacidade de geração de insights da IA.
*   **Linting & Formatting**: ESLint (configuração padrão do Next.js).

## 📋 Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## ⚙️ Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/your-username/engnexus-ai-landing.git # Substitua pela URL do seu repositório
    cd engnexus-ai-landing
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis. Substitua os valores de exemplo pelos seus dados reais.

    ```env
    # URL base da sua aplicação (necessário para SEO e sitemap)
    NEXT_PUBLIC_BASE_URL="http://localhost:9002" # Para desenvolvimento local
    # NEXT_PUBLIC_BASE_URL="https://yourdomain.com" # Para produção

    # Nome da sua aplicação (usado em metadados e e-mails)
    NEXT_PUBLIC_APP_NAME="EngNexus AI"

    # Credenciais do Gmail para envio de e-mail via Nodemailer
    # IMPORTANTE: Para produção, considere um serviço de e-mail transacional mais robusto.
    # Gere uma "Senha de App" para o GMAIL_APP_PASSWORD se tiver 2FA ativado.
    GMAIL_APP_USER="seu_email_de_envio@gmail.com"
    GMAIL_APP_PASSWORD="sua_senha_de_app_do_gmail"

    # E-mail de destino para notificações de novos leads
    TARGET_EMAIL_ADDRESS="felipefreitas.ffs@gmail.com"

    # Chave de API do Google AI Studio (ou outro provedor Genkit configurado)
    # Exemplo para Google AI:
    # GOOGLE_API_KEY="SUA_GOOGLE_AI_API_KEY"
    ```
    *   **`NEXT_PUBLIC_BASE_URL`**: Essencial para metadados de SEO e geração do sitemap. Use `http://localhost:9002` para desenvolvimento e sua URL de produção quando for fazer o deploy.
    *   **`GMAIL_APP_USER` / `GMAIL_APP_PASSWORD`**: Necessário para o envio de e-mails de notificação da captura de leads. Consulte a [documentação do Google sobre Senhas de App](https://support.google.com/accounts/answer/185833).
    *   **`GOOGLE_API_KEY`**: Se você estiver usando modelos do Google AI com Genkit, esta chave será necessária.

## ▶️ Rodando o Projeto

1.  **Para desenvolvimento (com Next.js e Genkit Dev Server):**
    Em dois terminais separados:

    *   Terminal 1 (Next.js App):
        ```bash
        npm run dev
        ```
        Isso iniciará o servidor de desenvolvimento do Next.js, geralmente em `http://localhost:9002`.

    *   Terminal 2 (Genkit Dev Server):
        ```bash
        npm run genkit:dev
        # ou para watch mode
        # npm run genkit:watch
        ```
        Isso iniciará o servidor de desenvolvimento do Genkit, que hospeda a UI de desenvolvimento e executa os fluxos de IA. A UI do Genkit geralmente fica disponível em `http://localhost:4000`.

2.  **Para build de produção:**
    ```bash
    npm run build
    ```

3.  **Para iniciar o servidor de produção (após o build):**
    ```bash
    npm run start
    ```

## 📜 Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento do Next.js (com Turbopack, na porta 9002).
*   `npm run genkit:dev`: Inicia o servidor de desenvolvimento do Genkit para os fluxos de IA.
*   `npm run genkit:watch`: Inicia o servidor de desenvolvimento do Genkit em modo watch.
*   `npm run build`: Compila a aplicação para produção.
*   `npm run start`: Inicia o servidor de produção do Next.js.
*   `npm run lint`: Executa o ESLint para análise de código.
*   `npm run typecheck`: Executa o compilador TypeScript para verificação de tipos.

## 🧠 Funcionalidades de IA com Genkit

O projeto inclui uma configuração básica do Genkit para demonstrar como as funcionalidades de IA podem ser integradas.

*   **Localização**: O código relacionado ao Genkit está em `src/ai/`.
    *   `src/ai/genkit.ts`: Configuração e inicialização do plugin Genkit.
    *   `src/ai/flows/generate-insight-card.ts`: Um exemplo de fluxo Genkit que simula a geração de "Insight Cards" com base em dados de equipe.
    *   `src/ai/dev.ts`: Ponto de entrada para o servidor de desenvolvimento do Genkit.

*   **Como Funciona**:
    *   Os fluxos Genkit (`.flow.ts`) são definidos usando schemas Zod para entrada e saída, e prompts que interagem com modelos de linguagem (LLMs).
    *   Esses fluxos podem ser chamados a partir de Server Components ou API Routes no Next.js.
    *   A UI de desenvolvimento do Genkit (`npm run genkit:dev`) permite testar e inspecionar esses fluxos.

## 📈 Otimizações de SEO

A landing page foi desenvolvida com SEO em mente:

*   **Metadados Completos**: `src/app/layout.tsx` contém metadados detalhados, incluindo Open Graph para redes sociais e Twitter Cards.
*   **Dados Estruturados (JSON-LD)**: Implementado para `Organization` e `WebSite` para ajudar os motores de busca a entender o conteúdo.
*   **`robots.txt`**: Localizado em `public/robots.txt`, configurado para permitir a indexação e apontar para o sitemap.
*   **`sitemap.xml`**: Localizado em `public/sitemap.xml`, listando as páginas importantes.
*   **Textos Alternativos (Alt Text)**: Todas as imagens incluem atributos `alt` descritivos.
*   **Semântica HTML**: Uso adequado de tags HTML (`<h1>`, `<h2>`, `<section>`, etc.) para estruturar o conteúdo.

**Lembre-se de atualizar `NEXT_PUBLIC_BASE_URL` no seu `.env.local` e os placeholders de domínio nos arquivos `public/robots.txt` e `public/sitemap.xml` com a URL real do seu site.**

## 🎨 Estrutura de Pastas (Principais)

```
.
├── public/                   # Arquivos estáticos (imagens, robots.txt, sitemap.xml)
├── src/
│   ├── ai/                   # Lógica e fluxos do Genkit
│   │   ├── flows/
│   │   └── dev.ts
│   │   └── genkit.ts
│   ├── app/                  # Rotas do Next.js App Router
│   │   ├── api/              # Rotas de API
│   │   │   └── capture-email/
│   │   ├── globals.css       # Estilos globais e variáveis de tema Tailwind/ShadCN
│   │   ├── layout.tsx        # Layout principal da aplicação
│   │   └── page.tsx          # Página inicial (landing page)
│   ├── components/
│   │   ├── landing/          # Componentes específicos da landing page
│   │   └── ui/               # Componentes ShadCN UI reutilizáveis
│   ├── hooks/                # Hooks customizados (ex: useToast, useIsMobile)
│   └── lib/                  # Utilitários (ex: cn para classnames)
├── .env.local                # Arquivo para variáveis de ambiente (NÃO versionar)
├── next.config.ts            # Configurações do Next.js
├── package.json              # Dependências e scripts do projeto
├── tailwind.config.ts        # Configurações do Tailwind CSS
└── tsconfig.json             # Configurações do TypeScript
```

## 🌐 Deploy

Esta aplicação Next.js está pronta para ser hospedada em plataformas como:

*   [Vercel](https://vercel.com/) (Altamente recomendado para Next.js)
*   [Netlify](https://www.netlify.com/)
*   [Firebase Hosting](https://firebase.google.com/docs/hosting) (com configuração para Next.js via App Hosting ou Cloud Functions)
*   Outros provedores que suportam Node.js.

Certifique-se de configurar as variáveis de ambiente na sua plataforma de hospedagem.

## 🤝 Contribuindo

Atualmente, este projeto é mantido pela equipe EngNexus AI. Para contribuições ou sugestões, por favor, abra uma Issue no repositório.

## 📄 Licença

Este projeto é de propriedade da EngNexus AI. Todos os direitos reservados. (Ou especifique uma licença open-source se aplicável).

---

Obrigado por conferir o EngNexus AI! Estamos ansiosos para revolucionar a liderança em engenharia com você.
