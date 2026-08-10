import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project at https://<user>.github.io/monitize-book/,
  // so that build needs every asset path prefixed with the repo name.
  // Vercel serves the app at the domain root, so it needs base "/" — Vercel
  // sets the VERCEL env var during its build, which we use to tell them apart.
  // Local dev also stays at "/" so `npm run dev` keeps working at localhost root.
  base: command === 'build' && !process.env.VERCEL ? '/monitize-book/' : '/',
  plugins: [react()],
}))
