import ScrollReveal from './ScrollReveal';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: "Notre Mission",
        description: "Fournir des solutions innovantes et de qualité pour accompagner le développement économique au Sahel."
    },
    {
        icon: Users,
        title: "Notre Équipe",
        description: "Des professionnels expérimentés et passionnés, dédiés à la réussite de vos projets."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Un engagement constant vers l'excellence et la satisfaction client dans tous nos domaines d'activité."
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        description: "À la pointe de la technologie et des meilleures pratiques pour des solutions d'avenir."
    }
];

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-slate-950 py-32 relative overflow-hidden">
            {/* Subtle background text */}
            <div className="absolute top-24 left-0 text-[20rem] font-black text-slate-50 dark:text-white/5 whitespace-nowrap pointer-events-none select-none -translate-x-1/2 opacity-50">
                SAHEL
            </div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-screen-md text-center mb-24 lg:mb-32">
                        <h2 className="mb-6 text-5xl tracking-tight font-black text-sahel-navy dark:text-white uppercase transition-all duration-500">
                            L'Esprit <span className="text-sahel-gold underline decoration-sahel-bronze/30 decoration-8 underline-offset-8">Sahel</span>
                        </h2>
                        <p className="font-medium text-slate-600 sm:text-2xl dark:text-slate-400 leading-relaxed italic">
                            Depuis notre création, nous nous positionnons comme un acteur majeur du développement technologique et commercial au Sahel.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-12 lg:grid-cols-2 mb-32">
                    {values.map((value, index) => (
                        <ScrollReveal
                            key={index}
                            animation={index % 2 === 0 ? "reveal-left" : "reveal-right"}
                            delay={(`reveal-delay-${(index * 100 + 100)}`)}
                        >
                            <div className="group flex flex-col sm:flex-row h-full gap-8 p-10 bg-slate-50 dark:bg-white/5 rounded-3xl hover:bg-white dark:hover:bg-white/10 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-transparent hover:border-sahel-gold/20">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-sahel-gold text-white group-hover:rotate-[15deg] transition-transform duration-500 shadow-lg shadow-sahel-gold/30">
                                        <value.icon className="w-10 h-10" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="mb-4 text-2xl font-black text-sahel-navy dark:text-white group-hover:text-sahel-gold transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="reveal-scale">
                    <div className="glass rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group shadow-2xl border border-white/10">
                        {/* Decorative background for the CTA box */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-sahel-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 text-center max-w-3xl mx-auto">
                            <h3 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">Votre Partenaire de Confiance</h3>
                            <p className="text-xl mb-12 text-slate-300 font-medium leading-relaxed">
                                Que ce soit pour vos besoins en <span className="text-sahel-gold">technologie</span> ou en <span className="text-sahel-gold">commerce</span>,
                                Groupe Sahel met son expertise à votre service pour concrétiser vos ambitions les plus audacieuses.
                            </p>

                            <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-12 pt-12 border-t border-white/10">
                                <div className="text-center group/stat">
                                    <div className="text-5xl font-black mb-3 text-sahel-gold group-hover/stat:scale-110 transition-transform">3+</div>
                                    <div className="text-slate-400 uppercase tracking-widest text-xs font-bold font-sans">Piliers d'Activité</div>
                                </div>
                                <div className="text-center group/stat">
                                    <div className="text-5xl font-black mb-3 text-sahel-gold group-hover/stat:scale-110 transition-transform">100%</div>
                                    <div className="text-slate-400 uppercase tracking-widest text-xs font-bold font-sans">Engagement</div>
                                </div>
                                <div className="text-center group/stat">
                                    <div className="text-5xl font-black mb-3 text-sahel-gold group-hover/stat:scale-110 transition-transform">24/7</div>
                                    <div className="text-slate-400 uppercase tracking-widest text-xs font-bold font-sans">Disponibilité</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

