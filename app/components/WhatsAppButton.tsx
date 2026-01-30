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
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group animate-fade-in"
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Contactez-nous sur WhatsApp
            </span>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        </a>
    );
}
