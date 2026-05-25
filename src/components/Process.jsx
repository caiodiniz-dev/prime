import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Análise profunda da marca, posicionamento atual, concorrência e público. Entendemos o jogo antes de entrar em campo.",
  },
  {
    num: "02",
    title: "Estratégia",
    desc: "Planejamento editorial, identidade visual adaptada e calendário de conteúdo com foco em captação e autoridade.",
  },
  {
    num: "03",
    title: "Produção",
    desc: "Captação em campo, edição de vídeo premium, design de peças e copy que conecta emocionalmente — sem clichês.",
  },
  {
    num: "04",
    title: "Resultado",
    desc: "Publicação com aprovação do CEO, monitoramento de métricas e otimização constante para crescimento previsível.",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-32 bg-prime-charcoal relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[100px]"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-gold/8 blur-[100px]"
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

      <div className="max-w-[1280px] mx-auto px-10 relative z-10" ref={ref}>
        <div className="text-center mb-24">
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
            style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
          >
            Método <em className="text-gold">Prime</em> em ação
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-prime-gray text-[16px] max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Cada passo é pensado para transformar clubes, marcas e times em
            referências memoráveis. Criamos estratégia, narrativa e entrega com
            o timing certo para a torcida e o mercado — sempre sem cortes e com
            excelência absoluta em cada frame.
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Animated connecting line */}
          <motion.div
            className="absolute top-32 left-1/2 h-px w-full bg-gradient-to-r from-gold/10 via-gold/50 to-gold/10 hidden lg:block"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {steps.map(({ num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden rounded-[24px] border border-gold/10 bg-gradient-to-br from-prime-charcoal2 to-prime-black p-8 text-left transition-all duration-500 hover:border-gold/50 hover:bg-gradient-to-br hover:from-prime-charcoal2 hover:to-prime-charcoal group ${
                i % 2 === 1 ? "lg:mt-16" : ""
              }`}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 rounded-[24px] group-hover:from-gold/5 group-hover:to-gold/0"
                transition={{ duration: 0.5 }}
              />

              {/* Floating background orbs */}
              <motion.div
                className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Number with animation */}
                <div className="mb-6 flex items-center justify-between gap-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                    animate={inView ? { y: [0, -4, 0] } : {}}
                    transition={{
                      y: {
                        delay: 0.5 + i * 0.2,
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-gold/15 to-gold/5 text-gold text-2xl font-display font-bold group-hover:border-gold/80 group-hover:bg-gold/20 transition-all duration-300"
                  >
                    {num}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[11px] uppercase tracking-[2px] text-gold/90 font-semibold group-hover:border-gold/70 group-hover:bg-gold/20 transition-all duration-300"
                  >
                    Step {num}
                  </motion.span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-2xl mb-4 group-hover:text-gold transition-colors duration-300">
                  {title}
                </h3>

                {/* Description */}
                <p className="font-body text-prime-gray/70 text-sm leading-relaxed group-hover:text-prime-gray transition-colors duration-300">
                  {desc}
                </p>

                {/* Progress indicator — CORRIGIDO: margem top maior para espaçar do texto */}
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-gold/50"
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{
                      delay: 0.6 + i * 0.15,
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
