"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Monitor, Smartphone, Database, Cloud, Lock, Search } from 'lucide-react';

const services = [
    {
        title: "Développement Web",
        description: "Sites vitrines, e-commerce et applications web progressives (PWA) ultra-rapides et SEO-friendly.",
        icon: Monitor,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "hover:border-blue-500/50"
    },
    {
        title: "Applications Mobiles",
        description: "Applications natives iOS et Android fluides et performantes pour engager vos utilisateurs où qu'ils soient.",
        icon: Smartphone,
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "hover:border-amber-500/50"
    },
    {
        title: "Logiciels Sur Mesure",
        description: "Solutions logicielles métier (ERP, CRM) adaptées à vos processus internes pour optimiser votre productivité.",
        icon: Database,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "hover:border-emerald-500/50"
    },
    {
        title: "Cloud & DevOps",
        description: "Architecture serveur, déploiement automatisé et hébergement sécurisé pour une disponibilité maximale.",
        icon: Cloud,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "hover:border-purple-500/50"
    },
    {
        title: "Cybersécurité",
        description: "Audits de sécurité et protection de vos données sensibles contre les menaces numériques.",
        icon: Lock,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "hover:border-red-500/50"
    },
    {
        title: "SEO & Marketing Digital",
        description: "Stratégies de référencement naturel et campagnes publicitaires pour booster votre visibilité en ligne.",
        icon: Search,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "hover:border-cyan-500/50"
    }
];

export default function DigitalServices() {
    return (
        <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 rounded-full blur-[128px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-blue-500 uppercase mb-3">Notre Expertise</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Tout ce dont vous avez besoin pour réussir en ligne</h3>
                        <p className="text-slate-400 text-lg">
                            Nous combinons technologie de pointe et design créatif pour construire des solutions digitales qui font la différence.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation={index % 3 === 0 ? "reveal-left" : index % 3 === 1 ? "reveal-up" : "reveal-right"}
                            delay={(`reveal-delay-${((index % 6) * 100)}` as any)}
                        >
                            <div className={`h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 transition-all duration-300 group ${service.border} hover:-translate-y-2 hover:shadow-2xl hover:bg-slate-900`}>
                                <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className={`w-7 h-7 ${service.color}`} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
