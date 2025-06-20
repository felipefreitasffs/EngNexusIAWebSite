
# EngNexus AI - Seu Copiloto de IA para Liderança em Engenharia

[![EngNexus AI](./public/images/engnexusia1.png)](https://engnexusia.com)

EngNexus AI é uma plataforma inovadora projetada para ser o copiloto de IA para líderes de engenharia. Nossa missão é conectar os pontos entre pessoas, código, fluxo de trabalho e custos, permitindo que líderes de tecnologia parem de gerenciar planilhas e comecem a liderar com clareza estratégica e insights proativos.

Esta landing page foi construída para apresentar o EngNexus AI, suas funcionalidades e convidar usuários para a lista de espera do lançamento beta, além de coletar sugestões.

## ✨ Funcionalidades da Landing Page

*   **Hero Section Impactante**: Apresenta a proposta de valor principal e um CTA para acesso antecipado (captura de e-mail).
*   **Visão da IA (AIVisionSection)**: Demonstra o poder da IA em gerar insights correlacionando diferentes domínios de dados, com exemplos práticos em um carrossel.
*   **Matriz de Funcionalidades Interativa**: Permite aos usuários explorar as diversas capacidades da plataforma EngNexus AI, com descrições detalhadas e visuais para cada módulo.
*   **FAQ (Perguntas Frequentes)**: Responde às dúvidas comuns dos visitantes.
*   **CTA Final (Formulário de Sugestões)**: Convida os usuários a enviarem feedback e sugestões.
*   **Rodapé Informativo**: Links para políticas e redes sociais.
*   **Captura de E-mail e Sugestões Funcional**: Integração com [Formspree](https://formspree.io/) para receber envios de formulário por e-mail.
*   **Design Moderno e Responsivo**: Utiliza ShadCN UI e Tailwind CSS para uma experiência visual agradável em todos os dispositivos.
*   **Otimizada para SEO**: Metadados ricos, dados estruturados (JSON-LD), `robots.txt` e `sitemap.xml` para melhor indexação.

## 🚀 Tecnologias Utilizadas

*   **Framework**: [Next.js](https://nextjs.org/) (com App Router)
*   **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
*   **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI**: [ShadCN UI](https://ui.shadcn.com/)
*   **Ícones**: [Lucide React](https://lucide.dev/)
*   **Formulários**: [React Hook Form](https://react-hook-form.com/) com [Zod](https://zod.dev/) para validação no cliente.
*   **Serviço de Backend de Formulário**: [Formspree](https://formspree.io/) para processamento de envios.
*   **Animações**: Animações sutis com CSS e Intersection Observer.
*   **Inteligência Artificial (Genkit)**:
    *   `@genkit-ai/next`: Integração do Genkit com Next.js.
    *   `genkit`: Core do Genkit.
    *   Exemplo de fluxo (`generateInsightCard`) para demonstrar a capacidade de geração de insights da IA.
*   **Linting & Formatting**: ESLint (configuração padrão do Next.js).

## 📋 Pré-requisitos

*   [Node.js](https://nodejs.org/) (versão 18.x ou superior recomendada)
*   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
*   Uma conta [Formspree](https://formspree.io/) (plano gratuito disponível) para os formulários de contato.

## ⚙️ Configuração do Ambiente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/felipefreitasffs/EngNexusIAWebSite.git
    cd engnexus-ai-landing
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure os Endpoints do Formspree:**
    *   Crie (ou faça login) uma conta em [Formspree](https://formspree.io/).
    *   Crie dois novos formulários no Formspree:
        1.  Um para a captura de e-mail da Hero Section.
        2.  Um para o formulário de sugestões da seção final.
    *   Para cada formulário, o Formspree fornecerá um URL de endpoint único (ex: `https://formspree.io/f/SEU_ID_UNICO_DO_FORMULARIO`).
    *   Substitua os placeholders nos seguintes arquivos com seus URLs de endpoint reais:
        *   `src/components/landing/HeroSection.tsx`: Atualize a prop `formSpreeEndpoint` no componente `<EmailOnlyCaptureForm />`.
        *   `src/components/landing/FinalCtaSection.tsx`: Atualize a prop `formSpreeEndpoint` no componente `<SuggestionForm />`.

4.  **Configure as Variáveis de Ambiente (Opcional, mas recomendado para outras funcionalidades):**
    Crie um arquivo `.env.local` na raiz do projeto se ainda não existir.
    ```env
    # URL base da sua aplicação (necessário para SEO e sitemap)
    NEXT_PUBLIC_BASE_URL="http://localhost:9002" # Para desenvolvimento local
    # NEXT_PUBLIC_BASE_URL="https://yourdomain.com" # Para produção

    # Nome da sua aplicação (usado em metadados e e-mails)
    NEXT_PUBLIC_APP_NAME="EngNexus AI"

    # Chave de API do Google AI Studio (ou outro provedor Genkit configurado)
    # Exemplo para Google AI:
    # GOOGLE_API_KEY="SUA_GOOGLE_AI_API_KEY"
    ```
    *   **`NEXT_PUBLIC_BASE_URL`**: Essencial para metadados de SEO e geração do sitemap.
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

## 📈 Otimizações de SEO

A landing page foi desenvolvida com SEO em mente:

*   **Metadados Completos**: `src/app/layout.tsx` contém metadados detalhados.
*   **Dados Estruturados (JSON-LD)**.
*   **`robots.txt`**: Localizado em `public/robots.txt`.
*   **`sitemap.xml`**: Localizado em `public/sitemap.xml`.
*   **Textos Alternativos (Alt Text)**.
*   **Semântica HTML**.

**Lembre-se de atualizar `NEXT_PUBLIC_BASE_URL` no seu `.env.local` e os placeholders de domínio nos arquivos `public/robots.txt` e `public/sitemap.xml` com a URL real do seu site.**

## 🎨 Estrutura de Pastas (Principais)

```
.
├── public/                   # Arquivos estáticos
├── src/
│   ├── ai/                   # Lógica e fluxos do Genkit
│   ├── app/                  # Rotas do Next.js App Router
│   │   ├── api/              # (Esta pasta pode ser removida se capture-email/route.ts não for mais usada)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── landing/
│   │   └── ui/
│   ├── hooks/
│   └── lib/
├── .env.local                # Arquivo para variáveis de ambiente
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

**Nota:** O arquivo `src/app/api/capture-email/route.ts` não é mais necessário com o uso do Formspree e pode ser removido do seu projeto.

## 🤝 Contribuindo

Atualmente, este projeto é mantido pela equipe EngNexus AI. Para contribuições ou sugestões, por favor, abra uma Issue no repositório.

## 📄 Licença

Este projeto é de propriedade da EngNexus AI. Todos os direitos reservados.

---

Obrigado por conferir o EngNexus AI! Estamos ansiosos para revolucionar a liderança em engenharia com você.
