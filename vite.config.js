import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  theme: {
  extend: {
    animation: {
      float: "float 6s ease-in-out infinite",
    },
    keyframes: {
      float: {
        "0%,100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
  },
},
})
