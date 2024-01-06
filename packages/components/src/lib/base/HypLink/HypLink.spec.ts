import { mount } from '@vue/test-utils'
import HypLink from './HypLink.vue'

describe('HypLink', () => {
  it('should displays props correctly', async () => {
    const label = 'Vue hyper'
    const to = 'https://vue-hyper.dev'

    const wrapper = mount(HypLink, {
      props: {
        to,
      },
      slots: {
        default: label,
      },
    })

    expect(wrapper.text()).toContain(label)
    expect(wrapper.props('to')).toContain(to)
    expect(wrapper.attributes('class')).toContain(
      'hyp-text-medium hover:underline underline-offset-4 cursor-pointer hover:opacity-80 transition-all'
    )

    await wrapper.setProps({ color: 'light' })
    expect(wrapper.attributes('class')).toContain('text-light')
  })
})
