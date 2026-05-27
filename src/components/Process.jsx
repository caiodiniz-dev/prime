// Process.jsx — Prime Company
// Fixes: connecting line alinhada com topo do ícone (não meio do card),
//        rounded-none nos cards para manter estética quadrada,
//        hover scale ao invés de y negativo (evita reflow),
//        orbs blur com will-change para performance

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Análise profunda da marca, posicionamento atual, concorrência local e público-alvo. Entendemos o jogo antes de entrar em campo — sem palpites, só estratégia.",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Planejamento editorial personalizado, identidade visual adaptada ao clube e calendário de conteúdo com foco em captação de alunos e autoridade de marca.",
  },
  {
    num: "03",
    title: "Produção",
    desc: "Captação presencial em campo, edição de vídeo premium, design de peças gráficas e copy que conecta emocionalmente com famílias e atletas — sem clichês.",
  },
  {
    num: "04",
    title: "Resultado",
    desc: "Publicação com aprovação do responsável, monitoramento de métricas em tempo real e otimização constante para garantir crescimento previsível todo mês.",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-prime-charcoal relative overflow-hidden">
      {/* Animated background orbs — will-change para GPU */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-gold/8 blur-[80px]"
          style={{ willChange: "transform" }}
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-80 h-80 rounded-full bg-gold/6 blur-[80px]"
          style={{ willChange: "transform" }}
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div
        className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label justify-center"
          >
            Como Trabalhamos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Método <em className="text-gold">Prime</em> em ação
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-prime-gray text-[14px] md:text-[16px] max-w-3xl mx-auto mt-5 md:mt-6 leading-relaxed"
          >
            Cada etapa foi construída para transformar escolas e times em marcas
            memoráveis. Criamos estratégia, narrativa e entrega com o timing
            certo — sempre sem cortes e com excelência absoluta em cada frame.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="relative grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-4 lg:gap-6">
          {/*
            Connecting line desktop:
            height px, alinhada ao centro do ícone (ícone está em mb-5 + h-16 = ~88px from top + padding-top p-8 = ~32px → ~64px from top of card).
            Usamos top fixo de 92px que cobre p-8 (32px) + h-16/2 (32px) = 64px + margem visual.
          */}
          <motion.div
            className="absolute left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-gradient-to-r from-gold/10 via-gold/45 to-gold/10 hidden lg:block"
            style={{ top: "92px" }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
            aria-hidden="true"
          />

          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.14, duration: 0.75 }}
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`relative overflow-hidden border border-gold/10 bg-gradient-to-br from-prime-charcoal2 to-prime-black p-7 md:p-8 text-left transition-colors duration-400 hover:border-gold/40 group ${
                i % 2 === 1 ? "lg:mt-14" : ""
              }`}
              style={{ willChange: "transform" }}
            >
              {/* Gold glow hover — corner */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gold/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Hover fill overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              <div className="relative z-10">
                {/* Ícone + badge */}
                <div className="mb-5 md:mb-6 flex items-center justify-between gap-4">
                  <motion.div
                    animate={inView ? { y: [0, -5, 0] } : {}}
                    transition={{
                      delay: 0.6 + i * 0.2,
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center border-2 border-gold/35 bg-gradient-to-br from-gold/12 to-gold/4 text-gold text-xl md:text-2xl font-display font-bold group-hover:border-gold/70 group-hover:bg-gold/15 transition-all duration-300"
                  >
                    {num}
                  </motion.div>

                  <span className="border border-gold/25 bg-gold/8 px-2.5 py-1 text-[10px] md:text-[11px] uppercase tracking-[2px] text-gold/80 font-body font-semibold group-hover:border-gold/60 group-hover:bg-gold/15 transition-all duration-300">
                    Step {num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>

                <p className="font-body text-prime-gray/70 text-[12px] md:text-[13px] leading-relaxed group-hover:text-prime-gray transition-colors duration-300">
                  {desc}
                </p>

                {/* Bottom progress line — só nos 3 primeiros */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-gold to-gold/40"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{
                      delay: 0.7 + i * 0.15,
                      duration: 1,
                      ease: "easeOut",
                    }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
