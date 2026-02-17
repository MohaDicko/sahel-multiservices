"use client";
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../../components/ScrollReveal';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: "Sahel E-Store Pro",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Écosystème de vente omnicanal avec intégration native des paiements mobiles sahéliens.",
        tech: ["Next.js", "Tailwind", "PostgreSQL"]
    },
    {
        title: "GPS Fleet Intel",
        category: "Mobile & IOT",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Intelligence logistique en temps réel via capteurs IOT et interface mobile haute performance.",
        tech: ["React Native", "Firebase", "Node.js"]
    },
    {
        title: "Sahara RH Core",
        category: "SaaS / Logiciel",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Architecture de gestion du capital humain optimisée pour les structures multi-sites.",
        tech: ["Vue.js", "TypeScript", "Laravel"]
    }
];

export default function DigitalProjects() {
    return (
        <section id="portfolio" className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-20 left-0 w-full text-[12rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none opacity-50 tracking-tighter uppercase italic">
                PORTFOLIO INNOVATION CREATIVITE
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                        <div className="max-w-2xl text-center lg:text-left">
                            <h2 className="text-sm font-black tracking-[0.4em] text-sahel-gold uppercase mb-6 italic">Nos Réalisations</h2>
                            <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Études de <span className="text-sahel-gold">Cas</span></h3>
                        </div>
                        <button className="group px-10 py-4 rounded-2xl border-2 border-white/10 text-white font-black hover:bg-white hover:text-sahel-navy transition-all duration-700 uppercase tracking-widest text-sm italic flex items-center gap-4">
                            <span>Voir l'intégralité</span>
                            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        </button>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100 + 100}`)}>
                            <div className="group rounded-[3.5rem] overflow-hidden glass border-white/5 hover:border-sahel-gold/40 transition-all duration-1000 hover:-translate-y-6 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                                <div className="relative h-80 overflow-hidden">
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-sahel-navy/60 group-hover:bg-sahel-navy/0 transition-all duration-1000 z-10"></div>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-1000 group-hover:rotate-1"
                                    />
                                    <div className="absolute top-8 left-8 z-20">
                                        <span className="px-6 py-2 bg-sahel-gold text-sahel-navy text-xs font-black rounded-full shadow-2xl uppercase tracking-[0.2em] italic">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h4 className="text-3xl font-black text-white mb-4 group-hover:text-sahel-gold transition-colors tracking-tight uppercase italic">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-400 text-lg mb-8 line-clamp-2 font-medium italic">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-black text-sahel-gold/80 bg-sahel-gold/5 border border-sahel-gold/20 px-4 py-1.5 rounded-xl uppercase tracking-widest italic">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-8 border-t border-white/5">
                                        <button className="group/details flex items-center gap-4 text-sm font-black text-white hover:text-sahel-gold transition-all duration-300 uppercase tracking-widest italic">
                                            <span>Détails du projet</span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/details:bg-sahel-gold group-hover/details:border-sahel-gold group-hover/details:text-sahel-navy transition-all duration-500">
                                                <ArrowRight className="w-5 h-5 group-hover/details:translate-x-1 transition-transform" />
                                            </div>
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

