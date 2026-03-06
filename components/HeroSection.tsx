import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="@container">
      <div className="relative flex min-h-[700px] flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Luxurious dark wood law firm library with legal books"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[900px] flex flex-col items-center gap-8">
          <div className="w-20 h-1 bg-accent mb-2"></div>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
            Excelência em <span className="text-accent italic">Soluções Jurídicas</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-display">
            Aconselhamento jurídico sofisticado e confiável com um compromisso inabalável com a integridade, precisão e resultados excepcionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/contact" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold uppercase tracking-widest transition-all">
              Agende uma Reunião
            </Link>
            <Link href="/practices" className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-base font-bold uppercase tracking-widest backdrop-blur-sm transition-all">
              Áreas de Atuação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
