import { mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import RegisterConfirmed from './RegisterConfirmed.vue'

describe('RegisterConfirmed', () => {
  beforeEach(() => {
    useAuthMock.getUser.mockReturnValue({
      id: 'id',
    })
  })

  it('should display correctly', async () => {
    const wrapper = mount(RegisterConfirmed)
    const authStore = useAuthStore()

    authStore.$patch({ user: { email: 'email' } })

    await wrapper.vm.$nextTick()

    expect(
      wrapper.find('[data-test="register-confirmed__title"]').exists()
    ).toBe(true)
    expect(
      wrapper.find('[data-test="register-confirmed__message"]').exists()
    ).toBe(true)
    expect(
      wrapper.find('[data-test="register-confirmed__to-dashboard"]').exists()
    ).toBe(true)
  })

  it('should redirect if is confirmed', async () => {
    vi.useFakeTimers()
    const wrapper = mount(RegisterConfirmed)
    const authStore = useAuthStore()

    authStore.$patch({ user: { email: 'email' } })

    await wrapper.vm.$nextTick()

    vi.advanceTimersByTime(5000)

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: ADMIN_ROUTES.ADMIN,
    })
  })

  it('should display error message', async () => {
    useAuthMock.getUser.mockReturnValue(null)
    useAuthMock.errorMessage = 'error message'

    const wrapper = mount(RegisterConfirmed)

    expect(
      wrapper.find('[data-test="register-confirmed__error"]').exists()
    ).toBe(true)

    expect(
      wrapper.find('[data-test="register-confirmed__title"]').exists()
    ).toBe(false)
  })
})
