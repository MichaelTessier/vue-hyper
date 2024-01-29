import { mount } from '@vue/test-utils'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import { findComponentByDataTestKey } from '@/test/utils'
import PasswordUpdate from './PasswordUpdate.vue'

describe('PasswordUpdate', () => {
  it('should display correctly', async () => {
    const wrapper = mount(PasswordUpdate)

    expect(wrapper.find('[data-test="password-update__title"]').text()).toBe(
      'auth.passwordUpdate.title'
    )
    expect(wrapper.find('[data-test="password-update__form"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-test="password-update__message"]').text()).toBe(
      'auth.passwordUpdate.message'
    )

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypInput',
        'password-update__password'
      )?.props('placeholder')
    ).toBe('auth.common.password.placeholder')

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypButton',
        'password-update__submit'
      )?.props('label')
    ).toBe('auth.passwordUpdate.submit')
  })

  it('should send update password & display success message', async () => {
    useAuthMock.passwordUpdate.mockReturnValue(true)
    const wrapper = mount(PasswordUpdate)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'password-update__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="password-update__form"]').trigger('submit')

    expect(useAuthMock.passwordUpdate).toHaveBeenCalledWith('password')

    expect(wrapper.find('[data-test="password-update__success"]').text()).toBe(
      'auth.passwordUpdate.success'
    )

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypButton',
        'password-update__login'
      )?.props('to')
    ).toStrictEqual({ name: AUTH_ROUTES.LOGIN })

    expect(
      findComponentByDataTestKey(
        wrapper,
        'HypButton',
        'password-update__login'
      )?.props('label')
    ).toBe('auth.passwordUpdate.login')
  })

  it('should display error message', async () => {
    useAuthMock.errorMessage = 'error message'

    const wrapper = mount(PasswordUpdate)

    await wrapper.find('[data-test="password-update__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-update__error"]').exists()).toBe(
      true
    )
  })
})
