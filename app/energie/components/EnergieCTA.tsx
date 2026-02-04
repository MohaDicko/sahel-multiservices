"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { Phone, Mail } from 'lucide-react';

export default function EnergieCTA() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-12 md:p-16 rounded-[2rem] shadow-3xl">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            Besoin d'un <br /><span className="text-blue-500">Approvisionnement ?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Qu'il s'agisse de combustibles industriels ou de solutions énergétiques globales, notre équipe logistique est disponible 24/7 pour traiter vos demandes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="tel:+22374132032"
                                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3"
                            >
                                <Phone className="w-6 h-6" />
                                +223 74 13 20 32
                            </Link>
                            <Link
                                href="#contact"
                                className="px-10 py-5 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold text-lg rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                            >
                                <Mail className="w-6 h-6" />
                                Nous écrire
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
