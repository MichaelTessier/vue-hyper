import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import VerifyEmail from './VerifyEmail.vue'

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
    useAuthMock.resendEmailConfirmation.mockReturnValue(true)

    const wrapper = mount(VerifyEmail)

    await wrapper.find('[data-test="verify-email__resend"]').trigger('click')

    expect(useAuthMock.resendEmailConfirmation).toHaveBeenCalledWith(
      'email',
      'http://localhost:5173/emailRedirectTo'
    )

    expect(wrapper.find('[data-test="verify-email__success"]').text()).toBe(
      'auth.verifyEmail.success'
    )
  })

  it('should display error message', async () => {
    useAuthMock.errorMessage = 'error message'
    const wrapper = mount(VerifyEmail)

    await wrapper.find('[data-test="verify-email__resend"]').trigger('click')

    expect(wrapper.find('[data-test="verify-email__error"]').exists()).toBe(
      true
    )
  })
})
