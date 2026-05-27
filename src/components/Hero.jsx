import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CircleDot, Play } from "lucide-react";
import VideoModal from "./VideoModal";

const stats = [
  { num: "10+", label: "Clientes Ativos" },
  { num: "200+", label: "Peças/Mês" },
  { num: "6", label: "Anos de Mercado" },
  { num: "100%", label: "Foco em Futebol" },
];

export default function Hero() {
  const ref = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-prime-black"
    >
      {/* Background layers */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Radial glow */}
        <div className="absolute inset-0 bg-prime-radial" />
        {/* Animated grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
        {/* Gold dust particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/20"
            style={{
              left: `${10 + ((i * 8) % 80)}%`,
              top: `${20 + ((i * 13) % 60)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
        {/* LEFT — Text */}
        <motion.div
          style={{ y: yText }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 mb-8"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ opacity: [1, 0.3, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="font-body font-semibold text-[10px] tracking-[3px] uppercase text-gold">
              Prime Company — Campinas, SP · 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black leading-[1.03] mb-6"
            style={{ fontSize: "clamp(44px, 5.5vw, 76px)" }}
          >
            <span className="block text-white">Transformamos</span>
            <span className="block italic text-gold">marcas esportivas</span>
            <span className="block text-white">em referência.</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="font-accent font-light italic text-prime-gray-light text-xl leading-relaxed border-l-2 border-gold pl-5 mb-10"
          >
            Seja lembrado. Seja Prime.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-5 mb-12"
          >
            <a href="#projetos" className="btn-prime">
              <span>Ver Projetos</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <button onClick={() => setModalOpen(true)} className="btn-outline">
              <Play size={14} fill="currentColor" />
              Assistir Reel
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-4 gap-4 pt-6 border-t border-gold/15"
          >
            {stats.map(({ num, label }) => (
              <div key={label} className="text-center">
                <span className="block font-display font-bold text-2xl text-gold leading-none mb-1">
                  {num}
                </span>
                <span className="block font-body text-[9px] font-semibold tracking-[1.5px] uppercase text-prime-gray">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Video visual */}
        <motion.div
          style={{ y: yVisual }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
        >
          {/* Floating badge top-right */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-5 -right-5 z-20 flex items-center gap-2.5 bg-prime-charcoal2/95 border border-gold/25 px-4 py-3"
          >
            <span className="w-8 h-8 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <Zap size={15} />
            </span>
            <div>
              <strong className="block font-body font-bold text-[13px] text-white">
                Prime Football
              </strong>
              <span className="block font-body text-[9px] tracking-[1px] uppercase text-prime-gray">
                Vertical Esportiva
              </span>
            </div>
          </motion.div>

          {/* Main video frame */}
          <div
            className="relative aspect-video border border-gold/20 overflow-hidden cursor-pointer group"
            onClick={() => setModalOpen(true)}
          >
            {/* Animated BG */}
            <div className="absolute inset-0 bg-prime-charcoal">
              {/* Moving grid */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              {/* Radial glow center */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)",
                  transform: "translate(-50%,-50%)",
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Scan line */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Corner marks */}
            <div className="corner-tl" />
            <div className="corner-tr" />
            <div className="corner-bl" />
            <div className="corner-br" />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-prime-black/70 via-transparent to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 border-2 border-gold/60 rounded-full flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold transition-all duration-300"
              >
                {/* Pulse ring */}
                <motion.span
                  className="absolute inset-[-10px] rounded-full border border-gold/30"
                  animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Play size={32} className="text-gold fill-gold ml-1" />
              </motion.div>
              <span className="font-body font-semibold text-[11px] tracking-[3px] uppercase text-prime-gray-light">
                Reel Institucional 2026
              </span>
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-0 inset-x-0 p-4 flex items-center justify-between z-10">
              <span className="font-body text-[10px] font-semibold tracking-[2px] uppercase text-prime-gray">
                Prime Company · 2026
              </span>
              <span className="font-body text-[10px] text-prime-gray/70">
                03:24
              </span>
            </div>
          </div>

          {/* Below: mini video cards */}
          <div className="grid grid-cols-3 gap-1 mt-1">
            {[
              { label: "Alcateia", duration: "1:18" },
              { label: "C.T. Timão", duration: "0:58" },
              { label: "SPFC", duration: "2:04" },
            ].map(({ label, duration }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                onClick={() => setModalOpen(true)}
                className="relative aspect-video bg-prime-charcoal2 border border-gold/10 overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-prime-black/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Play size={18} className="text-gold fill-gold" />
                </div>
                <div className="absolute bottom-1.5 left-2 right-2 flex justify-between items-end z-10">
                  <span className="font-body text-[8px] font-bold tracking-[1px] uppercase text-white/70">
                    {label}
                  </span>
                  <span className="font-body text-[8px] text-gold/60">
                    {duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating bottom badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-6 -left-6 z-20 flex items-center gap-2.5 bg-gold px-4 py-3"
          >
            <Trophy size={16} className="text-prime-black" />
            <div>
              <strong className="block font-body font-bold text-[12px] text-prime-black">
                Resultado Garantido
              </strong>
              <span className="block font-body text-[9px] tracking-[1px] uppercase text-prime-black/60">
                Crescimento previsível
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("sobre")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          style={{ transformOrigin: "top" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="font-body text-[9px] tracking-[2.5px] uppercase text-prime-gray">
          Scroll
        </span>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Reel Institucional — Prime Company 2026"
        subtitle="Portfólio completo disponível sob solicitação"
      />
    </section>
  );
}
