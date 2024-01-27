import { mount } from '@vue/test-utils'
import Auth from './Auth.vue'

describe('Auth', () => {
  it('should display correctly', async () => {
    const wrapper = mount(Auth)

    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
  })
})
