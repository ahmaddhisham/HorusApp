import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [(await import('tailwindcss')).default, (await import('autoprefixer')).default],
      base: process.env.VITE_BASE_PATH || '/HorusApp',
    }
  }
})