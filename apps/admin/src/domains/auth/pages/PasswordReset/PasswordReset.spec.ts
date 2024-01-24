import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import PasswordReset from './PasswordReset.vue'
import { findComponentByDataTestKey } from '@/test/utils'

const useSupabaseMock = {
  supabase: {
    auth: {
      resetPasswordForEmail: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('PasswordReset', () => {
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
    const authStore = useAuthStore()
    authStore.$patch({ user: { email: 'email' } })

    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })

    useSupabaseMock.supabase.auth.resetPasswordForEmail.mockReturnValue({
      data: {
        user: {},
      },
      error: null,
    })
    const wrapper = mount(PasswordReset)

    findComponentByDataTestKey(
      wrapper,
      'HypInput',
      'password-reset__email'
    )?.vm.$emit('update:modelValue', 'email')

    await wrapper.find('[data-test="password-reset__form"]').trigger('submit')

    expect(
      useSupabaseMock.supabase.auth.resetPasswordForEmail
    ).toHaveBeenCalledWith('email', {
      redirectTo: 'http://localhost:5173/emailRedirectTo',
    })

    expect(wrapper.find('[data-test="password-reset__success"]').text()).toBe(
      'auth.passwordReset.success'
    )
  })

  it('should display error message', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    useSupabaseMock.supabase.auth.resetPasswordForEmail.mockReturnValue({
      data: {},
      error: {
        status: 500,
      },
    })
    const wrapper = mount(PasswordReset)

    await wrapper.find('[data-test="password-reset__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-reset__error"]').exists()).toBe(
      true
    )
  })

  it('should display error message if api not respond', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    const wrapper = mount(PasswordReset)

    await wrapper.find('[data-test="password-reset__form"]').trigger('submit')

    expect(wrapper.find('[data-test="password-reset__error"]').exists()).toBe(
      true
    )
  })
})
