import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    // DevTools нужны только при локальной разработке — в прод-сборку не попадают
    command === 'serve' && vueDevTools(),
    tailwindcss(),
  ].filter(Boolean),

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    target: 'es2022',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        // Разделяем вендоров и тяжёлые опциональные библиотеки по отдельным чанкам
        manualChunks(id) {
          if (!id.includes('node_modules')) return

          if (id.includes('highlight.js')) return 'highlight'
          if (id.includes('motion')) return 'motion'
          if (id.includes('lucide-vue-next')) return 'icons'
          if (
            id.includes('vue-router') ||
            id.includes('pinia') ||
            id.includes('/@vue/') ||
            id.includes('/vue/')
          ) {
            return 'vue-vendor'
          }

          return 'vendor'
        },
      },
    },
  },
}))
