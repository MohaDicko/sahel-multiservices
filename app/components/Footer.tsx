import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-sahel-navy text-gray-300 border-t border-white/10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-16">
                <div className="md:flex md:justify-between gap-12">
                    {/* Brand Section */}
                    <div className="mb-12 md:mb-0 max-w-sm">
                        <a href="#" className="flex items-center mb-6">
                            <img src="/sahel-logo-v3.png" className="h-10 me-3" alt="Sahel Logo" />
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
                                Groupe<span className="text-sahel-gold">Sahel</span>
                            </span>
                        </a>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Votre partenaire de confiance au Sahel pour des solutions innovantes en digital, BTP, énergie et commerce. Expertise locale, standards internationaux.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sahel-gold hover:text-sahel-navy transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 flex-1">
                        {/* Services Link */}
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Services</h2>
                            <ul className="text-gray-400 font-medium space-y-4">
                                <li><Link href="/digital" className="hover:text-sahel-gold transition-colors">Sahel Tech</Link></li>
                                <li><a href="http://gpsfleetsahel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-sahel-gold transition-colors">GPS Fleet Sahel</a></li>
                                <li><Link href="/commerce" className="hover:text-sahel-gold transition-colors">Sahel Distribution</Link></li>
                                <li><Link href="/btp" className="hover:text-sahel-gold transition-colors">Sahel Infra</Link></li>
                                <li><Link href="/energie" className="hover:text-sahel-gold transition-colors">Sahel Energy</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Liens Rapides</h2>
                            <ul className="text-gray-400 font-medium space-y-4">
                                <li><a href="#" className="hover:text-sahel-gold transition-colors">Accueil</a></li>
                                <li><a href="#about" className="hover:text-sahel-gold transition-colors">À propos</a></li>
                                <li><a href="#contact" className="hover:text-sahel-gold transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-sahel-gold transition-colors">Actualités</a></li>
                            </ul>
                        </div>

                        {/* Contact Info Footer */}
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase tracking-wider">Nous Trouver</h2>
                            <ul className="text-gray-400 font-medium space-y-4">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-sahel-gold shrink-0" />
                                    <span>Niamana, Bamako, Mali</span>
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="w-5 h-5 text-sahel-gold shrink-0" />
                                    <a href="tel:+22374132032" className="hover:text-sahel-gold transition-colors">
                                        +223 74 13 20 32
                                    </a>
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="w-5 h-5 text-sahel-gold shrink-0" />
                                    <a href="mailto:contact@sahel-multiservices.com" className="text-sm hover:text-sahel-gold transition-colors break-all">
                                        contact@sahel-multiservices.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-white/10 lg:my-10" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-widest">
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">RCC: <span className="text-sahel-gold">32502529582040R</span></span>
                        <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">NIF: <span className="text-sahel-gold">NIF00560521 H</span></span>
                    </div>
                    <div className="text-sm text-gray-500">
                        © 2024 <a href="#" className="hover:text-white transition-colors">Groupe Sahel™</a>. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
}
