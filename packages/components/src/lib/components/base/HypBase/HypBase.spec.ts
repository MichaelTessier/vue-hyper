import { mount } from '@vue/test-utils'
import HypBase from './HypBase.vue'

describe('HypBase', () => {
  it('should display correctly', async () => {
    const wrapper = mount(HypBase, {})

    expect(wrapper.exists()).toBeTruthy()
  })
})
