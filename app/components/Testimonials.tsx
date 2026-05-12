import ScrollReveal from './ScrollReveal';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ibrahim Traoré",
        role: "Directeur Logistique",
        content: "Une collaboration exemplaire. Groupe Sahel nous a accompagnés pour l'installation de notre système GPS avec une expertise technique irréprochable et un support sans faille.",
        initials: "IT",
    },
    {
        name: "Moussa Diarra",
        role: "Chef d'Entreprise",
        content: "Une solution sur mesure qui a radicalement boosté notre productivité et notre image de marque. Je recommande vivement leurs services digitaux.",
        initials: "MD",
    },
    {
        name: "Fanta Coulibaly",
        role: "Responsable Import-Export",
        content: "Un partenaire stratégique qui maîtrise parfaitement les rouages du commerce international au Sahel. Fiabilité, efficacité et professionnalisme.",
        initials: "FC",
    }
];

export default function Testimonials() {
    return (
        <section className="bg-sahel-sand dark:bg-slate-950 py-24">
            <div className="max-w-screen-xl mx-auto px-4">
                <ScrollReveal animation="reveal-up">
                    <div className="text-center mb-16">
                        <p className="text-sahel-gold font-black uppercase tracking-[0.25em] text-xs mb-4">Témoignages</p>
                        <h2 className="text-4xl lg:text-5xl font-black text-sahel-navy dark:text-white uppercase tracking-tight mb-4">
                            Ils nous font <span className="text-gradient-gold">confiance</span>
                        </h2>
                        <div className="h-1 w-16 bg-sahel-gold mx-auto rounded-full" />
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => (
                        <ScrollReveal key={index} animation="reveal-up" delay={(`reveal-delay-${index * 150 + 100}`)}>
                            <div className="group bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-sahel-gold/25 hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-sahel-gold text-sahel-gold" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 flex-1 text-sm">
                                    &ldquo;{t.content}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/5">
                                    <div className="w-12 h-12 bg-sahel-gold rounded-xl flex items-center justify-center text-white font-black text-base flex-shrink-0 group-hover:rotate-6 transition-transform duration-500">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-sahel-navy dark:text-white">{t.name}</h4>
                                        <p className="text-sahel-gold text-xs font-bold uppercase tracking-widest mt-0.5">{t.role}</p>
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
