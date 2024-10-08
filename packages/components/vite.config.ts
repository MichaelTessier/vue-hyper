/// <reference types="vitest" />

import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['RouterLink'].includes(tag),
        },
      },
    }),
    UnoCSS(),
    dts({
      entryRoot: './src',
      rollupTypes: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['src/*/**/*'],
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
      external: ['vue', 'vue-router'],
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
      include: ['src/{lib,utils}/**/*.{ts,vue}'],
      exclude: ['src/main.ts', 'src/lib/**/*.story.vue'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), '..'],
    },
  },
})
