import { mount } from '@vue/test-utils'
import HypTypo from './HypTypo.vue'

describe('HypTypo', () => {
  it('should displays props correctly', async () => {
    const label = 'Vue hyper'

    const wrapper = mount(HypTypo, {
      props: {},
      slots: {
        default: label,
      },
    })

    expect(wrapper.text()).toContain(label)
    expect(wrapper.attributes('class')).toContain(
      'hyp-text-medium font-regular text-dark'
    )
    expect(wrapper.element.tagName).toBe('P')

    await wrapper.setProps({ tag: 'h6' })
    expect(wrapper.element.tagName).toBe('H6')

    await wrapper.setProps({ type: 'heading-large' })
    expect(wrapper.attributes('class')).toContain('hyp-heading-large')

    await wrapper.setProps({ weight: 'bold' })
    expect(wrapper.attributes('class')).toContain('font-bold')

    await wrapper.setProps({ strike: true })
    expect(wrapper.attributes('class')).toContain('line-through')

    await wrapper.setProps({ color: 'light' })
    expect(wrapper.attributes('class')).toContain('text-light')
  })
})
