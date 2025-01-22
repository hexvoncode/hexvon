import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  darkMode: ["class"], // Enables dark mode via class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px", // Custom screen size for small devices
        xl: "1280px", // Custom screen size for large devices
      },
      colors: {
        primary: "#F8A221", // Custom primary color
        white: {
          "100": "#FFF9F9", // Corrected the extra # in white.100
          DEFAULT: "#FFFFFF", // Default white color
        },
        background: "var(--background)", // CSS variable for background color
        foreground: "var(--foreground)", // CSS variable for foreground color
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Add Inter as the default sans-serif font
      },
      borderRadius: {
        lg: "var(--radius)", // Custom large radius
        md: "calc(var(--radius) - 2px)", // Custom medium radius
        sm: "calc(var(--radius) - 4px)", // Custom small radius
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards", // Custom animation
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0", // Make opacity a string
            transform: "translate(-72%, -62%) scale(0.5)", // Ensure transform is a string
          },
          "100%": {
            opacity: "1", // Make opacity a string
            transform: "translate(-50%, -40%) scale(1)", // Ensure transform is a string
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
    addVariablesForColors, // Custom plugin for color variables
  ],
} satisfies Config;

// Custom plugin to add CSS variables for colors
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--color-${key}`, val]) // Prefixing variable names
  );

  addBase({
    ":root": newVars,
  });
}
