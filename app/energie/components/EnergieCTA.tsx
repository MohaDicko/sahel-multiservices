"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { Phone, Mail } from 'lucide-react';

export default function EnergieCTA() {
    return (
        <section className="py-24 bg-sahel-navy relative overflow-hidden">
            {/* Gradient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sahel-bronze/10 rounded-full blur-[150px]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-sm p-12 md:p-16 rounded-[2rem] shadow-3xl">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
                            Besoin d&apos;un <br /><span className="text-sahel-bronze">Approvisionnement ?</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Qu&apos;il s&apos;agisse de combustibles industriels ou de solutions énergétiques globales, notre équipe logistique est disponible 24/7 pour traiter vos demandes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="tel:+22374132032"
                                className="px-10 py-5 bg-sahel-bronze hover:bg-orange-800 text-white font-bold text-lg rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-sahel-bronze/20 flex items-center justify-center gap-3"
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
