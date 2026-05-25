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

const track = [...logos, ...logos];

export default function Marquee() {
  return (
    <div
      className="border-y border-gold/10 bg-prime-charcoal/50 w-full py-4"
      style={{ overflow: "hidden" }}
    >
      <div
        className="flex items-center animate-marquee"
        style={{ width: "max-content", gap: "64px" }}
      >
        {track.map(({ src, alt }, i) => (
          <img
            key={`${alt}-${i}`}
            src={src}
            alt={alt}
            style={{
              width: "400px", // largo o suficiente pro logo
              height: "400px", // alto para compensar o espaço vazio
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(100%)",
              opacity: 0.5,
              flexShrink: 0,
              marginTop: "-150px", // puxa pra cima, cortando o vazio
              marginBottom: "-150px",
              transition:
                "transform 0.4s ease, filter 0.4s ease, opacity 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
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
    </div>
  );
}
