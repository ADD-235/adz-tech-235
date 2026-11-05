import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { navy: "#111A35", gold: "#D6AC50", ink: "#252A3A", mist: "#F3F4F6" },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
