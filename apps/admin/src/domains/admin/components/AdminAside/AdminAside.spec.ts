import { mount } from '@vue/test-utils'
import AdminAside from './AdminAside.vue'
import Logo from '@/domains/functional/components/Logo/Logo.vue'
import { HypLink } from 'vue-hyper-components'

const useLayoutMock = {
  isModernLayout: false,
  isClassicLayout: false,
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))

describe('AdminAside', () => {
  it('should display navigation items correctly', async () => {
    const wrapper = mount(AdminAside)

    const links = wrapper.findAllComponents(HypLink)

    expect(links[0].props('color')).toEqual('light')
    expect(links[0].text()).toEqual('Tableau de bord')

    expect(links.length).toEqual(1)

    expect(wrapper.findComponent(Logo).exists()).toBe(false)
  })

  it('should display link dark color if is modern layout theme', async () => {
    useLayoutMock.isModernLayout = true
    const wrapper = mount(AdminAside)

    expect(wrapper.findComponent(HypLink).props('color')).toEqual('dark')
  })

  it('should display Logo if is classic layout theme', async () => {
    useLayoutMock.isClassicLayout = true
    const wrapper = mount(AdminAside)

    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
