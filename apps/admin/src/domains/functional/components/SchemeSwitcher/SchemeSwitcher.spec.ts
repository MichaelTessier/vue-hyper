import { mount } from '@vue/test-utils'
import { useThemeMock } from '@/test/mocks/vue-hyper-components'
import SchemeSwitcher from './SchemeSwitcher.vue'

describe('SchemeSwitcher', () => {
  it('should update color scheme', async () => {
    const wrapper = mount(SchemeSwitcher)

    await wrapper.find('[data-test="scheme-switcher"]').setValue('dark')
    expect(useThemeMock.setColorScheme).toHaveBeenCalledWith('dark')
  })
})
