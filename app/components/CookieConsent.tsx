"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('sahel_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('sahel_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('sahel_cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] animate-fade-in-up">
            <div className="glass-light dark:glass p-6 rounded-3xl border border-sahel-gold/20 shadow-2xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-sahel-gold/10 rounded-full blur-3xl group-hover:bg-sahel-gold/20 transition-all duration-700"></div>
                
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sahel-gold/10 flex items-center justify-center shrink-0 border border-sahel-gold/20">
                        <ShieldCheck className="w-6 h-6 text-sahel-gold" />
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-black text-sahel-navy dark:text-white leading-tight">
                            Respect de votre vie privée
                        </h3>
                        <p className="text-sm text-sahel-navy/70 dark:text-slate-400 leading-relaxed font-medium">
                            Nous utilisons des cookies pour optimiser votre expérience et analyser le trafic. En cliquant sur "Accepter", vous consentez à notre utilisation des cookies conformément à notre <a href="/politique-confidentialite" className="text-sahel-gold underline hover:text-sahel-bronze transition-colors">politique de confidentialité</a>.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button 
                                onClick={handleAccept}
                                className="px-6 py-2.5 bg-sahel-gold hover:bg-amber-400 text-sahel-navy font-black text-sm rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sahel-gold/20"
                            >
                                Tout accepter
                            </button>
                            <button 
                                onClick={handleDecline}
                                className="px-5 py-2.5 bg-white/5 border border-sahel-navy/10 dark:border-white/10 hover:bg-white/10 text-sahel-navy/60 dark:text-slate-400 font-bold text-sm rounded-xl transition-all"
                            >
                                Continuer sans accepter
                            </button>
                        </div>
                    </div>
                </div>
                
                <button 
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 p-1 text-sahel-navy/30 dark:text-white/30 hover:text-sahel-gold transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
