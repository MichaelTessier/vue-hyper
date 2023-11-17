/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import dts from 'vite-plugin-dts'
import { presetUno } from 'unocss'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [presetUno()],
    }),
    dts({
      entryRoot: './src',
      rollupTypes: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/**/*.{ts,vue}'],
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/lib/*', 'src/**/lib/*', 'src/histoire/*'],
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-hyper-components',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
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
  histoire: {
    plugins: [HstVue()],
    setupFile: 'histoire.setup.ts',
    // viteIgnorePlugins: ['vite:dts'],
  },
})
