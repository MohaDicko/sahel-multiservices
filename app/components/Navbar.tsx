"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  const getBrandInfo = () => {
    if (pathname?.includes('/digital')) return { main: 'Sahel', sub: 'Tech', logo: '/logos/sahel-tech.png' };
    if (pathname?.includes('/commerce')) return { main: 'Sahel', sub: 'Distribution', logo: '/logos/sahel-distribution.png' };
    return { main: 'Groupe', sub: 'Sahel', logo: '/sahel-logo-v3.png' };
  };

  const brand = getBrandInfo();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll for navbar appearance and progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Pourquoi nous ?', href: '/#features' },
    { name: 'À propos', href: '/#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
      ? "glass py-2 shadow-2xl border-b border-white/10"
      : "bg-transparent py-6"
      }`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-sahel-gold to-sahel-bronze transition-all duration-300 z-50 shadow-[0_0_10px_rgba(180,83,9,0.5)]" style={{ width: `${scrollProgress}%` }}></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group relative">
          <div className="relative overflow-hidden rounded-xl bg-white/5 p-1 backdrop-blur-sm border border-white/10 group-hover:border-sahel-gold/50 transition-all duration-500">
            <img src={brand.logo} className="h-10 w-auto transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" alt={`${brand.main} ${brand.sub} Logo`} />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="self-center text-2xl font-black whitespace-nowrap text-white tracking-tighter">
              {brand.main}<span className="text-sahel-gold">{brand.sub}</span>
            </span>
            <span className="text-[10px] font-bold text-sahel-gold uppercase tracking-[0.2em] opacity-80 lg:block hidden">
              Solutions Sahéliennes
            </span>
          </div>
        </Link>

        {/* Desktop Navigation & Action Button */}
        <div className="flex md:order-2 items-center space-x-6">
          <Link
            href="https://wa.me/22374132032"
            target="_blank"
            className="hidden lg:flex items-center gap-2 text-sahel-navy bg-sahel-gold hover:bg-amber-400 font-black rounded-xl text-sm px-8 py-3 text-center transition-all duration-500 hover:scale-105 shadow-[0_10px_30px_rgba(180,83,9,0.3)] group"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Urgence 24/7
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-3 text-white rounded-2xl md:hidden hover:bg-white/10 focus:outline-none transition-all border border-white/10 group active:scale-95"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Menu</span>
            {navOpen ? <X className="w-6 h-6 animate-scale-in" /> : <Menu className="w-6 h-6 animate-scale-in" />}
          </button>
        </div>

        {/* Desktop Menu Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-bold md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 px-1 text-slate-300 hover:text-white transition-all duration-300 relative group text-sm uppercase tracking-widest"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sahel-gold transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu (Overlay) */}
        <div className={`fixed inset-x-0 top-[80px] glass border-b border-white/10 md:hidden transition-all duration-700 ease-[cubic-bezier(0.22, 1, 0.36, 1)] transform ${navOpen ? "translate-y-0 opacity-100 visible h-[calc(100vh-80px)]" : "-translate-y-10 opacity-0 invisible h-0"
          }`}>
          <ul className="flex flex-col p-8 space-y-6">
            {navLinks.map((link, idx) => (
              <li key={link.name} style={{ transitionDelay: `${idx * 100}ms` }} className={`transition-all duration-500 transform ${navOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                <Link
                  href={link.href}
                  className="flex items-center text-3xl font-black text-white hover:text-sahel-gold transition-colors py-2 border-b border-white/5"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 text-sahel-navy bg-sahel-gold font-black rounded-2xl py-5 text-xl shadow-xl shadow-sahel-gold/20"
                onClick={() => setNavOpen(false)}
              >
                Parlons de votre projet
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
