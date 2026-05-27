import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    num: "01",
    title: "Invisibilidade digital",
    desc: "Sem presença estratégica nas redes, sua escola não existe para famílias que procuram um futuro esportivo para o filho. O algoritmo não perdoa ausência — e o concorrente ao lado agradece.",
    tag: "Comum em 9 de 10 CTs",
  },
  {
    num: "02",
    title: "Identidade visual fraca",
    desc: "Peças sem padrão, fontes aleatórias, fotos sem edição. A estética comunica antes mesmo da legenda — e uma identidade fraca destrói a autoridade da sua marca antes de começar.",
    tag: "A primeira impressão é visual",
  },
  {
    num: "03",
    title: "Captação sem previsibilidade",
    desc: "Depender de indicação boca a boca não é estratégia — é sorte. Escolas que dominam o digital captam novos alunos todo mês, com funis estruturados e aula experimental.",
    tag: "Resultado precisa ser mensurável",
  },
  {
    num: "04",
    title: "Conteúdo sem emoção",
    desc: "Posts que não conectam, não engajam e não vendem. Famílias escolhem escolas que transmitem propósito, sonho e pertencimento — não tabela de preços e horários jogados num story.",
    tag: "Conteúdo que converte",
  },
];

const counters = [
  { num: "90%", label: "Das escolas sem estratégia digital" },
  { num: "3×", label: "Mais matrículas com branding forte" },
  { num: "6 meses", label: "Para se tornar referência na região" },
  { num: "0", label: "Tolerância ao conteúdo genérico" },
];

export default function ProblemSection() {
  const [refHeader, inViewHeader] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [refCards, inViewCards] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section className="py-20 md:py-28 bg-prime-charcoal relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent pointer-events-none"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="absolute right-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="mb-14 md:mb-20" ref={refHeader}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            O Problema do Mercado
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-white leading-[1.05] mb-5"
            style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
          >
            Sua escola merece mais
            <br />
            do que um <em className="text-gold not-italic">post genérico.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-[14px] md:text-[15px] text-prime-gray leading-relaxed max-w-2xl"
          >
            90% das escolas de futebol investem em marketing sem estratégia.
            Conteúdo raso, sem identidade e sem resultado — e continuam perdendo
            alunos para concorrentes com menos qualidade técnica, mas com
            presença digital mais forte. Isso tem solução.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/8 mt-10 md:mt-12 overflow-hidden"
          >
            {counters.map(({ num, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={inViewHeader ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07 }}
                className="bg-prime-charcoal2 px-5 md:px-8 py-6 md:py-8 text-center"
              >
                <span
                  className="block font-display font-black text-gold leading-none mb-2"
                  style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
                >
                  {num}
                </span>
                <span className="block font-body font-bold text-[9px] md:text-[10px] tracking-[2px] uppercase text-prime-gray/60 leading-tight">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          ref={refCards}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/8"
        >
          {problems.map(({ num, title, desc, tag }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 40 }}
              animate={inViewCards ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative bg-prime-charcoal p-7 md:p-10 group overflow-hidden"
              style={{ minHeight: "220px" }}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/0 via-gold to-gold/0 origin-top"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />

              <span
                className="absolute top-4 right-5 font-display font-black leading-none text-gold/[0.035] select-none pointer-events-none transition-colors duration-300 group-hover:text-gold/[0.07]"
                style={{ fontSize: "clamp(64px, 7vw, 96px)" }}
                aria-hidden="true"
              >
                {num}
              </span>

              <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                {title}
              </h3>

              <p className="font-body text-[13px] md:text-[14px] text-prime-gray leading-relaxed mb-5 group-hover:text-prime-gray-light transition-colors duration-300">
                {desc}
              </p>

              <span className="inline-block font-body font-bold text-[9px] tracking-[2px] uppercase text-gold/70 bg-gold/5 border border-gold/15 px-3 py-1">
                {tag}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inViewCards ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-px bg-gold/[0.06] border border-gold/15 px-6 md:px-10 py-6 md:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <strong className="block font-display font-bold text-white text-lg md:text-xl mb-1">
              A Prime resolve cada um desses problemas.
            </strong>
            <span className="block font-body text-[13px] text-prime-gray">
              Diagnóstico gratuito · sem compromisso · resultado em 90 dias.
            </span>
          </div>
          <a
            href="https://wa.me/5519997752403"
            target="_blank"
            rel="noreferrer"
            className="btn-prime shrink-0 text-[11px] whitespace-nowrap"
          >
            <span>Quero resolver agora</span>
            <ArrowRight size={15} className="relative z-10 flex-shrink-0" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
