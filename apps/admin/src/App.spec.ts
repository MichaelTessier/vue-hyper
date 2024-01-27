import { flushPromises, mount } from '@vue/test-utils'
import { RouterView } from 'vue-router'
import { useRouterMock } from './test/mocks/vue-router'
import { useAuthMock } from './test/mocks/useAuthMock'
import App from './App.vue'

describe('App', () => {
  it('should display RouterView correctly', async () => {
    useAuthMock.getUser.mockReturnValue({
      id: 'id',
    })
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterView'],
      },
    })

    await flushPromises()
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(RouterView).exists()).toBe(true)
  })

  it('should redirect on login if user is not logged', async () => {
    useAuthMock.getUser.mockReturnValue(undefined)

    const wrapper = mount(App, {
      global: {
        stubs: ['RouterView'],
      },
    })

    await wrapper.vm.$nextTick()
    await flushPromises()

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: AUTH_ROUTES.LOGIN,
    })
  })
})
