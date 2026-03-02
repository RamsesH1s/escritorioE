import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, User, Calendar, ArrowRight } from 'lucide-react';

export default function Insights() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumbs & Header */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 w-full">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 font-medium">Insights</span>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black mb-4 tracking-tight font-serif">Legal Insights & Perspectives</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Stay informed with expert analysis on legislative changes, regulatory updates, and evolving corporate law landscapes.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 mb-16 w-full">
        <div className="group relative overflow-hidden rounded-2xl bg-slate-900 aspect-[21/9]">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwfwqcy73Lu4PTXzqOMjl7LLT7dAj2uoib9amR3JwkXepY1WarwF0CHpvO0wmVqHHH3jMRmSEIEBvUA5--9TcKeprgOGSjxoZ1aqi4grXyjjQF-vb3skUzO5VIV5vt9Za9TQC0fwVNcv2pkWVlMorHdF5YivhSJHo5fEbT8XQx6I8oyd-Q1DgJ4m894y2LfrKZP-LhRJuUEF1m0KeI58T2Y8YMyS2IKUBrG2baBgbltao6AscklZSA5zz5_Qfe8iJtjPovV3YMbXU"
            alt="Modern law library with wooden shelves and books"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 left-0 p-10 z-20 max-w-4xl">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 uppercase tracking-widest">Corporate Law</span>
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight group-hover:underline font-serif cursor-pointer">Navigating New Corporate Governance Regulations in 2024</h3>
            <p className="text-slate-200 text-lg mb-6 line-clamp-2">Our senior partners dissect the implications of the recent legislative shifts and what they mean for your business operations and compliance strategies.</p>
            <div className="flex items-center gap-4 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4" />
                By David Lexington
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                October 24, 2023
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Blog Posts List */}
          <div className="lg:col-span-8 space-y-12">
            <h4 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 font-serif">Recent Publications</h4>
            
            {/* Article 1 */}
            <article className="flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/3 shrink-0">
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwqQGX3C6kVWJgD-Pdmf8spUd4hOxeopNUv2HLWJicul1xxIQAYuGIDdjQiu2EEXs3mw0ZhIOcmsjLaYmZwaekd-L42sqFhWHfBwnZ4qRe9jTsDlsrfVsZuKu-xUHQJ7V2fDO4JipLxvd1F-BAWx-ZjArr8Fh6q5O_fNoINoNb7gkcZl2xhbPdLI_CAO9cWZciaksrbH8JFTVMahuTWVzn1--Wj4AnUN5eJeErBcaeXojbndUhjpYUQYOpkjPWJKS-BEai4oaRY"
                    alt="Professional judge gavel on wooden desk"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold text-primary uppercase mb-3 tracking-widest">
                  <span>Litigation</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-500">12 Min Read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer font-serif">Impact of Remote Witness Testimony on Civil Trials</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  As judicial systems adapt to hybrid models, we explore the legal precedents being set regarding digital evidence and remote cross-examinations.
                </p>
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span className="font-medium">By Sarah Thorne</span>
                  <span>Oct 18, 2023</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/3 shrink-0">
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoxSLJFFsbkGEt7rJzurFnjs27McEGt024sJiIOWTCw_KbmdzO07U7qolQ2jNtpZsPs9PLILGpNFBhhq66mOvi58qIm1YO6NJS5DWzUxclVXCzwwwvGL4dOZ3blkWQ5V-rOFxVHt5Zz4lIp3sbqcs6TZE8GUWF5arGPrRCMb9i74_qrVd8RkD6pvdUTRmNvsOdjEYKqr1EU8H-1CHpl8Owi9kzwP9feVjuX2oo17-b3LmBrHZS9OgHeATQyVrX7augXhGx0lcZDU"
                    alt="Person signing legal contract documents"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold text-primary uppercase mb-3 tracking-widest">
                  <span>Intellectual Property</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-500">8 Min Read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer font-serif">AI and Copyright Law: The New Frontier of Ownership</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  Analyzing recent court rulings on AI-generated content and what creative agencies need to know about protecting their assets.
                </p>
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span className="font-medium">By James Miller</span>
                  <span>Oct 15, 2023</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/3 shrink-0">
                <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjLsDdWo2_dGnv7vkArzFCp_npk_ayShEmuTkjQc4VORrGO9SbWnzKv7SxCqVYlsGVKfRSqKZhQvfez7oNETL43tvuIiCU_NRPgpgXlGajuAnMHE8ZPXNQDN6qBKSl1bTnyK_8iAlDpMJCNVPSBaHcbhFHFLhNTT5e5XrcW5jCLBQjTXplyNXxOQsgyafrl1o63RHHwpGGutcBJGp45xRXOdcLey977VptJNmS59zYMUgsoNbifJJ1gwW1H2ykZZBfdKQjXPDKL9c"
                    alt="Two professionals shaking hands in office"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold text-primary uppercase mb-3 tracking-widest">
                  <span>Employment Law</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-slate-500">15 Min Read</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer font-serif">Navigating New Non-Compete Clauses</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  A comprehensive guide for HR departments on the recent federal ban on non-compete agreements and alternative protection methods.
                </p>
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span className="font-medium">By Robert Chen</span>
                  <span>Oct 10, 2023</span>
                </div>
              </div>
            </article>

            {/* Pagination */}
            <div className="flex items-center justify-center pt-8">
              <nav className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
                <span className="px-2 text-slate-400">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">12</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Newsletter Signup */}
            <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <h4 className="text-xl font-bold mb-4 font-serif">Briefings for Professionals</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Receive weekly legal analysis and firm news directly in your inbox.
              </p>
              <form className="space-y-3">
                <input
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-sm focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="Email address"
                  type="email"
                />
                <button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg text-sm transition-all"
                  type="button"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-[10px] text-slate-400 text-center uppercase tracking-widest leading-relaxed">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 font-serif">Practices</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Corporate & Commercial <span className="text-slate-400 font-normal">(12)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Dispute Resolution <span className="text-slate-400 font-normal">(8)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Intellectual Property <span className="text-slate-400 font-normal">(5)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Employment & Labor <span className="text-slate-400 font-normal">(14)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Real Estate Law <span className="text-slate-400 font-normal">(7)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Tax & Compliance <span className="text-slate-400 font-normal">(9)</span></Link></li>
              </ul>
            </div>

            {/* Popular Articles */}
            <div>
              <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 font-serif">Must Read</h4>
              <div className="space-y-6">
                <Link href="#" className="flex gap-4 group">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-slate-200 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZQw2x3MO0I5oQviKtmBt8F1enfD5AwgsPSywhWAJ7m_tB9qk5GOJERdjmYgumQejQRhvaSWI68tX0UOKB6ugEUgYj5Dlt29EubqcJ9hbNgd3y8KLxrAGWqGqOyKJRGHLWrSQ4KuVtwqA-cDLsZdEUZ6fiBqbLwY9-fSi_F36E4HR__xY0C8bZpJv9TyvRkFZlDEwZiodD4zcOB3fI3YJWNVAKQsAWGCgRzX1JWzOi0X6DIa6fOzFrt6JzvpKnGUdm0eGBNRJ0J0w"
                      alt="Close up of legal scales of justice"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">2024 Global ESG Compliance Guide</h5>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1 inline-block">5 min read</span>
                  </div>
                </Link>
                <Link href="#" className="flex gap-4 group">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-slate-200 relative">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwDpRPKMC__JnktcMYjn0jZtRjDO-Z5iZKIaj4XuQ2rYPknlx-hFtSffTPIhif6VNPpfqDDgeotNKrHyJlkjSGH6Ouv7jofl0rm16RTY2UW_yqzk0L-PEFM9w95OEuWfegDffVb0A_GvCgsbXy3hhCRhiz3Sp66nzJw6IEe77i_zvCmRev15Asi2_lndKDlPsz_ERcRlNQI2D6tAnMeR8P-7C6ESX14ViZyBJWe80R4D4WLEwzBZSnTeBwj-kGhfZcpb0j1CCaV6s"
                      alt="Financial data on computer screen"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">Mergers & Acquisitions in Tech</h5>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1 inline-block">12 min read</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 font-serif">Need Expert Legal Counsel?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Our specialized attorneys are here to help navigate your most complex legal challenges.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold group">
                  Contact an Expert
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
