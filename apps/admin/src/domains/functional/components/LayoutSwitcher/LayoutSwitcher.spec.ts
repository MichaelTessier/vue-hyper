import { mount } from '@vue/test-utils'
import { useLayoutMock } from '@/test/mocks/useLayout'
import LayoutSwitcher from './LayoutSwitcher.vue'

describe('LayoutSwitcher', () => {
  it('should update layout theme', async () => {
    const wrapper = mount(LayoutSwitcher)

    await wrapper.find('[data-test="layout-switcher"]').setValue('modern')

    expect(useLayoutMock.setLayout).toHaveBeenCalled()
  })
})
