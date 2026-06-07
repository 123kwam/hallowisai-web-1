import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#05070d",
          soft: "#0a0e17",
          card: "#0d121d",
        },
        brand: {
          blue: "#3b82f6",
          cyan: "#22d3ee",
          glow: "#38bdf8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      // Type scale tokens — single source of truth for sizing/leading/tracking.
      // display → hero, h2 → section headings, h3 → card titles,
      // body → paragraph copy (18px min), small → secondary supporting text.
      fontSize: {
        display: ["clamp(2.5rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h2: ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h3: ["1.375rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.55" }],
      },
      keyframes: {
        "drift-a": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 20px) scale(0.95)" },
        },
        "drift-b": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-50px, 30px) scale(1.05)" },
          "66%": { transform: "translate(30px, -20px) scale(1.1)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-cue": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "45%": { transform: "scaleY(1)", transformOrigin: "top" },
          "55%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        "rec-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "drift-a": "drift-a 18s ease-in-out infinite",
        "drift-b": "drift-b 22s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "scroll-cue": "scroll-cue 2.4s ease-in-out infinite",
        "rec-blink": "rec-blink 1.6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
