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
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight font-serif leading-[1.1]">
            A Tradition of <span className="text-accent italic">Excellence</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
            For over three decades, LegalExcellence has stood as a beacon of integrity, providing unparalleled legal counsel to individuals and corporations worldwide.
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
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-serif leading-tight">
                Committed to Justice, Dedicated to You.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Founded on the principles of unwavering ethical standards and relentless advocacy, our firm has built a reputation for handling the most complex and high-stakes legal matters.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We believe that every client deserves personalized attention and a tailored strategy. Our team of distinguished attorneys brings diverse expertise and a collaborative approach to every case.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
                  Consult With Us
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
                <div className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-2">Years of Experience</div>
                <p className="text-slate-500 text-sm">Delivering exceptional results across multiple practice areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Our Philosophy</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">The Values That Drive Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Scale className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Integrity</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We operate with absolute transparency and adhere to the highest ethical standards in all our dealings.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Award className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Excellence</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We strive for perfection in our legal strategies, documentation, and courtroom representation.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Users className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Client Focus</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Your goals are our priority. We listen, understand, and tailor our approach to meet your specific needs.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <BookOpen className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-serif">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We continuously adapt to the evolving legal landscape, employing modern strategies to solve complex problems.
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
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Our Leadership</span>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">Meet Our Partners</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Our distinguished partners bring decades of specialized experience and a proven track record of success.
              </p>
            </div>
            <Link href="/team" className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:gap-2 transition-all">
              View Full Team <ArrowRight className="w-4 h-4 ml-2" />
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
              <p className="text-primary font-medium mb-3">Managing Partner</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                Specializing in high-stakes corporate litigation and international arbitration with over 25 years of experience representing Fortune 500 companies.
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
              <p className="text-primary font-medium mb-3">Senior Partner, Family Law</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                A leading authority in complex family litigation, wealth preservation, and high-net-worth divorce proceedings.
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
              <p className="text-primary font-medium mb-3">Partner, Real Estate</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                Expert in commercial real estate transactions, zoning laws, and large-scale property development negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
