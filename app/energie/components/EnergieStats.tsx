"use client";
import React from 'react';
import Counter from '../../components/Counter';
import ScrollReveal from '../../components/ScrollReveal';

const stats = [
    { value: 50, suffix: "+", label: "Stations Partenaires" },
    { value: 1, suffix: "M+", label: "Litres Distribués / Mois" },
    { value: 0, label: "Incident Sécurité" },
    { value: 24, suffix: "h", label: "Délai de Livraison" },
];

export default function EnergieStats() {
    return (
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
            {/* Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} animation="reveal-scale" delay={(`reveal-delay-${index * 100}` as any)}>
                            <div className="p-4">
                                <div className="text-4xl md:text-5xl font-black mb-2 font-mono">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm font-bold text-blue-100 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
