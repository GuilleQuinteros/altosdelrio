import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#171A18", paper: "#F4F1EA", olive: "#78836D", muted: "#777A73" }, boxShadow: { soft: "0 18px 55px rgba(0,0,0,.10)" } } },
  plugins: []
};
export default config;
