"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function DigitalCTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-sahel-navy via-slate-900 to-black relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-sahel-bronze/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sahel-gold/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-scale">
                    <div className="max-w-4xl mx-auto bg-sahel-navy/50 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl shadow-black/50">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Prêt à digitaliser votre activité ?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Discutons de votre projet. Que ce soit une refonte complète ou une nouvelle idée, nous avons l'équipe pour la réaliser.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-sahel-gold hover:bg-amber-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-sahel-gold/20 flex items-center justify-center gap-3"
                            >
                                <MessageSquare className="w-5 h-5" />
                                Demander un devis gratuit
                            </Link>
                            <Link
                                href="/"
                                className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                <ArrowRight className="w-5 h-5" />
                                Retour à l'accueil
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
