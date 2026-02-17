import ScrollReveal from './ScrollReveal';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ibrahim Traoré",
        role: "Directeur Logistique",
        content: "Une collaboration exemplaire. Groupe Sahel nous a accompagnés pour l'installation de notre système GPS avec une expertise technique irréprochable et un support sans faille.",
        initials: "IT"
    },
    {
        name: "Moussa Diarra",
        role: "Chef d'Entreprise",
        content: "Nous utilisons leurs services digitaux pour notre plateforme stratégique. Une solution sur mesure qui a radicalement boosté notre productivité et notre image de marque.",
        initials: "MD"
    },
    {
        name: "Fanta Coulibaly",
        role: "Responsable Import-Export",
        content: "Un partenaire stratégique qui maîtrise parfaitement les rouages du commerce international au Sahel. Fiabilité, efficacité et professionnalisme.",
        initials: "FC"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-white dark:bg-slate-950 py-32 relative overflow-hidden">
            {/* Background Text */}
            <div className="absolute top-1/2 left-0 w-full text-[15rem] font-black text-slate-50 dark:text-white/5 whitespace-nowrap pointer-events-none select-none -translate-y-1/2 opacity-50 tracking-tighter uppercase">
                CONFIANCE EXCELLENCE PARTENARIAT
            </div>

            <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-24 lg:mb-32">
                        <h2 className="text-sahel-gold font-black tracking-[0.3em] uppercase text-sm mb-6">Témoignages</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-sahel-navy dark:text-white mb-8 tracking-tighter uppercase transition-colors duration-500">
                            L'Écho de notre <span className="text-sahel-gold">succès</span>
                        </h3>
                        <div className="h-1.5 w-24 bg-sahel-gold mx-auto mb-10 rounded-full"></div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl italic font-medium leading-relaxed">
                            Ceux qui nous font confiance témoignent de notre engagement quotidien pour l'excellence durable.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testi, index) => (
                        <ScrollReveal
                            key={index}
                            animation="reveal-up"
                            delay={(`reveal-delay-${index * 100 + 100}`)}
                        >
                            <div className="group bg-slate-50 dark:bg-white/5 p-12 rounded-[3rem] border border-transparent hover:border-sahel-gold/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-700 hover:-translate-y-4 shadow-2xl relative h-full flex flex-col">
                                <Quote className="absolute top-10 right-10 w-16 h-16 text-sahel-gold/10 group-hover:text-sahel-gold/20 transition-all duration-700" />

                                <div className="flex items-center gap-2 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-sahel-gold text-sahel-gold" />
                                    ))}
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 italic text-xl leading-relaxed mb-12 flex-1 font-medium">
                                    "{testi.content}"
                                </p>

                                <div className="flex items-center gap-6 pt-10 border-t border-slate-200 dark:border-white/10">
                                    <div className="w-16 h-16 bg-sahel-gold rounded-2xl flex items-center justify-center text-sahel-navy font-black text-2xl shadow-xl group-hover:rotate-6 transition-transform duration-500">
                                        {testi.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-2xl text-sahel-navy dark:text-white tracking-tight">{testi.name}</h4>
                                        <p className="text-sahel-gold font-black uppercase tracking-widest text-xs mt-1">{testi.role}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

