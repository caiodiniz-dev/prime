import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

const TABS = ["Todos", "Vídeos", "Fotos"];

const mediaItems = [
  {
    id: 1,
    type: "video",
    client: "SPFC",
    tag: "Prime Football · Reel",
    title: "REELS DO SPFC\n#VEMSERSPFC",
    duration: "2:34",
    imageUrl: "/assets/videos/vd-1.jpeg",
    gradient: "from-[#1a1200] via-[#2d1f00] to-[#0f0e00]",
    accent: "#C9A84C",
  },
  {
    id: 2,
    type: "video",
    client: "Alcateia",
    tag: "Vídeo Vertical",
    title: "ALCATEIA\nNOVORIZONTINO",
    duration: "2:15",
    imageUrl: "/assets/videos/vd-2.jpeg",
    gradient: "from-[#1a0a0a] via-[#2d0000] to-[#1a0000]",
    accent: "#C9A84C",
  },
  {
    id: 3,
    type: "video",
    client: "Goalz",
    tag: "Vídeo Profissional",
    title: "GOALZ SPORT\nCLUB",
    duration: "1:58",
    imageUrl: "/assets/videos/vd-3.jpeg",
    gradient: "from-[#0a0a1a] via-[#0f0020] to-[#0a0a1a]",
    accent: "#E6CC7A",
  },
  {
    id: 4,
    type: "video",
    client: "Chute Inicial",
    tag: "Entrevista Vertical",
    title: "CHUTE INICIAL\nHORTOLÂNDIA",
    imageUrl: "/assets/videos/vd-4.jpeg",
    gradient: "from-[#1a1a0a] via-[#2d2800] to-[#1a1a0a]",
    accent: "#C9A84C",
  },
  {
    id: 5,
    type: "video",
    client: "Paulínia Sports",
    tag: "Frames & Clips",
    title: "PAULÍNIA\nSPORTS CLUB",
    duration: "0:45",
    imageUrl: "/assets/videos/vd-1.jpeg",
    gradient: "from-[#0a0a1a] via-[#001020] to-[#0a0a1a]",
    accent: "#E6CC7A",
  },
  {
    id: 6,
    type: "foto",
    client: "Goalz",
    tag: "Cobertura Fotográfica",
    title: "GOALZ\nEM CAMPO",
    photoUrl: "/foto-goalz-sport.jpeg",
    gradient: "from-[#1a0a1a] via-[#1a001a] to-[#0a000a]",
    accent: "#C9A84C",
  },
  {
    id: 7,
    type: "foto",
    client: "São Paulo",
    tag: "Cobertura de Campeonato",
    title: "SÃO PAULO\nCAMPEONATO",
    photoUrl: "/foto-sao-paulo.jpeg",
    gradient: "from-[#001a1a] via-[#001a20] to-[#001010]",
    accent: "#E6CC7A",
  },
];

const CARD_W = 340;
const CARD_GAP = 20;
const CARD_STEP = CARD_W + CARD_GAP;

function typeFromTab(tab) {
  if (tab === "Vídeos") return "video";
  if (tab === "Fotos") return "foto";
  return null;
}

