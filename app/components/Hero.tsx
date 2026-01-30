export default function Hero() {
    return (
        <section className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse"></div>

            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
                <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-300 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-fade-in-up" role="alert">
                    <span className="text-xs bg-amber-600 rounded-full text-white px-4 py-1.5 mr-3">Nouveau</span> <span className="text-sm font-medium">Découvrez nos solutions informatiques</span>
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </div>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl animate-fade-in-up delay-100">
                    Leader du <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Multi-Services</span> au Sahel
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 animate-fade-in-up delay-200">
                    De la technologie au BTP, en passant par le négoce et l'énergie. Sahel Multiservices est votre partenaire stratégique global.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-300">
                    <a href="#services" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-amber-600 hover:bg-amber-700 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/50">
                        Nos Services
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-all duration-300 hover:scale-105">
                        Contactez-nous
                    </a>
                </div>
            </div>
        </section>
    );
}
