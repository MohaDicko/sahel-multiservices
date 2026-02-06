import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Zap, Globe, Clock } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: "Expertise Locale",
        description: "Une connaissance approfondie des défis et opportunités spécifiques à la région du Sahel."
    },
    {
        icon: ShieldCheck,
        title: "Fiabilité & Sécurité",
        description: "Nous appliquons les standards les plus rigoureux pour garantir la sécurité de vos projets et données."
    },
    {
        icon: Zap,
        title: "Solutions Innovantes",
        description: "L'utilisation des technologies les plus récentes pour optimiser vos performances et votre croissance."
    },
    {
        icon: Clock,
        title: "Réactivité 24/7",
        description: "Une équipe dédiée disponible à tout moment pour vous accompagner et répondre à vos besoins urgents."
    }
];

export default function Features() {
    return (
        <section className="bg-slate-900 py-24 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">Pourquoi nous choisir ?</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            L'Excellence au service de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">réussite</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Nous combinons savoir-faire technique et agilité pour transformer vos visions en réalités concrètes.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className="h-full group p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800 transition-all duration-300 hover:border-amber-500/50 hover:-translate-y-2 shadow-xl">
                                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:rotate-6 transition-all duration-300">
                                    <feature.icon className="w-7 h-7 text-amber-500 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-scale" delay="reveal-delay-300">
                    <div className="mt-20 p-1 bg-gradient-to-r from-amber-500/20 via-slate-700/20 to-amber-500/20 rounded-3xl">
                        <div className="bg-slate-900/80 backdrop-blur-md rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-xl">
                                <h4 className="text-2xl font-bold text-white mb-4">Prêt à propulser votre activité ?</h4>
                                <p className="text-gray-400">Rejoignez les dizaines d'entreprises qui nous font confiance pour leurs projets les plus ambitieux.</p>
                            </div>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20 whitespace-nowrap"
                            >
                                Démarrer un projet
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

