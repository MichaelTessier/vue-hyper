import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import VerifyEmail from './VerifyEmail.vue'

const useSupabaseMock = {
  supabase: {
    auth: {
      resend: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('VerifyEmail', () => {
  it('should display correctly', async () => {
    const wrapper = mount(VerifyEmail)

    expect(wrapper.find('[data-test="verify-email__title"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-test="verify-email__message"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-test="verify-email__resend"]').exists()).toBe(
      true
    )
  })

  it('should resend email & display success message', async () => {
    const authStore = useAuthStore()
    authStore.$patch({ user: { email: 'email' } })

    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })

    useSupabaseMock.supabase.auth.resend.mockReturnValue({
      data: {
        user: {},
      },
      error: null,
    })
    const wrapper = mount(VerifyEmail)

    await wrapper.find('[data-test="verify-email__resend"]').trigger('click')

    expect(useSupabaseMock.supabase.auth.resend).toHaveBeenCalledWith({
      type: 'signup',
      email: 'email',
      options: {
        emailRedirectTo: 'http://localhost:5173/emailRedirectTo',
      },
    })

    expect(wrapper.find('[data-test="verify-email__success"]').text()).toBe(
      "L'email de vérification a été renvoyé avec succès"
    )
  })

  it('should display error message', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    useSupabaseMock.supabase.auth.resend.mockReturnValue({
      data: {},
      error: {
        status: 500,
      },
    })
    const wrapper = mount(VerifyEmail)

    await wrapper.find('[data-test="verify-email__resend"]').trigger('click')

    expect(wrapper.find('[data-test="verify-email__error"]').exists()).toBe(
      true
    )
  })

  it('should display error message if api not respond', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    const wrapper = mount(VerifyEmail)

    await wrapper.find('[data-test="verify-email__resend"]').trigger('click')

    expect(wrapper.find('[data-test="verify-email__error"]').exists()).toBe(
      true
    )
  })
})
