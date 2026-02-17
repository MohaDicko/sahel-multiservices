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
    title: "Sahel Distribution – Import-Export & Distribution",
    description: "Solutions stratégiques en commerce international et distribution au Sahel.",
    alternates: {
        canonical: "https://sahel-multiservices.com/commerce",
    },
    openGraph: {
        title: "Sahel Distribution | Négoce International",
        description: "Connectez vos ambitions commerciales au marché mondial.",
        images: ["https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function CommercePage() {
    return (
        <main className="min-h-screen bg-sahel-sand selection:bg-sahel-navy selection:text-white">
            <Navbar />
            <Breadcrumbs items={[{ label: 'Sahel Distribution' }]} theme="light" />
            <PageHero
                theme="light"
                badge={{ label: "Import — Export — Négoce", icon: Globe, colorClass: "bg-sahel-gold/10 border-sahel-gold/20 text-sahel-navy" }}
                title={<>Connecter le Sahel <br /><span className="text-sahel-gold underline decoration-sahel-gold/20 underline-offset-8">Au Monde Entier</span></>}
                description="Distribution Stratégique & Logistique Internationale. Nous sommes votre pont vers les marchés mondiaux, garantissant fluidité et excellence opérationnelle."
                imageSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Port de commerce logistique"
                ctaPrimary={{ label: "Devenir Partenaire", href: "#contact" }}
                ctaSecondary={{ label: "Nos Solutions", href: "#services" }}
                overlayGradient="from-sahel-navy/95 via-sahel-navy/70 to-sahel-navy/40"
            />
            <CommerceServices />
            <CommerceStats />
            <CommerceCTA />

            <div className="bg-sahel-navy border-t border-white/5">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
