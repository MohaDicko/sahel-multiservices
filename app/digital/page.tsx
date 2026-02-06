import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";
import DigitalServices from "./components/DigitalServices";
import DigitalStack from "./components/DigitalStack";
import DigitalCTA from "./components/DigitalCTA";
import DigitalProjects from "./components/DigitalProjects";
import Breadcrumbs from "../components/Breadcrumbs";
import PageHero from "../components/PageHero";
import DigitalPricing from "./components/DigitalPricing";
import { Metadata } from 'next';
import { MonitorSmartphone } from 'lucide-react';

export const metadata: Metadata = {
    title: "Sahel Tech – Solutions Technologiques & Développement",
    description: "Agence digitale au Sahel : Applications Mobiles, Développement Web et Logiciels SaaS sur mesure.",
    alternates: {
        canonical: "https://sahel-multiservices.com/digital",
    },
    openGraph: {
        title: "Sahel Tech | Innovation Technologique",
        description: "Transformez vos idées en solutions numériques performantes.",
        images: ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"]
    }
};

export default function DigitalPage() {
    return (
        <main className="min-h-screen bg-sahel-navy text-white selection:bg-sahel-gold selection:text-sahel-navy">
            <Navbar />
            <Breadcrumbs items={[{ label: 'Sahel Tech' }]} />
            <PageHero
                badge={{ label: "Nouvelle Ère Numérique", icon: MonitorSmartphone, colorClass: "bg-sahel-bronze/10 border-sahel-bronze/20 text-sahel-bronze" }}
                title={<>Solutions Digitales <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-200 to-sahel-bronze">Pour le Futur</span></>}
                description="Transformez vos idées en réalité avec Sahel Tech. Nous concevons des sites web performants, des applications mobiles intuitives et des logiciels sur mesure pour accélérer votre croissance."
                imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                imageAlt="Technologie et Digital"
                ctaPrimary={{ label: "Démarrer mon projet", href: "#contact" }}
                ctaSecondary={{ label: "Voir nos réalisations", href: "#portfolio" }}
                overlayGradient="from-sahel-navy/90 via-sahel-navy/50 to-sahel-navy"
            />
            <DigitalServices />
            <DigitalProjects />
            <DigitalPricing />
            <DigitalStack />
            <DigitalCTA />

            {/* Reusing the main contact form but contextually it fits since it's dark themed */}
            <div className="bg-sahel-navy border-t border-white/5">
                <ContactForm />
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
