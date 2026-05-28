// Process.jsx — PRIME FOOTBALL — FINAL PREMIUM

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const steps = [
  {
    zone: "DEFESA",
    title: "Leitura de Jogo",
    desc: "Analisamos teu posicionamento, concorrência e como tua marca entra em campo.",
  },

  {
    zone: "MEIO-CAMPO",
    title: "Armação da Jogada",
    desc: "Estratégia, identidade visual e linha editorial pra tua escola dominar a posse.",
  },

  {
    zone: "ATAQUE",
    title: "Pressão no Último Terço",
    desc: "Captação presencial, edição premium e conteúdos que fazem a torcida comprar a ideia.",
  },

  {
    zone: "GOL",
    title: "Bola na Rede",
    desc: "Publicação estratégica, métricas e otimização constante pra crescer todo mês.",
  },
];

function FieldSVG({ inView }) {
  const [goal, setGoal] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[28px]">
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-[30px] bg-gold/10 blur-[120px]"
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Confete */}
      {goal &&
        [...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute z-50 rounded-full"
            style={{
              width: Math.random() * 6 + 4,
              height: Math.random() * 14 + 8,
              left: "91%",
              top: "50%",
              background:
                i % 2 === 0 ? "rgba(201,168,76,1)" : "rgba(255,255,255,0.95)",
              boxShadow: "0 0 10px rgba(201,168,76,0.9)",
            }}
            initial={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            animate={{
              opacity: [1, 1, 0],
              x: (Math.random() - 0.5) * 260,
              y: Math.random() * 240 - 120,
              rotate: Math.random() * 720,
              scale: [1, 1.2, 0.6],
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
              delay: i * 0.03,
            }}
          />
        ))}

      {/* Vinheta */}
      <div className="absolute inset-0 rounded-[24px] bg-black/20 z-10 pointer-events-none" />

      {/* Linha glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent z-20"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <svg
        viewBox="0 0 560 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-20"
      >
        <defs>
          <linearGradient id="grassGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0F0F0F" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>

          <radialGradient id="fieldGlow">
            <stop offset="0%" stopColor="rgba(201,168,76,0.12)" />
            <stop offset="100%" stopColor="rgba(201,168,76,0)" />
          </radialGradient>

          <pattern
            id="smallGrid"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 16 0 L 0 0 0 16"
              fill="none"
              stroke="rgba(255,255,255,0.015)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        {/* Fundo */}
        <rect
          x="0"
          y="0"
          width="560"
          height="320"
          rx="24"
          fill="url(#grassGradient)"
        />

        {/* Grid */}
        <rect width="560" height="320" fill="url(#smallGrid)" opacity="0.45" />

        {/* Glow */}
        <rect width="560" height="320" fill="url(#fieldGlow)" />

        {/* Faixas */}
        {[20, 55, 90, 125, 160, 195, 230, 265].map((y, i) => (
          <motion.rect
            key={i}
            x="10"
            y={y}
            width="540"
            height="20"
            fill={
              i % 2 === 0
                ? "rgba(255,255,255,0.018)"
                : "rgba(255,255,255,0.035)"
            }
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Moldura */}
        <motion.rect
          x="6"
          y="6"
          width="548"
          height="308"
          rx="20"
          stroke="rgba(201,168,76,0.08)"
          strokeWidth="2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Campo */}
        <motion.rect
          x="10"
          y="10"
          width="540"
          height="300"
          rx="8"
          stroke="rgba(201,168,76,0.28)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6 }}
        />

        {/* Meio */}
        <motion.line
          x1="280"
          y1="10"
          x2="280"
          y2="310"
          stroke="rgba(201,168,76,0.16)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
        />

        {/* Círculo */}
        <motion.circle
          cx="280"
          cy="160"
          r="48"
          stroke="rgba(201,168,76,0.18)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
        />

        <circle cx="280" cy="160" r="4" fill="rgba(201,168,76,0.9)" />

        {/* Áreas */}
        <rect
          x="10"
          y="70"
          width="72"
          height="180"
          stroke="rgba(201,168,76,0.18)"
          strokeWidth="1"
        />

        <rect
          x="10"
          y="110"
          width="36"
          height="100"
          stroke="rgba(201,168,76,0.1)"
          strokeWidth="1"
        />

        <rect
          x="478"
          y="70"
          width="72"
          height="180"
          stroke="rgba(201,168,76,0.18)"
          strokeWidth="1"
        />

        <rect
          x="514"
          y="110"
          width="36"
          height="100"
          stroke="rgba(201,168,76,0.1)"
          strokeWidth="1"
        />

        {/* Semi círculos */}
        <path
          d="M 82 112 A 48 48 0 0 1 82 208"
          stroke="rgba(201,168,76,0.1)"
          strokeWidth="1"
        />

        <path
          d="M 478 112 A 48 48 0 0 0 478 208"
          stroke="rgba(201,168,76,0.1)"
          strokeWidth="1"
        />

        {/* Cantos */}
        {[
          [10, 10],
          [550, 10],
          [10, 310],
          [550, 310],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="10"
            stroke="rgba(201,168,76,0.1)"
            fill="none"
          />
        ))}

        {/* Linha tática */}
        <motion.path
          d="M 46 160 C 120 120, 220 120, 280 160 C 340 200, 420 200, 520 160"
          stroke="rgba(201,168,76,0.12)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{
            duration: 2.8,
            delay: 1,
          }}
        />

        {/* Glow gol */}
        <motion.rect
          x="500"
          y="90"
          width="40"
          height="140"
          fill="rgba(201,168,76,0.04)"
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Bola */}
        {inView && (
          <motion.circle
            cx="46"
            cy="160"
            r="7"
            fill="rgba(201,168,76,1)"
            style={{
              filter: "drop-shadow(0 0 12px rgba(201,168,76,1))",
            }}
            animate={{
              cx: [46, 120, 200, 280, 360, 450, 520],
              cy: [160, 135, 145, 160, 180, 165, 160],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.15, 0.3, 0.5, 0.7, 0.88, 1],
            }}
            onUpdate={(latest) => {
              if (latest.cx >= 510 && !goal) {
                setGoal(true);

                setTimeout(() => {
                  setGoal(false);
                }, 1200);
              }
            }}
          />
        )}
      </svg>
    </div>
  );
}

