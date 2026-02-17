import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { Code, HardHat, Droplet, Handshake, Navigation } from 'lucide-react';

const services = [
    {
        title: "Sahel Tech",
        description: "Développement de sites web, applications mobiles et solutions logicielles sur mesure.",
        icon: Code,
        link: "/digital",
    },
    {
        title: "GPS Fleet Sahel",
        description: "Gestion de flotte GPS professionnelle. Suivi temps réel, géofencing et rapports détaillés pour sécuriser et optimiser votre flotte.",
        icon: Navigation,
        link: "http://gpsfleetsahel.com/",
    },
    {
        title: "Sahel Distribution",
        description: "Import-export, distribution et intermédiation commerciale à l'échelle internationale.",
        icon: Handshake,
        link: "/commerce",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-sahel-sand dark:bg-sahel-navy py-32 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sahel-gold/5 to-transparent pointer-events-none"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-sm text-center mb-16 lg:mb-24">
                        <h2 className="mb-6 text-5xl tracking-tight font-black text-sahel-navy dark:text-white uppercase transition-all duration-500">
                            Nos <span className="text-sahel-gold">Expertises</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-8 rounded-full"></div>
                        <p className="font-medium text-slate-600 sm:text-2xl dark:text-slate-400 italic">
                            Des solutions sur-mesure pour propulser votre croissance au Sahel.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-10 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${((index % 3) * 200 + 100)}`)}
                        >
                            <div className="group h-full flex flex-col bg-white dark:bg-slate-900/50 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(180,83,9,0.2)] transition-all duration-700 border border-slate-100 dark:border-white/5 hover:border-sahel-gold/30 relative overflow-hidden p-8">
                                {/* Service Numbering */}
                                <div className="absolute top-6 right-8 text-6xl font-black text-slate-50 dark:text-white/5 group-hover:text-sahel-gold/10 transition-colors duration-500 pointer-events-none">
                                    0{index + 1}
                                </div>

                                <div className="mb-8 p-5 bg-sahel-gold/10 rounded-2xl dark:bg-sahel-gold/5 w-fit group-hover:bg-sahel-gold group-hover:rotate-[360deg] transition-all duration-1000">
                                    <service.icon className="w-10 h-10 text-sahel-gold group-hover:text-white transition-colors duration-500" />
                                </div>

                                <h3 className="text-2xl font-black tracking-tight text-sahel-navy dark:text-white group-hover:text-sahel-gold transition-colors duration-300 mb-4">
                                    {service.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 flex-1">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50 dark:border-white/5">
                                    {service.link && (
                                        service.link.startsWith('/') ? (
                                            <Link
                                                href={service.link}
                                                className="inline-flex items-center text-sm font-black text-sahel-navy dark:text-white hover:text-sahel-gold transition-all duration-300 gap-3 group/btn uppercase tracking-widest"
                                            >
                                                <span>Explorer la solution</span>
                                                <div className="w-10 h-10 rounded-full border-2 border-sahel-gold/20 flex items-center justify-center group-hover/btn:bg-sahel-gold group-hover/btn:border-sahel-gold transition-all duration-500">
                                                    <svg className="w-5 h-5 text-sahel-gold group-hover/btn:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        ) : (
                                            <a
                                                href={service.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-black text-sahel-navy dark:text-white hover:text-sahel-gold transition-all duration-300 gap-3 group/btn uppercase tracking-widest"
                                            >
                                                <span>Accéder à la plateforme</span>
                                                <div className="w-10 h-10 rounded-full border-2 border-sahel-gold/20 flex items-center justify-center group-hover/btn:bg-sahel-gold group-hover/btn:border-sahel-gold transition-all duration-500">
                                                    <svg className="w-5 h-5 text-sahel-gold group-hover/btn:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </div>
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

