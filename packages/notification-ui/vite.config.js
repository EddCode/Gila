import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    port: 4000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
