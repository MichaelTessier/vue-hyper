import { mount } from '@vue/test-utils'
import App from './App.vue'
import GlobalLayout from './domains/app/components/GlobalLayout/GlobalLayout.vue'
import Header from './domains/app/components/Header/Header.vue'
import Aside from './domains/app/components/Aside/Aside.vue'
import { RouterView } from 'vue-router'

describe('App', () => {
  describe('routing', () => {
    it('should display correctly', async () => {
      const wrapper = mount(App, {
        global: {
          stubs: ['Header', 'Aside', 'RouterView'],
        },
      })

      await expect(wrapper.findComponent(GlobalLayout).exists()).toBe(true)
      await expect(wrapper.findComponent(Header).exists()).toBe(true)
      await expect(wrapper.findComponent(Aside).exists()).toBe(true)
      await expect(wrapper.findComponent(RouterView).exists()).toBe(true)
    })
  })
})
