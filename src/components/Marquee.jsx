// Marquee.jsx — Prime Company
// Mobile-otimizado: logos responsivos, fades nas bordas, hover colorido

const logos = [
  { src: "/assets/logos/ALCATEIACEVISA.png", alt: "Alcateia Cevisa" },
  { src: "/assets/logos/CAPAWANDERSSON.png", alt: "Capa Wandersson" },
  {
    src: "/assets/logos/CHUTEINICIALHORTOLANDIA.png",
    alt: "Chute Inicial Hortolândia",
  },
  { src: "/assets/logos/CORINTHIANSFUTSAL.png", alt: "Corinthians Futsal" },
  { src: "/assets/logos/SPFCPAULINIA.png", alt: "SPFC Paulínia" },
  { src: "/assets/logos/TIMAOSUMARE.png", alt: "Timão Sumaré" },
];

// Triplicamos para o loop ser suave mesmo em telas largas
const track = [...logos, ...logos, ...logos];

export default function Marquee() {
  return (
    <div
      className="border-y border-gold/10 bg-prime-charcoal/50 w-full relative"
      style={{
        overflow: "hidden",
        height: "72px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Fade esquerda */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: "56px",
          background: "linear-gradient(to right, #0A0A0A, transparent)",
        }}
      />
      {/* Fade direita */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: "56px",
          background: "linear-gradient(to left, #0A0A0A, transparent)",
        }}
      />

      <div
        className="flex items-center animate-marquee"
        style={{ width: "max-content", gap: "clamp(16px, 4vw, 32px)" }}
      >
        {track.map(({ src, alt }, i) => (
          <img
            key={`${alt}-${i}`}
            src={src}
            alt={alt}
            style={{
              width: "clamp(120px, 18vw, 240px)",
              height: "clamp(120px, 18vw, 240px)",
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(100%)",
              opacity: 0.45,
              flexShrink: 0,
              /* Centraliza verticalmente sem transbordar a div */
              marginTop: "calc((clamp(120px, 18vw, 240px) - 72px) / -2)",
              marginBottom: "calc((clamp(120px, 18vw, 240px) - 72px) / -2)",
              transition:
                "transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.filter = "grayscale(0%)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "grayscale(100%)";
              e.currentTarget.style.opacity = "0.45";
            }}
          />
        ))}
      </div>
    </div>
  );
}

/*
  ── tailwind.config.js ───────────────────────────────────────────────────────
  Adicione/confirme em theme.extend:

  animation: {
    marquee: "marquee 22s linear infinite",
  },
  keyframes: {
    marquee: {
      from: { transform: "translateX(0)" },
      to:   { transform: "translateX(-33.333%)" },  // 1/3 do track triplicado
    },
  },
  ─────────────────────────────────────────────────────────────────────────────
*/
