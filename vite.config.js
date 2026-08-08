import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project at https://<user>.github.io/monitize-book/,
  // so production builds need every asset path prefixed with the repo name.
  // Local dev stays at "/" so `npm run dev` keeps working at localhost root.
  base: command === 'build' ? '/monitize-book/' : '/',
  plugins: [react()],
}))
