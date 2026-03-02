'use client';

import Link from 'next/link';
import { Gavel, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { MAIN_NAVIGATION, OFFICE_INFO } from '@/lib/constants/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center gap-3 text-primary dark:text-blue-400">
          <Gavel className="w-8 h-8" />
          <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight font-serif uppercase tracking-widest">
            {OFFICE_INFO.name}
          </h2>
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
        <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 border border-slate-200 dark:border-slate-700">
          <Search className="w-5 h-5 text-slate-500" />
          <input
            className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-40 ml-2 outline-none"
            placeholder="Search legal insights..."
          />
        </div>
        <button className="hidden sm:flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
          <span>Book Consultation</span>
        </button>
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
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 mt-2 border border-slate-200 dark:border-slate-700">
            <Search className="w-5 h-5 text-slate-500" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-full ml-2 outline-none"
              placeholder="Search legal insights..."
            />
          </div>
          <button className="w-full mt-2 cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all">
            <span>Book Consultation</span>
          </button>
        </div>
      )}
    </header>
  );
}
