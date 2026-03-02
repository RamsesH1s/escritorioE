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
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight font-serif">Areas of Practice</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Providing comprehensive legal solutions across multiple disciplines with a commitment to excellence, integrity, and tradition.
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Civil Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Expert litigation and dispute resolution for individuals and businesses. We handle complex contractual disputes, property law, and tort claims.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Breach of Contract
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Personal Injury Claims
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Property Disputes
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Corporate Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Briefcase className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Corporate Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Comprehensive counsel on mergers, acquisitions, and corporate governance. Supporting your business through every stage of growth.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> M&A Transactions
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Venture Capital
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Compliance & Risk
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Labor Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Labor Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Protecting employer and employee rights. Specialized in employment contracts, workplace discrimination, and labor union negotiations.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Workplace Safety
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Wrongful Termination
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Compensation Audits
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Family Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Heart className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Family Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Compassionate guidance through divorce, custody, and estate planning. We prioritize the well-being of your family during difficult transitions.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Divorce Mediation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Child Custody
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Wills & Trusts
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Criminal Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Shield className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Criminal Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Dedicated defense and representation in high-stakes criminal matters. Protecting your rights and ensuring a fair legal process.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> White Collar Defense
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Felony Representation
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Appeals & Petitions
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Tax Law */}
            <div className="group p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-accent/50 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Landmark className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Tax Law</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6">
                Strategic tax planning and resolution for complex financial structures. Minimizing liability while ensuring full legal compliance.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> International Tax
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Estate Tax Planning
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> IRS Controversy
                </li>
              </ul>
              <Link href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                LEARN MORE <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-light dark:bg-slate-900/80">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white dark:bg-background-dark p-12 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Need Legal Consultation?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Our team of experienced attorneys is ready to review your case and provide the strategic counsel you deserve. Contact us today to schedule your confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Book a Consultation
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                View Case Results
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
