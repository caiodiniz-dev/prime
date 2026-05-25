import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BarChart3, Camera, MapPin, Medal, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Especialização Total",
    sub: "100% em futebol. Zero genérico.",
  },
  {
    icon: Camera,
    title: "Captação em Campo",
    sub: "Presença nos treinos e jogos.",
  },
  {
    icon: BarChart3,
    title: "Resultado Mensurável",
    sub: "Crescimento previsível e consistente.",
  },
  {
    icon: Medal,
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
      className="py-28 bg-prime-black relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute -left-40 top-1/2 w-80 h-80 rounded-full -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
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
            className="absolute -top-5 -left-5 z-20 flex items-center gap-2.5 bg-prime-charcoal2/95 border border-gold/20 px-4 py-3"
          >
            <MapPin size={16} className="text-gold" />
            <div>
              <strong className="block font-body font-bold text-[12px] text-white">
                Campinas, São Paulo
              </strong>
              <span className="block font-body text-[9px] tracking-[1px] uppercase text-prime-gray">
                Atuação nacional
              </span>
            </div>
          </motion.div>

          {/* Main visual frame */}
          <div className="relative aspect-[4/5] bg-prime-charcoal2 border border-gold/10 overflow-hidden">
            <img
              src="/dist/assets/prime.jpeg"
              alt="Prime visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-prime-black/65" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-56 h-56">
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-6 rounded-full border border-white/15"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-12 rounded-full border border-white/20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </div>

            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Scan animation */}
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Gold card — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-5 -right-5 z-20 bg-gold px-6 py-5 w-44"
          >
            <span className="block font-display font-black text-4xl text-prime-black leading-none">
              2B
            </span>
            <span className="block font-body font-bold text-[9px] tracking-[2px] uppercase text-prime-black/60 mt-1.5">
              bilhões de views
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
            className="font-display font-bold text-white leading-[1.05] mb-7"
            style={{ fontSize: "clamp(32px, 3.5vw, 52px)" }}
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
            className="font-body text-[15px] text-prime-gray-light leading-relaxed mb-5"
          >
            A Prime Company é uma agência especializada em marketing esportivo
            para CT's, CFA's e Escolas de Futebol, sediada em Campinas-SP. Não
            vendemos serviços avulsos — construímos um ecossistema integrado de
            social mídia, tráfego, posicionamento e branding.
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={inViewRight ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-accent italic text-gold-light text-xl leading-relaxed border-l-2 border-gold pl-5 my-7"
          >
            "Cada peça gráfica carrega a responsabilidade de representar uma
            escola, o sonho de um atleta e a total confiança de uma família."
          </motion.blockquote>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewRight ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 border border-gold/30 flex items-center justify-center text-base flex-shrink-0 bg-gold/5 group-hover:bg-gold/10 transition-colors duration-200">
                  <Icon size={17} className="text-gold" />
                </div>
                <div>
                  <strong className="block font-body font-bold text-[13px] text-white">
                    {title}
                  </strong>
                  <span className="block font-body text-[12px] text-prime-gray mt-0.5">
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
