import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from './router'
import App from './App.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

describe('App', () => {
  describe('routing', () => {
    it('should works fine', async () => {
      router.push('/')

      await router.isReady()

      const wrapper = mount(App, {
        global: {
          plugins: [router],
        },
      })

      await wrapper
        .find('[data-test="app__router-link-contact"]')
        .trigger('click')

      await vi.dynamicImportSettled()

      expect(wrapper.find('[data-test="contact"]').exists()).toBe(true)
    })
  })
})
