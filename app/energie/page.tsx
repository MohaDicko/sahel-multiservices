import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import EnergieServices from "./components/EnergieServices";
import EnergieStats from "./components/EnergieStats";
import EnergieCTA from "./components/EnergieCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import { Metadata } from 'next';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
    title: "Sahel Energy – Solutions Énergétiques & Pétrole",
    description: "Expertise en hydrocarbures, stockage et distribution d'énergie au Sahel.",
    alternates: {
        canonical: "https://sahel-multiservices.com/energie",
    },
    openGraph: {
        title: "Sahel Energy | Pétrole & Gaz",
        description: "Assurer la souveraineté énergétique par l'excellence logistique.",
        images: ["https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function EnergiePage() {
    return (
        <main className="min-h-screen bg-sahel-navy text-white selection:bg-sahel-bronze selection:text-white">
            <Navbar />
            <Breadcrumbs items={[{ label: 'Sahel Energy' }]} />
            <PageHero
                badge={{ label: "Énergie & Hydrocarbures", icon: Zap }}
                title={<>Propulser le <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-200 to-sahel-bronze">Développement Énergétique</span></>}
                description="Sahel Energy déploie une expertise de pointe dans le secteur des hydrocarbures et des énergies renouvelables. Nous assurons l'approvisionnement pour un Sahel en mouvement."
                imageSrc="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Raffinerie et énergie"
                ctaPrimary={{ label: "Consulter nos experts", href: "#contact" }}
                ctaSecondary={{ label: "Nos Solutions", href: "#services" }}
                overlayGradient="from-sahel-navy/90 via-sahel-navy/50 to-sahel-navy"
            />
            <EnergieServices />
            <EnergieStats />
            <EnergieCTA />

            <div className="bg-sahel-navy border-t border-white/5">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
