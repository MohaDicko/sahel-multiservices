"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
    items: {
        label: string;
        href?: string;
    }[];
    theme?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, theme = 'dark' }: BreadcrumbProps) {
    const isDark = theme === 'dark';

    return (
        <nav className="flex px-8 py-4 z-40 relative max-w-screen-xl mx-auto w-full pt-32" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 md:space-x-4 glass px-6 py-3 rounded-2xl border-white/5 shadow-xl">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className={`inline-flex items-center transition-all duration-300 font-black uppercase tracking-widest text-xs italic ${isDark ? 'text-slate-400 hover:text-sahel-gold' : 'text-slate-500 hover:text-sahel-navy'
                            }`}
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Accueil
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight className={`w-4 h-4 ${isDark ? 'text-white/10' : 'text-slate-300'}`} />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className={`ml-2 md:ml-4 transition-all duration-300 font-black uppercase tracking-widest text-xs italic ${isDark ? 'text-slate-400 hover:text-sahel-gold' : 'text-slate-500 hover:text-sahel-navy'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={`ml-2 md:ml-4 font-black uppercase tracking-[0.2em] text-xs italic ${isDark ? 'text-sahel-gold' : 'text-sahel-navy'
                                    }`}>
                                    {item.label}
                                </span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
