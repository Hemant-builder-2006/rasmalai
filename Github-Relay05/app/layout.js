import './global.css';
import Script from "next/script";
import ClientProviders from '../components/ClientProviders';

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://campusmart.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CampusMart',
    template: '%s | CampusMart',
  },
  description: 'CampusMart is a trusted student marketplace to buy, sell, and connect across campus communities.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'CampusMart',
    description: 'Buy and sell with verified students in your campus community.',
    url: siteUrl,
    siteName: 'CampusMart',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CampusMart',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CampusMart',
    description: 'Buy and sell with verified students in your campus community.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/fav.jpg',
    shortcut: '/fav.jpg',
    apple: '/fav.jpg',
    other: [
      { rel: 'icon', url: '/fav.jpg', sizes: '32x32', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '64x64', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '96x96', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '128x128', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '192x192', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '256x256', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '384x384', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '512x512', type: 'image/jpeg' },
      { rel: 'icon', url: '/fav.jpg', sizes: '1024x1024', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '180x180', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '152x152', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '167x167', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '192x192', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '256x256', type: 'image/jpeg' },
      { rel: 'apple-touch-icon', url: '/fav.jpg', sizes: '512x512', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({ children }) {
  // Bug 8 fix: remove unstable client-only timestamp to avoid hydration mismatch.
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8234149876760532" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8234149876760532"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
