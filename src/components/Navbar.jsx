import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Clientes", href: "#clientes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-prime-black/95 backdrop-blur-xl border-b border-gold/10"
            : "py-6"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-6 group transition-all duration-300 hover:text-gold"
        >
          <div className="w-20 h-20 flex items-center justify-center overflow-hidden transition-all duration-300">
            <img
              src="/logo.png"
              alt="Prime logo"
              className="w-full h-full object-contain transition duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-display font-bold text-xl text-white">
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
              href="#contato"
              className="bg-gold text-prime-black font-bold text-[12px] tracking-[1.5px] uppercase px-6 py-2.5
                         hover:bg-gold-light hover:-translate-y-px transition-all duration-200 font-body"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Mobile menu btn */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
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
            className="fixed inset-0 z-[90] bg-prime-black/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display font-bold text-4xl text-white hover:text-gold transition-colors duration-200"
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="btn-prime mt-4"
            >
              <span>Fale Conosco</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
