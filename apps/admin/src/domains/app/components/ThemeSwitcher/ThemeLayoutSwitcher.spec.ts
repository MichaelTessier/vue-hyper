import { mount } from '@vue/test-utils'
import ThemeLayoutSwitcher from './ThemeLayoutSwitcher.vue'

const useThemeMock = {
  setLayoutTheme: vi.fn(),
  availableLayoutTheme: ['modern', 'classic', 'compact'],
}

vi.mock('@/domains/app/composables/useTheme/useTheme.ts', () => ({
  useTheme: () => useThemeMock,
}))

describe('ThemeLayoutSwitcher', () => {
  afterEach(() => {
    useThemeMock.setLayoutTheme.mockReset()
  })

  it('should update layout theme', async () => {
    const wrapper = mount(ThemeLayoutSwitcher)

    await wrapper.find('[data-test="layout-theme"]').setValue('modern')
    expect(useThemeMock.setLayoutTheme).toHaveBeenCalledWith('modern')
  })
})
