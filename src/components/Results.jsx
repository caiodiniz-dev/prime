import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const numbers = [
  { num: 2, suffix: "B", label: "Bilhões de views gerados" },
  { num: 10, suffix: "+", label: "Escolas Parceiras Ativas" },
  { num: 200, suffix: "+", label: "Peças Entregues por Mês" },
  { num: 6, suffix: "", label: "Especialistas em Posicionamento" },
];

export default function Results() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 bg-gold relative overflow-hidden">
      {/* Large quote mark */}
      <span className="absolute top-0 left-10 font-display text-[200px] text-prime-black/5 leading-none select-none pointer-events-none">
        "
      </span>

      <div className="max-w-[1280px] mx-auto px-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 font-body font-semibold text-[10px] tracking-[4px] uppercase text-prime-black/50 mb-5"
            >
              <span className="block w-8 h-px bg-prime-black/30" />
              Resultados Reais
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-prime-black leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Números que validam a metodologia.
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-accent italic text-prime-black/65 text-[17px] leading-relaxed border-l-2 border-prime-black/20 pl-4 mb-4"
            >
              "A Prime Football transformou nosso projeto. Em 6 meses dobramos o
              número de alunos e hoje temos lista de espera em todas as
              categorias."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="font-body font-bold text-[11px] tracking-[1.5px] uppercase text-prime-black/55"
            >
              — Coordenador Técnico
              <br />
              Chute Inicial Corinthians Hortolândia
            </motion.p>
          </div>

          {/* Right — Numbers grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-0.5 bg-prime-black/10">
            {numbers.map(({ num, suffix, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-gold/30 hover:bg-prime-black/5 transition-colors duration-300 p-10 text-center group flex flex-col items-center justify-center"
              >
                <span
                  className="block font-display font-black text-prime-black leading-none mb-3"
                  style={{ fontSize: "clamp(40px, 4vw, 64px)" }}
                >
                  {inView ? (
                    <CountUp end={num} duration={2} delay={0.3 + i * 0.1} />
                  ) : (
                    "0"
                  )}
                  {/* B sempre em preto, sem opacidade reduzida */}
                  <span
                    className="text-prime-black font-black"
                    style={{ fontSize: "0.6em" }}
                  >
                    {suffix}
                  </span>
                </span>
                {/* Label alinhado e com tamanho mínimo para não comprimir */}
                <span
                  className="block font-body font-bold text-[10px] tracking-[2px] uppercase text-prime-black/55 text-center leading-tight"
                  style={{ maxWidth: "120px" }}
                >
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
