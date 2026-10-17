import './globals.css';

// Link previews (WhatsApp, Facebook, X…) use these plus app/opengraph-image.jpg;
// app/icon.png and app/apple-icon.png become the browser and home-screen icons.
export const metadata = {
  metadataBase: new URL('https://dorcas-ventures.vercel.app'),
  title: 'Dorcas Ventures – Home of Quality Plasters',
  description: "Ghana's premier supplier of premium plastering and ceiling materials.",
  openGraph: {
    title: 'Dorcas Ventures – Home of Quality Plasters',
    description: "Ghana's premier supplier of premium plastering and ceiling materials.",
    url: '/',
    siteName: 'Dorcas Ventures',
    locale: 'en_GH',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&family=Nunito+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
