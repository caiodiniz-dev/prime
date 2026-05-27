import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

const pillars = [
  {
    title: "Especialização Total",
    sub: "100% em futebol. Zero genérico.",
  },
  {
    title: "Captação em Campo",
    sub: "Presença nos treinos e jogos.",
  },
  {
    title: "Resultado Mensurável",
    sub: "Crescimento previsível e consistente.",
  },
  {
    title: "Estética Premium",
    sub: "Zero improviso. Zero poluição visual.",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [refRight, inViewRight] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-prime-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute -left-40 top-1/2 w-80 h-80 rounded-full -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
        {/* LEFT — Visual */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative order-2 lg:order-1"
        >
          {/* Floating card — top left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 md:-top-5 md:-left-5 z-20 flex items-center gap-2.5 bg-prime-charcoal2/95 border border-gold/20 px-3 md:px-4 py-2.5 md:py-3"
          >
            <MapPin size={15} className="text-gold" />
            <div>
              <strong className="block font-body font-bold text-[11px] md:text-[12px] text-white">
                Campinas, São Paulo
              </strong>
              <span className="block font-body text-[8px] md:text-[9px] tracking-[1px] uppercase text-prime-gray">
                Atuação nacional
              </span>
            </div>
          </motion.div>

          {/* Main visual frame */}
          <div className="relative aspect-[4/5] bg-prime-charcoal2 border border-gold/10 overflow-hidden">
            <img
              src="/dist/assets/prime.jpeg"
              alt="Prime Company em campo"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-prime-black/30" />

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Scan animation */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-prime-black/60 to-transparent" />
          </div>

          {/* Gold card — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-4 -right-4 md:-bottom-5 md:-right-5 z-20 bg-gold px-5 md:px-6 py-4 md:py-5 w-36 md:w-44"
          >
            <span className="block font-display font-black text-3xl md:text-4xl text-prime-black leading-none">
              2B+
            </span>
            <span className="block font-body font-bold text-[8px] md:text-[9px] tracking-[2px] uppercase text-prime-black/60 mt-1">
              views geradas
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Text */}
        <div className="order-1 lg:order-2" ref={refRight}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inViewRight ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            Quem Somos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inViewRight ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.05] mb-6 md:mb-7"
            style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
          >
            Não operamos
            <br />
            na <em className="text-gold">média</em>.<br />
            Elevamos o padrão.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inViewRight ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-[14px] md:text-[15px] text-prime-gray-light leading-relaxed mb-5"
          >
            A Prime Company é uma agência especializada em marketing esportivo
            para CT's, CFA's e Escolas de Futebol, sediada em Campinas-SP. Não
            vendemos serviços avulsos — construímos um ecossistema integrado de
            social mídia, tráfego pago, posicionamento e branding que gera
            resultado mensurável e previsível para o seu clube.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={inViewRight ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-accent italic text-gold-light text-lg md:text-xl leading-relaxed border-l-2 border-gold pl-4 md:pl-5 my-6 md:my-7"
          >
            "Não criamos apenas artes. Construímos presença, autoridade e
            conexão dentro do futebol."
          </motion.blockquote>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {pillars.map(({ title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewRight ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-2 md:gap-3 group"
              >
                <div>
                  <strong className="block font-body font-bold text-[12px] md:text-[13px] text-white">
                    {title}
                  </strong>
                  <span className="block font-body text-[11px] md:text-[12px] text-prime-gray mt-0.5">
                    {sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
