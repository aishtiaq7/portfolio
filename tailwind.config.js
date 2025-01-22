/** @type {import('tailwindcss').Config} */

const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class"], // or 'media' — but 'class' is recommended for shadcn
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // add any other paths if needed
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    require("tailwindcss-animate"),
    addVariablesForColors, // your existing plugin
    function ({ matchUtilities, theme }) {
      const flattenColorPalette = (colorsObj) => {
        // Quick fallback if you’re not on Tailwind 3.2.x
        // Or if you already have flattenColorPalette from older code, skip this
        const result = {};
        for (let colorName in colorsObj) {
          const value = colorsObj[colorName];
          if (typeof value === "string") {
            result[colorName] = value;
          } else if (typeof value === "object") {
            for (let subName in value) {
              result[`${colorName}-${subName}`] = value[subName];
            }
          }
        }
        return result;
      };

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" cx="10" cy="10" r="1.6"></circle></svg>`
            )}")`,
          }),
        },
        {
          // This tells Tailwind to generate classes for each color
          // in your theme("backgroundColor") -> i.e. bg-grid-blue-500, etc.
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        }
      );
    },
  ],
};
function addVariablesForColors({ addBase, theme }) {
  function extractColorVars(colorObj, prefix = "") {
    return Object.keys(colorObj).reduce((vars, colorKey) => {
      const value = colorObj[colorKey];
      const newPrefix = prefix ? `${prefix}-${colorKey}` : colorKey;

      if (typeof value === "string") {
        // leaf node
        return { ...vars, [`--${newPrefix}`]: value };
      } else {
        // recursive
        return { ...vars, ...extractColorVars(value, newPrefix) };
      }
    }, {});
  }

  addBase({
    ":root": extractColorVars(theme("colors")),
  });
}
