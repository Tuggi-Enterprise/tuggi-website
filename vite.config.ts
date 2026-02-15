import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://*.googletagmanager.com https://*.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com https://*.youtube.com https://youtube.com https://*.ytimg.com https://*.clarity.ms https://static.cloudflareinsights.com https://*.logrocket.io https://*.lr-in.com https://*.logr-in.com https://cdn.logr-in.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.gstatic.com; font-src 'self' data: https://fonts.gstatic.com https://*.gstatic.com; img-src 'self' data: https: blob: https://*.google-analytics.com https://*.clarity.ms https://*.ytimg.com https://*.logrocket.io https://*.lr-in.com https://*.logr-in.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com https://cdn.simpleicons.org; media-src 'self' blob: https://*.supabase.co https://*.supabase.in; frame-src 'self' https://*.googletagmanager.com https://*.youtube.com https://youtube.com https://*.youtube-nocookie.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com; connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://ssl.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://*.googleapis.com https://ipapi.co https://api.country.is https://api.bigdatacloud.net https://*.supabase.co https://*.supabase.in https://*.youtube.com https://youtube.com https://*.clarity.ms https://*.logrocket.io https://*.lr-in.com https://*.logr-in.com https://*.googleadservices.com https://*.doubleclick.net https://*.google.com; worker-src 'self' blob:;"
    }
  }
})
