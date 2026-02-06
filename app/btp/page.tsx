import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import BTPServices from "./components/BTPServices";
import BTPStats from "./components/BTPStats";
import BTPProjects from "./components/BTPProjects";
import BTPCTA from "./components/BTPCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { Metadata } from 'next';
import { Construction } from 'lucide-react';

export const metadata: Metadata = {
    title: "Sahel Infra – Construction & Génie Civil",
    description: "Sahel Infra : Expert en construction, routes et ouvrages d'art au Sahel. Bâtissons durablement.",
    alternates: {
        canonical: "https://sahel-multiservices.com/btp",
    },
    openGraph: {
        title: "Sahel Infra | Construction & Infrastructures",
        description: "Rigueur technique et excellence opérationnelle pour vos chantiers au Sahel.",
        images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function BTPPage() {
    return (
        <main className="min-h-screen bg-sahel-navy text-white selection:bg-sahel-bronze selection:text-white">
            <Navbar />
            <Breadcrumbs items={[{ label: 'Sahel Infra' }]} />
            <PageHero
                badge={{ label: "Génie Civil & Bâtiment", icon: Construction, colorClass: "bg-sahel-bronze/10 border-sahel-bronze/20 text-sahel-bronze" }}
                title={<>Bâtir l'Avenir du <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-bronze via-amber-600 to-sahel-gold">Sahel, Pierre par Pierre</span></>}
                description="Avec Sahel Infra, bénéficiez d'une expertise technique, rigueur et innovation pour vos projets d'infrastructures et de construction."
                imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Chantier de construction BTP"
                ctaPrimary={{ label: "Démarrer un projet", href: "#contact" }}
                ctaSecondary={{ label: "Nos Réalisations", href: "#projects" }}
                overlayGradient="from-sahel-navy/90 via-sahel-navy/50 to-sahel-navy"
            />
            <BTPServices />
            <BTPProjects />
            <BTPStats />
            <BTPCTA />

            <div className="bg-sahel-navy border-t border-white/5">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
