import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FFA50E",
        secondary: "#3B3E41",
        "black-primary": "#524F4B",
        "black-secondary": "#888888",
        "white-primary": "#FFFFFF",
        "white-secondary": "#FFF4E0",
      },
    },
  },
  plugins: [],
};
export default config;
