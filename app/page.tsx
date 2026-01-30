import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <About />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
