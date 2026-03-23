import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export default function MentionsLegales() {
    return (
        <main className="min-h-screen bg-sahel-sand">
            <Navbar />
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-screen-md mx-auto">
                    <Breadcrumbs items={[{ label: 'Mentions Légales' }]} theme="light" />
                    <h1 className="text-4xl md:text-5xl font-black text-sahel-navy mt-10 mb-8 italic">
                        Mentions <span className="text-sahel-gold">Légales</span>
                    </h1>
                    <div className="prose prose-lg text-sahel-navy/80 space-y-6 font-medium">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">Édition du site</h2>
                            <p>Le site sahel-multiservices.com est édité par le Groupe Sahel MULTISERVICES, basé à Bamako, Mali.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">Siège Social</h2>
                            <p>Niamana, Bamako, Mali.<br/>Immatriculation RCC : 32502529582040R<br/>NIF : NIF00560521 H</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">Hébergement</h2>
                            <p>Le site est hébergé sur des infrastructures cloud de haute performance garantissant une disponibilité maximale.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">Contact</h2>
                            <p>Email : contact@sahel-multiservices.com<br/>Téléphone : +223 74 13 20 32</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">Propriété Intellectuelle</h2>
                            <p>Le contenu du site, incluant les textes, images et logos, est la propriété exclusive du Groupe Sahel MULTISERVICES.</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
