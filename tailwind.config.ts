import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kpg: {
          green: {
            900: "#173B25", // Deep Forest Green (Primary)
            800: "#224A30",
            700: "#31583A", // Natural Green (Secondary)
            600: "#446E4E",
            100: "#EAF2EC",
            50: "#F2F7F4",
          },
          gold: {
            600: "#9E7427",
            500: "#B88932", // Premium Gold (Accent)
            400: "#C99E4B",
            100: "#F8F3E8",
            50: "#FAF7F0",
          },
          bg: {
            white: "#FFFFFF",
            offwhite: "#F7F7F4",
            card: "#FAFAFA",
          },
          text: {
            primary: "#182018",
            secondary: "#667067",
            muted: "#8C968D",
          },
          border: "#E2E6E2",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Cormorant Garamond", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 15px -3px rgba(23, 59, 37, 0.05), 0 4px 6px -2px rgba(23, 59, 37, 0.02)",
        premium: "0 10px 30px -5px rgba(23, 59, 37, 0.08), 0 4px 12px -2px rgba(23, 59, 37, 0.03)",
        elevated: "0 20px 40px -15px rgba(23, 59, 37, 0.12)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
