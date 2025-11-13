import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ ensures correct routing and asset loading
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // ✅ for local dev fallback
  },
})
