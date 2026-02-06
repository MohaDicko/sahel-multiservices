"use client";
import React from 'react';
import Counter from '../../components/Counter';
import ScrollReveal from '../../components/ScrollReveal';

const stats = [
    { value: 10, suffix: "+", label: "Années d'Expérience" },
    { value: 150, suffix: "+", label: "Projets Livrés" },
    { value: 50, suffix: "+", label: "Experts Qualifiés" },
    { value: 0, label: "Accidents Majeurs" },
];

export default function BTPStats() {
    return (
        <section className="py-24 bg-sahel-navy bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] text-white relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100}`)}>
                            <div className="text-center relative">
                                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sahel-gold to-sahel-bronze mb-2 font-mono">
                                    <Counter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="h-1 w-12 bg-sahel-bronze/50 mx-auto mb-4"></div>
                                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

