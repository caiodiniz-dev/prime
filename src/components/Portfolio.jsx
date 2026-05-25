import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Goal,
  Image,
  LandPlot,
  Palette,
  Play,
  Shield,
  Smartphone,
  Sparkles,
  Target,
} from "lucide-react";

const TABS = ["Todos", "Vídeos", "Fotos"];

const mediaItems = [
  {
    id: 1,
    type: "video",
    size: "featured",
    client: "SPFC",
    tag: "Prime Football · Reel",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    duration: "2:34",
    imageUrl: "/assets/videos/vd-1.jpeg",
    icon: Shield,
    gradient: "from-[#1a1200] via-[#2d1f00] to-[#0f0e00]",
    accent: "#C9A84C",
  },
  {
    id: 2,
    type: "video",
    size: "half",
    client: "Alcateia",
    tag: "Vídeo Vertical",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    duration: "2:15",
    imageUrl: "/assets/videos/vd-2.jpeg",
    icon: Shield,
    gradient: "from-[#1a0a0a] via-[#2d0000] to-[#1a0000]",
    accent: "#C9A84C",
  },
  {
    id: 3,
    type: "video",
    size: "half",
    client: "Goalz",
    tag: "Vídeo Profissional",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    duration: "1:58",
    imageUrl: "/assets/videos/vd-3.jpeg",
    icon: Camera,
    gradient: "from-[#0a0a1a] via-[#0f0020] to-[#0a0a1a]",
    accent: "#E6CC7A",
  },
  {
    id: 4,
    type: "video",
    size: "small",
    client: "Chute Inicial",
    tag: "Entrevista Vertical",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    imageUrl: "/assets/videos/vd-4.jpeg",
    icon: Smartphone,
    gradient: "from-[#1a1a0a] via-[#2d2800] to-[#1a1a0a]",
    accent: "#C9A84C",
  },
  {
    id: 5,
    type: "video",
    size: "small",
    client: "Paulínia Sports",
    tag: "Frames & Clips",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    duration: "0:45",
    imageUrl: "/assets/videos/vd-1.jpeg",
    icon: Target,
    gradient: "from-[#0a0a1a] via-[#001020] to-[#0a0a1a]",
    accent: "#E6CC7A",
  },
  {
    id: 6,
    type: "foto",
    size: "small",
    client: "Goalz",
    tag: "Cobertura Fotográfica",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    photoUrl: "/foto-goalz-sport.jpeg",
    icon: LandPlot,
    gradient: "from-[#1a0a1a] via-[#1a001a] to-[#0a000a]",
    accent: "#C9A84C",
  },
  {
    id: 7,
    type: "foto",
    size: "small",
    client: "São Paulo",
    tag: "Cobertura de Campeonato",
    title: "REELS DO SANTO PAULO #VEMSERSPFC",
    photoUrl: "/foto-sao-paulo.jpeg",
    icon: Clapperboard,
    gradient: "from-[#001a1a] via-[#001a20] to-[#001010]",
    accent: "#E6CC7A",
  },
];

function typeFromTab(tab) {
  if (tab === "Todos") return null;
  if (tab === "Vídeos") return "video";
  if (tab === "Fotos") return "foto";
  return "grafico";
}

function MediaCard({ item, index, onClick }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const isVideo = item.type === "video";
  const isFeatured = item.size === "featured";
  const Icon = item.icon || Goal;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onClick={() => onClick(item)}
      className={`relative overflow-hidden cursor-pointer group ${
        isFeatured ? "row-span-2" : ""
      }`}
      style={{ minHeight: isFeatured ? "520px" : "240px" }}
    >
      {/* Gradient BG */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`}
      />

      {/* Video/Photo background */}
      {(item.imageUrl || item.photoUrl) && (
        <img
          src={item.imageUrl || item.photoUrl}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      )}

      {/* Animated scan overlay */}
      <motion.div
        className="absolute inset-x-0 h-px opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
        }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Big icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">
        <Icon size={isFeatured ? 122 : 92} className="text-gold" />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-prime-black/90 via-prime-black/20 to-transparent transition-opacity duration-300 group-hover:from-prime-black/75" />

      {/* Corner marks */}
      <div className="corner-tl" />
      <div className="corner-br" />

      {/* Play button (videos) */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div className="relative w-14 h-14 border-2 border-white/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
            <motion.span
              className="absolute inset-[-8px] rounded-full border border-gold/30 opacity-0 group-hover:opacity-100"
              animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <Play size={22} className="text-gold fill-gold ml-0.5" />
          </motion.div>
        </div>
      )}

      {/* Photo icon */}
      {item.type === "foto" && (
        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Image size={28} className="text-gold/70" />
        </div>
      )}

      {/* Duration badge */}
      {item.duration && (
        <div className="absolute top-4 right-4 z-20 bg-prime-black/75 text-white text-[10px] font-semibold px-2 py-1 font-mono">
          {item.duration}
        </div>
      )}

      {/* Type badge */}
      <div
        className="absolute top-4 left-4 z-20 font-body text-[9px] font-bold tracking-[2px] uppercase px-2 py-1 border"
        style={{
          color: item.accent,
          borderColor: `${item.accent}40`,
          background: `${item.accent}10`,
        }}
      >
        <span className="inline-flex items-center gap-1.5">
          {item.type === "video" ? (
            <Play size={10} fill="currentColor" />
          ) : item.type === "foto" ? (
            <Camera size={10} />
          ) : (
            <Palette size={10} />
          )}
          {item.type === "video"
            ? "VÍDEO"
            : item.type === "foto"
              ? "FOTO"
              : "GRÁFICO"}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 p-5 z-20 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span
          className="block font-body text-[9px] font-bold tracking-[2px] uppercase mb-1.5"
          style={{ color: item.accent }}
        >
          {item.tag}
        </span>
        <h3
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: isFeatured ? "26px" : "15px" }}
        >
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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const typeFilter = typeFromTab(activeTab);
  const filtered = typeFilter
    ? mediaItems.filter((i) => i.type === typeFilter)
    : mediaItems;

  // Layout: featured (col-span-2, row-span-2) + rest in masonry
  const [featured, ...rest] = filtered;

  return (
    <section id="projetos" className="py-28 bg-prime-black overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-10">
        {/* Header */}
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
              <em className="text-gold">conecta e converte.</em>
            </motion.h2>

            {/* Tabs */}
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
                  className={`px-4 py-2 font-body font-semibold text-[11px] tracking-[1.5px] uppercase border transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-gold text-prime-black border-gold"
                      : "text-prime-gray border-white/10 hover:text-white hover:border-white/25"
                  }`}
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
            Ver Todos os Projetos
            <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Featured + side stack */}
            {featured && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5 mb-0.5">
                <div className="lg:col-span-2">
                  <MediaCard
                    item={featured}
                    index={0}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/agenciaprimefootball/",
                        "_blank",
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  {rest.slice(0, 2).map((item, i) => (
                    <MediaCard
                      key={item.id}
                      item={item}
                      index={i + 1}
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/agenciaprimefootball/",
                          "_blank",
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            )}
            {/* Bottom row */}
            {rest.length > 2 && (
              <div
                className="grid gap-0.5"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(rest.slice(2).length, 4)}, 1fr)`,
                }}
              >
                {rest.slice(2).map((item, i) => (
                  <MediaCard
                    key={item.id}
                    item={item}
                    index={i + 3}
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/agenciaprimefootball/",
                        "_blank",
                      )
                    }
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
