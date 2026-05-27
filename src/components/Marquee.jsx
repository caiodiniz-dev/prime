const logos = [
  { src: "/assets/logos/Capa Alcateia Gevisa.png", alt: "Alcateia Gevisa" },
  {
    src: "/assets/logos/Capa Chute Inicial Hortolandia.png",
    alt: "Chute Futsal",
  },
  {
    src: "/assets/logos/Capa Chute Inicial.png",
    alt: "Chute Inicial Hortolândia",
  },
  { src: "/assets/logos/Capa Goalz.png", alt: "Goalz" },
  { src: "/assets/logos/Capa SPFC.png", alt: "SPFC" },
  { src: "/assets/logos/Capa Timão Sumaré.png", alt: "Timão Sumaré" },
  { src: "/assets/logos/Capa Wanderson.png", alt: "Wanderson" },
];

const track = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

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
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: "56px",
          background: "linear-gradient(to right, #0A0A0A, transparent)",
        }}
      />
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
              width: "clamp(70px, 10vw, 120px)",
              height: "clamp(70px, 10vw, 120px)",
              objectFit: "contain",
              objectPosition: "center",
              filter: "grayscale(100%)",
              opacity: 0.45,
              flexShrink: 0,
              marginTop: "calc((clamp(70px, 10vw, 120px) - 72px) / -2)",
              marginBottom: "calc((clamp(70px, 10vw, 120px) - 72px) / -2)",
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
