import React from 'react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center">
            <div className="relative">
                {/* Outer Glow */}
                <div className="absolute inset-0 bg-amber-500/20 blur-[40px] rounded-full animate-pulse"></div>

                {/* Logo Container */}
                <div className="relative bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl flex flex-col items-center">
                    <div className="w-20 h-20 mb-6 relative">
                        <img
                            src="/sahel-logo-v3.png"
                            alt="Sahel Multiservices Logo"
                            className="w-full h-full object-contain animate-bounce"
                        />
                    </div>

                    {/* Progress Bar */}
                    <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-1/3 animate-[loading_2s_infinite_ease-in-out]"></div>
                    </div>

                    <p className="mt-4 text-xs font-bold tracking-[0.3em] text-amber-500 uppercase animate-pulse">
                        Sahel Multiservices
                    </p>
                </div>
            </div>

            <style jsx global>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); width: 30%; }
                    50% { transform: translateX(100%); width: 50%; }
                    100% { transform: translateX(300%); width: 30%; }
                }
                
                .animate-bounce {
                    animation: bounce 2s infinite ease-in-out;
                }
                
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
}
