import { mount } from '@vue/test-utils'
import HypBox from './HypBox.vue'

describe('HypBox', () => {
  it('should display correctly', async () => {
    const wrapper = mount(HypBox, {})

    expect(wrapper.exists()).toBeTruthy()
  })
})
