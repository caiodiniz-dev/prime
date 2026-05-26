import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, CircleDot } from "lucide-react";

const services = [
  {
    num: "01",
    tag: "Vertical Principal",
    icon: CircleDot,
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
    icon: Building2,
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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="servicos"
      className="py-20 md:py-24 bg-prime-charcoal relative overflow-hidden"
    >
      {/* Top border gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label justify-center"
          >
            O que Fazemos
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
          >
            Duas verticais.
            <br />
            <em className="text-gold">Um padrão inegociável.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-prime-gray text-[14px] md:text-[15px] max-w-xl mx-auto mt-4 leading-relaxed"
          >
            Especialização que gera resultado. Cada vertical tem sua identidade,
            mas ambas seguem o mesmo nível de excelência Prime — sem atalhos.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/8">
          {services.map(({ num, tag, icon: Icon, title, desc, list }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
              className="relative bg-prime-charcoal p-8 md:p-12 group overflow-hidden"
            >
              {/* Hover bottom border */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Background num */}
              <span className="absolute top-8 right-8 font-display font-black text-[80px] md:text-[100px] leading-none text-gold/[0.04] select-none group-hover:text-gold/[0.07] transition-colors duration-300">
                {num}
              </span>

              <span className="inline-block font-body font-bold text-[9px] md:text-[10px] tracking-[3px] uppercase text-gold bg-gold/8 border border-gold/20 px-3 py-1 mb-5 md:mb-6">
                {tag}
              </span>

              <span className="w-10 h-10 md:w-12 md:h-12 mb-4 border border-gold/25 bg-gold/5 flex items-center justify-center text-gold">
                <Icon size={22} />
              </span>

              <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-3 md:mb-4 leading-tight">
                {title}
              </h3>

              <p className="font-body text-prime-gray text-[13px] md:text-[14px] leading-relaxed mb-6 md:mb-8">
                {desc}
              </p>

              <ul className="space-y-2 md:space-y-2.5">
                {list.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 md:gap-3 font-body text-[12px] md:text-[13px] text-prime-gray-light"
                  >
                    <span className="block w-4 h-px bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
