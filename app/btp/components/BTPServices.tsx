"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Home, Building2, HardHat, Compass, Ruler, Truck } from 'lucide-react';

const services = [
    {
        title: "Construction Bâtiment",
        description: "Réalisation de bâtiments résidentiels, commerciaux et industriels, du gros œuvre aux finitions.",
        icon: Building2,
    },
    {
        title: "Génie Civil & TP",
        description: "Ouvrages d'art, ponts, assainissement et infrastructures routières durables.",
        icon: HardHat,
    },
    {
        title: "Rénovation & Réhabilitation",
        description: "Modernisation et remise aux normes de structures existantes pour leur donner une seconde vie.",
        icon: Home,
    },
    {
        title: "Études & Plans",
        description: "Conception architecturale, études de faisabilité et plans techniques détaillés.",
        icon: Ruler,
    },
    {
        title: "Topographie",
        description: "Relevés de terrain précis et implantations d'ouvrages par nos géomètres experts.",
        icon: Compass,
    },
    {
        title: "Location d'Engins",
        description: "Mise à disposition de matériel lourd (pelles, bulldozers, grues) avec opérateurs qualifiés.",
        icon: Truck,
    }
];

export default function BTPServices() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">Nos Compétences</h2>
                        <p className="text-slate-600 text-lg font-light">
                            Une maîtrise complète des métiers de la construction pour accompagner vos projets de A à Z.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 6) * 100)}` as any)}
                        >
                            <div className="group relative">
                                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-orange-500 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out"></div>
                                <div className="p-8 bg-slate-50 hover:bg-white border border-slate-100 relative z-10 transition-colors">
                                    <service.icon className="w-10 h-10 text-slate-700 mb-6 group-hover:text-orange-600 transition-colors" />
                                    <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wide">
                                        {service.title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
