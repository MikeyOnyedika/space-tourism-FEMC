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

    backgroundImage: {
      home: "url(/assets/home/background-home-mobile.jpg)",
      "home-tablet": "url(/assets/home/background-home-tablet.jpg)",
      "home-desktop": "url(/assets/home/background-home-desktop.jpg)",

      crew: "url(/assets/crew/background-crew-mobile.jpg)",
      "crew-tablet": "url(/assets/crew/background-crew-tablet.jpg)",
      "crew-desktop": "url(/assets/crew/background-crew-desktop.jpg)",

      destination: "url(/assets/destination/background-destination-mobile.jpg)",
      "destination-tablet":
        "url(/assets/destination/background-destination-tablet.jpg)",
      "destination-desktop":
        "url(/assets/destination/background-destination-desktop.jpg)",

      technology: "url(/assets/technology/background-technology-mobile.jpg)",
      "technology-tablet":
        "url(/assets/technology/background-technology-tablet.jpg)",
      "technology-desktop":
        "url(/assets/technology/background-technology-desktop.jpg)",
    },

    extend: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
