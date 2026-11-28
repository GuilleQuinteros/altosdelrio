import type { Config } from "tailwindcss";

// Los colores salen de las variables de src/app/globals.css (un solo lugar para cambiarlos).
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        tile: "var(--tile-bg)",
        "tile-hover": "var(--tile-hover)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["DM Sans", "Segoe UI", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
