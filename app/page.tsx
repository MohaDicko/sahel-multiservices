import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Contactez-nous</h2>
          <p className="mb-8 font-light text-gray-400 sm:text-xl">
            Une question ? Un besoin spécifique ? Envoyez-nous un message.
          </p>
          <div className="space-y-4">
            <p className="text-xl">📞 +223 82 57 55 55</p>
            <p className="text-xl">📧 contact@sahel-multiservices.com</p>
            <p className="text-xl">📍 Bamako, Mali</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
