import Image from 'next/image';
import Link from 'next/link';
import { Gavel, Briefcase, Users, Heart, Shield, Landmark, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Practices() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-950/40 z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBFf0dt2rH-V58c-W9Mtmc5-3oCoANGI9vzcBgwCLljceUHfErfmXhopjOQvICT3szFnL0GiEjWiicOWJQcl-s3ZaggUYUezN3Hp9lR3-pJw1mD8GR1NmpsfA5dgbiBuQQoI9045Y6jPPhJWEE9fPVVuezxZLAMqlL-nZXQ9YobQbQZLA9XkV9YLrO3YcZ2n1oAyhMIDzIu5Ok-24kQcW-n2UMoI8QEDIGADzrgmv0WPNYAU_ewEndBWDvmBB8Jlhy0dOMKwkWqaI"
            alt="Interior of a classic law library with books and scales"
            fill
            className="object-cover opacity-60"
            referrerPolicy="no-referrer"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Nossa Especialidade</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight font-serif">Áreas de Atuação</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Fornecendo soluções jurídicas abrangentes em múltiplas disciplinas com compromisso de excelência, integridade e tradição.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Civil Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Gavel className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Civil</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Especialistas em litígios e resolução de disputas. Lidamos com contratos complexos, direito de propriedade e responsabilidade civil.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Quebra de Contrato
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Danos Pessoais
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Disputas de Propriedade
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Corporate Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Briefcase className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Societário</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Assessoria completa em fusões, aquisições e governança corporativa. Apoiando seu negócio em todas as fases de crescimento.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Transações M&A
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Venture Capital
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Compliance e Riscos
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Labor Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Trabalhista</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Protegendo os direitos de empregadores e empregados. Especializados em contratos, discriminação e negociações sindicais.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Segurança no Trabalho
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Rescisões Indevidas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Auditorias de Remuneração
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Family Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito de Família</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Orientação compassiva em divórcios, guarda e planejamento sucessório. Priorizamos o bem-estar de sua família.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Mediação de Divórcio
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Guarda de Menores
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Testamentos e Fundos
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Criminal Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Penal</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Defesa e representação em questões criminais de alto risco. Protegendo seus direitos e garantindo um processo justo.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Defesa de Colarinho Branco
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Representação em Crimes Graves
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Recursos e Petições
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Tax Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Landmark className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Tributário</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Planejamento estratégico e resolução para estruturas financeiras complexas. Minimizando riscos mantendo a conformidade total.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Tributação Internacional
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Planejamento Tributário Imobiliário
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Controvérsias Fiscais
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                SAIBA MAIS <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-light dark:bg-slate-900/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-background-dark p-12 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Precisa de Consulta Jurídica?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Nossa equipe experiente de advogados está pronta para analisar seu caso e fornecer o conselho estratégico que você merece. Contate-nos hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Agendar Reunião
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Ver Resultados
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
