/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E6CC7A",
          dark: "#A07830",
          muted: "rgba(201,168,76,0.15)",
        },
        prime: {
          black: "#0A0A0A",
          charcoal: "#141414",
          charcoal2: "#1E1E1E",
          gray: "#888888",
          "gray-light": "#CCCCCC",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Montserrat", "sans-serif"],
        accent: ['"Cormorant Garamond"', "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marqueeReverse 28s linear infinite",
        "pulse-ring": "pulseRing 2s ease infinite",
        float: "float 4s ease-in-out infinite",
        "field-move": "fieldMove 10s linear infinite",
        scan: "scan 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "rotate-slow": "rotateSlow 12s linear infinite",
        "scroll-line": "scrollLine 2s ease infinite",
        "counter-up": "counterUp 0.6s ease both",
        "fade-in-up": "fadeInUp 0.8s ease both",
        "fade-in-down": "fadeInDown 0.8s ease both",
        "fade-in-left": "fadeInLeft 0.8s ease both",
        "fade-in-right": "fadeInRight 0.8s ease both",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        pulseRing: {
          "0%,100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.4)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fieldMove: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(60px)" },
        },
        scan: {
          "0%,100%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(100%)", opacity: "1" },
        },
        glowPulse: {
          "0%,100%": {
            transform: "translate(-50%,-50%) scale(1)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translate(-50%,-50%) scale(1.4)",
            opacity: "0.3",
          },
        },
        rotateSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        scrollLine: {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
            opacity: "1",
          },
          "50%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
            opacity: "1",
          },
          "51%": {
            transform: "scaleY(1)",
            transformOrigin: "bottom",
            opacity: "1",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "bottom",
            opacity: "0",
          },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #E6CC7A 50%, #A07830 100%)",
        "prime-radial":
          "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        "prime-grid":
          "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
