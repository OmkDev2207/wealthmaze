// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "soft-radial":
          "radial-gradient(circle at top, rgba(16, 185, 129, 0.18), transparent 55%)",
      },
    },
  },
  plugins: [typography],
};

export default config;
