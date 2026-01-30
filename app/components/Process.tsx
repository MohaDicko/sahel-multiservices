import ScrollReveal from './ScrollReveal';
import { Search, PenTool, Rocket, Headphones } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: "Analyse & Audit",
        description: "Nous étudions vos besoins spécifiques et analysons les opportunités pour votre projet.",
        color: "bg-blue-500"
    },
    {
        icon: PenTool,
        title: "Conception & Étude",
        description: "Élaboration d'une stratégie sur-mesure et planification détaillée de la réalisation.",
        color: "bg-amber-500"
    },
    {
        icon: Rocket,
        title: "Exécution & Déploiement",
        description: "Mise en œuvre de la solution avec une rigueur technique et un suivi de qualité.",
        color: "bg-green-500"
    },
    {
        icon: Headphones,
        title: "Support & Accompagnement",
        description: "Un suivi post-projet pour garantir la pérennité et l'évolution de vos solutions.",
        color: "bg-purple-500"
    }
];

export default function Process() {
    return (
        <section className="bg-white dark:bg-gray-900 py-24 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-3">Notre Méthodologie</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Un processus maîtrisé pour des <span className="text-amber-500">résultats concrets</span>
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                            Nous suivons une démarche structurée pour garantir la réussite de chaque mission que vous nous confiez.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollReveal
                                key={index}
                                animation="reveal-up"
                                delay={(`reveal-delay-${index * 100 + 100}` as any)}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-sm font-bold text-gray-900 dark:text-white border border-gray-100 dark:border-gray-700">
                                            0{index + 1}
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`w-20 h-20 rounded-2xl ${step.color} text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                                            <step.icon className="w-10 h-10" />
                                        </div>

                                        {/* Connecting dot for mobile/tablet behavior (visual) */}
                                        <div className="lg:hidden mt-4 w-1 h-8 bg-gray-100 dark:bg-gray-800 mx-auto"></div>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        {step.title}
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
