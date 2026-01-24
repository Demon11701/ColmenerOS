import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

// Creamos manualmente __dirname para que no de error en Windows/ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Esto le dice a Vite: "Cuando veas @, significa la carpeta src actual"
      '@': path.resolve(__dirname, './src'),
    },
  },
})