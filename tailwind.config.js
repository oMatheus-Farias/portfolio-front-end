/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"]
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./src/**/*.{ts,tsx}",
]
export const prefix = ""
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      primary: "#01001A",
      secondary: "#4213FF",
      white: "#FFFFFF",
      black: "#000000",
      purpleClean: "#3B335C",
      purpleLogoLogin: "#080622",
      bgDark: "#010010",
      green: "#419453",
      gray: "#888888",
    },
    backgroundImage: {
      "bg-violet-vertical":
        "linear-gradient(180deg, #7900B2 0%, #4D53A1 38%, #338496 61%, #00C8F3 100%)",
      "bg-violet-horizontal":
        "linear-gradient(90deg, #7900B2 0%, #4D53A1 38%, #338496 61%, #00C8F3 100%)",
      "bg-purple-vertical": "linear-gradient(180deg, #0B002B 0%, #070023 100%)",
    },
  },
}
import tailwindcssAnimate from "tailwindcss-animate"

export const plugins = [tailwindcssAnimate]
