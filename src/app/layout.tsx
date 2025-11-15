import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'DotsBot - Unified Customer Conversations Platform',
  description:
    'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers. Consolidate all customer communications in one intelligent inbox.',
  keywords: [
    'customer support',
    'messaging platform',
    'omnichannel',
    'customer service',
    'live chat',
    'helpdesk',
    'support software',
  ],
  authors: [{ name: 'DotsBot Team' }],
  openGraph: {
    title: 'DotsBot - Unified Customer Conversations Platform',
    description:
      'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'DotsBot',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DotsBot - Unified Customer Conversations Platform',
    description:
      'Modern messaging platform for support teams. Real-time inbox, 12+ channels, built for developers.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
