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

// Triplicamos para o loop ficar suave mesmo em telas largas
const track = [...logos, ...logos, ...logos];

export default function Marquee() {
  return (
    <div
      className="border-y border-gold/10 bg-prime-charcoal/50 w-full"
      style={{
        overflow: "hidden",
        height: "96px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="flex items-center animate-marquee"
        style={{ width: "max-content", gap: "32px" }}
      >
        {track.map(({ src, alt }, i) => (
          <img
            key={`${alt}-${i}`}
            src={src}
            alt={alt}
            style={{
              width: "320px",
              height: "320px",
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(100%)",
              opacity: 0.5,
              flexShrink: 0,
              marginTop: "-120px",
              marginBottom: "-120px",
              transition:
                "transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.2)";
              e.currentTarget.style.filter = "grayscale(0%)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "grayscale(100%)";
              e.currentTarget.style.opacity = "0.5";
            }}
          />
        ))}
      </div>

      {/*
        No seu tailwind.config.js, certifique que a animação está mais rápida:
        'marquee': 'marquee 18s linear infinite',
        
        Se ainda estiver lento, use inline style abaixo em vez do className:
        style={{ animation: "marquee 18s linear infinite", width: "max-content", gap: "32px" }}
      */}
    </div>
  );
}
