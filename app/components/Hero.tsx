export default function Hero() {
    return (
        <section className="bg-sahel-navy text-white min-h-screen flex items-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-sahel-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sahel-bronze/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
                <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up" role="alert">
                    <span className="text-xs font-bold bg-sahel-gold rounded-full text-sahel-navy px-4 py-1.5 mr-3">Vision 2026</span> <span className="text-sm font-medium">L'Alliance de l'Expertise</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-7xl animate-fade-in-up delay-100">
                    Groupe Sahel, <br className="hidden md:block" />
                    L'Excellence du <span className="text-transparent bg-clip-text bg-gradient-to-r from-sahel-gold via-amber-200 to-sahel-bronze">Multi-Services</span>
                </h1>
                <p className="mb-10 text-lg font-light text-slate-300 lg:text-xl sm:px-16 xl:px-48 animate-fade-in-up delay-200 max-w-4xl mx-auto leading-relaxed">
                    De l'innovation technologique à l'expertise BTP, en passant par le négoce international et les solutions énergétiques.
                    <strong className="text-white font-semibold"> Groupe Sahel</strong> est votre partenaire stratégique global pour bâtir l'avenir.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-300">
                    <a href="#services" className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-sahel-navy rounded-xl bg-sahel-gold hover:bg-amber-400 focus:ring-4 focus:ring-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sahel-gold/20">
                        Nos Services
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#contact" className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-white rounded-xl border border-white/20 hover:bg-white/10 focus:ring-4 focus:ring-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                        Contactez-nous
                    </a>
                </div>
            </div>
        </section>
    );
}
