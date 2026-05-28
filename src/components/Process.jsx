// Process.jsx — Prime Football — "Campo Tático"
// Mobile: cards em lista vertical com campo como fundo decorativo
// Desktop: layout tático com campo central e cards flutuando laterais

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const steps = [
  {
    zone: "DEFESA",
    title: "Diagnóstico",
    desc: "Análise profunda da marca, posicionamento atual, concorrência local e público-alvo. Entendemos o jogo antes de entrar em campo — sem palpites, só estratégia.",
    side: "left",
    fieldY: "8%",
  },
  {
    zone: "MEIO-CAMPO",
    title: "Estratégia",
    desc: "Planejamento editorial personalizado, identidade visual adaptada ao clube e calendário de conteúdo com foco em captação de alunos e autoridade de marca.",
    side: "right",
    fieldY: "33%",
  },
  {
    zone: "ATAQUE",
    title: "Produção",
    desc: "Captação presencial em campo, edição de vídeo premium, design de peças gráficas e copy que conecta emocionalmente com famílias e atletas — sem clichês.",
    side: "left",
    fieldY: "58%",
  },
  {
    zone: "GOL",
    title: "Resultado",
    desc: "Publicação com aprovação do responsável, monitoramento de métricas em tempo real e otimização constante para garantir crescimento previsível todo mês.",
    side: "right",
    fieldY: "82%",
  },
];

function FieldSVG({ inView }) {
  return (
    <svg
      viewBox="0 0 320 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <motion.rect
        x="10"
        y="10"
        width="300"
        height="540"
        rx="4"
        stroke="rgba(201,168,76,0.25)"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      />
      <motion.line
        x1="10"
        y1="280"
        x2="310"
        y2="280"
        stroke="rgba(201,168,76,0.2)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      <motion.circle
        cx="160"
        cy="280"
        r="48"
        stroke="rgba(201,168,76,0.18)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.6, duration: 1 }}
      />
      <motion.circle
        cx="160"
        cy="280"
        r="3"
        fill="rgba(201,168,76,0.4)"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.9 }}
      />
      <motion.rect
        x="70"
        y="10"
        width="180"
        height="72"
        stroke="rgba(201,168,76,0.18)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      />
      <motion.rect
        x="110"
        y="10"
        width="100"
        height="36"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
      <motion.rect
        x="70"
        y="478"
        width="180"
        height="72"
        stroke="rgba(201,168,76,0.18)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      />
      <motion.rect
        x="110"
        y="514"
        width="100"
        height="36"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      />
      <motion.path
        d="M 112 82 A 48 48 0 0 0 208 82"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      <motion.path
        d="M 112 478 A 48 48 0 0 1 208 478"
        stroke="rgba(201,168,76,0.12)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
      {[
        [10, 10],
        [310, 10],
        [10, 550],
        [310, 550],
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="10"
          stroke="rgba(201,168,76,0.15)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : {}}
          transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
        />
      ))}
      <motion.path
        d="M 160 520 C 160 480, 200 400, 160 280 C 120 160, 170 100, 160 46"
        stroke="rgba(201,168,76,0.08)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ delay: 1.2, duration: 2 }}
      />
      {inView && (
        <motion.circle
          cx="160"
          cy="46"
          r="7"
          fill="rgba(201,168,76,0.9)"
          style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.8))" }}
          animate={{
            cx: [160, 200, 160, 120, 160],
            cy: [520, 400, 280, 160, 46],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: [0.4, 0, 0.6, 1],
            delay: 1.5,
          }}
        />
      )}
      {[46, 185, 375, 520].map((cy, i) => (
        <motion.g key={i}>
          <motion.circle
            cx="160"
            cy={cy}
            r="5"
            fill="rgba(201,168,76,0.15)"
            stroke="rgba(201,168,76,0.5)"
            strokeWidth="1"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.8 + i * 0.2, type: "spring" }}
          />
          <motion.circle
            cx="160"
            cy={cy}
            r="12"
            stroke="rgba(201,168,76,0.15)"
            strokeWidth="1"
            fill="none"
            animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

// Card para mobile (lista vertical)
function MobileCard({ step, i, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.2 + i * 0.15,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative overflow-hidden border border-gold/15 bg-prime-black/90 p-5"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,18,14,0.97) 0%, rgba(12,10,8,0.99) 100%)",
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ delay: 0.5 + i * 0.15, duration: 0.7 }}
      />
      <div className="flex items-center gap-2 mb-3">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-gold"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
        <span className="font-body text-[9px] tracking-[3px] uppercase text-gold/60 font-bold">
          {step.zone}
        </span>
      </div>
      <h3 className="font-display font-black text-white text-lg leading-tight mb-2">
        {step.title}
      </h3>
      <p className="font-body text-prime-gray/60 text-[12px] leading-relaxed">
        {step.desc}
      </p>
      <div
        className={`absolute bottom-0 right-0 w-8 h-8 overflow-hidden opacity-40`}
      >
        <div
          className="absolute bottom-0 right-0 w-0 h-0"
          style={{
            borderLeft: "20px solid transparent",
            borderBottom: "20px solid rgba(201,168,76,0.3)",
          }}
        />
      </div>
    </motion.div>
  );
}

