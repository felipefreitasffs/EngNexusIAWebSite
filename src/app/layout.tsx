
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'EngNexus AI';
const APP_DESCRIPTION = 'O copiloto de IA para líderes de engenharia. Conectamos pessoas, código, fluxo de trabalho e custos para liderança estratégica e insights proativos.';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.engnexusia.com'; // Configure esta variável em .env.local

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${APP_NAME}: Seu Copiloto de IA para Liderança em Engenharia`,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  alternates: {
    canonical: '/',
  },
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
        url: `/images/engnexusia1.png`,
        width: 960,
        height: 540,
        alt: `Demonstração da Interface do EngNexus AI`,
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
    images: [`/images/engnexusia1.png`],
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
  icons: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNU0yIDEybDEwIDUgMTAtNSIgc3Ryb2tlPSIjN0MzQUVEIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
    shortcut: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNU0yIDEybDEwIDUgMTAtNSIgc3Ryb2tlPSIjN0MzQUVEIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
    apple: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyIDJMMiA3bDEwIDUgMTAtNS0xMC01ek0yIDE3bDEwIDUgMTAtNU0yIDEybDEwIDUgMTAtNSIgc3Ryb2tlPSIjN0MzQUVEIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
  },
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
  "logo": `${BASE_URL}/logo.png`, // Substitua por public/logo.png
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
