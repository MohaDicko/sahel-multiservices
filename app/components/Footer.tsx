export default function Footer() {
    return (
        <footer className="bg-slate-800 border-t-2 border-amber-500">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/sahel-logo-v3.png" className="h-8 w-auto" alt="Sahel Multiservices Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Sahel<span className="text-amber-500">Multiservices</span></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
                        <li>
                            <a href="#" className="hover:text-amber-500 hover:underline me-4 md:me-6 transition-colors">À propos</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-amber-500 hover:underline me-4 md:me-6 transition-colors">Politique de confidentialité</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-amber-500 hover:underline me-4 md:me-6 transition-colors">Licensing</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-amber-500 hover:underline transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-600 sm:mx-auto lg:my-8" />
                <div className="flex flex-col items-center gap-2 text-sm text-gray-300">
                    <div className="flex flex-wrap justify-center gap-4 mb-2">
                        <span className="font-medium">RCC: <span className="text-amber-400">32502529582040R</span></span>
                        <span className="hidden sm:inline text-amber-500">•</span>
                        <span className="font-medium">NIF: <span className="text-amber-400">NIF00560521 H</span></span>
                    </div>
                    <span className="block text-sm text-gray-400 sm:text-center">© 2024 <a href="#" className="hover:text-amber-500 transition-colors font-medium">Sahel Multiservices™</a>. Tous droits réservés.</span>
                </div>
            </div>
        </footer>
    );
}
