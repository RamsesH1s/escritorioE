import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '@/lib/constants/practices';

export default function PracticeAreasSection() {
    return (
        <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
                    <div className="flex flex-col gap-2">
                        <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Especialidades</span>
                        <h2 className="text-slate-900 dark:text-slate-100 text-4xl font-serif font-bold">Áreas de Atuação</h2>
                    </div>
                    <Link href="/practices" className="text-primary font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Ver Todas as Áreas <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRACTICE_AREAS.map((practice) => (
                        <div key={practice.id} className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer">
                            <Image
                                src={practice.imageSrc}
                                alt={practice.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-primary/40 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900 to-transparent">
                                <h3 className="text-white text-xl font-bold font-serif">{practice.title}</h3>
                                <p className="text-slate-200 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{practice.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
