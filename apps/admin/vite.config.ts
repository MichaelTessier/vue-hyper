/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { HyperResolver } from 'vue-hyper-components'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-i18n', 'vue-router', 'pinia'],
      dirs: ['src/**/*.{ts,vue}'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/components/*', 'src/**/components/*', 'src/**/layouts/*'],
      resolvers: [HyperResolver()],
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['vitest.setup.ts'],
    coverage: {
      provider: 'istanbul',
      reportsDirectory: 'coverage',
      all: true,
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/main.ts'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
