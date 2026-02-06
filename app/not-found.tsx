"use client";
import Link from 'next/link';
import { Home, ChevronLeft } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-950 text-white flex flex-col">
            <Navbar />

            <div className="flex-grow flex items-center justify-center relative overflow-hidden px-4 py-24">
                {/* Background Decorations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none delay-500"></div>

                <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-950 select-none">
                        404
                    </h1>

                    <div className="-mt-12 md:-mt-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Page <span className="text-amber-500">Introuvable</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                            Il semble que le chemin que vous avez emprunté n&apos;existe pas ou a été déplacé.
                            Ne vous inquiétez pas, nos experts travaillent sur le terrain, pas sur cette page !
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/20"
                            >
                                <Home className="w-5 h-5" />
                                Retour à l&apos;accueil
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                Page précédente
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
