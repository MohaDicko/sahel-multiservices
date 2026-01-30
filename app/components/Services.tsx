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
                <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nos Domaines d'Activité</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        Un partenaire multidisciplinaire pour répondre à tous vos défis.
                    </p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 p-6 group">
                            <div className="p-4 bg-amber-100 rounded-full dark:bg-amber-900 mr-4">
                                <service.icon className="w-8 h-8 text-amber-600 dark:text-amber-300" />
                            </div>
                            <div className="p-5 flex-1">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
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
                                        className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
                                    >
                                        Visiter le site
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
