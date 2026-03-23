import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Sahel MULTISERVICES – Expertise & Innovation",
    template: "%s | Sahel MULTISERVICES"
  },
  description: "Référence multiservices au Mali et dans tout le Sahel. Solutions expertes en Technologie et Négoce International pour le développement régional.",
  keywords: [
    "Sahel MULTISERVICES", "Digital Sahel", "Négoce Regional", "Export Mali", "Logistique Sahel", "Bamako", "Gao", "Mopti",
    "Kayes", "Ségou", "Sikasso", "Kidal", "Tombouctou", "Mali", "Sahel", "UEMOA", "CEDEAO"
  ],
  authors: [{ name: "Sahel MULTISERVICES" }],
  creator: "Sahel MULTISERVICES",
  publisher: "Sahel MULTISERVICES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/sahel-logo-v3.png?v=1",
    apple: "/sahel-logo-v3.png?v=1",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sahel MULTI",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sahel-multiservices.com",
    siteName: "Sahel MULTISERVICES",
    title: "Sahel MULTISERVICES – Développer le Mali, Connecter le Sahel",
    description: "Votre partenaire de confiance pour des projets d'envergure dans toute la région sahélienne.",
    images: [
      {
        url: "/sahel-logo-v3.png",
        width: 1200,
        height: 630,
        alt: "Sahel MULTISERVICES - Mali & Sahel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahel MULTISERVICES - Expert Sahel",
    description: "Solutions industrielles et digitales pour le Mali et l'espace Sahélien.",
    images: ["/sahel-logo-v3.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sahel MULTISERVICES",
    "image": "https://sahel-multiservices.com/sahel-logo-v3.png",
    "@id": "https://sahel-multiservices.com",
    "url": "https://sahel-multiservices.com",
    "telephone": "+22374132032",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Niamana",
      "addressLocality": "Bamako",
      "addressRegion": "District de Bamako",
      "addressCountry": "ML"
    },
    "areaServed": [
      { "@type": "Country", "name": "Mali" },
      { "@type": "Country", "name": "Burkina Faso" },
      { "@type": "Country", "name": "Niger" },
      { "@type": "Country", "name": "Mauritania" },
      { "@type": "Country", "name": "Senegal" },
      { "@type": "Country", "name": "Chad" }
    ],
    "description": "Leader multiservices opérant dans tout le Mali et la région du Sahel : Technologie et Commerce.",
    "sameAs": [
      "https://linkedin.com/company/sahel-multiservices"
    ]
  };

  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-sahel-sand text-sahel-navy selection:bg-sahel-gold selection:text-white min-h-screen flex flex-col noise-overlay relative`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-only-sr focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-sahel-gold focus:text-sahel-navy focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">
          Aller au contenu principal
        </a>

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('SW registered');
                  }).catch(function(err) {
                    console.log('SW error', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
