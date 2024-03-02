import { mount } from '@vue/test-utils'
import HypButton from './HypButton.vue'

describe('HypButton', () => {
  it('should displays props correctly', async () => {
    const label = 'Vue hyper'

    const wrapper = mount(HypButton, {
      props: {
        label: label,
        variant: 'primary',
        radius: 'small',
      },
    })

    expect(wrapper.text()).toContain(label)
    expect(wrapper.attributes('class')).toContain('bg-primary rounded-small')

    await wrapper.setProps({ outline: true })
    expect(wrapper.attributes('class')).toContain(
      'border-primary border-1! bg-transparent text-primary'
    )

    await wrapper.setProps({ disabled: true })
    expect(wrapper.attributes('disabled')).toBe('')

    await wrapper.setProps({ full: true })
    expect(wrapper.attributes('class')).toContain('w-full')

    await wrapper.setProps({ shadow: true })
    expect(wrapper.attributes('class')).toContain('shadow-btn-primary')
  })

  it('should render tag correctly', async () => {
    const wrapper = mount(HypButton, {
      props: {
        label: 'label',
      },
    })

    expect(wrapper.element.tagName).toBe('BUTTON')

    await wrapper.setProps({ href: 'https://vue-hyper.dev' })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toContain('https://vue-hyper.dev')

    await wrapper.setProps({ to: '/about' })
    expect(wrapper.element.tagName).toBe('ROUTER-LINK')
    expect(wrapper.attributes('to')).toContain('/about')
  })

  it('should render size correctly', async () => {
    const wrapper = mount(HypButton, {
      props: {
        label: 'label',
      },
    })

    expect(wrapper.attributes('class')).toContain('px-5 h-11 hyp-text-medium')

    await wrapper.setProps({ size: 'small' })
    expect(wrapper.attributes('class')).toContain('px-4 h-9 hyp-text-medium')

    await wrapper.setProps({ size: 'large' })
    expect(wrapper.attributes('class')).toContain('px-6 h-13 hyp-text-large')
  })

  it('should render text-color correctly', async () => {
    const wrapper = mount(HypButton, {
      props: {
        label: 'label',
      },
    })

    expect(wrapper.attributes('class')).toContain('text-white')

    await wrapper.setProps({ variant: 'light' })
    expect(wrapper.attributes('class')).toContain('text-black')
  })
})
