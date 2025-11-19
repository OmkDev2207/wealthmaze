// postcss.config.mjs
import tailwindcss from "@tailwindcss/postcss";

/** @type {import('postcss').Config} */
const config = {
  plugins: {
    tailwindcss,
  },
};

export default config;
