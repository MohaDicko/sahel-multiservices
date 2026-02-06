"use client";
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../../components/ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Plateforme E-Commerce",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Solution complète de vente en ligne avec paiement mobile intégré (Orange Money, Moov).",
        tech: ["Next.js", "Stripe", "PostgreSQL"]
    },
    {
        title: "App de Gestion de Flotte",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Application mobile de suivi GPS en temps réel pour une entreprise de logistique locale.",
        tech: ["React Native", "Firebase", "Google Maps"]
    },
    {
        title: "Système de Gestion R.H.",
        category: "SaaS / Logiciel",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Dashboard administratif pour la gestion du personnel, paie et congés.",
        tech: ["Vue.js", "Laravel", "MySQL"]
    }
];

export default function DigitalProjects() {
    return (
        <section id="portfolio" className="py-24 bg-sahel-navy">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-sm font-bold tracking-widest text-sahel-gold uppercase mb-3">Nos Réalisations</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">Projets Récents</h3>
                        </div>
                        <button className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                            Voir tout le portfolio
                        </button>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100 + 100}`)}>
                            <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-sahel-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="relative h-64 overflow-hidden">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-sahel-navy/40 group-hover:bg-sahel-navy/10 transition-colors z-10"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-sahel-bronze/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sahel-gold transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-slate-400 bg-sahel-navy border border-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                        <button className="flex items-center gap-2 text-sm text-white hover:text-sahel-gold transition-colors font-medium">
                                            Voir détails <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

