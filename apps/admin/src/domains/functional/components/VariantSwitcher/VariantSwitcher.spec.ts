import { mount } from '@vue/test-utils'
import { useThemeMock } from '@/test/mocks/vue-hyper-components'
import VariantSwitcher from './VariantSwitcher.vue'

describe('VariantSwitcher', () => {
  it('should update variant theme', async () => {
    const wrapper = mount(VariantSwitcher)

    await wrapper.find('[data-test="variant-switcher"]').setValue('green')
    expect(useThemeMock.setVariantTheme).toHaveBeenCalledWith('green')
  })
})
