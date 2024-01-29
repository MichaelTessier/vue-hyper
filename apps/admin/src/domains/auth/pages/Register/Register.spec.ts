import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import Register from './Register.vue'

describe('Register', () => {
  beforeEach(() => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
  })

  it('should display correctly', async () => {
    const wrapper = mount(Register)

    expect(wrapper.find('[data-test="register__title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__form"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__email"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__password"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__login"]').exists()).toBe(true)
  })

  it('should set state correctly & redirect on register', async () => {
    useAuthMock.register.mockReturnValue({
      id: 'id',
    })
    const wrapper = mount(Register)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'register__email'
    )?.vm.$emit('update:modelValue', 'email')

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'register__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="register__form"]').trigger('submit')

    expect(useAuthMock.register).toHaveBeenCalledWith(
      'email',
      'password',
      'http://localhost:5173/emailRedirectTo'
    )

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: AUTH_ROUTES.VERIFY_EMAIL,
    })
  })

  it('should display error message', async () => {
    useAuthMock.errorMessage = 'error message'
    const wrapper = mount(Register)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'register__email'
    )?.vm.$emit('update:modelValue', 'email')

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'register__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="register__form"]').trigger('submit')

    expect(wrapper.find('[data-test="register__error"]').exists()).toBe(true)
  })
})
