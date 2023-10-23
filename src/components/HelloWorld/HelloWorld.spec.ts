import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'


it('should displays props correctly', () => {
  const title = 'Vue hyper'
  const text = 'Hello world'

  const wrapper = mount(HelloWorld, {
    props: {
      title,
      text,
    }
  })

  expect(wrapper.get('[data-test="hello-world__title"]').text()).toContain(title)
  expect(wrapper.find('[data-test="hello-world__text"]').text()).toContain(text)
})