import Image from 'next/image';
import Link from 'next/link';
import { Gavel, ShoppingBag, Users, Landmark, Shield, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';

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
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Consumer Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <ShoppingBag className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito do Consumidor</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Proteção nas relações de consumo, garantindo a defesa de seus direitos contra práticas abusivas de empresas e prestadores de serviços.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Práticas Abusivas
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Indenização por Danos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Revisão de Contratos de Consumo
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
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
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Banking Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Landmark className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Bancário</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Atuação especializada contra abusos de instituições financeiras, visando a proteção do patrimônio e a revisão de contratos desproporcionais.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Juros Abusivos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Fraudes Bancárias
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Endividamento
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Social Security Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Previdenciário</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Garantia dos seus direitos perante o INSS. Planejamento de aposentadorias, auxílios e benefícios com a máxima segurança.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Aposentadorias
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Auxílio-Doença
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Pensão por Morte
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Public Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Building2 className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Direito Público</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Consultoria e atuação em licitações, contratos administrativos e defesa de servidores públicos. Foco na legalidade e transparência.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Licitações e Contratos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Processos Administrativos
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Defesa de Servidores
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                ENTRAR EM CONTATO <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-light dark:bg-slate-900/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-background-dark p-12 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Precisa de ajuda com alguma área que não apresentamos acima?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Temos profissionais qualificados em diversas outras especialidades jurídicas. Fale conosco sobre o seu caso e cuidaremos de tudo para você.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
