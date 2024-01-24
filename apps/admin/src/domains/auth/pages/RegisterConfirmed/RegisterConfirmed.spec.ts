import { flushPromises, mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import RegisterConfirmed from './RegisterConfirmed.vue'

const useSupabaseMock = {
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('RegisterConfirmed', () => {
  beforeEach(() => {
    useSupabaseMock.supabase.auth.getUser.mockReturnValue({
      data: {
        user: {
          id: 'id',
        },
      },
      error: null,
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
    useSupabaseMock.supabase.auth.getUser.mockReturnValue({
      data: {},
      error: {
        status: 500,
      },
    })
    const wrapper = mount(RegisterConfirmed)

    await flushPromises()

    expect(
      wrapper.find('[data-test="register-confirmed__error"]').exists()
    ).toBe(true)

    expect(
      wrapper.find('[data-test="register-confirmed__title"]').exists()
    ).toBe(false)
  })
})
