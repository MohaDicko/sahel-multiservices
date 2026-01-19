"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/sahel-logo-v3.png" className="h-10 w-auto" alt="Sahel Multiservices Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Sahel<span className="text-amber-500">Multiservices</span>
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d={navOpen ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" : "M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2z"} clip-rule="evenodd" />
            </svg>
          </button>
          <Link
            href="#contact"
            className="text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contactez-nous
          </Link>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="#" className="block py-2 px-3 text-white bg-amber-700 rounded md:bg-transparent md:text-amber-500 md:p-0" aria-current="page">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#services" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-amber-500 md:p-0">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-amber-500 md:p-0">
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
