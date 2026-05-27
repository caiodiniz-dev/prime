import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import userSPFC from "../assets/SPFC-user.jpeg";
import userTimao from "../assets/timaosumare-user.jpeg";
import userGoalz from "../assets/goalz-users.jpeg";

const testimonials = [
  {
    text: "Antes da Prime, nosso CT era invisível nas redes. Hoje somos referência na região de Campinas. O conteúdo emocional que eles produzem cria um pertencimento real com os atletas e as famílias.",
    author: "Carlos Mendes",
    org: "São Paulo FC — Campinas",
    photo: userSPFC,
  },
  {
    text: "A Prime Football transformou nosso projeto. Em 6 meses dobramos o número de alunos e hoje temos lista de espera em todas as categorias. A qualidade do conteúdo é incomparável no mercado.",
    author: "Rafael Oliveira",
    org: "C.T. Timão — Sumaré",
    photo: userTimao,
    featured: true,
  },
  {
    text: "O nível de profissionalismo da Prime é diferente de tudo que já vi no mercado esportivo. A estética das peças transmite exatamente a grandeza que nossa escola merece.",
    author: "Lucas Ferreira",
    org: "Goalz Sport — Campinas",
    photo: userGoalz,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 md:py-28 bg-prime-black relative overflow-hidden">
      {/* Large quote bg */}
      <div className="absolute inset-x-0 top-8 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[180px] md:text-[280px] text-gold/[0.02] leading-none">
          "
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label justify-center"
          >
            Depoimentos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-white leading-[1.02]"
            style={{ fontSize: "clamp(26px, 4.2vw, 56px)" }}
          >
            Depoimentos reais de quem viveu
            <br className="hidden md:block" /> a transformação da Prime.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto font-body text-prime-gray text-[13px] md:text-[15px] leading-relaxed mt-4 md:mt-5"
          >
            Resultados que se traduzem em engajamento, reconhecimento e
            crescimento de audiência para escolas e times de futebol em todo o
            Brasil.
          </motion.p>
        </div>

        {/* Cards — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {testimonials.map(({ text, author, org, photo, featured }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.12,
                duration: 0.75,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 32px 90px rgba(201,168,76,0.18)",
              }}
              className={`relative overflow-hidden rounded-[24px] md:rounded-[32px] border transition-all duration-400 ${
                featured
                  ? "border-gold/25 bg-gradient-to-br from-gold/10 to-prime-charcoal2"
                  : "border-white/10 bg-prime-charcoal2 hover:border-gold/25"
              }`}
            >
              <div className="p-7 md:p-10 relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 md:mb-7">
                  {/* Foto do usuário */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={photo}
                      alt={author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-right text-gold uppercase text-[10px] md:text-[11px] tracking-[2px] font-semibold">
                    {featured ? "Destaque" : "Depoimento"}
                  </div>
                </div>

                <p className="font-accent italic text-white text-[15px] md:text-[17px] leading-relaxed mb-8 md:mb-10">
                  "{text}"
                </p>

                <div className="border-t border-white/10 pt-5 md:pt-6">
                  <strong className="block font-body font-bold text-white text-[12px] md:text-[13px] mb-1">
                    {author}
                  </strong>
                  <span className="block font-body text-[10px] md:text-[11px] text-prime-gray tracking-[0.5px]">
                    {org}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
