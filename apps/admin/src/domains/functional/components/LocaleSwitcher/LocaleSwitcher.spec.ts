import { mount } from '@vue/test-utils'
import { useRouterMock, useRouteMock } from '@/test/mocks/vue-router'
import LocaleSwitcher from './LocaleSwitcher.vue'
import { createTestingPinia } from '@pinia/testing'

describe('LocaleSwitcher', () => {
  it('should update locale store & push on home', async () => {
    useRouteMock.mockReturnValue({
      name: '/',
    })
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const contextStore = useContextStore()

    await wrapper.find('[data-test="locale-switcher__1"]').trigger('click')

    await wrapper.find('[data-test="locale-switcher__select"]').setValue('fr')

    expect(contextStore.setLocale).toHaveBeenCalledWith('fr')
    await wrapper.vm.$nextTick()

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: '/',
      params: {
        locale: 'fr',
      },
    })
  })

  it('should update locale store & push on named route', async () => {
    useRouteMock.mockReturnValue({
      name: 'namedRoute',
    })
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    await wrapper.find('[data-test="locale-switcher__1"]').trigger('click')

    await wrapper.find('[data-test="locale-switcher__select"]').setValue('fr')

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: 'namedRoute',
      params: {
        locale: 'fr',
      },
    })
  })
})
