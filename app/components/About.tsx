import ScrollReveal from './ScrollReveal';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
    { icon: Target,    title: "Notre Mission",  description: "Fournir des solutions innovantes et de qualité pour accompagner le développement économique au Sahel." },
    { icon: Users,     title: "Notre Équipe",   description: "Des professionnels expérimentés et passionnés, dédiés à la réussite de vos projets." },
    { icon: Award,     title: "Excellence",     description: "Un engagement constant vers l'excellence et la satisfaction client dans tous nos domaines d'activité." },
    { icon: TrendingUp, title: "Innovation",    description: "À la pointe de la technologie et des meilleures pratiques pour des solutions d'avenir." },
];

export default function About() {
    return (
        <section id="about" className="bg-white dark:bg-slate-950 py-24 relative overflow-hidden">
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="mx-auto max-w-xl text-center mb-16">
                        <p className="text-sahel-gold font-black uppercase tracking-[0.25em] text-xs mb-4">À Propos</p>
                        <h2 className="text-4xl lg:text-5xl font-black text-sahel-navy dark:text-white uppercase tracking-tight mb-4">
                            L'Esprit <span className="text-gradient-gold">Sahel</span>
                        </h2>
                        <div className="h-1 w-16 bg-sahel-gold mx-auto rounded-full mb-6" />
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            Depuis notre création, nous nous positionnons comme un acteur majeur du développement technologique et commercial au Sahel.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-6 lg:grid-cols-2 mb-16">
                    {values.map((value, index) => (
                        <ScrollReveal key={index} animation={index % 2 === 0 ? "reveal-left" : "reveal-right"} delay={(`reveal-delay-${(index * 100 + 100)}`)}>
                            <div className="group flex gap-6 p-8 bg-slate-50 dark:bg-white/5 rounded-2xl hover:bg-white dark:hover:bg-white/10 hover:shadow-lg transition-all duration-500 border border-transparent hover:border-sahel-gold/15">
                                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-sahel-gold text-white group-hover:rotate-12 transition-transform duration-500 shadow-md shadow-sahel-gold/20">
                                    <value.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-black text-lg text-sahel-navy dark:text-white mb-2 group-hover:text-sahel-gold transition-colors duration-300">{value.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{value.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* CTA strip */}
                <ScrollReveal animation="reveal-scale">
                    <div className="glass rounded-2xl p-10 md:p-16 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-sahel-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">Votre Partenaire de Confiance</h3>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                Technologie ou commerce — Groupe Sahel concrétise vos ambitions les plus audacieuses.
                            </p>
                            <div className="flex flex-wrap justify-center gap-12">
                                {[{ v: '3+', l: "Piliers" }, { v: '100%', l: "Engagement" }, { v: '24/7', l: "Disponibilité" }].map(s => (
                                    <div key={s.l} className="text-center">
                                        <div className="text-4xl font-black mb-1 text-gradient-gold">{s.v}</div>
                                        <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
