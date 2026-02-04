import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface PageHeroProps {
    badge: {
        label: string;
        icon: LucideIcon;
        colorClass?: string;
    };
    title: React.ReactNode;
    description: string;
    imageSrc: string;
    imageAlt: string;
    ctaPrimary?: {
        label: string;
        href: string;
    };
    ctaSecondary?: {
        label: string;
        href: string;
    };
    overlayGradient?: string;
    theme?: 'dark' | 'light';
}

export default function PageHero({
    badge,
    title,
    description,
    imageSrc,
    imageAlt,
    ctaPrimary,
    ctaSecondary,
    overlayGradient = "from-slate-950/80 via-slate-900/40 to-slate-950",
    theme = 'dark'
}: PageHeroProps) {
    const isDark = theme === 'dark';

    return (
        <section className={`relative min-h-[85vh] flex items-center justify-center overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'} pt-16`}>
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient} z-10`}></div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover opacity-60"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 backdrop-blur-sm uppercase tracking-widest text-sm font-bold ${badge.colorClass || (isDark ? 'bg-blue-600/20 border-blue-500/30 text-blue-400' : 'bg-amber-500/20 border-amber-500/30 text-amber-600')
                        }`}>
                        <badge.icon className="w-4 h-4" />
                        {badge.label}
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay="reveal-delay-100">
                    <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {title}
                    </h1>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay="reveal-delay-200">
                    <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {description}
                    </p>
                </ScrollReveal>

                {(ctaPrimary || ctaSecondary) && (
                    <ScrollReveal animation="reveal-up" delay="reveal-delay-300">
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            {ctaPrimary && (
                                <Link
                                    href={ctaPrimary.href}
                                    className="px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center gap-3"
                                >
                                    {ctaPrimary.label}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            )}
                            {ctaSecondary && (
                                <Link
                                    href={ctaSecondary.href}
                                    className={`px-10 py-4 border rounded-xl font-bold transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${isDark ? 'bg-slate-800/50 hover:bg-slate-800 text-white border-slate-700' : 'bg-white/50 hover:bg-white text-slate-900 border-slate-200'
                                        }`}
                                >
                                    {ctaSecondary.label}
                                </Link>
                            )}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}
