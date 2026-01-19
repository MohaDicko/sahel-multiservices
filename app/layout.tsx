import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accueil – Sahel Multiservices",
  description:
    "Sahel Multiservices, leader en solutions numériques et services industriels, propose des prestations sur‑mesure : développement web & mobile, e‑commerce, trading, BTP et énergie. Nous allions expertise, innovation et accompagnement personnalisé pour transformer vos projets en succès durables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description ?? undefined} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="container mx-auto px-4 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
