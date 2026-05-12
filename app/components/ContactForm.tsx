"use client";
import ScrollReveal from './ScrollReveal';
import Link from 'next/link';
import { Send, Phone, Mail, MapPin, Check, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { sendEmail } from '../actions';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
                toast.success("Message envoyé avec succès !", {
                    description: "Nos experts vous répondront sous 24h.",
                });
            } else {
                console.error(result.error);
                setStatus('error');
                toast.error("Erreur lors de l'envoi", {
                    description: result.error,
                });
                setStatus('idle');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            toast.error("Une erreur inattendue est survenue.");
            setStatus('idle');
        }
    };

    return (
        <section id="contact" className="py-32 bg-sahel-navy text-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sahel-gold/10 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sahel-bronze/10 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahel-gold/10 border border-sahel-gold/20 text-sahel-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <Sparkles className="w-3.5 h-3.5" />
                            Prendre Contact
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight uppercase font-display leading-[0.9]">
                            Donnez vie à vos <span className="text-gradient-gold">ambitions</span>
                        </h2>
                        <div className="h-2 w-24 bg-sahel-gold mx-auto mb-10 rounded-full shadow-[0_0_20px_rgba(180,83,9,0.4)]"></div>
                        <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium italic">
                            L'excellence sahélienne commence par une conversation. Transformons vos idées en succès mondiaux.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Contact Info Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        {[
                            { icon: Phone, label: "Appelez-nous", val1: "+223 74 13 20 32", val2: "+223 82 57 55 55" },
                            { icon: Mail, label: "Email direct", val1: "contact@sahel-multiservices.com" },
                            { icon: MapPin, label: "Siège social", val1: "Niamana, Bamako, Mali" },
                        ].map((item, i) => (
                            <ScrollReveal key={i} animation="reveal-left" delay={i * 100}>
                                <div className="group flex items-center p-8 glass rounded-[2.5rem] border-white/5 hover:border-sahel-gold/30 transition-all duration-700 hover:-translate-x-2">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mr-8 group-hover:bg-sahel-gold group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                        <item.icon className="w-8 h-8 text-sahel-gold group-hover:text-sahel-navy transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-sahel-gold uppercase tracking-[0.2em] mb-2 opacity-70">{item.label}</p>
                                        <p className="text-2xl font-black text-white group-hover:text-sahel-gold transition-colors tracking-tight font-display lowercase">{item.val1}</p>
                                        {item.val2 && <p className="text-lg text-slate-400 font-medium">{item.val2}</p>}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal animation="reveal-right" delay={200}>
                        {status === 'success' ? (
                            <div className="glass p-12 md:p-16 rounded-[3rem] border-green-500/30 text-center flex flex-col items-center justify-center min-h-[600px] animate-scale-in">
                                <div className="w-24 h-24 bg-green-500/20 rounded-3xl flex items-center justify-center mb-8 animate-bounce">
                                    <Check className="w-12 h-12 text-green-500" />
                                </div>
                                <h4 className="text-4xl font-black text-white mb-4 uppercase font-display tracking-tight">Transmission Réussie</h4>
                                <p className="text-slate-400 mb-12 text-lg font-medium max-w-sm mx-auto italic">
                                    Votre demande est entre les mains de nos experts. Une réponse vous parviendra sous 24h.
                                </p>
                                <Button 
                                    onClick={() => setStatus('idle')}
                                    className="px-12 py-7 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all font-black uppercase tracking-widest text-lg h-auto"
                                >
                                    Envoyer un autre message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="glass p-10 md:p-14 rounded-[3rem] border-white/5 shadow-3xl hover:border-sahel-gold/30 transition-all duration-700 relative overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-3">
                                        <Label className="text-[10px] font-black text-sahel-gold uppercase tracking-[0.2em] ml-2">Votre Nom</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            required
                                            className="h-16 bg-white/5 border-white/10 rounded-2xl px-6 text-white font-bold focus:border-sahel-gold focus:ring-sahel-gold/20 transition-all text-lg placeholder:text-slate-600"
                                            placeholder="Ex: Amadou Diallo"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-[10px] font-black text-sahel-gold uppercase tracking-[0.2em] ml-2">Votre Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            required
                                            className="h-16 bg-white/5 border-white/10 rounded-2xl px-6 text-white font-bold focus:border-sahel-gold focus:ring-sahel-gold/20 transition-all text-lg placeholder:text-slate-600"
                                            placeholder="amadou@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-8 space-y-3">
                                    <Label className="text-[10px] font-black text-sahel-gold uppercase tracking-[0.2em] ml-2">Sujet</Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        required
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="h-16 bg-white/5 border-white/10 rounded-2xl px-6 text-white font-bold focus:border-sahel-gold focus:ring-sahel-gold/20 transition-all text-lg placeholder:text-slate-600"
                                        placeholder="Ex: Demande de projet Digital"
                                    />
                                </div>
                                <div className="mb-12 space-y-3">
                                    <Label className="text-[10px] font-black text-sahel-gold uppercase tracking-[0.2em] ml-2">Votre Message</Label>
                                    <Textarea
                                        rows={5}
                                        name="message"
                                        required
                                        className="bg-white/5 border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-sahel-gold focus:ring-sahel-gold/20 transition-all resize-none text-lg placeholder:text-slate-600 min-h-[160px]"
                                        placeholder="Décrivez-nous votre projet..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full h-20 bg-gradient-to-r from-sahel-gold to-sahel-bronze hover:from-amber-400 hover:to-sahel-gold text-sahel-navy font-black text-xl uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 shadow-[0_20px_50px_rgba(180,83,9,0.3)] disabled:opacity-50 group/submit"
                                >
                                    {status === 'sending' ? (
                                        <div className="flex items-center gap-4">
                                            <div className="animate-spin h-6 w-6 border-4 border-sahel-navy border-t-transparent rounded-full" />
                                            Transmission...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-4">
                                            <span>Lancer le projet</span>
                                            <Send className="w-6 h-6 transition-transform group-hover/submit:translate-x-2 group-hover/submit:-translate-y-1" />
                                        </div>
                                    )}
                                </Button>

                                <p className="mt-10 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed max-w-xs mx-auto">
                                    En soumettant, vous acceptez notre <Link href="/politique-confidentialite" className="text-sahel-gold hover:underline">politique de confidentialité</Link>.
                                </p>
                            </form>
                        )}
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
