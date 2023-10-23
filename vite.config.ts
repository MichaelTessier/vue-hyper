/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'istanbul', // or 'v8',
      reportsDirectory: 'coverage'
    },
  }
})
