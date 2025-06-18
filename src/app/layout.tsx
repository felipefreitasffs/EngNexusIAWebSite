import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI';
const APP_DESCRIPTION = 'O copiloto de IA para líderes de engenharia. Conectamos pessoas, código, fluxo de trabalho e custos para liderança estratégica e insights proativos.';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'; // Configure esta variável em .env.local

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${APP_NAME}: Seu Copiloto de IA para Liderança em Engenharia`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: ['IA para engenharia', 'liderança de engenharia', 'gestão de times tech', 'métricas de engenharia', 'DORA metrics', 'FinOps', 'DEVEX', 'EngNexus AI'],
  authors: [{ name: 'EngNexus Team', url: BASE_URL }],
  creator: 'EngNexus Team',
  publisher: 'EngNexus Team',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    title: `${APP_NAME}: Seu Copiloto de IA para Liderança em Engenharia`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}/og-image.png`, // Crie uma imagem em public/og-image.png (1200x630px)
        width: 1200,
        height: 630,
        alt: `Logotipo e slogan da ${APP_NAME}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME}: Seu Copiloto de IA para Liderança em Engenharia`,
    description: APP_DESCRIPTION,
    // siteId: 'YourTwitterSiteID', // Se você tiver um ID de site do Twitter
    // creator: '@YourTwitterHandle', // Handle do Twitter do criador/empresa
    // creatorId: 'YourTwitterCreatorID', // ID do criador do Twitter
    images: [`${BASE_URL}/twitter-image.png`], // Crie uma imagem em public/twitter-image.png (ex: 1200x675px)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: { // Você pode adicionar favicons aqui
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
  // verification: { // Para verificação em ferramentas de webmaster
  //   google: 'YOUR_GOOGLE_SITE_VERIFICATION_TOKEN',
  //   yandex: 'YOUR_YANDEX_SITE_VERIFICATION_TOKEN',
  //   other: {
  //     me: ['my-email@example.com', 'my-link-to-proof.html'],
  //   },
  // },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": APP_NAME,
  "url": BASE_URL,
  "logo": `${BASE_URL}/logo.png`, // Crie uma imagem em public/logo.png
  "sameAs": [
    "https://twitter.com/engnexus_ai_example", // Substitua pelo seu Twitter real
    "https://linkedin.com/company/engnexus-ai-example" // Substitua pelo seu LinkedIn real
    // Adicione outros perfis sociais aqui
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": APP_NAME,
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/search?q={search_term_string}`, // Se você tiver uma busca no site
    "query-input": "required name=search_term_string"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark"><head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head><body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body></html>
  );
}