function MediaCard({ item, onClick, isCenter }) {
  const isVideo = item.type === "video";
  return (
    <motion.div
      onClick={onClick}
      animate={{ scale: isCenter ? 1 : 0.94, opacity: isCenter ? 1 : 0.65 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden cursor-pointer group flex-shrink-0 rounded-sm select-none"
      style={{ width: `${CARD_W}px`, height: "420px" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      {(item.imageUrl || item.photoUrl) && (
        <img
          src={item.imageUrl || item.photoUrl}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
        />
      )}
      <motion.div
        className="absolute inset-x-0 h-px opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-prime-black/95 via-prime-black/30 to-transparent" />
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative w-14 h-14 border-2 border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
            <motion.span
              className="absolute inset-[-8px] rounded-full border border-gold/30 opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Play size={22} className="text-gold fill-gold ml-0.5" />
          </div>
        </div>
      )}
      {item.duration && (
        <div className="absolute top-4 right-4 z-20 bg-prime-black/75 text-white text-[10px] font-semibold px-2 py-1 font-mono">
          {item.duration}
        </div>
      )}
      <div
        className="absolute top-4 left-4 z-20 font-body text-[9px] font-bold tracking-[2px] uppercase px-2 py-1 border"
        style={{
          color: item.accent,
          borderColor: `${item.accent}40`,
          background: `${item.accent}10`,
        }}
      >
        {item.type === "video"
          ? "VÍDEO"
          : item.type === "foto"
            ? "FOTO"
            : "GRÁFICO"}
      </div>
      <div className="absolute bottom-0 inset-x-0 p-5 z-20">
        <span
          className="block font-body text-[9px] font-bold tracking-[2px] uppercase mb-1.5"
          style={{ color: item.accent }}
        >
          {item.tag}
        </span>
        <h3 className="font-display font-bold text-white leading-tight text-[16px]">
          {item.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <span className="block font-body text-[10px] text-prime-gray mt-1.5 tracking-[1px] uppercase">
          {item.client}
        </span>
      </div>
    </motion.div>
  );
}

function Carousel({ items }) {
  const initialCenterIndex = Math.floor(items.length / 2);
  const [current, setCurrent] = useState(initialCenterIndex);
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [containerW, setContainerW] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getOffset = (idx) => containerW / 2 - CARD_W / 2 - idx * CARD_STEP;

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(items.length - 1, idx));
    setCurrent(clamped);
    animate(x, getOffset(clamped), {
      type: "spring",
      stiffness: 260,
      damping: 28,
      mass: 0.8,
    });
  };

  useEffect(() => {
    const targetIndex = Math.floor(items.length / 2);
    setCurrent(targetIndex);
    x.set(getOffset(targetIndex));
  }, [items.length, containerW]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -50) goTo(current + 1);
    else if (info.offset.x > 50) goTo(current - 1);
    else goTo(current);
  };

  return (
    <div className="relative select-none" ref={containerRef}>
      <button
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-prime-charcoal2/90 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-prime-black disabled:opacity-10 disabled:cursor-not-allowed transition-all duration-300 shadow-xl backdrop-blur-sm rounded-none"
        aria-label="Anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        disabled={current === items.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-prime-charcoal2/90 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-prime-black disabled:opacity-10 disabled:cursor-not-allowed transition-all duration-300 shadow-xl backdrop-blur-sm rounded-none"
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>
      <div
        className="overflow-hidden relative w-full"
        style={{ height: "440px" }}
      >
        <motion.div
          className="flex items-center gap-5 absolute cursor-grab active:cursor-grabbing"
          style={{ x, top: 0, bottom: 0, alignItems: "center" }}
          drag="x"
          dragConstraints={{
            left: getOffset(items.length - 1) - 100,
            right: getOffset(0) + 100,
          }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {items.map((item, i) => (
            <MediaCard
              key={item.id}
              item={item}
              isCenter={i === current}
              onClick={() => {
                if (i === current)
                  window.open(
                    "https://www.instagram.com/agenciaprimefootball/",
                    "_blank",
                  );
                else goTo(i);
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "#C9A84C" : "rgba(201,168,76,0.25)",
            }}
            aria-label={`Ir para ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const typeFilter = typeFromTab(activeTab);
  const filtered = typeFilter
    ? mediaItems.filter((i) => i.type === typeFilter)
    : mediaItems;

  return (
    <section id="projetos" className="py-28 bg-prime-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label"
            >
              Projetos & Mídia
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Conteúdo que
              <br />
              <em className="text-gold not-italic">conecta e converte.</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex gap-1 mt-6"
            >
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-body font-semibold text-[11px] tracking-[1.5px] uppercase border transition-all duration-200 ${activeTab === tab ? "bg-gold text-prime-black border-gold" : "text-prime-gray border-white/10 hover:text-white hover:border-white/25"}`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>
          </div>
          <motion.a
            href="#contato"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="btn-outline shrink-0 self-end md:self-auto"
          >
            Ver Todos os Projetos <ArrowRight size={14} />
          </motion.a>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            <Carousel items={filtered} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
