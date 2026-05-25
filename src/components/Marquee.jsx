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
      className="border-y border-gold/10 bg-prime-charcoal/50 overflow-hidden w-full"
      style={{
        minHeight: "200px",
        display: "flex",
        alignItems: "center",
        padding: "24px 0",
      }}
    >
      <div
        className="flex items-center animate-marquee"
        style={{ width: "max-content", gap: "48px" }}
      >
        {track.map(({ src, alt }, i) => (
          <div
            key={`${alt}-${i}`}
            className="group flex-shrink-0 transition-transform duration-500 hover:scale-105"
            style={{
              width: "320px",
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={src}
              alt={alt}
              className="group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.5,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
