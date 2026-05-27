import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia scroll quando menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 md:px-10 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-prime-black/95 backdrop-blur-xl border-b border-gold/10"
            : "py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 md:gap-6 group transition-all duration-300 hover:text-gold"
        >
          <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="/dist/logo.png"
              alt="Prime Company logo"
              className="w-full h-full object-contain transition duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-display font-bold text-base md:text-xl text-white">
            Prime <span className="text-gold">Company</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative font-body font-medium text-[12px] tracking-[1.5px] uppercase text-prime-gray-light
                           hover:text-white transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5519997752403"
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-prime-black font-bold text-[11px] tracking-[1.5px] uppercase px-5 py-2.5
                         hover:bg-gold-light hover:-translate-y-px transition-all duration-200 font-body"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Mobile menu btn */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-[110]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-6 h-[1.5px] bg-white"
              animate={
                menuOpen
                  ? i === 0
                    ? { rotate: 45, y: 6.5 }
                    : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -6.5 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[90] bg-prime-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 px-8"
          >
            {/* Logo no drawer */}
            <div className="absolute top-6 left-5 flex items-center gap-3">
              <img
                src="/dist/logo.png"
                alt="Prime"
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-bold text-base text-white">
                Prime <span className="text-gold">Company</span>
              </span>
            </div>

            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display font-bold text-3xl text-white hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {label}
              </motion.a>
            ))}

            <motion.a
              href="https://wa.me/5519997752403"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className="mt-4 bg-gold text-prime-black font-bold text-[11px] tracking-[2px] uppercase px-8 py-4 hover:bg-gold-light transition-all duration-200 font-body"
            >
              Agendar Reunião Gratuita
            </motion.a>

            {/* Linha decorativa inferior */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="absolute bottom-8 flex flex-col items-center gap-2"
            >
              <span className="font-body text-[9px] tracking-[3px] uppercase text-prime-gray/40">
                Campinas · São Paulo · Atuação Nacional
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
