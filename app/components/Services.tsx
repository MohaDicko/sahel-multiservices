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
    {
        title: "Sahel Infra",
        description: "Construction, génie civil et travaux publics pour vos grands projets.",
        icon: HardHat,
        link: "/btp",
    },
    {
        title: "Sahel Energy",
        description: "Solutions dans le secteur des hydrocarbures et approvisionnement énergétique.",
        icon: Droplet,
        link: "/energie",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-sahel-sand dark:bg-sahel-navy py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-sahel-navy dark:text-white">Nos Domaines d'Activité</h2>
                        <p className="font-light text-slate-600 lg:mb-16 sm:text-xl dark:text-slate-400">
                            Un partenaire multidisciplinaire pour répondre à tous vos défis.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                            delay={(`reveal-delay-${((index % 5) * 100 + 100)}`)}
                        >
                            <div className="h-full items-center bg-white rounded-2xl shadow-lg sm:flex dark:bg-white/5 dark:border-white/10 hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-1 hover:border-sahel-gold border-2 border-transparent relative overflow-hidden">
                                <div className="p-4 bg-sahel-gold/10 rounded-full dark:bg-sahel-gold/10 mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                                    <service.icon className="w-8 h-8 text-sahel-gold" />
                                </div>
                                <div className="p-5 flex-1 relative z-10">
                                    <h3 className="text-xl font-bold tracking-tight text-sahel-navy dark:text-white group-hover:text-sahel-gold transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 mb-6 font-light text-slate-600 dark:text-slate-400">
                                        {service.description}
                                    </p>
                                    {service.link && (
                                        service.link.startsWith('/') ? (
                                            <Link
                                                href={service.link}
                                                className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-sahel-gold border border-sahel-gold rounded-full transition-all duration-300 hover:bg-sahel-gold hover:text-white hover:shadow-lg hover:shadow-sahel-gold/20 gap-2 group/btn"
                                            >
                                                <span>Visiter le site</span>
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </Link>
                                        ) : (
                                            <a
                                                href={service.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-sahel-gold border border-sahel-gold rounded-full transition-all duration-300 hover:bg-sahel-gold hover:text-white hover:shadow-lg hover:shadow-sahel-gold/20 gap-2 group/btn"
                                            >
                                                <span>Visiter le site</span>
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
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