function TacticalCard({ step, i, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: 0.2 + i * 0.12,
        duration: 0.7,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={
          hovered
            ? {
                y: -6,
                borderColor: "rgba(201,168,76,0.3)",
                boxShadow: "0 25px 70px rgba(201,168,76,0.14)",
              }
            : {}
        }
        transition={{
          duration: 0.3,
        }}
        className="relative overflow-hidden border border-gold/10 bg-prime-black/90 p-6 backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,18,14,0.98) 0%, rgba(12,10,8,1) 100%)",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{
            delay: 0.5 + i * 0.12,
            duration: 0.7,
          }}
        />

        <span className="text-[10px] tracking-[3px] uppercase text-gold/70 font-bold">
          {step.zone}
        </span>

        <h3 className="text-white text-[24px] font-black mt-3 mb-3 leading-none">
          {step.title}
        </h3>

        <p className="text-prime-gray/70 text-[13px] leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Process() {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section className="py-24 md:py-32 bg-prime-charcoal relative overflow-hidden">
      <div
        className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            className="font-display font-black text-white"
            style={{
              fontSize: "clamp(32px, 5vw, 64px)",
              lineHeight: 1,
            }}
          >
            Método <span className="text-gold">Prime</span> em ação
          </h2>

          <p className="text-prime-gray text-[14px] md:text-[15px] max-w-2xl mx-auto mt-5 leading-relaxed">
            Estratégia, narrativa e posicionamento pra transformar escolas em
            marcas que dominam o jogo.
          </p>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-4 md:hidden">
          {steps.map((step, i) => (
            <TacticalCard key={step.title} step={step} i={i} inView={inView} />
          ))}

          <div className="relative w-full mt-8 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[16/9]">
              <FieldSVG inView={inView} />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display font-black uppercase tracking-[8px] text-white/10 text-[14px]">
                  PRIME FOOTBALL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex flex-col gap-12 items-center">
          <div className="relative w-full max-w-[950px] aspect-[16/9]">
            <FieldSVG inView={inView} />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="
                  font-display
                  font-black
                  uppercase
                  tracking-[10px]
                  text-white/8
                  text-[18px]
                  lg:text-[24px]
                "
              >
                PRIME FOOTBALL
              </motion.span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 w-full max-w-[1250px]">
            {steps.map((step, i) => (
              <TacticalCard
                key={step.title}
                step={step}
                i={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
