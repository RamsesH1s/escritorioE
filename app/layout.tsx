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
  title: 'LegalExcellence | Premium Law Firm',
  description: 'Premium legal services with a focus on integrity, excellence, and the relentless pursuit of justice. Expert counsel in Corporate Law, Family Litigation, and Real Estate.',
  openGraph: {
    title: 'LegalExcellence | Premium Law Firm',
    description: 'Premium legal services with a focus on integrity, excellence, and the relentless pursuit of justice.',
    url: 'https://legalexcellence.com', // To be updated when hosted
    siteName: 'LegalExcellence',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'LegalExcellence Library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegalExcellence | Premium Law Firm',
    description: 'Premium legal services with a focus on integrity, excellence, and the relentless pursuit of justice.',
    images: ['/images/hero.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'LegalExcellence',
    image: 'https://legalexcellence.com/images/hero.jpg',
    url: 'https://legalexcellence.com',
    telephone: '+1-212-555-0198',
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
