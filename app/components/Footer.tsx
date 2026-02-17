import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-sahel-navy text-slate-400 border-t border-white/5 py-20">
            <div className="mx-auto w-full max-w-screen-xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Brand Section */}
                    <div className="lg:col-span-4 max-w-sm">
                        <Link href="/" className="flex items-center mb-10 group">
                            <div className="relative overflow-hidden rounded-xl bg-white/5 p-1 border border-white/10 group-hover:border-sahel-gold/50 transition-all duration-500 mr-4">
                                <img src="/sahel-logo-v3.png" className="h-10 w-auto" alt="Sahel Logo" />
                            </div>
                            <span className="self-center text-3xl font-black whitespace-nowrap text-white tracking-tighter italic">
                                Groupe<span className="text-sahel-gold">Sahel</span>
                            </span>
                        </Link>
                        <p className="text-lg mb-10 leading-relaxed font-medium italic opacity-80">
                            Propulser l'innovation et le commerce au cœur de la région sahélienne avec excellence et intégrité.
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-500 shadow-xl group">
                                <Facebook className="w-6 h-6 group-hover:scale-110" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-500 shadow-xl group">
                                <Linkedin className="w-6 h-6 group-hover:scale-110" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-500 shadow-xl group">
                                <Instagram className="w-6 h-6 group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {/* Services Link */}
                        <div>
                            <h2 className="mb-8 text-xs font-black text-sahel-gold uppercase tracking-[0.2em] opacity-70">Expertises</h2>
                            <ul className="space-y-5 font-bold text-lg">
                                <li><Link href="/digital" className="hover:text-white transition-all hover:translate-x-2 block">Sahel Tech</Link></li>
                                <li><a href="http://gpsfleetsahel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:translate-x-2 block">GPS Fleet Sahel</a></li>
                                <li><Link href="/commerce" className="hover:text-white transition-all hover:translate-x-2 block">Sahel Distribution</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="mb-8 text-xs font-black text-sahel-gold uppercase tracking-[0.2em] opacity-70">Navigation</h2>
                            <ul className="space-y-5 font-bold text-lg">
                                <li><Link href="/" className="hover:text-white transition-all hover:translate-x-2 block">Accueil</Link></li>
                                <li><a href="#about" className="hover:text-white transition-all hover:translate-x-2 block">À propos</a></li>
                                <li><a href="#contact" className="hover:text-white transition-all hover:translate-x-2 block">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-all hover:translate-x-2 block">Actualités</a></li>
                            </ul>
                        </div>

                        {/* Contact Info Footer */}
                        <div className="col-span-2 md:col-span-1 border-t border-white/5 pt-12 md:border-t-0 md:pt-0">
                            <h2 className="mb-8 text-xs font-black text-sahel-gold uppercase tracking-[0.2em] opacity-70">Coordonnées</h2>
                            <ul className="space-y-6 font-bold">
                                <li className="flex gap-4">
                                    <MapPin className="w-6 h-6 text-sahel-gold shrink-0" />
                                    <span className="text-white">Niamana, Bamako, Mali</span>
                                </li>
                                <li className="flex gap-4">
                                    <Phone className="w-6 h-6 text-sahel-gold shrink-0" />
                                    <a href="tel:+22374132032" className="text-white hover:text-sahel-gold transition-colors">
                                        +223 74 13 20 32
                                    </a>
                                </li>
                                <li className="flex gap-4">
                                    <Mail className="w-6 h-6 text-sahel-gold shrink-0" />
                                    <a href="mailto:contact@sahel-multiservices.com" className="text-white hover:text-sahel-gold transition-colors break-all text-sm lg:text-base">
                                        contact@sahel-multiservices.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                    <div className="flex flex-wrap gap-4">
                        <div className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">RCC:</span>
                            <span className="text-sahel-gold font-bold text-sm">32502529582040R</span>
                        </div>
                        <div className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-50">NIF:</span>
                            <span className="text-sahel-gold font-bold text-sm">NIF00560521 H</span>
                        </div>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.1em] opacity-40">
                        © 2024 Groupe Sahel. L'Alliance de l'Expertise au Sahel.
                    </div>
                </div>
            </div>
        </footer>
    );
}
