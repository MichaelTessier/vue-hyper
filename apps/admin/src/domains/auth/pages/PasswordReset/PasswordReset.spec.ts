import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import { findComponentByDataTestKey } from '@/test/utils'
import PasswordReset from './PasswordReset.vue'

describe('PasswordReset', () => {
  beforeEach(() => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
  })

  it('should display correctly', async () => {
    const wrapper = mount(PasswordReset)

    expect(wrapper.find('[data-test="password-reset__title"]').text()).toBe(
      'auth.passwordReset.title'
    )
    expect(wrapper.find('[data-test="password-reset__form"]').exists()).toBe(
      true
    )

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypInput',
        'password-reset__email'
      )?.props('placeholder')
    ).toBe('auth.common.email.placeholder')

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypButton',
        'password-reset__submit'
      )?.props('label')
    ).toBe('auth.passwordReset.submit')

    expect(wrapper.find('[data-test="password-reset__login"]').text()).toBe(
      'auth.passwordReset.login'
    )
  })

  it('should send reset password & display success message', async () => {
    useAuthMock.passwordReset.mockReturnValue(true)

    const wrapper = mount(PasswordReset)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'password-reset__email'
    )?.vm.$emit('update:modelValue', 'email')

    await wrapper.find('[data-test="password-reset__form"]').trigger('submit')

    expect(useAuthMock.passwordReset).toHaveBeenCalledWith(
      'email',
      'http://localhost:3000/emailRedirectTo'
    )

    expect(wrapper.find('[data-test="password-reset__success"]').text()).toBe(
      'auth.passwordReset.success'
    )
  })

  it('should display error message', async () => {
    useAuthMock.errorMessage = 'error message'

    const wrapper = mount(PasswordReset)

    await wrapper.find('[data-test="password-reset__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-reset__error"]').exists()).toBe(
      true
    )
  })
})
