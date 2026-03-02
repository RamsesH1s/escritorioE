import { History, ShieldCheck, Award } from 'lucide-react';

export default function PillarsSection() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm">Our Foundation</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-4xl md:text-5xl font-serif font-bold">The Three Pillars</h2>
                <div className="w-16 h-0.5 bg-slate-300 dark:bg-slate-700"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar: Experience */}
                <div className="flex flex-col items-center text-center p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <History className="w-8 h-8" />
                    </div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4 uppercase tracking-wider font-serif">Experience</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-display">
                        Over 30 years of combined legal expertise navigating complex litigations and high-stakes corporate negotiations.
                    </p>
                </div>
                {/* Pillar: Integrity */}
                <div className="flex flex-col items-center text-center p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4 uppercase tracking-wider font-serif">Integrity</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-display">
                        Unwavering ethical standards form the bedrock of our practice. We believe in transparency and absolute client loyalty.
                    </p>
                </div>
                {/* Pillar: Results */}
                <div className="flex flex-col items-center text-center p-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <Award className="w-8 h-8" />
                    </div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-4 uppercase tracking-wider font-serif">Results</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-display">
                        Our track record speaks for itself. We are dedicated to achieving the most favorable outcomes for every single client.
                    </p>
                </div>
            </div>
        </section>
    );
}
