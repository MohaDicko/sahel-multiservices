"use client";
import { HelpCircle, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        id: "item-1",
        question: "Quels sont les délais d'intervention pour le GPS Fleet ?",
        answer: "Nous intervenons généralement sous 24h à 48h après la validation de votre demande pour l'installation des boîtiers et la configuration de la plateforme de suivi."
    },
    {
        id: "item-2",
        question: "Proposez-vous des services en dehors de Bamako ?",
        answer: "Oui, Groupe Sahel intervient sur l'ensemble du territoire national malien et peut également accompagner des projets dans la sous-région (Sénégal, Burkina Faso, Niger)."
    },
    {
        id: "item-3",
        question: "Comment puis-je obtenir un devis personnalisé ?",
        answer: "C'est simple ! Vous pouvez nous contacter via notre formulaire en ligne, nous appeler directement ou passer par WhatsApp. Nos experts vous répondront avec une proposition chiffrée sous 24h."
    },
    {
        id: "item-4",
        question: "Assurez-vous la maintenance post-installation ?",
        answer: "Absolument. Qu'il s'agisse de solutions digitales, de systèmes GPS ou d'infrastructures énergétiques, nous proposons des contrats de maintenance pour garantir la pérennité de vos installations."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="bg-sahel-sand dark:bg-[#080C1A] py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-sahel-gold/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-screen-md mx-auto px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahel-gold/10 border border-sahel-gold/20 text-sahel-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-3.5 h-3.5" />
                            Expertise & Réponse
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-sahel-navy dark:text-white mb-6 uppercase font-display leading-tight">
                            Questions <span className="text-gradient-gold">Fréquentes</span>
                        </h2>
                        <div className="h-2 w-24 bg-sahel-gold mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(180,83,9,0.4)]"></div>
                        <p className="text-slate-600 dark:text-slate-400 text-xl font-medium max-w-2xl mx-auto italic">
                            Tout ce que vous devez savoir pour démarrer votre collaboration avec l'excellence sahélienne.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay={200}>
                    <Accordion className="w-full space-y-6">
                        {faqs.map((faq) => (
                            <AccordionItem 
                                key={faq.id} 
                                value={faq.id}
                                className="group border border-slate-200 dark:border-white/5 rounded-[2rem] bg-white dark:bg-white/5 px-8 transition-all duration-500 hover:border-sahel-gold/30 hover:shadow-2xl hover:shadow-sahel-gold/5 overflow-hidden"
                            >
                                <AccordionTrigger className="py-8 hover:no-underline text-left">
                                    <span className="text-xl md:text-2xl font-black tracking-tight text-sahel-navy dark:text-white group-data-[state=open]:text-sahel-gold transition-colors font-display uppercase">
                                        {faq.question}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                    <div className="pt-2 border-t border-slate-100 dark:border-white/5 mt-2">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up">
                    <div className="mt-24 text-center p-12 bg-white/40 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-200 dark:border-white/10 backdrop-blur-sm">
                        <div className="text-slate-600 dark:text-slate-300 text-lg font-bold">
                            Vous avez une demande spécifique ?
                            <a href="#contact" className="ml-3 text-sahel-gold font-black hover:text-sahel-bronze transition-all flex inline-flex items-center gap-3 group uppercase tracking-widest text-sm">
                                Contactez nos experts
                                <div className="w-10 h-10 rounded-full border border-sahel-gold/30 flex items-center justify-center group-hover:bg-sahel-gold group-hover:border-sahel-gold transition-all duration-500">
                                    <svg className="w-5 h-5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
