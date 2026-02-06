import ScrollReveal from './ScrollReveal';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ibrahim Traoré",
        role: "Directeur Logistique",
        content: "Groupe Sahel nous a accompagnés pour l'installation de notre système GPS. Leur expertise technique et leur réactivité sont impressionnantes.",
        initials: "IT"
    },
    {
        name: "Fanta Coulibaly",
        role: "Chef de Projet BTP",
        content: "Un partenaire de confiance qui comprend les réalités du terrain au Mali. Les délais sont respectés et la communication est fluide.",
        initials: "FC"
    },
    {
        name: "Moussa Diarra",
        role: "Entrepreneur",
        content: "Nous utilisons leurs services digitaux pour notre plateforme e-commerce. Une solution sur mesure qui a boosté notre productivité.",
        initials: "MD"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-slate-50 dark:bg-slate-800/50 py-24">
            <div className="max-w-screen-xl mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-3">Témoignages</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Ils nous font <span className="text-amber-500">confiance</span>
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Découvrez les retours de nos clients sur nos différentes prestations de services.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testi, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative h-full flex flex-col">
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-amber-500/10" />

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                    ))}
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 italic mb-8 flex-1">
                                    "{testi.content}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-700 pt-6">
                                    <div className="w-12 h-12 bg-amber-500 flex items-center justify-center rounded-full text-white font-bold text-lg">
                                        {testi.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{testi.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

