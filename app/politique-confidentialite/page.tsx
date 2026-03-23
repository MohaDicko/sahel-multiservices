import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-sahel-sand">
            <Navbar />
            <div className="pt-32 pb-20 px-4">
                <div className="max-w-screen-md mx-auto">
                    <Breadcrumbs items={[{ label: 'Politique de Confidentialité' }]} theme="light" />
                    <h1 className="text-4xl md:text-5xl font-black text-sahel-navy mt-10 mb-8 italic">
                        Politique de <span className="text-sahel-gold">Confidentialité</span>
                    </h1>
                    <div className="prose prose-lg text-sahel-navy/80 space-y-6 font-medium">
                        <p>Dernière mise à jour : 23 Mars 2026</p>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">1. Collecte des données</h2>
                            <p>Nous collectons les informations que vous nous fournissez directement via nos formulaires de contact, notamment votre nom, adresse e-mail et numéro de téléphone.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">2. Utilisation des données</h2>
                            <p>Les données collectées sont utilisées exclusivement pour répondre à vos demandes de services, améliorer notre site web et vous informer sur nos activités au Sahel.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">3. Protection des données</h2>
                            <p>Le Groupe Sahel s'engage à protéger vos données personnelles conformément aux normes internationales et aux lois en vigueur au Mali.</p>
                        </section>
                        <section className="space-y-4">
                            <h2 className="text-2xl font-black text-sahel-navy uppercase tracking-wider">4. Vos droits</h2>
                            <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour toute demande, contactez-nous à : contact@sahel-multiservices.com</p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
