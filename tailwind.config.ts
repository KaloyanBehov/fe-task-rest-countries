import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config : Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
       
        colors: {
          "background":" hsl(0, 0%, 98%)"

        }, 
      },
      dark: {
       
        colors: {
          "dark-blue" : 'hsl(209, 23%, 22%)',
          "background" : "hsl(207, 26%, 17%)",
          "foreground" :"hsl(0, 0%, 100%)"
      
        }, 
      }, }
})],
};

export default config;