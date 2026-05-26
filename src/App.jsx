import Navbar from "./components/Navbar";
import ScrollVideoHero from "./components/ScrollVideoHero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Problema from "./components/Problema"; // Importação adicionada aqui
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollVideoHero />
        <Marquee />
        <About />

        {/* Seção adicionada no fluxo da página */}
        <Problema />

        <Services />
        <Portfolio />
        <Results />
        <Testimonials />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
