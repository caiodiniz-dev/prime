const logos = [
  { src: "/assets/prime.jpeg", alt: "Prime" },
  { src: "/assets/logos/ALCATEIACEVISA.png", alt: "Alcateia Cevisa" },
  { src: "/assets/logos/CAPAWANDERSSON.png", alt: "Capa Wandersson" },
  {
    src: "/assets/logos/CHUTEINICIALHORTOLANDIA.png",
    alt: "Chute Inicial Hortolândia",
  },
  {
    src: "/assets/logos/CORINTHIANSFUTSAL.png",
    alt: "Corinthians Futsal",
  },
  { src: "/assets/logos/SPFCPAULINIA.png", alt: "SPFC Paulínia" },
  { src: "/assets/logos/TIMAOSUMARE.png", alt: "Timão Sumaré" },
];
const track = [...logos, ...logos];

export default function Marquee() {
  return (
    <div className="border-y border-gold/10 bg-prime-charcoal/50 py-5 overflow-hidden">
      <div className="flex gap-16 w-max animate-marquee items-center">
        {track.map(({ src, alt }, i) => (
          <div
            key={`${alt}-${i}`}
            className="group flex items-center justify-center transition-transform duration-500 hover:scale-105"
          >
            <img
              src={src}
              alt={alt}
              className={`${alt === "Prime" ? "w-64 h-64" : "w-48 h-48"} object-contain filter grayscale opacity-50 group-hover:filter-none group-hover:opacity-100`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
