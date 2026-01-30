import ScrollReveal from './ScrollReveal';
import { Code, HardHat, Droplet, Handshake, Navigation } from 'lucide-react';

const services = [
    {
        title: "Technologie & Digital",
        description: "Développement de sites web, applications mobiles et solutions logicielles sur mesure.",
        icon: Code,
        link: null,
    },
    {
        title: "GPS Fleet Sahel",
        description: "Gestion de flotte GPS professionnelle. Suivi temps réel, géofencing et rapports détaillés pour sécuriser et optimiser votre flotte.",
        icon: Navigation,
        link: "http://gpsfleetsahel.com/",
    },
    {
        title: "Commerce & Négoce",
        description: "Import-export, distribution et intermédiation commerciale à l'échelle internationale.",
        icon: Handshake,
        link: null,
    },
    {
        title: "BTP & Infrastructures",
        description: "Construction, génie civil et travaux publics pour vos grands projets.",
        icon: HardHat,
        link: null,
    },
    {
        title: "Énergie & Pétrole",
        description: "Solutions dans le secteur des hydrocarbures et approvisionnement énergétique.",
        icon: Droplet,
        link: null,
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-white dark:bg-gray-900 py-24">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nos Domaines d'Activité</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                            Un partenaire multidisciplinaire pour répondre à tous vos défis.
                        </p>
                    </div>
                </ScrollReveal>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                            delay={(`reveal-delay-${((index % 5) * 100 + 100)}` as any)}
                        >
                            <div className="h-full items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-all duration-300 p-6 group hover:-translate-y-1 hover:border-amber-500 border-2 border-transparent">
                                <div className="p-4 bg-amber-100 rounded-full dark:bg-amber-900 mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-amber-600 dark:text-amber-300" />
                                </div>
                                <div className="p-5 flex-1">
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                        {service.description}
                                    </p>
                                    {service.link && (
                                        <a
                                            href={service.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-all duration-300 hover:gap-3 gap-2"
                                        >
                                            Visiter le site
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
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
