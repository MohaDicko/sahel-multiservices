"use client";
import React from 'react';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-sahel-navy flex items-center justify-center overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sahel-gold/5 rounded-full blur-[120px] animate-pulse-soft"></div>

            <div className="relative flex flex-col items-center">
                {/* Logo with elegant float */}
                <div className="relative w-28 h-28 mb-12 animate-float-slow">
                    <div className="absolute inset-0 bg-sahel-gold/20 blur-2xl rounded-full scale-150"></div>
                    <Image
                        src="/sahel-logo-v3.png"
                        alt="Groupe Sahel Logo"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Text and Progress */}
                <div className="text-center relative">
                    <h2 className="text-white text-2xl font-black tracking-[0.3em] uppercase mb-6 italic">
                        Groupe<span className="text-sahel-gold">Sahel</span>
                    </h2>

                    {/* Modern Progress Bar */}
                    <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sahel-gold to-transparent w-full animate-loading-bar"></div>
                    </div>

                    <p className="mt-8 text-xs font-black tracking-[0.4em] text-slate-500 uppercase">
                        Excellence en mouvement
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                
                .animate-loading-bar {
                    animation: loading-bar 2s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
                }
            `}</style>
        </div>
    );
}
