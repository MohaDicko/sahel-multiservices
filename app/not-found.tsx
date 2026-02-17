"use client";
import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-sahel-navy text-white flex flex-col selection:bg-sahel-gold selection:text-sahel-navy">
            <Navbar />

            <div className="flex-grow flex items-center justify-center relative overflow-hidden px-4 py-32">
                {/* Background Decorations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sahel-gold/5 rounded-full blur-[150px] animate-pulse-soft pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sahel-bronze/5 rounded-full blur-[100px] animate-pulse-soft delay-1000 pointer-events-none"></div>

                {/* Big Background Number */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5 pointer-events-none">
                    <span className="text-[30rem] md:text-[50rem] font-black tracking-tighter italic select-none">404</span>
                </div>

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <ScrollReveal animation="reveal-scale">
                        <div className="mb-12 inline-block">
                            <div className="w-24 h-24 bg-sahel-gold/10 rounded-3xl flex items-center justify-center border border-sahel-gold/20 mx-auto group hover:rotate-12 transition-transform duration-500 shadow-2xl">
                                <span className="text-4xl font-black text-sahel-gold">!</span>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-up" delay="reveal-delay-100">
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic">
                            Oups... <span className="text-sahel-gold">Égaré ?</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-up" delay="reveal-delay-200">
                        <p className="text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-medium italic max-w-2xl mx-auto">
                            Le terrain est vaste, mais cette page semble être hors de notre périmètre d&apos;intervention actuel.
                            Laissez nos experts vous ramener sur la bonne voie.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="reveal-up" delay="reveal-delay-300">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link
                                href="/"
                                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-sahel-gold hover:bg-amber-400 text-sahel-navy font-black px-12 py-5 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] uppercase tracking-widest"
                            >
                                <Home className="w-6 h-6" />
                                <span>L&apos;Accueil</span>
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="w-full sm:w-auto flex items-center justify-center gap-4 glass hover:bg-white/10 text-white font-black px-12 py-5 rounded-2xl transition-all duration-500 border border-white/10 uppercase tracking-widest"
                            >
                                <ChevronLeft className="w-6 h-6" />
                                <span>Précédent</span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <Footer />
        </main>
    );
}
