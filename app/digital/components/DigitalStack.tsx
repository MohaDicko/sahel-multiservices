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
        <section className="py-20 bg-sahel-navy border-y border-white/5">
            <div className="container mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Technologies Maîtrisées</h2>
                        <p className="text-slate-400">Une stack technique moderne et performante pour des résultats durables.</p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {techStack.map((stack, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 100}`)}>
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-full hover:border-sahel-gold/30 transition-colors">
                                <h3 className="text-lg font-bold text-sahel-gold mb-6 pb-2 border-b border-white/10">{stack.category}</h3>
                                <ul className="space-y-3">
                                    {stack.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-300 font-medium">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sahel-bronze mr-3"></span>
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

