import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV_NAME === 'production' 
    ? 'https://chandancc.github.io/aditi-oro-dental-care'
    : 'http://localhost:3000'),
  title: 'Aditi Oro Dental Clinic - Best Dental Care in Ranchi & Bangalore',
  description: 'Aditi Oro Dental Clinic offers top-quality dental services in Ranchi and Bangalore. Our expert dentists provide comprehensive care for a healthy smile.',
  keywords: 'dental clinic, dentist, oral care, Ranchi, Bangalore, Aditi Oro Dental, teeth whitening, root canal, implants',
  authors: [{ name: 'Aditi Oro Dental Clinic' }],
  openGraph: {
    title: 'Aditi Oro Dental Clinic - Ranchi & Bangalore',
    description: 'Expert dental care services. Visit our clinics in Ranchi and Bangalore for a healthy, beautiful smile.',
    url: '/',
    siteName: 'Aditi Oro Dental Clinic',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aditi Oro Dental Clinic Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditi Oro Dental Clinic - Top Dentists in Ranchi & Bangalore',
    description: 'Your trusted partner for comprehensive dental care. Book an appointment today!',
    images: ['/images/twitter-image.png'],
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
  // Add more specific SEO tags as needed
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${inter.className} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
