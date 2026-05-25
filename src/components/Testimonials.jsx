import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Antes da Prime, nosso CT era invisível. Hoje somos referência na região. O conteúdo emocional que eles produzem cria um pertencimento real com os atletas e as famílias.",
    author: "Diretor Esportivo",
    org: "Alcateia Novorizontino Campinas",
    initial: "M",
  },
  {
    text: "A Prime Football transformou nosso projeto. Em 6 meses dobramos o número de alunos e hoje temos lista de espera em todas as categorias. A qualidade do conteúdo é incomparável no mercado.",
    author: "Coordenador Técnico",
    org: "Chute Inicial Corinthians Hortolândia",
    initial: "C",
    featured: true,
  },
  {
    text: "O nível de profissionalismo da Prime é diferente de tudo que já vi. A estética das peças transmite exatamente a grandeza que a nossa escola merece.",
    author: "Gestor",
    org: "C.T. Timão Sumaré",
    initial: "L",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-28 bg-prime-black relative overflow-hidden">
      {/* Large quote bg */}
      <div className="absolute inset-x-0 top-8 flex justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[280px] text-gold/[0.02] leading-none">
          "
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
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
            style={{ fontSize: "clamp(34px, 4.2vw, 56px)" }}
          >
            Depoimentos reais de quem viveu
            <br />a transformação da Prime.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto font-body text-prime-gray text-[15px] leading-relaxed mt-5"
          >
            Resultados que se traduzem em engajamento, reconhecimento e
            crescimento de audiência para escolas e times de futebol.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ text, author, org, initial, featured }, i) => (
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
              className={`relative overflow-hidden rounded-[32px] border transition-all duration-400 ${
                featured
                  ? "border-gold/25 bg-gradient-to-br from-gold/10 to-prime-charcoal2"
                  : "border-white/10 bg-prime-charcoal2 hover:border-gold/25"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              <div className="p-10 relative z-10">
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gold text-prime-black text-xl font-display font-black">
                    {initial}
                  </div>
                  <div className="text-right text-gold uppercase text-[11px] tracking-[2px] font-semibold">
                    {featured ? "Destaque" : "Depoimento"}
                  </div>
                </div>

                <p className="font-accent italic text-white text-[17px] leading-relaxed mb-10">
                  {text}
                </p>

                <div className="border-t border-white/10 pt-6">
                  <strong className="block font-body font-bold text-white text-[13px] mb-1">
                    {author}
                  </strong>
                  <span className="block font-body text-[11px] text-prime-gray tracking-[0.5px]">
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
