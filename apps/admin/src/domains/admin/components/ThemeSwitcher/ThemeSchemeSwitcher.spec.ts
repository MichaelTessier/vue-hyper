import { mount } from '@vue/test-utils'
import ThemeSchemeSwitcher from './ThemeSchemeSwitcher.vue'

const useLayoutMock = {
  setColorScheme: vi.fn(),
  availableColorScheme: ['light', 'dark'],
}

vi.mock('@/domains/functional/composables/useLayout/useLayout.ts', () => ({
  useLayout: () => useLayoutMock,
}))

describe('ThemeSchemeSwitcher', () => {
  afterEach(() => {
    useLayoutMock.setColorScheme.mockReset()
  })

  it('should update color scheme', async () => {
    const wrapper = mount(ThemeSchemeSwitcher)

    await wrapper.find('[data-test="color-scheme"]').setValue('dark')
    expect(useLayoutMock.setColorScheme).toHaveBeenCalledWith('dark')
  })
})
