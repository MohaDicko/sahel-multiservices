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
        <section className="bg-sahel-sand dark:bg-slate-900/40 py-32 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sahel-gold/20 to-transparent"></div>
            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24 lg:mb-32">
                        <h2 className="text-sahel-gold font-black tracking-[0.3em] uppercase text-sm mb-6">Notre Méthodologie</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-sahel-navy dark:text-white mb-8 tracking-tighter uppercase transition-colors duration-500">
                            Un cycle d'excellence <span className="text-sahel-gold">maîtrisé</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl italic font-medium leading-relaxed">
                            De la vision initiale à la réalisation concrète, nous suivons un protocole rigoureux garantissant un succès mesurable.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-white/5 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollReveal
                                key={index}
                                animation="reveal-up"
                                delay={(`reveal-delay-${index * 100 + 100}`)}
                            >
                                <div className="flex flex-col items-center text-center group">
                                    <div className="relative mb-12">
                                        {/* Step Number Badge */}
                                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl glass shadow-2xl flex items-center justify-center text-lg font-black text-sahel-gold border border-sahel-gold/20 z-20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                                            0{index + 1}
                                        </div>

                                        {/* Icon Container */}
                                        <div className={`w-28 h-28 rounded-[2rem] ${step.color} text-white flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)] relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                                            <step.icon className="w-14 h-14 relative z-10" />
                                        </div>

                                        {/* Connecting dot for mobile/tablet behavior (visual) */}
                                        <div className="lg:hidden mt-8 w-1 h-12 bg-slate-200 dark:bg-white/10 mx-auto"></div>
                                    </div>

                                    <h4 className="text-2xl font-black text-sahel-navy dark:text-white mb-5 tracking-tight group-hover:text-sahel-gold transition-colors duration-300">
                                        {step.title}
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">
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

