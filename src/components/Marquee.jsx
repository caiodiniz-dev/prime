const logos = [
  { src: "/assets/logos/ALCATEIACEVISA.png", alt: "Alcateia Cevisa" },
  { src: "/assets/logos/CAPAWANDERSSON.png", alt: "Capa Wandersson" },
  { src: "/assets/logos/CHUTEINICIALHORTOLANDIA.png", alt: "Chute Inicial Hortolândia" },
  { src: "/assets/logos/CORINTHIANSFUTSAL.png", alt: "Corinthians Futsal" },
  { src: "/assets/logos/SPFCPAULINIA.png", alt: "SPFC Paulínia" },
  { src: "/assets/logos/TIMAOSUMARE.png", alt: "Timão Sumaré" },
];

const track = [...logos, ...logos];

export default function Marquee() {
  return (
    <div className="border-y border-gold/10 bg-prime-charcoal/50 py-6 overflow-hidden w-full">
      <div
        className="flex items-center gap-12 animate-marquee"
        style={{ width: "max-content" }}
      >
        {track.map(({ src, alt }, i) => (
          <div
            key={`${alt}-${i}`}
            className="group flex items-center justify-center flex-shrink-0 transition-transform duration-500 hover:scale-105"
          >
            <img
              src={src}
              alt={alt}
              style={{ width: "192px", height: "192px" }}
              className="object-contain filter grayscale opacity-50 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}