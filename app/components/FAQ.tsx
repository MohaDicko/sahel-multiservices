"use client";
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const faqs = [
    {
        question: "Quels sont les délais d'intervention pour le GPS Fleet ?",
        answer: "Nous intervenons généralement sous 24h à 48h après la validation de votre demande pour l'installation des boîtiers et la configuration de la plateforme de suivi."
    },
    {
        question: "Proposez-vous des services en dehors de Bamako ?",
        answer: "Oui, Groupe Sahel intervient sur l'ensemble du territoire national malien et peut également accompagner des projets dans la sous-région (Sénégal, Burkina Faso, Niger)."
    },
    {
        question: "Comment puis-je obtenir un devis personnalisé ?",
        answer: "C'est simple ! Vous pouvez nous contacter via notre formulaire en ligne, nous appeler directement ou passer par WhatsApp. Nos experts vous répondront avec une proposition chiffrée sous 24h."
    },
    {
        question: "Assurez-vous la maintenance post-installation ?",
        answer: "Absolument. Qu'il s'agisse de solutions digitales, de systèmes GPS ou d'infrastructures énergétiques, nous proposons des contrats de maintenance pour garantir la pérennité de vos installations."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="bg-sahel-sand dark:bg-slate-900/50 py-32 relative overflow-hidden">
            <div className="max-w-screen-md mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-20">
                        <div className="inline-block p-4 bg-sahel-gold/10 rounded-2xl mb-6">
                            <HelpCircle className="w-10 h-10 text-sahel-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-sahel-navy dark:text-white mb-6 uppercase tracking-tight">
                            Questions <span className="text-sahel-gold">Fréquentes</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-sahel-gold mx-auto mb-8 rounded-full"></div>
                        <p className="text-slate-600 dark:text-slate-400 text-xl italic font-medium">
                            Tout ce que vous devez savoir pour démarrer votre collaboration avec nous.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className="group border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden hover:border-sahel-gold/30 hover:shadow-2xl hover:shadow-sahel-gold/5 transition-all duration-500">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-8 text-left focus:outline-none bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-white/5 transition-all"
                                >
                                    <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${openIndex === index ? 'text-sahel-gold' : 'text-sahel-navy dark:text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-sahel-gold text-white rotate-180' : 'bg-slate-100 dark:bg-white/10 text-slate-400'}`}>
                                        <ChevronDown className="w-6 h-6" />
                                    </div>
                                </button>
                                <div className={`transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-8 pt-0 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 text-lg leading-relaxed font-medium">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-up">
                    <div className="mt-20 text-center p-10 bg-white/50 dark:bg-white/5 rounded-[2rem] border border-dashed border-slate-200 dark:border-white/10">
                        <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
                            Vous avez une autre question ?
                            <a href="#contact" className="ml-3 text-sahel-gold font-black hover:text-sahel-bronze transition-colors flex inline-flex items-center gap-2 group">
                                Posez-la nous directement
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

