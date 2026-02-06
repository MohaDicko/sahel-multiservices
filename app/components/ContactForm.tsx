"use client";
import ScrollReveal from './ScrollReveal';
import { Send, Phone, Mail, MapPin, Check } from 'lucide-react';
import { useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { sendEmail } from '../actions';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const pathname = usePathname();
    const [subject, setSubject] = useState('');

    useEffect(() => {
        if (pathname.includes('/digital')) setSubject('Demande de projet Digital');
        else if (pathname.includes('/commerce')) setSubject('Consultation Commerce & Négoce');
        else if (pathname.includes('/btp')) setSubject('Demande de devis BTP');
        else if (pathname.includes('/energie')) setSubject('Services Énergie & Pétrole');
        else setSubject('');
    }, [pathname]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);

        // Si le sujet est vide dans le champ (ce qui ne devrait pas arriver avec required), on prend celui du state
        if (!formData.get('subject')) {
            formData.set('subject', subject);
        }

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus('success');
            } else {
                console.error(result.error);
                setStatus('error'); // Vous pourriez ajouter un état d'erreur visuel
                alert("Erreur lors de l'envoi : " + result.error);
                setStatus('idle');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16">
                        <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">Contact</h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">projet</span>
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos ambitions.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info Items */}
                    <div className="space-y-8">
                        <ScrollReveal animation="reveal-left" delay="reveal-delay-100">
                            <div className="group flex items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors">
                                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Téléphones</p>
                                    <p className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">+223 74 13 20 32 / +223 82 57 55 55</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-left" delay="reveal-delay-200">
                            <div className="group flex items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors">
                                    <Mail className="w-6 h-6 text-amber-500 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <p className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">contact@sahel-multiservices.com</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-left" delay="reveal-delay-300">
                            <div className="group flex items-center p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300">
                                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors">
                                    <MapPin className="w-6 h-6 text-amber-500 group-hover:text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Localisation</p>
                                    <p className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">Niamana, Bamako, Mali</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal animation="reveal-right" delay="reveal-delay-200">
                        {status === 'success' ? (
                            <div className="bg-slate-800/50 p-10 rounded-3xl border border-green-500/30 text-center flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-10 h-10 text-green-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Message Envoyé !</h4>
                                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais (généralement sous 24h).
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors font-medium"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                            placeholder="Ex: Amadou Diallo"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                            placeholder="amadou@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Sujet</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows={4}
                                        name="message"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                        placeholder="Votre message ici..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed`}
                                >
                                    {status === 'sending' ? (
                                        <div className="flex items-center gap-3">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Envoi en cours...
                                        </div>
                                    ) : (
                                        <><Send className="w-5 h-5" /> Envoyer le message</>
                                    )}
                                </button>
                            </form>
                        )}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
