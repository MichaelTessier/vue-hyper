import { mount } from '@vue/test-utils'
import Aside from './Aside.vue'
import Logo from '@/domains/app/components/Logo/Logo.vue'
import { HypLink } from 'vue-hyper-components'

const useThemeMock = {
  isModernLayout: false,
  isClassicLayout: false,
}

vi.mock('@/domains/app/composables/useTheme/useTheme.ts', () => ({
  useTheme: () => useThemeMock,
}))

describe('Aside', () => {
  it('should display navigation items correctly', async () => {
    const wrapper = mount(Aside)

    const links = wrapper.findAllComponents(HypLink)

    await expect(links[0].props('color')).toEqual('light')
    await expect(links[0].text()).toEqual('Accueil')

    await expect(links.length).toEqual(3)

    await expect(wrapper.findComponent(Logo).exists()).toBe(false)
  })

  it('should display link dark color if is modern layout theme', async () => {
    useThemeMock.isModernLayout = true
    const wrapper = mount(Aside)

    await expect(wrapper.findComponent(HypLink).props('color')).toEqual('dark')
  })

  it('should display Logo if is classic layout theme', async () => {
    useThemeMock.isClassicLayout = true
    const wrapper = mount(Aside)

    await expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
