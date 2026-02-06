import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

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
    default: "Groupe Sahel – Expertise Pan-Sahélienne & Innovation",
    template: "%s | Groupe Sahel"
  },
  description: "Référence multiservices au Mali et dans tout le Sahel. Solutions expertes en BTP, Technologie, Énergie et Négoce International pour le développement régional.",
  keywords: [
    "Groupe Sahel", "BTP Mali", "Digital Sahel", "Énergie Afrique de l'Ouest",
    "Négoce Regional", "Export Mali", "Logistique Sahel", "Bamako", "Gao", "Mopti",
    "Kayes", "Ségou", "Sikasso", "Kidal", "Tombouctou", "Mali", "Sahel", "UEMOA", "CEDEAO"
  ],
  authors: [{ name: "Groupe Sahel" }],
  creator: "Groupe Sahel",
  publisher: "Groupe Sahel",
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
    title: "Sahel Multi",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://sahel-multiservices.com",
    siteName: "Groupe Sahel",
    title: "Groupe Sahel – Développer le Mali, Connecter le Sahel",
    description: "Votre partenaire de confiance pour des projets d'envergure dans toute la région sahélienne.",
    images: [
      {
        url: "/sahel-logo-v3.png",
        width: 1200,
        height: 630,
        alt: "Groupe Sahel - Mali & Sahel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupe Sahel - Expert Sahel",
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
    "name": "Groupe Sahel",
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
    "description": "Leader multiservices opérant dans tout le Mali et la région du Sahel : BTP, Technologie, Énergie et Commerce.",
    "sameAs": [
      "https://linkedin.com/company/sahel-multiservices"
    ]
  };

  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased bg-sahel-sand text-sahel-navy selection:bg-sahel-bronze selection:text-white min-h-screen flex flex-col`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_ID || ""} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        {children}
      </body>
    </html>
  );
}
