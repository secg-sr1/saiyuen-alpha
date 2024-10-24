import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import ghPages from 'vite-plugin-gh-pages'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait(),
  ],
  base: '/saiyuen-alpha',
})
