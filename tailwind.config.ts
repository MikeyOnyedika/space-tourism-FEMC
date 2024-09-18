import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        300: "#D0D6F9",
        900: "#0B0D17",
      },
      white: "#FFFFFF",
    },
    fontSize: {
      "preset-1": "var(--preset-1)",
      "preset-2": "var(--preset-2)",
      "preset-3": "var(--preset-3)",
      "preset-4": "var(--preset-4)",
      "preset-5": [
        "var(--preset-5)",
        {
          letterSpacing: "var(--letter-spacing-preset-5)",
        },
      ],
      "preset-6": [
        "var(--preset-6)",
        { letterSpacing: "var(--letter-spacing-preset-6)" },
      ],
      "preset-7": [
        "var(--preset-7)",
        {
          letterSpacing: "var(--letter-spacing-preset-7)",
        },
      ],
      "preset-8": [
        "var(--preset-8)",
        {
          letterSpacing: "var(--letter-spacing-preset-8)",
        },
      ],
      "preset-8-bold": [
        "var(--preset-8)",
        {
          fontWeight: 700,
          letterSpacing: "2.7px",
        },
      ],
      "preset-9": [
        "var(--preset-9)",
        {
          lineHeight: "180%",
        },
      ],
    },
  },
  plugins: [],
};
export default config;
