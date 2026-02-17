export default function Hero() {
    return (
        <section className="bg-sahel-navy text-white min-h-screen flex items-center relative overflow-hidden">
            {/* Background blobs with soft pulse */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sahel-gold/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sahel-bronze/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse-soft delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 animate-float"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
                <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-500 hover:scale-110 animate-fade-in-up md:px-2" role="alert">
                    <span className="text-xs font-bold bg-sahel-gold rounded-full text-sahel-navy px-4 py-1.5 mr-3 shadow-lg shadow-sahel-gold/30">Vision 2026</span>
                    <span className="text-sm font-medium tracking-wide">L'Alliance de l'Expertise</span>
                    <svg className="ml-2 w-5 h-5 text-sahel-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </div>

                <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-[1.1] text-white md:text-7xl lg:text-8xl animate-fade-in-up delay-100 italic md:not-italic">
                    <span className="block opacity-90">Groupe Sahel,</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-200 to-sahel-bronze drop-shadow-sm">
                        L'Excellence
                    </span>
                </h1>

                <p className="mb-10 text-lg font-light text-slate-300 lg:text-2xl sm:px-16 xl:px-48 animate-fade-in-up delay-200 max-w-4xl mx-auto leading-relaxed">
                    Solutions expertes en <span className="text-white font-semibold">Digital</span> et <span className="text-white font-semibold">Commerce</span>.
                    Nous bâtissons les infrastructures de demain au cœur du Sahel.
                </p>

                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
                    <a href="#services" className="inline-flex justify-center items-center py-4 px-10 text-base font-bold text-center text-sahel-navy rounded-2xl bg-sahel-gold hover:bg-amber-400 focus:ring-4 focus:ring-amber-300 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(180,83,9,0.3)] group">
                        Découvrir nos services
                        <svg className="ml-2 -mr-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                    <a href="#contact" className="inline-flex justify-center items-center py-4 px-10 text-base font-bold text-center text-white rounded-2xl border-2 border-white/10 hover:border-sahel-gold/50 hover:bg-white/5 focus:ring-4 focus:ring-white/10 transition-all duration-500 hover:scale-105 backdrop-blur-md">
                        Parlons de votre projet
                    </a>
                </div>
            </div>
        </section>
    );
}
