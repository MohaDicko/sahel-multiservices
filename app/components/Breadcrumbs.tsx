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
        <nav className="flex px-4 py-3 text-sm font-medium z-40 relative max-w-screen-xl mx-auto w-full pt-28" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className={`inline-flex items-center transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Accueil
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight className={`w-4 h-4 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className={`ml-1 md:ml-2 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={`ml-1 md:ml-2 font-bold ${isDark ? 'text-amber-500' : 'text-amber-600'
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
