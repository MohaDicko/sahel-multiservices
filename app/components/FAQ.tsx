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
        answer: "Oui, Sahel Multiservices intervient sur l'ensemble du territoire national malien et peut également accompagner des projets dans la sous-région (Sénégal, Burkina Faso, Niger)."
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
        <section id="faq" className="bg-white dark:bg-gray-900 py-24">
            <div className="max-w-screen-md mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16">
                        <HelpCircle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                            Questions <span className="text-amber-500">Fréquentes</span>
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Tout ce que vous devez savoir pour démarrer votre collaboration avec nous.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}` as any)}
                        >
                            <div className="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-gray-50 dark:bg-gray-800/40"
                                >
                                    <span className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-amber-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 text-gray-600 dark:text-gray-400 bg-white dark:bg-transparent border-t border-gray-100 dark:border-gray-800 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                        Vous avez une autre question ?
                        <a href="#contact" className="ml-2 text-amber-600 dark:text-amber-500 font-bold hover:underline">Posez-la nous directement.</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
