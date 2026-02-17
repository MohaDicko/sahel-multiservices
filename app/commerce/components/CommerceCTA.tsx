"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function CommerceCTA() {
    return (
        <section className="py-32 bg-sahel-sand relative overflow-hidden">
            {/* Background dots */}
            <div className="absolute inset-0 bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className="max-w-5xl mx-auto bg-sahel-navy p-12 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden group">
                        {/* Interactive Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sahel-gold/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sahel-bronze/10 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000 delay-200"></div>

                        <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10 text-white tracking-tighter uppercase italic">
                            Besoin d&apos;une <br /><span className="text-sahel-gold underline decoration-sahel-gold/30 underline-offset-8">expertise import ?</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full relative z-10"></div>
                        <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-3xl mx-auto relative z-10 font-medium italic leading-relaxed">
                            Nos experts structurent votre logistique pour maximiser votre rentabilité. Recevez une cotation stratégique sous 24h.
                        </p>

                        <div className="relative z-10">
                            <Link
                                href="#contact"
                                className="inline-block px-12 py-5 bg-sahel-gold hover:bg-amber-400 text-sahel-navy font-black text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] uppercase tracking-widest"
                            >
                                Obtenir une cotation
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
