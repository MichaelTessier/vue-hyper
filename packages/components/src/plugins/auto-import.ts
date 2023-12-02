import type { ComponentResolver } from 'unplugin-vue-components/types'

export function HyperResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (!name.match(/^Hyp[A-Z]/)) return

      return { name, from: 'vue-hyper-components' }
    },
  }
}
