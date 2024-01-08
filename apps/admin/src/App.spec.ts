import { mount } from '@vue/test-utils'
import App from './App.vue'
import { RouterView } from 'vue-router'

describe('App', () => {
  describe('routing', () => {
    it('should display correctly', async () => {
      const wrapper = mount(App, {
        global: {
          stubs: ['RouterView'],
        },
      })

      expect(wrapper.findComponent(RouterView).exists()).toBe(true)
    })
  })
})
