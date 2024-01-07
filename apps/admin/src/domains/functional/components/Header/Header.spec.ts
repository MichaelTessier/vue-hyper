import { mount } from '@vue/test-utils'
import Header from './Header.vue'
import Logo from '@/domains/functional/components/Logo/Logo.vue'

const useThemeMock = {
  isCompactLayout: false,
  isModernLayout: false,
}

vi.mock('@/domains/functional/composables/useTheme/useTheme.ts', () => ({
  useTheme: () => useThemeMock,
}))

describe('Header', () => {
  it('should not display logo', async () => {
    const wrapper = mount(Header)

    await expect(wrapper.findComponent(Logo).exists()).toBe(false)
  })

  it('should display Logo if is compact layout theme', async () => {
    useThemeMock.isCompactLayout = true
    const wrapper = mount(Header)

    await expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })

  it('should display Logo if is modern layout theme', async () => {
    useThemeMock.isModernLayout = true
    const wrapper = mount(Header)

    await expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
