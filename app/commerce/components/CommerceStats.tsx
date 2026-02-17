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
        <section className="py-24 bg-sahel-navy relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,9,0.1),transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="glass rounded-[4rem] border-white/5 p-12 md:p-20 shadow-3xl">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <ScrollReveal animation="reveal-scale" delay={(`reveal-delay-${index * 100}`)}>
                                        <div className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter italic group-hover:scale-110 transition-transform duration-500">
                                            {typeof stat.value === 'number' ? (
                                                <Counter end={stat.value} suffix={stat.suffix || ''} />
                                            ) : (
                                                stat.value
                                            )}
                                        </div>
                                        <div className="h-1 w-12 bg-sahel-gold mx-auto mb-5 rounded-full group-hover:w-20 transition-all duration-500"></div>
                                        <div className="text-xs md:text-sm font-black text-sahel-gold uppercase tracking-[0.3em] italic">{stat.label}</div>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

