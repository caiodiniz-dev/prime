import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const numbers = [
  { num: 2, suffix: "B+", label: "Bilhões de views gerados" },
  { num: 10, suffix: "+", label: "Escolas Parceiras Ativas" },
  { num: 200, suffix: "+", label: "Peças Entregues por Mês" },
  { num: 6, suffix: "", label: "Anos de Experiência no Mercado" },
];

export default function Results() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 md:py-24 bg-gold relative overflow-hidden">
      <span className="absolute top-0 left-6 md:left-10 font-display text-[160px] md:text-[200px] text-prime-black/5 leading-none select-none pointer-events-none">
        "
      </span>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10" ref={ref}>
        {/* Top — Texto */}
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3 font-body font-semibold text-[10px] tracking-[4px] uppercase text-prime-black/50 mb-4 md:mb-5"
          >
            <span className="block w-8 h-px bg-prime-black/30" />
            Resultados Reais
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-prime-black leading-tight"
            style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
          >
            Números que validam a metodologia.
          </motion.h2>
        </div>

        {/* Bottom — Números */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-prime-black/10">
          {numbers.map(({ num, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-gold/30 hover:bg-prime-black/5 transition-colors duration-300 p-6 md:p-10 text-center group flex flex-col items-center justify-center"
            >
              <span
                className="block font-display font-black text-prime-black leading-none mb-2 md:mb-3"
                style={{ fontSize: "clamp(36px, 4vw, 64px)" }}
              >
                {inView ? (
                  <CountUp end={num} duration={2} delay={0.3 + i * 0.1} />
                ) : (
                  "0"
                )}
                <span
                  className="text-prime-black font-black"
                  style={{ fontSize: "0.6em" }}
                >
                  {suffix}
                </span>
              </span>
              <span
                className="block font-body font-bold text-[9px] md:text-[10px] tracking-[2px] uppercase text-prime-black/55 text-center leading-tight"
                style={{ maxWidth: "120px" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
