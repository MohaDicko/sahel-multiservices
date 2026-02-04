"use client";
import React from 'react';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export default function CommerceCTA() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className="max-w-4xl mx-auto bg-gray-900 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                        {/* Abstract Shapes */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
                            Besoin d'un devis pour <br /> votre prochain import ?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                            Nos experts sont prêts à vous fournir une cotation précise et compétitive sous 24h.
                        </p>

                        <div className="relative z-10">
                            <Link
                                href="#contact"
                                className="inline-block px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-xl transition-transform transform hover:scale-105 shadow-lg shadow-amber-500/25"
                            >
                                Demander une cotation
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
