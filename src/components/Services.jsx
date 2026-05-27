import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    num: "01",
    tag: "Vertical Principal",
    title: "Prime Football",
    desc: "Marketing e posicionamento exclusivo para Escolas de Futebol, Centros de Treinamento e CFAs. Vivemos o ecossistema esportivo de dentro para fora — com presença real em campo, narrativa real e resultado real.",
    list: [
      "Gestão completa de redes sociais",
      "Produção audiovisual em campo",
      "Reels estratégicos e carrosséis 8 slides",
      "Tráfego pago e captação de alunos",
      "Posicionamento e branding de marca",
      "Funis de conversão para aula experimental",
    ],
  },
  {
    num: "02",
    tag: "Vertical Corporativa",
    title: "Agência de Marketing Prime",
    desc: "Para clientes corporativos fora do nicho esportivo que exigem posicionamento sofisticado, premium e orientado a autoridade máxima de mercado. Mesma excelência, outro campo.",
    list: [
      "Branding e identidade visual premium",
      "Estratégia de conteúdo corporativo",
      "Posicionamento de marca de alto nível",
      "Produção gráfica com padrão ouro",
      "Gestão completa de presença digital",
      "Relatórios de resultado mensurável",
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="servicos"
      className="py-20 md:py-24 bg-gold relative overflow-hidden"
    >
      {/* Background decorativo */}
      <span className="absolute top-0 left-6 md:left-10 font-display text-[160px] md:text-[220px] text-prime-black/10 leading-none select-none pointer-events-none">
        #
      </span>

      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-3 font-body font-semibold text-[10px] tracking-[4px] uppercase text-prime-black/70 mb-4 md:mb-5"
          >
            <span className="block w-8 h-px bg-prime-black/50" />O que Fazemos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-prime-black leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Duas verticais.
            <br />
            <em className="text-prime-black/80">Um padrão inegociável.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-prime-black/75 text-[14px] md:text-[15px] max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Especialização que gera resultado. Cada vertical tem sua identidade,
            mas ambas seguem o mesmo nível de excelência Prime.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {services.map(({ num, tag, title, desc, list }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="relative bg-prime-black hover:bg-prime-black/90 transition-colors duration-300 p-8 md:p-12 overflow-hidden group"
            >
              {/* Número gigante decorativo */}
              <span className="absolute top-6 right-6 font-display font-black text-[80px] md:text-[110px] text-white/5 leading-none select-none">
                {num}
              </span>

              {/* Tag */}
              <span className="inline-block font-body font-bold text-[9px] md:text-[10px] tracking-[3px] uppercase text-gold border border-gold/40 px-3 py-1 mb-5 md:mb-6">
                {tag}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-white text-2xl md:text-3xl leading-tight mb-3 md:mb-4">
                {title}
              </h3>

              {/* Description */}
              <p className="font-body text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6 md:mb-8">
                {desc}
              </p>

              {/* List */}
              <ul className="space-y-2.5">
                {list.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-[12px] md:text-[13px] text-white/80"
                  >
                    <span className="block w-4 h-px bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover line dourada */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
