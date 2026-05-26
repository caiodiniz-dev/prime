import { Instagram, MessageCircle } from "lucide-react";

const footerLinks = {
  Verticais: [
    { label: "Prime Football", href: "#servicos" },
    { label: "Agência Prime", href: "#servicos" },
    { label: "Portfólio", href: "#projetos" },
  ],
  Serviços: [
    { label: "Social Mídia", href: "#servicos" },
    { label: "Tráfego Pago", href: "#servicos" },
    { label: "Produção Audiovisual", href: "#servicos" },
    { label: "Branding", href: "#servicos" },
  ],
  Contato: [
    {
      label: "contato@agenciaprimefootball.com.br",
      href: "mailto:contato@agenciaprimefootball.com.br",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5519997752403",
    },
    {
      label: "@agenciaprimefootball",
      href: "https://www.instagram.com/agenciaprimefootball/",
    },
  ],
};

export default function Footer() {
  const socials = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/agenciaprimefootball/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5519997752403",
    },
  ];

  return (
    <footer className="bg-prime-charcoal border-t border-gold/15 pt-12 md:pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-4 mb-4 md:mb-5">
              <div className="w-16 h-16 md:w-24 md:h-24 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Prime Company"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-display font-bold text-lg text-white">
                  Prime <span className="text-gold">Company</span>
                </span>
                <span className="block font-body text-[10px] tracking-[1.5px] uppercase text-prime-gray mt-1">
                  Campinas · SP
                </span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-11 h-11 md:w-14 md:h-14 border border-gold/20 flex items-center justify-center text-prime-gray hover:bg-gold hover:text-prime-black hover:border-gold transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-bold text-[9px] md:text-[10px] tracking-[2.5px] uppercase text-gold mb-4 md:mb-5">
                {title}
              </h4>
              <ul className="space-y-2 md:space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-2 font-body text-[12px] md:text-[13px] text-prime-gray hover:text-gold transition-colors duration-200 group"
                    >
                      <span className="text-gold/30 font-body text-[10px] group-hover:text-gold/60 transition-colors">
                        —
                      </span>
                      <span className="truncate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-5 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-[10px] md:text-[11px] text-prime-gray/50 tracking-[0.5px]">
            © 2026 Prime Company. Todos os direitos reservados.
          </p>
          <span className="flex items-center justify-center gap-2 font-body font-bold text-[9px] md:text-[10px] tracking-[2px] uppercase text-gold/50">
            <span className="w-5 h-px bg-gold/40" />
            Prime Company
          </span>
        </div>
      </div>
    </footer>
  );
}
