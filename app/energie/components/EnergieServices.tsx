"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import { Droplets, Fuel, Zap, Factory, ShieldCheck, Truck } from 'lucide-react';

const services = [
    {
        title: "Approvisionnement Pétrolier",
        description: "Importation et fourniture de carburants (Essence, Gasoil, Jet A1) selon les standards internationaux.",
        icon: Fuel,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Solutions Énergétiques",
        description: "Installation de groupes électrogènes haute performance et solutions d'énergie hybride pour sites isolés.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Gestion de Dépôts",
        description: "Maintenance et exploitation d'installations de stockage de produits pétroliers sécurisées.",
        icon: Factory,
        color: "text-slate-400",
        bg: "bg-slate-400/10"
    },
    {
        title: "Lubrifiants Industriels",
        description: "Distribution de lubrifiants spécialisés pour optimiser la longévité de vos équipements industriels.",
        icon: Droplets,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    },
    {
        title: "Logistique Pétrolière",
        description: "Transport sécurisé de produits sensibles par camions-citernes dotés de systèmes de suivi en temps réel.",
        icon: Truck,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        title: "Sécurité & HSE",
        description: "Audits de conformité Environnementale, Santé et Sécurité pour les installations pétrolières.",
        icon: ShieldCheck,
        color: "text-red-500",
        bg: "bg-red-500/10"
    }
];

export default function EnergieServices() {
    return (
        <section id="services" className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-4">Notre Expertise</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise Complète en Hydrocarbures</h3>
                        <p className="text-slate-400 text-lg">
                            Nous fournissons l'énergie nécessaire pour faire tourner les industries et soutenir le développement économique régional.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 6) * 100)}` as any)}
                        >
                            <div className="group h-full p-8 rounded-2xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:bg-slate-800/60 shadow-lg">
                                <div className={`w-16 h-16 rounded-xl ${service.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon className={`w-8 h-8 ${service.color}`} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
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