// Card para desktop (posição tática)
function DesktopCard({ step, i, inView }) {
  const [hovered, setHovered] = useState(false);
  const isLeft = step.side === "left";

  return (
    <motion.div
      className={`absolute w-[38%] ${isLeft ? "left-0" : "right-0"}`}
      style={{ top: step.fieldY, transform: "translateY(-50%)" }}
      initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: 0.4 + i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 h-px`}
        style={{
          width: 32,
          [isLeft ? "right" : "left"]: -32,
          background: isLeft
            ? "linear-gradient(to right, rgba(201,168,76,0.5), rgba(201,168,76,0.1))"
            : "linear-gradient(to left, rgba(201,168,76,0.5), rgba(201,168,76,0.1))",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.6 + i * 0.2 }}
      />
      <motion.div
        animate={
          hovered
            ? { y: -4, boxShadow: "0 20px 60px rgba(201,168,76,0.15)" }
            : { y: 0 }
        }
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden border border-gold/15 p-5 cursor-default"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,18,14,0.97) 0%, rgba(12,10,8,0.99) 100%)",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[1.5px] bg-gradient-to-r from-gold via-gold/60 to-transparent"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ delay: 0.7 + i * 0.2, duration: 0.7 }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={hovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="flex items-center gap-2 mb-3">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
          <span className="font-body text-[9px] tracking-[3px] uppercase text-gold/60 font-bold">
            {step.zone}
          </span>
        </div>
        <h3 className="font-display font-black text-white text-lg xl:text-xl leading-tight mb-2">
          {step.title}
        </h3>
        <p className="font-body text-prime-gray/60 text-[11px] leading-relaxed">
          {step.desc}
        </p>
        <div
          className={`absolute bottom-0 ${isLeft ? "right-0" : "left-0"} w-8 h-8 overflow-hidden opacity-40`}
        >
          <div
            className={`absolute bottom-0 ${isLeft ? "right-0" : "left-0"} w-0 h-0`}
            style={
              isLeft
                ? {
                    borderLeft: "20px solid transparent",
                    borderBottom: "20px solid rgba(201,168,76,0.3)",
                  }
                : {
                    borderRight: "20px solid transparent",
                    borderBottom: "20px solid rgba(201,168,76,0.3)",
                  }
            }
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="py-24 md:py-32 bg-prime-charcoal relative overflow-hidden">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[140px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div
        className="max-w-[1280px] mx-auto px-5 md:px-10 relative z-10"
        ref={ref}
      >
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
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
            className="font-display font-black text-white"
            style={{ fontSize: "clamp(28px, 4vw, 60px)", lineHeight: 1.02 }}
          >
            Método <em className="text-gold not-italic">Prime</em> em ação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="font-body text-prime-gray text-[13px] md:text-[15px] max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Cada etapa transforma escolas e times em marcas memoráveis —
            estratégia, narrativa e entrega com excelência absoluta em cada
            frame.
          </motion.p>
        </div>

        {/* ── MOBILE: cards em coluna + campo embaixo ── */}
        <div className="block md:hidden">
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <MobileCard key={step.title} step={step} i={i} inView={inView} />
            ))}
          </div>
          {/* Campo abaixo dos cards */}
          <div className="flex justify-center mt-6">
            <div className="relative w-36">
              <FieldSVG inView={inView} />
              <motion.div
                className="absolute left-1/2 top-1/2 pointer-events-none select-none"
                style={{ transform: "translate(-50%, -50%) rotate(-90deg)" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8 }}
              >
                <span className="font-display font-black text-[7px] tracking-[4px] text-gold/20 uppercase whitespace-nowrap">
                  PRIME FOOTBALL
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: layout tático com campo central ── */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-[900px]">
            <div
              className="relative mx-auto flex justify-center"
              style={{ height: "clamp(500px, 60vw, 660px)" }}
            >
              {/* Campo SVG */}
              <div
                style={{
                  width: "clamp(200px, 24vw, 280px)",
                  height: "100%",
                  flexShrink: 0,
                }}
              >
                <FieldSVG inView={inView} />
              </div>
              {/* Cards táticos absolutos */}
              <div className="absolute inset-0">
                {steps.map((step, i) => (
                  <DesktopCard
                    key={step.title}
                    step={step}
                    i={i}
                    inView={inView}
                  />
                ))}
              </div>
              {/* Label PRIME FOOTBALL rotacionado */}
              <motion.div
                className="absolute left-1/2 top-1/2 pointer-events-none select-none"
                style={{ transform: "translate(-50%, -50%) rotate(-90deg)" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8 }}
              >
                <span className="font-display font-black text-[11px] tracking-[8px] text-gold/8 uppercase whitespace-nowrap">
                  PRIME FOOTBALL
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
