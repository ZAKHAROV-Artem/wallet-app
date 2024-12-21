/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          accent: "oklch(74.51% 0.167 183.61)",
          "base-100": "#18181c",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "base-content": "#f2f2f2",
          neutral: "#0e0e0e",
          "neutral-content": "#707074",
          primary: "oklch(65.69% 0.196 275.75)",
          secondary: "oklch(74.8% 0.26 342.55)",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
