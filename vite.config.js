
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/fault_reports': 'http://localhost:3000',
    },
  },
  preview: {
    allowedHosts: ['fixtrail-rv-production-bfabf3c6.up.railway.app'],
  },
})
