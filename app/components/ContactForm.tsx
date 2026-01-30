"use client";
import ScrollReveal from './ScrollReveal';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulation d'envoi
        setTimeout(() => setStatus('success'), 1500);
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

                    {/* Form */}
                    <ScrollReveal animation="reveal-right" delay="reveal-delay-200">
                        <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Ex: Amadou Diallo"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
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
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                    placeholder="Comment pouvons-nous vous aider ?"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    required
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                                    placeholder="Votre message ici..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 ${status === 'success' ? 'bg-green-500 text-white' : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20'
                                    }`}
                            >
                                {status === 'idle' && <><Send className="w-5 h-5" /> Envoyer le message</>}
                                {status === 'sending' && <>Envoi en cours...</>}
                                {status === 'success' && <>Message envoyé avec succès !</>}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
