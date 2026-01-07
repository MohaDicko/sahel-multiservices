import { Code, ShoppingBag, HardHat, Droplet, Handshake, Globe } from 'lucide-react';

const services = [
    {
        title: "Technologie & Digital",
        description: "Développement de sites web, applications mobiles et solutions logicielles sur mesure.",
        icon: Code,
    },
    {
        title: "Commerce & Négoce",
        description: "Import-export, distribution et intermédiation commerciale à l'échelle internationale.",
        icon: Handshake,
    },
    {
        title: "BTP & Infrastructures",
        description: "Construction, génie civil et travaux publics pour vos grands projets.",
        icon: HardHat,
    },
    {
        title: "Énergie & Pétrole",
        description: "Solutions dans le secteur des hydrocarbures et approvisionnement énergétique.",
        icon: Droplet,
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
                        <div key={index} className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 p-6">
                            <div className="p-4 bg-amber-100 rounded-full dark:bg-amber-900 mr-4">
                                <service.icon className="w-8 h-8 text-amber-600 dark:text-amber-300" />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
