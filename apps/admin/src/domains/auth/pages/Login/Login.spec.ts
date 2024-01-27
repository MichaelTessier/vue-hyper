import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import Login from './Login.vue'

describe('Login', () => {
  it('should display correctly', async () => {
    const wrapper = mount(Login)

    expect(wrapper.find('[data-test="login__title"]').text()).toBe(
      'auth.login.title'
    )
    expect(wrapper.find('[data-test="login__form"]').exists()).toBe(true)

    findComponentByDataTestKey(wrapper, 'HypInput', 'login__email')

    expect(
      findComponentByDataTestKey(wrapper, 'HypInput', 'login__email')?.props(
        'placeholder'
      )
    ).toBe('auth.common.email.placeholder')

    expect(
      findComponentByDataTestKey(wrapper, 'HypInput', 'login__password')?.props(
        'placeholder'
      )
    ).toBe('auth.common.password.placeholder')

    expect(wrapper.find('[data-test="login__submit"]').text()).toBe(
      'auth.login.submit'
    )

    expect(wrapper.find('[data-test="login__register"]').text()).toBe(
      'auth.login.register'
    )

    expect(wrapper.find('[data-test="login__password-reset"]').text()).toBe(
      'auth.login.forgottenPassword'
    )
  })

  it('should set state correctly & redirect on login', async () => {
    useAuthMock.login.mockReturnValue({
      id: 'id',
    })

    const authStore = useAuthStore()
    const wrapper = mount(Login)

    findComponentByDataTestKey(wrapper, 'HypInput', 'login__email')?.vm.$emit(
      'update:modelValue',
      'email'
    )

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'login__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="login__form"]').trigger('submit')

    expect(useAuthMock.login).toHaveBeenCalledWith('email', 'password')

    expect(authStore.user).toEqual({
      id: 'id',
    })

    expect(useRouterMock.push).toHaveBeenCalledWith({ name: 'dashboard' })
  })

  it('should display error message', async () => {
    useAuthMock.errorMessage = 'error message'

    const wrapper = mount(Login)

    findComponentByDataTestKey(wrapper, 'HypInput', 'login__email')?.vm.$emit(
      'update:modelValue',
      'email'
    )

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'login__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="login__form"]').trigger('submit')

    expect(wrapper.find('[data-test="login__error"]').exists()).toBe(true)
  })
})
