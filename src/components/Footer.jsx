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
    <footer className="bg-prime-charcoal border-t border-gold/15 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-6 mb-5">
              <div className="w-24 h-24 overflow-hidden flex items-center justify-center flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Prime logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-11 h-11 border border-gold/20 flex items-center justify-center text-prime-gray font-bold text-sm
                                               hover:bg-gold hover:text-prime-black hover:border-gold transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body font-bold text-[10px] tracking-[2.5px] uppercase text-gold mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-2 font-body text-[13px] text-prime-gray hover:text-gold transition-colors duration-200 group"
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
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-prime-gray/50 tracking-[0.5px]">
            © 2026 Prime Company. Todos os direitos reservados.
          </p>
          <span className="flex items-center gap-2 font-body font-bold text-[10px] tracking-[2px] uppercase text-gold/50">
            <span className="w-5 h-px bg-gold/40" />
            Prime Company
          </span>
        </div>
      </div>
    </footer>
  );
}
