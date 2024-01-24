import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import PasswordUpdate from './PasswordUpdate.vue'
import { findComponentByDataTestKey } from '@/test/utils'

const useSupabaseMock = {
  supabase: {
    auth: {
      updateUser: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

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
    useSupabaseMock.supabase.auth.updateUser.mockReturnValue({
      data: {},
      error: null,
    })
    const wrapper = mount(PasswordUpdate)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'password-update__password'
    )?.vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="password-update__form"]').trigger('submit')

    expect(useSupabaseMock.supabase.auth.updateUser).toHaveBeenCalledWith({
      password: 'password',
    })

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
    ).toBe('auth.registerConfirmed.toDashboard')
  })

  it('should display error message', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    useSupabaseMock.supabase.auth.updateUser.mockReturnValue({
      data: {},
      error: {
        status: 500,
      },
    })
    const wrapper = mount(PasswordUpdate)

    await wrapper.find('[data-test="password-update__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-update__error"]').exists()).toBe(
      true
    )
  })

  it('should display error message if api not respond', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    const wrapper = mount(PasswordUpdate)

    await wrapper.find('[data-test="password-update__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-update__error"]').exists()).toBe(
      true
    )
  })
})
