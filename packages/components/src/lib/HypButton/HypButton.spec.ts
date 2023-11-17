import { mount } from '@vue/test-utils'
import HypButton from './HypButton.vue'

it('should displays props correctly', async () => {
  const label = 'Vue hyper'

  const wrapper = mount(HypButton, {
    props: {
      label: label,
      variant: 'primary',
      radius: 'small',
      href: 'https://vue-hyper.dev',
    },
  })


  expect(wrapper.text()).toContain(label)
  expect(wrapper.attributes('class')).toContain('bg-primary rounded-small')
  expect(wrapper.attributes('href')).toContain('https://vue-hyper.dev')

  await wrapper.setProps({ outline: true })

  expect(wrapper.attributes('class')).toContain('border-primary border-1! bg-white')

  await wrapper.setProps({ disabled: true })

  expect(wrapper.attributes('disabled')).toBe('true')
  expect(wrapper.attributes('class')).toContain('cursor-not-allowed opacity-50')

  await wrapper.setProps({ href: null, to: '/about' })
  expect(wrapper.element.tagName).toBe('ROUTER-LINK')
})
