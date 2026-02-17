"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Check, Zap, ShieldCheck, Globe, Rocket, ArrowRight } from 'lucide-react';

const packs = [
    {
        name: "Pack Vitrine",
        tagline: "Présence professionnelle garantie",
        price: "250.000",
        currency: "FCFA",
        period: "",
        icon: Globe,
        color: "bronze",
        features: [
            "Site Web Moderne (5 pages)",
            "Optimisé Mobile & PC",
            "Hébergement & Domaine (1 an)",
            "Emails Professionnels",
            "Sécurité SSL incluse",
            "Support technique 6 mois"
        ],
        popular: false
    },
    {
        name: "Pack Business",
        tagline: "L'outil de croissance par excellence",
        price: "550.000",
        currency: "FCFA",
        period: "",
        icon: Zap,
        color: "gold",
        features: [
            "Site Dynamique (15 pages)",
            "Gestion des Actualités/Blog",
            "Référencement local (Google Maps)",
            "Optimisation SEO avancée",
            "Suivi des statistiques (Analytics)",
            "Maintenance & Support 12 mois",
            "Formation à l'administration"
        ],
        popular: true
    },
    {
        name: "Pack E-Commerce",
        tagline: "Votre boutique ouverte 24/7",
        price: "1.200.000",
        currency: "FCFA",
        period: "",
        icon: Rocket,
        color: "white",
        features: [
            "Boutique en ligne Illimitée",
            "Paiements Orange/Moov Money",
            "Gestion des stocks & Commandes",
            "Système de facturation auto",
            "Stratégie de vente digitale",
            "Formation E-commerce approfondie",
            "Support Prioritaire 24/7"
        ],
        popular: false
    }
];

export default function DigitalPricing() {
    return (
        <section id="pricing" className="py-32 bg-sahel-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sahel-bronze/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sahel-gold/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft delay-700"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-sm font-black tracking-[0.4em] text-sahel-gold uppercase mb-6 italic">Investissement Stratégique</h2>
                        <h3 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Nos Packs <span className="text-sahel-gold">Digitaux</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-400 text-xl md:text-2xl font-medium italic leading-relaxed">
                            Des solutions de haute précision conçues pour dynamiser votre présence et démultiplier votre impact commercial au Sahel.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {packs.map((pack, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className={`relative h-full flex flex-col p-12 rounded-[3.5rem] glass transition-all duration-1000 group hover:-translate-y-6 ${pack.popular
                                ? 'border-sahel-gold/50 shadow-[0_40px_80px_-15px_rgba(180,83,9,0.35)]'
                                : 'border-white/5 hover:border-sahel-bronze/40 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)]'
                                }`}>
                                {pack.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-sahel-gold text-sahel-navy text-xs font-black px-8 py-2 rounded-full uppercase tracking-[0.2em] italic shadow-2xl">
                                        Solution Recommandée
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-2xl transition-transform duration-700 group-hover:rotate-12 ${pack.color === 'bronze' ? 'bg-sahel-bronze/20 text-sahel-bronze' :
                                        pack.color === 'gold' ? 'bg-sahel-gold/20 text-sahel-gold' :
                                            'bg-white/10 text-white'
                                        }`}>
                                        <pack.icon className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-3xl font-black text-white mb-3 tracking-tight uppercase italic">{pack.name}</h4>
                                    <p className="text-slate-400 text-lg font-medium italic">{pack.tagline}</p>
                                </div>

                                <div className="mb-10 flex items-baseline gap-2">
                                    <span className="text-4xl md:text-6xl font-black text-white italic tracking-tighter">{pack.price}</span>
                                    <span className="text-xl md:text-2xl font-black text-sahel-gold uppercase italic">{pack.currency}</span>
                                </div>

                                <ul className="space-y-5 mb-12 flex-grow">
                                    {pack.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-4 text-slate-300 text-lg font-medium italic">
                                            <div className={`mt-1.5 w-5 h-5 shrink-0 rounded-full flex items-center justify-center ${pack.popular ? 'bg-sahel-gold/20 text-sahel-gold' : 'bg-white/10 text-slate-400'}`}>
                                                <Check className="w-3 h-3 stroke-[4]" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full py-5 rounded-2xl font-black text-center transition-all duration-500 uppercase tracking-widest text-sm italic ${pack.popular
                                        ? 'bg-sahel-gold hover:bg-amber-400 text-sahel-navy shadow-[0_20px_50px_rgba(180,83,9,0.3)] transform hover:scale-105'
                                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'
                                        }`}
                                >
                                    <span>Demander ce pack</span>
                                </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-up">
                    <div className="mt-24 p-12 rounded-[3.5rem] glass border-sahel-bronze/20 text-center max-w-5xl mx-auto shadow-2xl">
                        <p className="text-slate-300 text-xl font-medium italic mb-8">
                            Un besoin spécifique, une infrastructure complexe ou un projet de grande envergure ?
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-4 text-sahel-gold font-black text-2xl uppercase tracking-widest italic group hover:text-amber-400 transition-colors"
                        >
                            <span>Consulter nos architectes digitaux</span>
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

