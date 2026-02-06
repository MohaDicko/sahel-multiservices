import ScrollReveal from './ScrollReveal';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: "Notre Mission",
        description: "Fournir des solutions innovantes et de qualité pour accompagner le développement économique au Sahel."
    },
    {
        icon: Users,
        title: "Notre Équipe",
        description: "Des professionnels expérimentés et passionnés, dédiés à la réussite de vos projets."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Un engagement constant vers l'excellence et la satisfaction client dans tous nos domaines d'activité."
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        description: "À la pointe de la technologie et des meilleures pratiques pour des solutions d'avenir."
    }
];

export default function About() {
    return (
        <section id="about" className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Groupe Sahel</span>
                        </h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            Depuis notre création, nous nous positionnons comme un acteur majeur du développement économique au Sahel,
                            offrant une gamme complète de services dans les secteurs clés de l'économie.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-8 lg:grid-cols-2 mb-16">
                    {values.map((value, index) => (
                        <ScrollReveal
                            key={index}
                            animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                            delay={(`reveal-delay-${(index * 100 + 100)}`)}
                        >
                            <div className="flex h-full gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-amber-500">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900">
                                        <value.icon className="w-6 h-6 text-amber-600 dark:text-amber-300" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-scale">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
                        <h3 className="text-3xl font-bold mb-4">Votre Partenaire de Confiance</h3>
                        <p className="text-lg mb-6 text-amber-50">
                            Que ce soit pour vos besoins en technologie, construction, commerce ou énergie,
                            Groupe Sahel met son expertise à votre service pour concrétiser vos ambitions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 mt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">5+</div>
                                <div className="text-amber-100">Domaines d'Activité</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-amber-100">Satisfaction Client</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-amber-100">Support Disponible</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

