"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Check, Zap, ShieldCheck, Globe, Rocket } from 'lucide-react';

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
        <section id="pricing" className="py-24 bg-sahel-navy relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sahel-bronze/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-[0.3em] text-sahel-gold uppercase mb-4">Tarification</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Packs Digitaux</h3>
                        <p className="text-slate-400 text-lg">
                            Des solutions clés en main adaptées au marché malien pour digitaliser votre activité avec un excellent rapport qualité-prix.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packs.map((pack, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className={`relative h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${pack.popular
                                ? 'bg-white/10 border-sahel-gold/50 shadow-2xl shadow-sahel-gold/10'
                                : 'bg-white/5 border-white/10 hover:border-sahel-bronze/30 hover:bg-white/10'
                                }`}>
                                {pack.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sahel-gold text-sahel-navy text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                                        Plus Populaire
                                    </div>
                                )}

                                <div className="mb-8">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pack.color === 'bronze' ? 'bg-sahel-bronze/10 text-sahel-bronze' :
                                        pack.color === 'gold' ? 'bg-sahel-gold/10 text-sahel-gold' :
                                            'bg-white/10 text-white'
                                        }`}>
                                        <pack.icon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{pack.name}</h4>
                                    <p className="text-slate-400 text-sm">{pack.tagline}</p>
                                </div>

                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{pack.price}</span>
                                    <span className="text-xl font-bold text-slate-400">{pack.currency}</span>
                                </div>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {pack.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <Check className={`w-5 h-5 shrink-0 ${pack.popular ? 'text-sahel-gold' : 'text-sahel-bronze'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${pack.popular
                                        ? 'bg-sahel-gold hover:bg-amber-600 text-sahel-navy shadow-lg shadow-sahel-gold/20'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                        }`}
                                >
                                    Choisir ce pack
                                </a>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-up">
                    <div className="mt-16 p-8 rounded-2xl bg-sahel-bronze/5 border border-sahel-bronze/20 text-center">
                        <p className="text-slate-300">
                            Besoin d'un projet spécifique ou d'une application sur mesure ?
                            <a href="#contact" className="text-sahel-gold font-bold hover:underline ml-2">Contactez-nous pour un devis personnalisé.</a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

