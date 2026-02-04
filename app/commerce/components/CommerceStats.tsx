"use client";
import React from 'react';
import Counter from '../../components/Counter';
import ScrollReveal from '../../components/ScrollReveal';

const stats = [
    { value: 15, suffix: "+", label: "Pays Partenaires" },
    { value: 50, suffix: "k", label: "Tonnes Importées / An" },
    { value: 100, suffix: "%", label: "Satisfaction Client" },
    { value: "24/7", label: "Support Logistique", isStatic: true },
];

export default function CommerceStats() {
    return (
        <section className="py-20 bg-amber-600 text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-amber-500/30">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} animation="reveal-scale" delay={(`reveal-delay-${index * 100}` as any)}>
                            <div className="p-4">
                                <div className="text-4xl md:text-5xl font-extrabold mb-2">
                                    {typeof stat.value === 'number' ? (
                                        <Counter end={stat.value} suffix={stat.suffix} />
                                    ) : (
                                        stat.value
                                    )}
                                </div>
                                <div className="text-sm md:text-base font-medium text-amber-100 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
