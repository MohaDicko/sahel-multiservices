"use client";
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../../components/ScrollReveal';

const projects = [
    {
        title: "Résidence Les Palmiers",
        location: "Bamako, Mali",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Bâtiment"
    },
    {
        title: "Route Nationale RN4",
        location: "Koulikoro",
        image: "https://images.unsplash.com/photo-1541432490333-690225134633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Infrastructure"
    },
    {
        title: "Complexe Industriel Sahel",
        location: "Ségou",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        category: "Industrie"
    }
];

export default function BTPProjects() {
    return (
        <section id="projects" className="py-24 bg-sahel-navy">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 uppercase tracking-tight">Nos Réalisations</h2>
                            <p className="text-slate-400 font-light">Découvrez nos derniers chantiers livrés.</p>
                        </div>
                        <button className="hidden md:block px-8 py-3 bg-white/10 border border-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-sahel-bronze transition-colors">
                            Voir tous les projets
                        </button>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100}`)}>
                            <div className="group relative overflow-hidden bg-white/5 border border-white/10 shadow-lg">
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-sahel-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-sahel-gold text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                    <p className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-sahel-bronze"></span>
                                        {project.location}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className="text-center mt-12 md:hidden">
                    <button className="px-8 py-3 bg-white/10 border border-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-sahel-bronze transition-colors w-full">
                        Voir tous les projets
                    </button>
                </div>
            </div>
        </section>
    );
}

