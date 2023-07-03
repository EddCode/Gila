import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    open: true,
    port: 5000
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react()]
})
