import { mount } from '@vue/test-utils'
import AdminHeader from './AdminHeader.vue'
import Logo from '@/domains/functional/components/Logo/Logo.vue'

const useLayoutMock = {
  isCompactLayout: false,
  isModernLayout: false,
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))

describe('AdminHeader', () => {
  it('should not display logo', async () => {
    const wrapper = mount(AdminHeader)

    expect(wrapper.findComponent(Logo).exists()).toBe(false)
  })

  it('should display Logo if is compact layout theme', async () => {
    useLayoutMock.isCompactLayout = true
    const wrapper = mount(AdminHeader)

    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })

  it('should display Logo if is modern layout theme', async () => {
    useLayoutMock.isModernLayout = true
    const wrapper = mount(AdminHeader)

    expect(wrapper.findComponent(Logo).exists()).toBe(true)
  })
})
