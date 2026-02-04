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
    title: "Sahel BTP – Construction & Génie Civil",
    description: "Expert en construction, routes et ouvrages d'art au Sahel. Bâtissons durablement.",
    alternates: {
        canonical: "https://sahel-multiservices.com/btp",
    },
    openGraph: {
        title: "Sahel BTP | Construction & Infrastructures",
        description: "Rigueur technique et excellence opérationnelle pour vos chantiers au Sahel.",
        images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function BTPPage() {
    return (
        <main className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white">
            <Navbar />
            <Breadcrumbs items={[{ label: 'BTP & Infrastructures' }]} theme="light" />
            <PageHero
                theme="light"
                badge={{ label: "Génie Civil & Bâtiment", icon: Construction, colorClass: "bg-orange-600/20 border-orange-500/30 text-orange-600" }}
                title={<>Bâtir l'Avenir du <br /><span className="text-orange-600">Sahel, Pierre par Pierre</span></>}
                description="Expertise technique, rigueur et innovation pour vos projets d'infrastructures et de construction. Nous façonnons les paysages urbains et ruraux de demain."
                imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Chantier de construction BTP"
                ctaPrimary={{ label: "Démarrer un projet", href: "#contact" }}
                ctaSecondary={{ label: "Nos Réalisations", href: "#projects" }}
                overlayGradient="from-white/90 via-white/40 to-white/10"
            />
            <BTPServices />
            <BTPProjects />
            <BTPStats />
            <BTPCTA />

            <div className="bg-slate-900 border-t border-slate-800">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
