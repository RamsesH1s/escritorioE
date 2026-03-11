import type { Metadata } from 'next';
import { Public_Sans, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-public-sans',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Or production URL when deployed
  title: 'Dayra Oliveira ADV',
  description: 'Serviços jurídicos premium com foco em integridade, excelência e a busca incansável pela justiça para nossos clientes.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Dayra Oliveira | Advogada e Consultora Jurídica',
    description: 'Serviços jurídicos premium com foco em integridade, excellence e a busca incansável pela justiça.',
    url: 'https://dayraoliveira.com', // To be updated when hosted
    siteName: 'Dayra Oliveira',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Dayra Oliveira Office',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dayra Oliveira | Advogada e Consultora Jurídica',
    description: 'Serviços jurídicos premium com foco em integridade, excelência e a busca incansável pela justiça.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Dayra Oliveira',
    image: 'https://dayraoliveira.com/images/hero.jpg',
    url: 'https://dayraoliveira.com',
    telephone: '+55-86-9440-4644',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Legal Plaza, Suite 400',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    }
  };

  return (
    <html lang="en" className={`${publicSans.variable} ${playfairDisplay.variable}`}>
      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
