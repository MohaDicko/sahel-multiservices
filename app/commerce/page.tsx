import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import CommerceServices from "./components/CommerceServices";
import CommerceStats from "./components/CommerceStats";
import CommerceCTA from "./components/CommerceCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { Metadata } from 'next';
import { Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: "Sahel Commerce & Négoce – Import-Export",
    description: "Solutions stratégiques en commerce international et distribution au Sahel.",
    alternates: {
        canonical: "https://sahel-multiservices.com/commerce",
    },
    openGraph: {
        title: "Sahel Commerce | Négoce International",
        description: "Connectez vos ambitions commerciales au marché mondial.",
        images: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function CommercePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Breadcrumbs items={[{ label: 'Commerce & Négoce' }]} theme="light" />
            <PageHero
                theme="light"
                badge={{ label: "Import — Export — Négoce", icon: Globe, colorClass: "bg-amber-500/20 border-amber-500/30 text-amber-600" }}
                title={<>Connecter le Sahel <br /><span className="text-amber-500">Au Reste du Monde</span></>}
                description="Votre partenaire stratégique pour les échanges commerciaux internationaux. Nous facilitons l'approvisionnement, la logistique et la distribution de produits essentiels."
                imageSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Port de commerce logistique"
                ctaPrimary={{ label: "Devenir Partenaire", href: "#contact" }}
                ctaSecondary={{ label: "Nos Solutions", href: "#services" }}
                overlayGradient="from-slate-900/90 to-slate-800/80"
            />
            <CommerceServices />
            <CommerceStats />
            <CommerceCTA />

            <div className="bg-slate-900 border-t border-slate-800">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
