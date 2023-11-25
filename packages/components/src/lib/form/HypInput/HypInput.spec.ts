import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import HypInput from './HypInput.vue'

vi.mock('@/utils/uid', () => ({
  uid: vi.fn(() => 'uid'),
}))
describe('HypInput', () => {
  let wrapper: VueWrapper
  let input: DOMWrapper<HTMLInputElement>

  beforeEach(() => {
    wrapper = mount(HypInput, {
      props: {
        placeholder: 'placeholder',
        id: 'id',
        type: 'text',
      },
    })

    input = wrapper.find('input')
  })

  it('should display placeholder correctly', () => {
    expect(input.attributes('placeholder')).toBe('placeholder')
  })

  it('should have correct id', () => {
    expect(input.attributes('id')).toBe('id')
  })

  it('should use uid IF id is null', async () => {
    await wrapper.setProps({ id: null })

    await wrapper.vm.$nextTick()
    expect(uid).toHaveBeenCalled()
    expect(input.attributes('id')).toBe('uid')
  })

  it('should set type correctly', async () => {
    expect(input.attributes('type')).toBe('text')

    await wrapper.setProps({ type: 'number' })
    expect(input.attributes('type')).toBe('number')
  })

  it('should emit input event', async () => {
    await input.setValue('test')
    expect(wrapper.emitted('update:modelValue')).toEqual([['test']])
  })

  it('should disabled input', async () => {
    expect(input.attributes('disabled')).toBeUndefined()

    await wrapper.setProps({ disabled: true })
    expect(input.attributes('disabled')).toBeDefined()
  })

  it('should display label', async () => {
    expect(wrapper.find('[data-test="hyp-input__label"]').exists()).toBe(false)

    await wrapper.setProps({ label: 'label' })

    expect(wrapper.find('[data-test="hyp-input__label"]').text()).toEqual(
      'label'
    )
  })

  it('should display hint', async () => {
    expect(wrapper.find('[data-test="hyp-input__hint"]').exists()).toBe(false)

    await wrapper.setProps({ hint: 'hint' })

    expect(wrapper.find('[data-test="hyp-input__hint"]').text()).toEqual('hint')
  })
})
