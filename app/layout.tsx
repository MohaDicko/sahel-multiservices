import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Accueil – Sahel Multiservices",
  description:
    "Sahel Multiservices, leader en solutions numériques et services industriels, propose des prestations sur‑mesure : développement web & mobile, e‑commerce, trading, BTP et énergie. Nous allions expertise, innovation et accompagnement personnalisé pour transformer vos projets en succès durables.",
  icons: {
    icon: "/sahel-logo-v3.png?v=1",
    apple: "/sahel-logo-v3.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
