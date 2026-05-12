export default function Hero() {
    return (
        <section className="bg-sahel-navy text-white min-h-screen flex items-center relative overflow-hidden">
            {/* ── Background Layer: Grids & Orbs ── */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style={{
                     backgroundImage: `linear-gradient(rgba(180,83,9,0.5) 1.5px, transparent 1.5px), 
                                       linear-gradient(90deg, rgba(180,83,9,0.5) 1.5px, transparent 1.5px)`,
                     backgroundSize: '100px 100px'
                 }} 
            />
            
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-sahel-gold/15 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3 animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sahel-bronze/15 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-pulse pointer-events-none" />

            {/* Morphing Elements */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-sahel-gold/10 to-transparent blur-3xl animate-morph pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-tr from-sahel-bronze/10 to-transparent blur-3xl animate-morph pointer-events-none" style={{ animationDelay: '4s' }} />

            <div className="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 relative z-10">
                {/* ── Badge ── */}
                <div className="inline-flex items-center gap-2 py-1 px-1 pr-4 mb-10 text-sm text-white glass rounded-full animate-fade-in-up md:px-2 shadow-2xl border border-white/20" role="alert">
                    <span className="text-[11px] font-black bg-gradient-to-r from-sahel-gold to-amber-400 rounded-full text-white px-4 py-1.5 uppercase tracking-widest shadow-lg shadow-sahel-gold/30">Vision 2026</span>
                    <span className="text-sm font-semibold tracking-wide">L'Excellence Sahélienne</span>
                    <svg className="w-5 h-5 text-sahel-gold ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>

                {/* ── Main Headline ── */}
                <h1 className="mb-8 font-black tracking-tight leading-[1.05] text-white animate-fade-in-up delay-100 font-display" 
                    style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                    <span className="block opacity-90">Groupe Sahel,</span>
                    <span className="text-gradient-gold drop-shadow-[0_0_30px_rgba(180,83,9,0.3)]">
                        L'Excellence
                    </span>
                </h1>

                {/* ── Subheadline ── */}
                <p className="mb-12 text-lg font-light text-slate-300 lg:text-2xl sm:px-16 xl:px-48 animate-fade-in-up delay-200 max-w-5xl mx-auto leading-relaxed">
                    Ingénierie <span className="text-white font-bold border-b-2 border-sahel-gold/50 pb-1">Digitale</span> & Excellence <span className="text-white font-bold border-b-2 border-sahel-gold/50 pb-1">Commerciale</span>.
                    Bâtir l'avenir infrastructurel du Sahel avec rigueur et innovation.
                </p>

                {/* ── CTAs ── */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up delay-300">
                    <a href="#services" className="btn-premium flex items-center justify-center py-5 px-12 text-base font-black text-white rounded-2xl bg-sahel-gold hover:bg-amber-500 transition-all duration-500 hover:scale-105 shadow-[0_20px_50px_rgba(180,83,9,0.4)] group">
                        Découvrir nos solutions
                        <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a href="#contact" className="flex items-center justify-center py-5 px-12 text-base font-black text-white rounded-2xl border-2 border-white/10 hover:border-sahel-gold/40 hover:bg-white/5 transition-all duration-500 hover:scale-105 backdrop-blur-md uppercase tracking-widest">
                        Parlons de votre projet
                    </a>
                </div>

                {/* ── Dynamic Stats ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/5 animate-fade-in-up delay-500">
                    {[
                        { label: "Piliers d'Activité", value: "3+" },
                        { label: "Engagement Client", value: "100%" },
                        { label: "Disponibilité", value: "24/7" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-5xl font-black mb-2 text-gradient-gold group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                            <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Section Divider */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sahel-sand/100 to-transparent pointer-events-none" />
        </section>
    );
}
