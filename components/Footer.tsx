import Link from 'next/link';
import { Gavel, MapPin, Phone, Send } from 'lucide-react';
import { FOOTER_LINKS, OFFICE_INFO } from '@/lib/constants/navigation';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-10 border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white">
            <Gavel className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold font-serif uppercase tracking-widest">{OFFICE_INFO.name}</h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 mt-2">
            {OFFICE_INFO.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-sm">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.href}><Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Contact Info</h4>
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
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm">Newsletter</h4>
          <p className="text-xs text-slate-400">Subscribe for monthly legal insights and updates.</p>
          <div className="flex">
            <input
              className="bg-slate-800 border-none text-white text-sm px-4 py-2 rounded-l-lg w-full focus:ring-1 focus:ring-accent outline-none"
              placeholder="Email Address"
              type="email"
            />
            <button className="bg-accent text-slate-900 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {OFFICE_INFO.name} LLP. All rights reserved. Attorney Advertising.</p>
        <div className="flex gap-6">
          {FOOTER_LINKS.legal.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-slate-300">{link.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
