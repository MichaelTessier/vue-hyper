import { mount } from '@vue/test-utils'
import LocaleSwitcherVue from './LocaleSwitcher.vue'
import { createTestingPinia } from '@pinia/testing'
import { Mock } from 'vitest'

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
  useRoute: vi.fn((key) => ({
    name: key,
  })),
}))

describe('LocaleSwitcher', () => {
  beforeEach(() => {
    ;(useRouter as Mock).mockReturnValue({
      push: vi.fn(),
    })
  })

  afterEach(() => {
    ;(useRouter().push as Mock).mockReset()
  })

  it('should update locale store & push on home', async () => {
    const wrapper = mount(LocaleSwitcherVue, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    const contextStore = useContextStore()

    await wrapper.find('[data-test="locale-switcher__1"]').trigger('click')

    await wrapper.find('[data-test="locale-switcher__select"]').setValue('fr')

    expect(contextStore.setLocale).toHaveBeenCalledWith('fr')
    expect(useRouter().push).toHaveBeenCalledWith({
      name: '/',
      params: {
        locale: 'fr',
      },
    })
  })

  it('should update locale store & push on named route', async () => {
    ;(useRoute as Mock).mockReturnValue({
      name: 'namedRoute',
    })

    const wrapper = mount(LocaleSwitcherVue, {
      global: {
        plugins: [createTestingPinia()],
      },
    })

    await wrapper.find('[data-test="locale-switcher__1"]').trigger('click')

    await wrapper.find('[data-test="locale-switcher__select"]').setValue('fr')

    expect(useRouter().push).toHaveBeenCalledWith({
      name: 'namedRoute',
      params: {
        locale: 'fr',
      },
    })
  })
})
