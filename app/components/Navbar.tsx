"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
      ? "bg-slate-900/90 backdrop-blur-lg py-2 shadow-lg border-b border-white/5"
      : "bg-transparent py-4"
      }`}>
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-150 z-50" style={{ width: `${scrollProgress}%` }}></div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative overflow-hidden rounded-lg">
            <img src="/sahel-logo-v3.png" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" alt="Sahel Logo" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            Sahel<span className="text-amber-500">Multiservices</span>
          </span>
        </Link>

        {/* Desktop Navigation & Action Button */}
        <div className="flex md:order-2 items-center space-x-4">
          <Link
            href="https://wa.me/22374132032"
            target="_blank"
            className="hidden lg:flex items-center gap-2 text-white bg-amber-600 hover:bg-amber-700 font-bold rounded-xl text-sm px-6 py-2.5 text-center transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
          >
            <Phone className="w-4 h-4" />
            Urgence 24/7
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-2.5 text-gray-400 rounded-xl md:hidden hover:bg-slate-800 focus:outline-none transition-colors border border-slate-700/50"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Menu</span>
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Menu Links */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 text-gray-300 hover:text-amber-500 transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu (Overlay) */}
        <div className={`fixed inset-x-0 top-[72px] bg-slate-900/95 backdrop-blur-xl border-b border-white/5 md:hidden transition-all duration-500 ease-in-out transform ${navOpen ? "translate-y-0 opacity-100 visible h-auto pb-8" : "-translate-y-10 opacity-0 invisible h-0"
          }`}>
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center text-xl font-bold text-white hover:text-amber-500 transition-colors py-2 border-b border-slate-800"
                  onClick={() => setNavOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 text-white bg-amber-600 font-bold rounded-xl py-4 text-center"
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
