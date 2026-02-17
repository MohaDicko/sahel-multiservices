"use client";
import React from 'react';
import ScrollReveal from '../../components/ScrollReveal';

const techStack = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"] },
    { category: "Mobile", items: ["React Native", "Flutter", "iOS Swift", "Android Kotlin"] },
    { category: "DevOps & Cloud", items: ["Docker", "AWS", "Google Cloud", "CI/CD Actions", "Vercel"] },
];

export default function DigitalStack() {
    return (
        <section className="py-32 bg-sahel-navy relative overflow-hidden border-y border-white/5">
            {/* Background Text */}
            <div className="absolute bottom-0 right-0 text-[10rem] font-black text-white/5 whitespace-nowrap pointer-events-none select-none tracking-tighter uppercase italic translate-y-12">
                MODERN TECH STACK
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">
                            Arsenal <span className="text-sahel-gold">Technologique</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-400 text-xl font-medium italic">Une stack de pointe pour des performances sans compromis.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {techStack.map((stack, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100}`)}>
                            <div className="glass rounded-[2.5rem] p-10 border-white/5 h-full hover:border-sahel-gold/40 transition-all duration-700 hover:-translate-y-4 group">
                                <h3 className="text-xl font-black text-sahel-gold mb-8 pb-4 border-b border-white/10 uppercase tracking-widest italic">{stack.category}</h3>
                                <ul className="space-y-4">
                                    {stack.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-300 font-medium text-lg italic group-hover:text-white transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sahel-gold/40 mr-4 group-hover:scale-150 group-hover:bg-sahel-gold transition-all duration-500"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

