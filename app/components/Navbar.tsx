"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Zap } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const getBrandInfo = () => {
    if (pathname?.includes('/digital'))  return { main: 'Sahel', sub: 'Tech',         logo: '/logos/sahel-tech.png' };
    if (pathname?.includes('/commerce')) return { main: 'Sahel', sub: 'Distribution', logo: '/logos/sahel-distribution.png' };
    return { main: 'Groupe', sub: 'Sahel', logo: '/sahel-logo-v3.png' };
  };

  const brand = getBrandInfo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil',       href: '/' },
    { name: 'Services',      href: '/#services' },
    { name: 'Pourquoi nous', href: '/#features' },
    { name: 'À propos',      href: '/#about' },
    { name: 'Actualités',    href: '/actualites' },
    { name: 'Contact',       href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled 
        ? "glass py-3 shadow-[0_10px_40px_rgba(0,0,0,0.3)] border-b border-white/10" 
        : "bg-transparent py-8"
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sahel-gold via-amber-300 to-sahel-bronze transition-all duration-300 z-50 shadow-[0_0_15px_rgba(180,83,9,0.6)]" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-6">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-4 group relative">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-1.5 backdrop-blur-md border border-white/10 group-hover:border-sahel-gold/50 transition-all duration-500 shadow-xl">
            <Image 
              src={brand.logo} 
              width={44} height={44} 
              className="h-11 w-auto transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" 
              alt={`${brand.main} ${brand.sub}`} 
            />
          </div>
          <div className="flex flex-col -space-y-1.5">
            <span className="text-2xl font-black text-white tracking-tighter font-display uppercase">
              {brand.main}<span className="text-gradient-gold">{brand.sub}</span>
            </span>
            <span className="text-[9px] font-black text-sahel-gold uppercase tracking-[0.3em] opacity-80 hidden lg:block">
              Excellence Régionale
            </span>
          </div>
        </Link>

        {/* ── Right Actions ── */}
        <div className="flex md:order-2 items-center gap-4 lg:gap-6">
          {/* Language Switcher (Compact UI) */}
          <div className="hidden sm:flex items-center bg-white/5 rounded-xl border border-white/10 p-1 group">
            <button className="px-3 py-1.5 text-[10px] font-black text-sahel-gold bg-white/10 rounded-lg transition-all shadow-lg">FR</button>
            <button className="px-3 py-1.5 text-[10px] font-black text-white/40 hover:text-white transition-all">EN</button>
          </div>

          <Link
            href="https://wa.me/22374132032"
            target="_blank"
            className="hidden lg:flex items-center gap-3 text-white font-black rounded-2xl text-sm px-8 py-3.5 text-center transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(180,83,9,0.3)] group btn-premium bg-gradient-to-br from-sahel-gold to-sahel-bronze uppercase tracking-widest"
            aria-label="Contactez-nous sur WhatsApp"
          >
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>Urgence 24/7</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-3 text-white rounded-2xl md:hidden hover:bg-white/10 focus:outline-none transition-all border border-white/10 group active:scale-95 shadow-xl"
            onClick={() => setNavOpen(!navOpen)}
            aria-expanded={navOpen}
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ── Desktop Nav Links ── */}
        <nav className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" aria-label="Menu principal">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 rounded-xl relative group ${
                        isActive ? "text-sahel-gold bg-white/5" : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-4 right-4 h-[2px] bg-sahel-gold rounded-full transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Mobile Menu (Overlay) ── */}
        <div 
          className={`fixed inset-x-0 top-[88px] glass border-b border-white/10 md:hidden transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] transform z-40 ${
            navOpen ? "translate-y-0 opacity-100 visible h-[calc(100vh-88px)]" : "-translate-y-10 opacity-0 invisible h-0"
          }`}>
          <ul className="flex flex-col p-8 space-y-4">
            {navLinks.map((link, idx) => (
              <li key={link.name} style={{ transitionDelay: `${idx * 100}ms` }} className={`transition-all duration-500 transform ${navOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <Link
                  href={link.href}
                  className="flex items-center text-4xl font-black text-white hover:text-sahel-gold transition-colors py-4 border-b border-white/5 font-display uppercase tracking-tighter"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className={`pt-10 transition-all duration-500 delay-500 transform ${navOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 text-white font-black rounded-[2rem] py-6 text-2xl shadow-2xl bg-gradient-to-r from-sahel-gold to-sahel-bronze uppercase tracking-widest"
                onClick={() => setNavOpen(false)}
              >
                Lancer un Projet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
