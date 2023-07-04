import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 4000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react()]
})
