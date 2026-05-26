import Navbar from "./components/Navbar";
import ScrollVideoHero from "./components/ScrollVideoHero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import ProblemSection from "./components/ProblemSection";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Clients from "./components/Clients";
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
        <ProblemSection />
        <Services />
        <Portfolio />
        <Results />
        <Testimonials />
        <Process />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
