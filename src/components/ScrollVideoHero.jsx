import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX, ChevronDown } from "lucide-react";

const VIDEO_SRC = "./prime-hero.mp4";
const INTRO_DURATION_SECONDS = 5;

const stats = [
  { num: "10+", label: "Clientes Ativos" },
  { num: "200+", label: "Peças/Mês" },
  { num: "6", label: "Anos de Mercado" },
  { num: "2B", label: "bilhões de views geradas" },
];

// phase: 'idle' | 'playing' | 'done'
export default function ScrollVideoHero() {
  const videoRef = useRef(null);
  const scrollUnlocked = useRef(false);
  const hasStarted = useRef(false);
  const introDone = useRef(false);
  const introTimer = useRef(null);

  const [phase, setPhase] = useState("idle");
  const [muted, setMuted] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [countdown, setCountdown] = useState(INTRO_DURATION_SECONDS);
  const [progress, setProgress] = useState(0);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    scrollUnlocked.current = false;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    scrollUnlocked.current = true;
  }, []);

  const finishIntro = useCallback(() => {
    if (introDone.current) return;
    introDone.current = true;

    if (introTimer.current) {
      clearTimeout(introTimer.current);
      introTimer.current = null;
    }

    const video = videoRef.current;
    if (video && !video.paused) video.pause();

    setProgress(1);
    setCountdown(0);
    unlockScroll();
    setPhase("done");
  }, [unlockScroll]);

  useEffect(() => {
    lockScroll();
    window.scrollTo(0, 0);
    return () => {
      unlockScroll();
    };
  }, [lockScroll, unlockScroll]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTime = () => {
      const nextProgress = Math.min(
        video.currentTime / INTRO_DURATION_SECONDS,
        1,
      );
      setProgress(nextProgress);
      setCountdown(
        Math.max(0, Math.ceil(INTRO_DURATION_SECONDS - video.currentTime)),
      );
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, [videoReady]);

  useEffect(() => {
    if (!videoReady || hasStarted.current || introDone.current) return;

    hasStarted.current = true;
    lockScroll();
    setPhase("playing");
    setCountdown(INTRO_DURATION_SECONDS);

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = true;
      video.volume = 1;
      setMuted(true);
      video.play().catch(() => {});
    }

    introTimer.current = setTimeout(finishIntro, INTRO_DURATION_SECONDS * 1000);

    return () => {
      if (introTimer.current) {
        clearTimeout(introTimer.current);
        introTimer.current = null;
      }
      if (!introDone.current) hasStarted.current = false;
    };
  }, [finishIntro, lockScroll, videoReady]);

  const handleLoaded = () => {
    const v = videoRef.current;
    if (v && !videoReady) {
      v.currentTime = 0;
      setVideoReady(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const shouldMute = !video.muted;
      video.muted = shouldMute;
      video.volume = shouldMute ? 0 : 1;
      setMuted(video.muted);

      if (!shouldMute) {
        video.play().catch(() => {
          video.muted = true;
          video.volume = 0;
          setMuted(true);
        });
      }
    } else {
      setMuted((m) => !m);
    }
  };

  useEffect(() => {
    return () => {
      if (introTimer.current) clearTimeout(introTimer.current);
      unlockScroll();
    };
  }, [unlockScroll]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const isDone = phase === "done";
  const isPlaying = phase === "playing";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted={muted}
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoaded}
          onCanPlayThrough={handleLoaded}
          onEnded={finishIntro}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-prime-black/70 via-prime-black/30 to-prime-black/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 100% at 50% 50%, transparent 35%, rgba(10,10,10,0.8) 100%)",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-color"
          style={{ background: "rgba(201,168,76,0.04)" }}
        />
      </div>

      <AnimatePresence>
        {!videoReady && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            className="absolute inset-0 z-[5] bg-prime-black flex items-center justify-center"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,168,76,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.06) 1px,transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            <motion.div
              className="w-48 h-48 border border-gold/30 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="w-36 h-36 border border-gold/15 rounded-full flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <motion.span
                  className="font-display font-black text-5xl text-gold/50"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  P
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 inset-x-0 h-[3px] bg-white/10 z-30"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-gold-light to-gold"
              style={{ width: `${progress * 100}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {videoReady && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onClick={toggleMute}
            className="absolute top-24 right-8 z-30 w-11 h-11 border border-white/20 bg-prime-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-all duration-200 group"
            aria-label={muted ? "Ativar som" : "Silenciar"}
            title={muted ? "Ativar som" : "Silenciar"}
          >
            <motion.div whileTap={{ scale: 0.85 }}>
              {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </motion.div>
            <span className="absolute right-14 bg-prime-black/80 text-white/70 text-[10px] tracking-wider px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {muted ? "Ativar som" : "Silenciar"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1280px] mx-auto px-10 pt-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate={videoReady ? "visible" : "hidden"}
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/30 px-4 py-2 mb-8 backdrop-blur-sm"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ opacity: [1, 0.2, 1], scale: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span className="font-body font-semibold text-[10px] tracking-[3px] uppercase text-gold">
              Campinas, São Paulo · Atuação nacional
            </span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-gold/40"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.9 }}
            />
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-black leading-[1.03] mb-6 text-white"
            style={{ fontSize: "clamp(46px, 5.8vw, 86px)" }}
          >
            Seja lembrado.
            <br />
            <span className="text-gold">Seja Prime</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-accent font-light italic text-white/70 text-xl leading-relaxed border-l-2 border-gold pl-5 mb-10 max-w-xl"
          >
            A presença digital que sua marca merece.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-5 mb-14"
          >
            <motion.a
              href="#projetos"
              className="btn-prime"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Ver Projetos</span>
              <ArrowRight size={16} className="relative z-10" />
            </motion.a>
            <motion.a
              href="https://wa.me/5519997752403"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              whileHover={{ scale: 1.02, borderColor: "rgba(201,168,76,0.6)" }}
              whileTap={{ scale: 0.98 }}
            >
              Agendar Reunião
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-4 gap-6 pt-6 border-t border-white/10 max-w-xl"
          >
            {stats.map(({ num, label }, i) => (
              <motion.div
                key={label}
                className="text-center"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="block font-display font-bold text-2xl text-gold leading-none mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={videoReady ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 1.4 + i * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  {num}
                </motion.span>
                <span className="block font-body text-[9px] font-semibold tracking-[1.5px] uppercase text-white/40">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {phase === "idle" && videoReady && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 select-none"
          >
            <span className="font-body text-[10px] tracking-[4px] uppercase text-white/50 mb-1">
              Preparando vídeo
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown size={18} className="text-gold/60" />
            </motion.div>
            <motion.div
              className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
              animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
              style={{ transformOrigin: "top" }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none"
          >
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-gold/60 rounded-full"
                  animate={{ height: ["8px", "20px", "8px"] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            <span className="font-body text-[9px] tracking-[3px] uppercase text-gold/40 mt-1">
              Liberando em {countdown}s
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDone && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <ChevronDown size={22} className="text-gold/50" />
            </motion.div>
            <span className="font-body text-[9px] tracking-[3px] uppercase text-white/30">
              Continue
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
