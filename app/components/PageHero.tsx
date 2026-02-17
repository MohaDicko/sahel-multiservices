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
    overlayGradient = "from-sahel-navy/95 via-sahel-navy/70 to-sahel-navy/40",
    theme = 'dark'
}: PageHeroProps) {
    const isDark = theme === 'dark';

    return (
        <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${isDark ? 'bg-sahel-navy' : 'bg-sahel-sand'} pt-24`}>
            {/* Background Image Container with Parallax-like feel */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute inset-0 bg-gradient-to-b ${overlayGradient} z-10`}></div>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover opacity-60 scale-105 animate-float-slow"
                />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sahel-gold/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sahel-bronze/10 rounded-full blur-[120px] animate-pulse-soft delay-700 pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <ScrollReveal animation="reveal-up">
                    <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border mb-10 backdrop-blur-md uppercase tracking-[0.2em] text-xs font-black shadow-2xl transition-all hover:scale-105 group ${badge.colorClass || (isDark ? 'bg-sahel-gold/10 border-sahel-gold/20 text-sahel-gold' : 'bg-sahel-gold border-transparent text-white')
                        }`}>
                        <badge.icon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        {badge.label}
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay="reveal-delay-100">
                    <h1 className={`text-5xl md:text-8xl font-black tracking-tighter mb-8 transition-all duration-500 uppercase italic ${isDark ? 'text-white' : 'text-sahel-navy'}`}>
                        {title}
                    </h1>
                </ScrollReveal>

                <ScrollReveal animation="reveal-up" delay="reveal-delay-200">
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed font-medium italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {description}
                    </p>
                </ScrollReveal>

                {(ctaPrimary || ctaSecondary) && (
                    <ScrollReveal animation="reveal-up" delay="reveal-delay-300">
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            {ctaPrimary && (
                                <Link
                                    href={ctaPrimary.href}
                                    className="group/btn px-12 py-5 bg-sahel-gold hover:bg-amber-400 text-sahel-navy rounded-2xl font-black transition-all duration-500 transform hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.3)] flex items-center gap-4 uppercase tracking-widest text-lg"
                                >
                                    <span>{ctaPrimary.label}</span>
                                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            )}
                            {ctaSecondary && (
                                <Link
                                    href={ctaSecondary.href}
                                    className={`px-12 py-5 border-2 rounded-2xl font-black transition-all duration-500 flex items-center gap-3 backdrop-blur-md uppercase tracking-widest text-lg group/sec ${isDark ? 'bg-white/5 hover:bg-white/10 text-white border-white/10' : 'bg-sahel-navy/5 hover:bg-sahel-navy/10 text-sahel-navy border-sahel-navy/10'
                                        }`}
                                >
                                    {ctaSecondary.label}
                                    <div className="w-2 h-2 rounded-full bg-sahel-gold group-hover/sec:scale-150 transition-transform"></div>
                                </Link>
                            )}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}
