"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "22374132032"; // Format international sans le +
    const message = "Bonjour, je souhaite obtenir plus d'informations sur vos services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-green-600 to-green-500 text-white rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 ring-4 ring-white/20 backdrop-blur-sm"
            aria-label="Contactez-nous sur WhatsApp"
        >
            {/* Main Icon */}
            <MessageCircle className="w-8 h-8 group-hover:rotate-[15deg] transition-transform duration-300 relative z-10" />

            {/* Notification Dot to simulate activity */}
            <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 border-2 border-green-500 rounded-full z-20 animate-pulse"></span>

            {/* Tooltip / Label - Enhanced */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-sahel-navy text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none border border-white/10 shadow-xl">
                Discuter sur WhatsApp <span className="text-sahel-gold">👋</span>
                {/* Little triangle pointer */}
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-sahel-navy border-t border-r border-white/10 rotate-45"></span>
            </span>

            {/* Pulse animation rings */}
            <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping duration-[2000ms]"></span>
            <span className="absolute -inset-1 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/40 transition-colors"></span>
        </a>
    );
}
