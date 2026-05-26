import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Mail, MapPin, Instagram } from "lucide-react";

export default function CTA() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="contato"
      className="py-24 md:py-32 bg-prime-black relative overflow-hidden text-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
              top: `${25 + i * 25}%`,
            }}
            animate={{ opacity: [0, 1, 0], scaleX: [0.3, 1, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label justify-center mb-6 md:mb-8"
        >
          Vamos Conversar?
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-display font-black text-white leading-[1.02] mb-6 md:mb-7"
          style={{ fontSize: "clamp(32px, 5vw, 68px)" }}
        >
          Sua escola merece
          <br />
          ser uma <em className="gold-shimmer">marca desejada.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-body text-prime-gray text-[14px] md:text-[16px] leading-relaxed max-w-xl mx-auto mb-10 md:mb-12"
        >
          Agende uma reunião sem compromisso. Mostramos exatamente o que a Prime
          pode fazer pela sua escola de futebol nos primeiros 90 dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-16 md:mb-20"
        >
          <a
            href="https://wa.me/5519997752403"
            target="_blank"
            rel="noreferrer"
            className="btn-prime text-[12px] md:text-[13px] px-8 md:px-10 py-4 md:py-5 justify-center"
          >
            <span>Agendar Reunião Gratuita</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a
            href="https://wa.me/5519997752403"
            target="_blank"
            rel="noreferrer"
            className="btn-outline py-4 md:py-5 justify-center"
          >
            WhatsApp Direto
            <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-10 md:pt-12 border-t border-white/6"
        >
          {[
            {
              icon: <Mail size={15} />,
              label: "E-mail Corporativo",
              value: "contato@agenciaprimefootball.com.br",
            },
            {
              icon: <MapPin size={15} />,
              label: "Localização",
              value: "Campinas — São Paulo",
            },
            {
              icon: <Instagram size={15} />,
              label: "Instagram Oficial",
              value: "@agenciaprimefootball",
            },
          ].map(({ icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-3 text-prime-gray-light group"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 border border-gold/20 bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-200">
                {icon}
              </div>
              <div className="text-left">
                <strong className="block font-body font-bold text-[12px] md:text-[13px] text-white">
                  {value}
                </strong>
                <span className="block font-body text-[9px] md:text-[10px] text-prime-gray tracking-[0.5px]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
