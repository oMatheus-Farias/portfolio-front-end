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
      deepSkyBlue: "#0CB8DE",
    },
    backgroundImage: {
      "violet-vertical":
        "linear-gradient(180deg, #7900B2 0%, #4D53A1 38%, #338496 61%, #00C8F3 100%)",
      "violet-horizontal":
        "linear-gradient(90deg, #7900B2 0%, #4D53A1 38%, #338496 61%, #00C8F3 100%)",
      "purple-vertical": "linear-gradient(180deg, #0B002B 0%, #070023 100%)",
      "me-img-mobile": "url('/me-img-mobile.png')",
      "me-img-desktop": "url('/me-img-desktop.png')",
      "background-01-mobile": "url('/background-01-mobile.png')",
      "background-01": "url('/background-01.png')",
      "background-01-xl": "url('/background-01-xl.png')",
      "background-02": "url('/background-02.png')",
    },
    screens: {
      "0xl": "1374px",
    },
  },
}
import tailwindcssAnimate from "tailwindcss-animate"
import tailwindcssBorderGradientRadius from "tailwindcss-border-gradient-radius"

export const plugins = [tailwindcssAnimate, tailwindcssBorderGradientRadius]
