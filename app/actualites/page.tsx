import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const articles = [
    {
        id: 1,
        title: "Expansion du Groupe Sahel au Niger : Nouveau bureau à Niamey",
        description: "Dans le cadre de notre stratégie de développement régional, nous sommes fiers d'annoncer l'ouverture de nos nouveaux bureaux à Niamey.",
        date: "15 Avril 2024",
        author: "Direction Communication",
        category: "Expansion",
        image: "https://images.unsplash.com/photo-1541975037447-ec3bc570aab9?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Digitalisation des flottes : Les enjeux de 2024 au Sahel",
        description: "Comment la technologie GPS transforme la logistique dans les zones reculées et sécurise les transports de marchandises.",
        date: "10 Avril 2024",
        author: "Expert Tech",
        category: "Technologie",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "Partenariats Internationaux : Signature avec un leader européen",
        description: "Un nouvel accord stratégique pour faciliter l'import-export de produits essentiels vers le Mali et les pays voisins.",
        date: "05 Avril 2024",
        author: "Pôle Commerce",
        category: "Commerce",
        image: "https://images.unsplash.com/photo-1521791136064-7986c295944b?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Actualites() {
    return (
        <main className="min-h-screen bg-sahel-sand dark:bg-sahel-navy transition-colors duration-500">
            <Navbar />
            <PageHero 
                title="Actualités &" 
                subtitle="Dernières Nouvelles"
                description="Suivez l'évolution du Groupe Sahel et restez informé des tendances du marché regional."
                accent="Perspectives"
            />
            
            <section className="py-24 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((article, index) => (
                            <ScrollReveal key={article.id} animation="reveal-up" delay={index * 150}>
                                <article className="group bg-white dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-white/5 hover:border-sahel-gold/30 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src={article.image} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            alt={article.title} 
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-4 py-2 bg-sahel-gold text-white text-xs font-black uppercase tracking-widest rounded-full">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {article.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <User className="w-3.5 h-3.5" />
                                                {article.author}
                                            </div>
                                        </div>
                                        
                                        <h2 className="text-2xl font-black text-sahel-navy dark:text-white mb-4 group-hover:text-sahel-gold transition-colors duration-300 leading-tight">
                                            {article.title}
                                        </h2>
                                        
                                        <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                                            {article.description}
                                        </p>
                                        
                                        <div className="mt-auto">
                                            <Link 
                                                href={`/actualites/${article.id}`} 
                                                className="inline-flex items-center gap-2 text-sm font-black text-sahel-navy dark:text-white uppercase tracking-widest group/link"
                                            >
                                                <span>Lire la suite</span>
                                                <ArrowRight className="w-4 h-4 text-sahel-gold transition-transform duration-300 group-hover/link:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
