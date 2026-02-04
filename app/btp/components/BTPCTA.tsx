"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { PhoneCall } from 'lucide-react';

export default function BTPCTA() {
    return (
        <section className="py-24 bg-orange-600 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-scale">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tight">
                            Votre Vision, <br /> Notre Construction
                        </h2>
                        <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto font-medium">
                            Confiez vos projets à une équipe d'experts reconnus. Respect des délais, qualité des matériaux et sécurité garantie.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="#contact"
                                className="px-10 py-5 bg-white text-orange-600 font-bold text-lg uppercase tracking-wide transition-transform transform hover:scale-105 shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3"
                            >
                                <PhoneCall className="w-5 h-5" />
                                Discuter avec un ingénieur
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
