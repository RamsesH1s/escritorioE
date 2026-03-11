import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronLeft, User, Calendar, ArrowRight } from 'lucide-react';

export default async function Insights() {
  const articles = [
    {
      id: 1,
      title: "Impact of Remote Witness Testimony on Civil Trials",
      slug: "impact-of-remote-witness-testimony-on-civil-trials",
      summary: "As judicial systems adapt to hybrid models, we explore the legal precedents being set regarding digital evidence and remote cross-examinations.",
      cover_image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTAwqQGX3C6kVWJgD-Pdmf8spUd4hOxeopNUv2HLWJicul1xxIQAYuGIDdjQiu2EEXs3mw0ZhIOcmsjLaYmZwaekd-L42sqFhWHfBwnZ4qRe9jTsDlsrfVsZuKu-xUHQJ7V2fDO4JipLxvd1F-BAWx-ZjArr8Fh6q5O_fNoINoNb7gkcZl2xhbPdLI_CAO9cWZciaksrbH8JFTVMahuTWVzn1--Wj4AnUN5eJeErBcaeXojbndUhjpYUQYOpkjPWJKS-BEai4oaRY",
      category: { name: "Litigation" },
      estimated_read_time: 12,
      author: { name: "Dayra Oliveira" },
      published_at: "2023-10-18"
    },
    {
      id: 2,
      title: "AI and Copyright Law: The New Frontier of Ownership",
      slug: "ai-and-copyright-law",
      summary: "Analyzing recent court rulings on AI-generated content and what creative agencies need to know about protecting their assets.",
      cover_image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJoxSLJFFsbkGEt7rJzurFnjs27McEGt024sJiIOWTCw_KbmdzO07U7qolQ2jNtpZsPs9PLILGpNFBhhq66mOvi58qIm1YO6NJS5DWzUxclVXCzwwwvGL4dOZ3blkWQ5V-rOFxVHt5Zz4lIp3sbqcs6TZE8GUWF5arGPrRCMb9i74_qrVd8RkD6pvdUTRmNvsOdjEYKqr1EU8H-1CHpl8Owi9kzwP9feVjuX2oo17-b3LmBrHZS9OgHeATQyVrX7augXhGx0lcZDU",
      category: { name: "Intellectual Property" },
      estimated_read_time: 8,
      author: { name: "Dayra Oliveira" },
      published_at: "2023-10-15"
    },
    {
      id: 3,
      title: "Navigating New Non-Compete Clauses",
      slug: "navigating-new-non-compete-clauses",
      summary: "A comprehensive guide for HR departments on the recent federal ban on non-compete agreements and alternative protection methods.",
      cover_image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjLsDdWo2_dGnv7vkArzFCp_npk_ayShEmuTkjQc4VORrGO9SbWnzKv7SxCqVYlsGVKfRSqKZhQvfez7oNETL43tvuIiCU_NRPgpgXlGajuAnMHE8ZPXNQDN6qBKSl1bTnyK_8iAlDpMJCNVPSBaHcbhFHFLhNTT5e5XrcW5jCLBQjTXplyNXxOQsgyafrl1o63RHHwpGGutcBJGp45xRXOdcLey977VptJNmS59zYMUgsoNbifJJ1gwW1H2ykZZBfdKQjXPDKL9c",
      category: { name: "Employment Law" },
      estimated_read_time: 15,
      author: { name: "Dayra Oliveira" },
      published_at: "2023-10-10"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Breadcrumbs & Header */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-12 w-full">
        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Início</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 dark:text-slate-100 font-medium">Artigos</span>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-5xl font-black mb-4 tracking-tight font-serif">Artigos e Perspectivas Jurídicas</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Mantenha-se informado com análises de especialistas sobre mudanças legislativas, atualizações regulatórias e cenários em evolução no direito.
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
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded mb-4 uppercase tracking-widest">Direito Societário</span>
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight group-hover:underline font-serif cursor-pointer">Navegando nas Novas Regras de Governança Corporativa em 2024</h3>
            <p className="text-slate-200 text-lg mb-6 line-clamp-2">Nossos sócios seniores dissecam as implicações das recentes mudanças legislativas e o que elas significam para as operações do seu negócio e estratégias de compliance.</p>
            <div className="flex items-center gap-4 text-slate-300 text-sm">
              <span className="flex items-center gap-1.5 font-medium">
                <User className="w-4 h-4" />
                By Dayra Oliveira
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Outubro 24, 2023
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
            <h4 className="text-2xl font-bold border-b border-slate-200 dark:border-slate-800 pb-4 font-serif">Publicações Recentes</h4>

            {articles.map((article: any) => (
              <article key={article.id} className="flex flex-col md:flex-row gap-8 group">
                <div className="md:w-1/3 shrink-0">
                  <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                    {article.cover_image_url && (
                      <Image
                        src={article.cover_image_url}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-bold text-primary uppercase mb-3 tracking-widest">
                    <span>{article.category?.name || 'Geral'}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-slate-500">{article.estimated_read_time} Min de Leitura</span>
                  </div>
                  <Link href={`/insights/${article.slug}`}>
                    <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer font-serif">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <span className="font-medium">Por {article.author?.name || 'Equipe Editorial'}</span>
                    <span>{article.published_at ? new Date(article.published_at).toLocaleDateString() : ''}</span>
                  </div>
                </div>
              </article>
            ))}

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
            <div>
              <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-3 mb-4 font-serif">Áreas</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Corporativo e Comercial <span className="text-slate-400 font-normal">(12)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Resolução de Disputas <span className="text-slate-400 font-normal">(8)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Propriedade Intelectual <span className="text-slate-400 font-normal">(5)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Trabalhista <span className="text-slate-400 font-normal">(14)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Imobiliário <span className="text-slate-400 font-normal">(7)</span></Link></li>
                <li><Link href="#" className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">Tributário e Compliance <span className="text-slate-400 font-normal">(9)</span></Link></li>
              </ul>
            </div>

            {/* Popular Articles */}
            <div>
              <h4 className="text-lg font-bold border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 font-serif">Destaques</h4>
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
                    <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">Guia Global de Conformidade ESG 2024</h5>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1 inline-block">5 min de leitura</span>
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
                    <h5 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">Fusões e Aquisições em Tecnologia</h5>
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1 inline-block">12 min de leitura</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Widget */}
            <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4 font-serif">Precisa de Aconselhamento Jurídico Especializado?</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Nossos advogados especialistas estão aqui para ajudar a navegar nos seus desafios legais mais complexos.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-white font-bold group">
                  Fale com um Especialista
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
