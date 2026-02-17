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
        else setSubject('');
    }, [pathname]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        if (!formData.get('subject')) {
            formData.set('subject', subject);
        }

        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus('success');
            } else {
                console.error(result.error);
                setStatus('error');
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
        <section id="contact" className="py-32 bg-sahel-navy text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sahel-gold/10 rounded-full blur-[150px] animate-pulse-soft pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sahel-bronze/10 rounded-full blur-[120px] animate-pulse-soft delay-1000 pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24">
                        <h2 className="text-sahel-gold font-black tracking-[0.3em] uppercase text-sm mb-6">Contactez-nous</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase transition-colors duration-500">
                            Donnez vie à vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-100 to-sahel-bronze">ambitions</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl italic font-medium">
                            Notre équipe d'experts est à votre écoute pour transformer vos idées en succès concrets.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Info Items */}
                    <div className="space-y-10">
                        <ScrollReveal animation="reveal-left" delay="reveal-delay-100">
                            <div className="group flex items-center p-8 glass rounded-[2rem] border-white/5 hover:border-sahel-gold transition-all duration-700 hover:-translate-x-2">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mr-8 group-hover:bg-sahel-gold transition-all duration-500 shadow-xl">
                                    <Phone className="w-8 h-8 text-sahel-gold group-hover:text-sahel-navy" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-sahel-gold uppercase tracking-widest mb-2 opacity-70">Appelez-nous</p>
                                    <p className="text-2xl font-black text-white group-hover:text-sahel-gold transition-colors tracking-tight">+223 74 13 20 32</p>
                                    <p className="text-lg text-slate-400">+223 82 57 55 55</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-left" delay="reveal-delay-200">
                            <div className="group flex items-center p-8 glass rounded-[2rem] border-white/5 hover:border-sahel-gold transition-all duration-700 hover:-translate-x-2">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mr-8 group-hover:bg-sahel-gold transition-all duration-500 shadow-xl">
                                    <Mail className="w-8 h-8 text-sahel-gold group-hover:text-sahel-navy" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-sahel-gold uppercase tracking-widest mb-2 opacity-70">Email direct</p>
                                    <p className="text-2xl font-black text-white group-hover:text-sahel-gold transition-colors tracking-tight lowercase">contact@sahel-multiservices.com</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="reveal-left" delay="reveal-delay-300">
                            <div className="group flex items-center p-8 glass rounded-[2rem] border-white/5 hover:border-sahel-gold transition-all duration-700 hover:-translate-x-2">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mr-8 group-hover:bg-sahel-gold transition-all duration-500 shadow-xl">
                                    <MapPin className="w-8 h-8 text-sahel-gold group-hover:text-sahel-navy" />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-sahel-gold uppercase tracking-widest mb-2 opacity-70">Siège social</p>
                                    <p className="text-2xl font-black text-white group-hover:text-sahel-gold transition-colors tracking-tight uppercase">Niamana, Bamako, Mali</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal animation="reveal-right" delay="reveal-delay-200">
                        {status === 'success' ? (
                            <div className="glass p-12 md:p-16 rounded-[3rem] border-green-500/30 text-center flex flex-col items-center justify-center min-h-[500px] animate-scale-in">
                                <div className="w-24 h-24 bg-green-500/20 rounded-3xl flex items-center justify-center mb-8 animate-bounce">
                                    <Check className="w-12 h-12 text-green-500" />
                                </div>
                                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Message Transmis !</h4>
                                <p className="text-slate-400 mb-12 text-lg font-medium max-w-sm mx-auto">
                                    Merci pour votre confiance. Nos experts analysent votre demande et vous répondront sous 24h.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all font-black uppercase tracking-widest shadow-xl"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass p-10 md:p-14 rounded-[3rem] border-white/5 shadow-3xl hover:border-sahel-gold/30 transition-all duration-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="group">
                                        <label className="block text-xs font-black text-sahel-gold uppercase tracking-widest mb-3 opacity-70 group-focus-within:opacity-100 transition-opacity">Votre Nom</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-sahel-gold focus:ring-4 focus:ring-sahel-gold/10 transition-all text-lg"
                                            placeholder="Ex: Amadou Diallo"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-sahel-gold uppercase tracking-widest mb-3 opacity-70 group-focus-within:opacity-100 transition-opacity">Votre Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-sahel-gold focus:ring-4 focus:ring-sahel-gold/10 transition-all text-lg"
                                            placeholder="amadou@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-8 group">
                                    <label className="block text-xs font-black text-sahel-gold uppercase tracking-widest mb-3 opacity-70 group-focus-within:opacity-100 transition-opacity">Sujet de votre demande</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-sahel-gold focus:ring-4 focus:ring-sahel-gold/10 transition-all text-lg"
                                        placeholder="Ex: Demande de projet Digital"
                                    />
                                </div>
                                <div className="mb-12 group">
                                    <label className="block text-xs font-black text-sahel-gold uppercase tracking-widest mb-3 opacity-70 group-focus-within:opacity-100 transition-opacity">Message détaillé</label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:outline-none focus:border-sahel-gold focus:ring-4 focus:ring-sahel-gold/10 transition-all resize-none text-lg"
                                        placeholder="Décrivez-nous votre projet..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className={`w-full py-5 rounded-2xl font-black text-xl uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500 transform active:scale-95 bg-sahel-gold hover:bg-amber-400 text-sahel-navy shadow-[0_20px_50px_rgba(180,83,9,0.3)] disabled:opacity-70 disabled:cursor-not-allowed group/submit`}
                                >
                                    {status === 'sending' ? (
                                        <div className="flex items-center gap-4">
                                            <svg className="animate-spin h-6 w-6 text-sahel-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Transmission...
                                        </div>
                                    ) : (
                                        <>
                                            <span>Lancer le projet</span>
                                            <Send className="w-6 h-6 transition-transform duration-300 group-hover/submit:translate-x-2 group-hover/submit:-translate-y-1" />
                                        </>
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
