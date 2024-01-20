import { mount } from '@vue/test-utils'
import { HypInput } from 'vue-hyper-components'
import { useRouterMock } from '@/test/mocks/vue-router'
import Login from './Login.vue'

const useSupabaseMock = {
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('Login', () => {
  it('should display correctly', async () => {
    const wrapper = mount(Login)

    expect(wrapper.find('[data-test="login__title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="login__form"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="login__email"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="login__password"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="login__register"]').exists()).toBe(true)
    expect(
      wrapper.find('[data-test="login__forgotten-password"]').exists()
    ).toBe(true)
  })

  it('should set state correctly & redirect on login', async () => {
    const authStore = useAuthStore()

    useSupabaseMock.supabase.auth.signInWithPassword.mockReturnValue({
      data: {
        user: {
          id: 'id',
        },
      },
      error: null,
    })
    const wrapper = mount(Login)

    const inputs = wrapper.findAllComponents(HypInput)

    inputs[0].vm.$emit('update:modelValue', 'email')
    inputs[1].vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="login__form"]').trigger('submit')

    expect(
      useSupabaseMock.supabase.auth.signInWithPassword
    ).toHaveBeenCalledWith({
      email: 'email',
      password: 'password',
    })

    expect(authStore.user).toEqual({
      id: 'id',
    })

    expect(useRouterMock.push).toHaveBeenCalledWith({ name: 'dashboard' })
  })

  it('should display error message', async () => {
    useSupabaseMock.supabase.auth.signInWithPassword.mockReturnValue({
      data: {},
      error: {
        status: 400,
      },
    })
    const wrapper = mount(Login)

    const inputs = wrapper.findAllComponents(HypInput)

    inputs[0].vm.$emit('update:modelValue', 'email')
    inputs[1].vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="login__form"]').trigger('submit')

    expect(wrapper.find('[data-test="login__error"]').exists()).toBe(true)
  })
})
