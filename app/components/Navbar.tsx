"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
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
          <Link
            href="#contact"
            className="text-white bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contactez-nous
          </Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
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
