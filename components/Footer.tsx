import Link from 'next/link';
import Image from 'next/image';
import { Gavel, MapPin, Phone } from 'lucide-react';
import { FOOTER_LINKS, OFFICE_INFO } from '@/lib/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-10 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Dayra Oliveira">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
              <Image
                src="/images/logo2.png.jpeg"
                alt="Logo Dayra Oliveira"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <span className="text-xl font-serif font-bold text-white">
              Dayra Oliveira
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400 mt-2">
            {OFFICE_INFO.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Links Rápidos</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contato</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 min-w-[16px]" />
              <span dangerouslySetInnerHTML={{ __html: OFFICE_INFO.address.fullHTML }} />
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent min-w-[16px]" />
              <span>{OFFICE_INFO.phone}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {OFFICE_INFO.name}. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          {FOOTER_LINKS.legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-300">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
