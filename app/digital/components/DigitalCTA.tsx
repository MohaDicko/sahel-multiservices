"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function DigitalCTA() {
    return (
        <section className="py-32 bg-sahel-navy relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sahel-gold/5 rounded-full blur-[150px] animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sahel-bronze/5 rounded-full blur-[150px] animate-pulse-soft delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-scale">
                    <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[4rem] border-white/5 shadow-3xl hover:border-sahel-gold/30 transition-all duration-700">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Prêt à digitaliser <br /><span className="text-sahel-gold underline decoration-sahel-gold/30 underline-offset-8">votre activité ?</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto font-medium italic leading-relaxed">
                            Discutons ensemble de la stratégie qui propulsera votre entreprise au sommet du digital. Aucun projet n&apos;est trop ambitieux pour Groupe Sahel.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                            <Link
                                href="#contact"
                                className="px-12 py-5 bg-sahel-gold hover:bg-amber-400 text-sahel-navy rounded-2xl font-black text-lg transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] flex items-center justify-center gap-4 uppercase tracking-widest"
                            >
                                <MessageSquare className="w-6 h-6" />
                                <span>Lancer le projet</span>
                            </Link>
                            <Link
                                href="/"
                                className="px-12 py-5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-lg transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 uppercase tracking-widest backdrop-blur-md"
                            >
                                <ArrowRight className="w-6 h-6" />
                                <span>L'Accueil</span>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
