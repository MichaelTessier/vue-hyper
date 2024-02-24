import { mount } from '@vue/test-utils'
import ThemeLayoutSwitcher from './ThemeLayoutSwitcher.vue'

const useLayoutMock = {
  setLayoutTheme: vi.fn(),
  availableLayoutTheme: ['modern', 'classic', 'compact'],
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))

describe('ThemeLayoutSwitcher', () => {
  afterEach(() => {
    useLayoutMock.setLayoutTheme.mockReset()
  })

  it('should update layout theme', async () => {
    const wrapper = mount(ThemeLayoutSwitcher)

    await wrapper.find('[data-test="layout-theme"]').setValue('modern')
    expect(useLayoutMock.setLayoutTheme).toHaveBeenCalledWith('modern')
  })
})
