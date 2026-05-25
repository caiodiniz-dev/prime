import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const clients = [
  { image: "/foto-goalz-sport.jpeg", name: "Goalz", sub: "Grupo Goalz" },
  {
    image: "/foto-sao-paulo.jpeg",
    name: "Alcateia Novorizontino",
    sub: "#VEMSERTÍGRE · Campinas",
  },
  {
    image: "/foto-sao-paulo.jpeg",
    name: "C.T. Timão Sumaré",
    sub: "#VEMSERTIMÃO",
  },
  {
    image: "/foto-goalz-sport.jpeg",
    name: "Chute Inicial Corinthians",
    sub: "Hortolândia",
  },
  {
    image: "/foto-sao-paulo.jpeg",
    name: "Chute Inicial Futsal",
    sub: "Escola Especializada",
  },
  {
    image: "/foto-goalz-sport.jpeg",
    name: "SPFC Paulínia",
    sub: "São Paulo FC · Paulínia",
  },
  {
    image: "/foto-sao-paulo.jpeg",
    name: "Paulínia Sports Club",
    sub: "Centro Esportivo",
  },
  {
    image: "/foto-goalz-sport.jpeg",
    name: "SPFC Sumaré",
    sub: "São Paulo FC · Sumaré",
  },
  {
    image: "/foto-sao-paulo.jpeg",
    name: "Audax Campinas",
    sub: "Centro de Formação",
  },
  {
    image: "/foto-goalz-sport.jpeg",
    name: "Grupo LM",
    sub: "Parceiro Estratégico",
  },
];

export default function Clients() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="clientes" className="py-24 bg-prime-charcoal overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-14" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label justify-center"
          >
            Clientes Parceiros
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Marcas que <em className="text-gold">confiam</em> na Prime.
          </motion.h2>
        </div>

        <div className="-mx-10 overflow-x-auto pb-4 px-10 scroll-smooth">
          <div className="flex gap-6 min-w-max snap-x snap-mandatory">
            {clients.map(({ image, name, sub }, index) => (
              <motion.div
                key={`${name}-${index}`}
                whileHover={{ y: -8 }}
                className="snap-start min-w-[320px] flex-shrink-0 rounded-[28px] overflow-hidden border border-white/10 bg-prime-charcoal2 shadow-[0_20px_70px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_70px_rgba(201,168,76,0.15)] group"
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-prime-charcoal2 to-prime-black">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-prime-black via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="rounded-full border border-gold/30 bg-gold/15 px-3 py-1 text-[11px] uppercase tracking-[2px] text-gold font-semibold w-fit mb-4">
                    Cliente Prime
                  </div>

                  <strong className="block font-display font-bold text-white text-lg leading-tight mb-2">
                    {name}
                  </strong>
                  <p className="font-body text-prime-gray/75 text-sm leading-relaxed mb-4">
                    {sub}
                  </p>

                  <div className="rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 p-3.5 border border-gold/20">
                    <span className="block text-[10px] uppercase tracking-[2px] text-gold/80 font-semibold mb-2">
                      Impacto
                    </span>
                    <p className="text-[12px] text-white/85 leading-relaxed">
                      Crescimento mensurável em engajamento, posicionamento de
                      marca e autoridade no mercado esportivo.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
