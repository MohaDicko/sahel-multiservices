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
        <section className="bg-sahel-navy py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,9,0.05),transparent_70%)] pointer-events-none"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-sahel-gold/10 rounded-full blur-3xl animate-pulse-soft"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24 lg:mb-32">
                        <h2 className="text-sahel-gold font-black tracking-[0.3em] uppercase text-sm mb-6">Innovation & Valeur</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase transition-colors duration-500">
                            Pourquoi choisir <span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-100 to-sahel-bronze">Groupe Sahel ?</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl italic font-medium leading-relaxed">
                            Nous fusionnons vision stratégique et excellence opérationnelle pour bâtir les leaders de demain.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className="h-full group p-10 glass rounded-[2.5rem] border-white/5 hover:border-sahel-gold transition-all duration-700 hover:-translate-y-4 shadow-3xl flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-sahel-gold transition-all duration-700 shadow-2xl group-hover:rotate-[360deg]">
                                    <feature.icon className="w-10 h-10 text-sahel-gold group-hover:text-sahel-navy transition-colors duration-500" />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-5 tracking-tight group-hover:text-sahel-gold transition-colors duration-300">
                                    {feature.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-scale" delay="reveal-delay-300">
                    <div className="mt-28 p-[2px] bg-gradient-to-r from-transparent via-sahel-gold/30 to-transparent rounded-[3rem]">
                        <div className="glass rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-sahel-gold/40 transition-all duration-700">
                            <div className="max-w-2xl text-center md:text-left">
                                <h4 className="text-3xl md:text-4xl font-black text-white mb-5 uppercase tracking-tight">Prêt à propulser votre activité ?</h4>
                                <p className="text-xl text-slate-400 font-medium italic">Rejoignez l'élite des entreprises qui ont choisi l'expertise Sahel pour leurs projets critiques.</p>
                            </div>
                            <a
                                href="#contact"
                                className="px-12 py-5 bg-sahel-gold hover:bg-amber-400 text-sahel-navy font-black rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] whitespace-nowrap uppercase tracking-widest text-lg"
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

