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
        description: "Négoce de machines, pièces de rechange et équipements pour les secteurs minier, BTP et manufacturier.",
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
        <section id="services" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-amber-600 uppercase mb-3">Nos Activités</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Expertise Commerciale Sans Frontières</h3>
                        <p className="text-gray-600 text-lg">
                            Nous simplifions les échanges complexes pour vous permettre de vous concentrer sur votre cœur de métier.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 6) * 100)}`)}
                        >
                            <div className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-amber-500 group">
                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
                                    <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed">
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

