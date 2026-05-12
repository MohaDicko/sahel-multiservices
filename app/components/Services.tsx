import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { Code, Navigation, Handshake, ArrowUpRight, Sparkles } from 'lucide-react';

const services = [
    {
        title: "Sahel Tech",
        description: "Développement d'écosystèmes digitaux sur-mesure. Web, mobile et infrastructures cloud pour entreprises visionnaires.",
        icon: Code,
        link: "/digital",
        accent: "#3B82F6",
        badge: "Digital",
    },
    {
        title: "GPS Fleet Sahel",
        description: "Intelligence logistique temps réel. Sécurisation, géofencing et rapports analytiques avancés pour flottes critiques.",
        icon: Navigation,
        link: "http://gpsfleetsahel.com/",
        accent: "#10B981",
        badge: "Technologie",
    },
    {
        title: "Sahel Distribution",
        description: "Excellence en négoce international. Import-export et intermédiation stratégique sur les marchés mondiaux.",
        icon: Handshake,
        link: "/commerce",
        accent: "#F59E0B",
        badge: "Commerce",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-sahel-sand dark:bg-[#080C1A] py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sahel-gold/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-sahel-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-sm text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahel-gold/10 border border-sahel-gold/20 text-sahel-gold text-xs font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-4 h-4" />
                            Nos Expertises
                        </div>
                        <h2 className="mb-6 text-5xl lg:text-7xl font-black text-sahel-navy dark:text-white uppercase font-display leading-[0.9]">
                            Ce que nous <span className="text-gradient-gold">Bâtissons</span>
                        </h2>
                        <div className="h-2 w-24 bg-sahel-gold mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(180,83,9,0.5)]" />
                        <p className="text-xl font-medium text-slate-600 dark:text-slate-400 italic max-w-2xl mx-auto">
                            Des architectures robustes pour propulser l'excellence au cœur du Sahel.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ScrollReveal 
                            key={index} 
                            animation="reveal-up" 
                            delay={index * 150 + 100}
                        >
                            <div className="group h-full flex flex-col bg-white dark:bg-white/5 rounded-[2.5rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(180,83,9,0.25)] transition-all duration-700 border border-slate-100 dark:border-white/5 hover:border-sahel-gold/30 relative overflow-hidden p-10">
                                
                                {/* Hover background glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-sahel-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                
                                {/* Top Badge */}
                                <div className="flex justify-between items-start mb-12">
                                    <div 
                                        className="p-5 rounded-2xl w-fit group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-1000"
                                        style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}25` }}
                                    >
                                        <service.icon className="w-8 h-8" style={{ color: service.accent }} />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full" 
                                          style={{ background: `${service.accent}10`, color: service.accent, border: `1px solid ${service.accent}20` }}>
                                        {service.badge}
                                    </span>
                                </div>

                                {/* Numbering Watermark */}
                                <div className="absolute top-10 right-10 text-8xl font-black text-slate-50 dark:text-white/3 group-hover:text-sahel-gold/5 transition-colors duration-700 pointer-events-none select-none">
                                    0{index + 1}
                                </div>

                                <h3 className="text-3xl font-black tracking-tight text-sahel-navy dark:text-white group-hover:text-sahel-gold transition-colors duration-300 mb-5 font-display uppercase">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-12 flex-1 text-lg">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-8 border-t border-slate-50 dark:border-white/5">
                                    {service.link.startsWith('/') ? (
                                        <Link 
                                            href={service.link}
                                            className="inline-flex items-center gap-4 text-sm font-black text-sahel-navy dark:text-white hover:text-sahel-gold transition-all duration-300 group/btn uppercase tracking-widest"
                                        >
                                            <span>Explorer l'écosystème</span>
                                            <div className="w-10 h-10 rounded-full border-2 border-sahel-gold/30 flex items-center justify-center group-hover/btn:bg-sahel-gold group-hover/btn:border-sahel-gold transition-all duration-500 shadow-xl group-hover/btn:shadow-sahel-gold/30">
                                                <ArrowUpRight className="w-5 h-5 text-sahel-gold group-hover/btn:text-white transition-all duration-300" />
                                            </div>
                                        </Link>
                                    ) : (
                                        <a 
                                            href={service.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-4 text-sm font-black text-sahel-navy dark:text-white hover:text-sahel-gold transition-all duration-300 group/btn uppercase tracking-widest"
                                        >
                                            <span>Accéder à la plateforme</span>
                                            <div className="w-10 h-10 rounded-full border-2 border-sahel-gold/30 flex items-center justify-center group-hover/btn:bg-sahel-gold group-hover/btn:border-sahel-gold transition-all duration-500 shadow-xl group-hover/btn:shadow-sahel-gold/30">
                                                <ArrowUpRight className="w-5 h-5 text-sahel-gold group-hover/btn:text-white transition-all duration-300" />
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
