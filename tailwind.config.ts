
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    theme: {
      extend: {
        colors: {
          "color-1": "hsl(var(--color-1))",
          "color-2": "hsl(var(--color-2))",
          "color-3": "hsl(var(--color-3))",
          "color-4": "hsl(var(--color-4))",
          "color-5": "hsl(var(--color-5))",
        },
        animation: {
          rainbow: "rainbow var(--speed, 2s) infinite linear",1
        },
        keyframes: {
          rainbow: {
            "0%": { "background-position": "0%" },
            "100%": { "background-position": "200%" },
          },
        },
      },
    },
  };

