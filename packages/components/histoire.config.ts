import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  outDir: 'dist-histoire',
  plugins: [HstVue()],
  setupFile: 'histoire.setup.ts',
  viteIgnorePlugins: ['vite:dts'],
  tree: {
    groups: [
      {
        id: 'settings',
        title: 'Settings',
      },
      {
        id: 'design-tokens',
        title: 'Design Tokens',
      },
      {
        id: 'components',
        title: 'Components',
      },
    ],
  },
  theme: {
    hideColorSchemeSwitch: true,
    defaultColorScheme: 'light',
    // storeColorScheme: false,
  },
  defaultStoryProps: {
    icon: 'carbon:assembly-reference',
    iconColor: '#00c5a5',
    layout: {
      type: 'grid',
      width: '100%',
    },
    responsiveDisabled: true,
    autoPropsDisabled: true,
  },
})
