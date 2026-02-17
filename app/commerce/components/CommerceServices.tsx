"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { ShoppingCart, Truck, Factory, Wheat, Briefcase, Anchor } from 'lucide-react';

const services = [
    {
        title: "Import-Export",
        description: "Gestion complète de la chaîne d'approvisionnement : sourcing, transport, dédouanement et livraison finale.",
        icon: Anchor,
    },
    {
        title: "Distribution Alimentaire",
        description: "Fourniture de denrées alimentaires de première nécessité (riz, sucre, huile) et produits agroalimentaires transformés.",
        icon: Wheat,
    },
    {
        title: "Équipements Industriels",
        description: "Négoce de machines, pièces de rechange et équipements pour les secteurs minier, infrastructure et manufacturier.",
        icon: Factory,
    },
    {
        title: "Logistique & Transport",
        description: "Solutions de fret multimodal optimisées pour réduire les coûts et les délais d'acheminement.",
        icon: Truck,
    },
    {
        title: "Matériaux de Construction",
        description: "Importation et distribution de ciment, fer à béton, et matériaux de finition de haute qualité.",
        icon: Briefcase,
    },
    {
        title: "Centrale d'Achat",
        description: "Service d'approvisionnement délégué pour entreprises et institutions, garantissant les meilleurs prix du marché.",
        icon: ShoppingCart,
    }
];

export default function CommerceServices() {
    return (
        <section id="services" className="py-32 bg-sahel-sand relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-0 w-full text-[12rem] font-black text-sahel-navy/5 whitespace-nowrap pointer-events-none select-none -translate-y-1/2 opacity-50 tracking-tighter uppercase italic">
                DISTRIBUTION COMMERCE LOGISTIQUE
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-4xl mx-auto mb-24 lg:mb-32">
                        <h2 className="text-sm font-black tracking-[0.4em] text-sahel-gold uppercase mb-6 italic">Flux Stratégiques</h2>
                        <h3 className="text-4xl md:text-7xl font-black text-sahel-navy mb-8 tracking-tighter uppercase italic">
                            Maîtriser les <span className="text-sahel-gold">Échanges</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-600 text-xl md:text-2xl font-medium italic leading-relaxed">
                            Nous orchestrons la complexité du commerce mondial pour offrir fluidité, sécurité et rentabilité à vos importations et exportations.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 6) * 100)}`)}
                        >
                            <div className="h-full group p-12 bg-white rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(15,23,42,0.08)] hover:shadow-[0_40px_80px_-15px_rgba(180,83,9,0.2)] transition-all duration-700 border border-transparent hover:border-sahel-gold/30 hover:-translate-y-4 flex flex-col">
                                <div className="w-24 h-24 bg-sahel-sand rounded-3xl flex items-center justify-center mb-10 group-hover:bg-sahel-gold group-hover:rotate-12 transition-all duration-1000 shadow-xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                                    <service.icon className="w-10 h-10 text-sahel-navy relative z-10 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-2xl font-black text-sahel-navy mb-5 tracking-tight uppercase italic group-hover:text-sahel-gold transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-slate-500 leading-relaxed font-medium italic text-lg mb-8 flex-1">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-3 text-sahel-gold text-xs font-black uppercase tracking-widest italic opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                                    <span>En savoir plus</span>
                                    <div className="h-1 w-8 bg-sahel-gold rounded-full"></div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

