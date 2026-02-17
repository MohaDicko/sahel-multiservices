"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Monitor, Smartphone, Database, Cloud, Lock, Search } from 'lucide-react';

const services = [
    {
        title: "Développement Web",
        description: "Sites vitrines, e-commerce et applications web progressives (PWA) ultra-rapides et SEO-friendly.",
        icon: Monitor,
        color: "text-sahel-gold",
        bg: "bg-sahel-gold/10",
        border: "hover:border-sahel-gold/50"
    },
    {
        title: "Applications Mobiles",
        description: "Applications natives iOS et Android fluides et performantes pour engager vos utilisateurs où qu'ils soient.",
        icon: Smartphone,
        color: "text-sahel-bronze",
        bg: "bg-sahel-bronze/10",
        border: "hover:border-sahel-bronze/50"
    },
    {
        title: "Logiciels Sur Mesure",
        description: "Solutions logicielles métier (ERP, CRM) adaptées au marché sahélien pour optimiser votre productivité.",
        icon: Database,
        color: "text-orange-300",
        bg: "bg-orange-300/10",
        border: "hover:border-orange-300/50"
    },
    {
        title: "Cloud & DevOps",
        description: "Architecture serveur, déploiement automatisé et hébergement sécurisé pour une disponibilité maximale.",
        icon: Cloud,
        color: "text-amber-200",
        bg: "bg-amber-200/10",
        border: "hover:border-amber-200/50"
    },
    {
        title: "Cybersécurité",
        description: "Audits de sécurité et protection de vos données sensibles contre les menaces numériques.",
        icon: Lock,
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "hover:border-red-400/50"
    },
    {
        title: "SEO & Marketing Digital",
        description: "Stratégies de référencement naturel et campagnes publicitaires pour booster votre visibilité en ligne.",
        icon: Search,
        color: "text-white",
        bg: "bg-white/10",
        border: "hover:border-white/50"
    }
];

export default function DigitalServices() {
    return (
        <section id="services" className="py-32 bg-sahel-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sahel-gold/5 rounded-full blur-[150px] animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sahel-bronze/5 rounded-full blur-[150px] animate-pulse-soft delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
                        <h2 className="text-sm font-black tracking-[0.4em] text-sahel-gold uppercase mb-6 italic">Notre Expertise Technologique</h2>
                        <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Ingénierie Digitale <span className="text-sahel-gold">Sans Limites</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-400 text-xl md:text-2xl font-medium italic leading-relaxed">
                            Nous fusionnons intuition créative et rigueur technique pour forger les outils numériques qui domineront votre marché.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 6) * 100)}`)}
                        >
                            <div className={`h-full p-12 rounded-[3rem] glass border-white/5 transition-all duration-700 group hover:border-sahel-gold/40 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(180,83,9,0.25)] flex flex-col`}>
                                <div className={`w-20 h-20 rounded-3xl ${service.bg} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl`}>
                                    <service.icon className={`w-10 h-10 ${service.color}`} />
                                </div>
                                <h4 className="text-2xl font-black text-white mb-5 group-hover:text-sahel-gold transition-colors tracking-tight uppercase italic">
                                    {service.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed font-medium italic text-lg mb-8 flex-1">
                                    {service.description}
                                </p>
                                <div className="w-12 h-1 bg-white/5 rounded-full group-hover:w-full group-hover:bg-sahel-gold transition-all duration-700"></div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

