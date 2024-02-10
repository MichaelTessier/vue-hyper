import { type VueWrapper, mount } from '@vue/test-utils'
import HypIcon from './HypIcon.vue'

describe('HypIcon', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(HypIcon, {
      props: {
        name: 'chevron-left',
      },
    })
  })

  it('should display icon', async () => {
    expect(wrapper.attributes('class')).toContain('i-mdi-chevron-left')
  })

  it('should display icon', async () => {
    // Default size is medium
    expect(wrapper.attributes('class')).toContain('text-7')

    await wrapper.setProps({ size: 'small' })
    expect(wrapper.attributes('class')).toContain('text-5')

    await wrapper.setProps({ size: 'large' })
    expect(wrapper.attributes('class')).toContain('text-9')
  })
})
