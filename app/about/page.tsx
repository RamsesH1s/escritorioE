import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Scale, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-slate-950/40 z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFf0dt2rH-V58c-W9Mtmc5-3oCoANGI9vzcBgwCLljceUHfErfmXhopjOQvICT3szFnL0GiEjWiicOWJQcl-s3ZaggUYUezN3Hp9lR3-pJw1mD8GR1NmpsfA5dgbiBuQQoI9045Y6jPPhJWEE9fPVVuezxZLAMqlL-nZXQ9YobQbQZLA9XkV9YLrO3YcZ2n1oAyhMIDzIu5Ok-24kQcW-n2UMoI8QEDIGADzrgmv0WPNYAU_ewEndBWDvmBB8Jlhy0dOMKwkWqaI"
            alt="Law firm office interior"
            fill
            className="object-cover opacity-50"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 text-center max-w-4xl">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Nosso Legado</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight font-serif leading-[1.1]">
            Uma Tradição de <span className="text-accent italic">Excelência</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            Por mais de três décadas, o escritório Dayra Oliveira mantém-se como um referencial de integridade, fornecendo orientação jurídica inigualável.
          </p>
        </div>
      </section>

      {/* Firm Overview */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-accent"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Quem Somos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-serif leading-tight">
                Comprometidos com a Justiça, Dedicados a Você.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Fundado sob os princípios de inabaláveis padrões éticos e defesa incansável, nosso escritório construiu uma forte reputação no tratamento dos assuntos jurídicos mais complexos.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Acreditamos que todo cliente merece atenção personalizada e uma estratégia elaborada. Nossa equipe de advogados traz um aprendizado diverso e colaborativo em cada caso trabalhado.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
                  Consulte-nos
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB53FfdlwIkyoO7WX-Rw8utTyKCXunzcijopMEjF25TFmJ_HwDFeHYPpufKhRU60DkNJ7skJeYxf8aGkp6rWibVDHDu8BlH3lIPy9pU5GJZiuXYfVpF4ROrbf1C0xWK5zi1MjoVhl5XLU9FPlyAAvWEL-I7qXZ7DsVIyAMZ7DSMd3CyeczHOTjKaMev5p1fXWXSQmJLBncHZcTMY6HiuGKgo7XHUFD0oVGWw1E0GrpXu1faXouDdJqxcSC8SWhU5MzAcCkZweyMxzA"
                  alt="Attorneys in discussion"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-xs hidden md:block">
                <div className="text-5xl font-black text-primary font-serif mb-2">30+</div>
                <div className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-2">Anos de Experiência</div>
                <p className="text-slate-500 text-sm">Entregando resultados excepcionais em várias áreas de atuação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Nossa Filosofia</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">Valores Que Nos Movem</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Scale className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Integridade</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Atuamos com absoluta transparência e pautamos nossos compromissos pelos mais altos padrões éticos.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Award className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Excelência</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Buscamos a perfeição em nossas estratégias, documentação e representações em tribunais.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Foco no Cliente</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Seus objetivos são nossa prioridade. Entendemos e nos adaptamos para atender às suas necessidades.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <BookOpen className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Inovação</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Nos adaptamos continuamente ao cenário legal em evolução, utilizando estratégias modernas e resolutivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Nossa Liderança</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">Conheça Nossos Sócios</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Nossos competentes e qualificados sócios trazem décadas de experiência e uma trajetória sólida de grandes resultados.
              </p>
            </div>
            <Link href="/team" className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:gap-2 transition-all">
              Ver Equipe <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Partner 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwqQGX3C6kVWJgD-Pdmf8spUd4hOxeopNUv2HLWJicul1xxIQAYuGIDdjQiu2EEXs3mw0ZhIOcmsjLaYmZwaekd-L42sqFhWHfBwnZ4qRe9jTsDlsrfVsZuKu-xUHQJ7V2fDO4JipLxvd1F-BAWx-ZjArr8Fh6q5O_fNoINoNb7gkcZl2xhbPdLI_CAO9cWZciaksrbH8JFTVMahuTWVzn1--Wj4AnUN5eJeErBcaeXojbndUhjpYUQYOpkjPWJKS-BEai4oaRY"
                  alt="David Lexington"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-serif mb-1">David Lexington</h3>
              <p className="text-primary font-medium mb-3">Sócio-Gerente</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                Com mais de 25 anos de experiência e atuação profissional, representa empresas atuantes ao redor de todo o mundo.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoxSLJFFsbkGEt7rJzurFnjs27McEGt024sJiIOWTCw_KbmdzO07U7qolQ2jNtpZsPs9PLILGpNFBhhq66mOvi58qIm1YO6NJS5DWzUxclVXCzwwwvGL4dOZ3blkWQ5V-rOFxVHt5Zz4lIp3sbqcs6TZE8GUWF5arGPrRCMb9i74_qrVd8RkD6pvdUTRmNvsOdjEYKqr1EU8H-1CHpl8Owi9kzwP9feVjuX2oo17-b3LmBrHZS9OgHeATQyVrX7augXhGx0lcZDU"
                  alt="Sarah Thorne"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-serif mb-1">Sarah Thorne</h3>
              <p className="text-primary font-medium mb-3">Sócia Sênior, Direito de Família</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                Eximia liderança em assuntos delicados de sucessão familiar, aconselhamento e resolução de guarda, processos de mediação de famílias de diversos tipos e naturezas.
              </p>
            </div>

            {/* Partner 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjLsDdWo2_dGnv7vkArzFCp_npk_ayShEmuTkjQc4VORrGO9SbWnzKv7SxCqVYlsGVKfRSqKZhQvfez7oNETL43tvuIiCU_NRPgpgXlGajuAnMHE8ZPXNQDN6qBKSl1bTnyK_8iAlDpMJCNVPSBaHcbhFHFLhNTT5e5XrcW5jCLBQjTXplyNXxOQsgyafrl1o63RHHwpGGutcBJGp45xRXOdcLey977VptJNmS59zYMUgsoNbifJJ1gwW1H2ykZZBfdKQjXPDKL9c"
                  alt="James Miller"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-serif mb-1">James Miller</h3>
              <p className="text-primary font-medium mb-3">Sócio, Setor Imobiliário</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                Especialista em todo o processo de aquisições de grandes patrimônios e transações comerciais ao redor de todo o mundo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
