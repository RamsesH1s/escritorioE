'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Gavel, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { MAIN_NAVIGATION, OFFICE_INFO } from '@/lib/constants/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-4 group" aria-label="Dayra Oliveira ADV">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border border-slate-100 dark:border-slate-800 shadow-sm transition-transform group-hover:scale-105">
            <Image
              src="/images/logo2.png.jpeg"
              alt="Logo"
              fill
              sizes="(max-width: 768px) 192px, 224px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              Dayra Oliveira <span className="text-primary">ADV</span>
            </span>
            <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none mt-0.5">
              Advocacia e Consultoria
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {MAIN_NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4 md:gap-6">

        <Link href="https://wa.me/558694404644?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta." target="_blank" rel="noopener noreferrer" className="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
          <span>Agendar Consulta</span>
        </Link>
        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 shadow-lg md:hidden flex flex-col p-6 gap-4">
          {MAIN_NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors uppercase tracking-wider py-2 border-b border-slate-100 dark:border-slate-800">
              {item.label}
            </Link>
          ))}

          <Link href="https://wa.me/558694404644?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta." target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-2 cursor-pointer flex items-center justify-center rounded-lg h-11 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
            <span>Agendar Consulta</span>
          </Link>
        </div>
      )}
    </header>
  );
}
