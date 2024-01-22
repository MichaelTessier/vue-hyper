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

    const inputs = wrapper.findAllComponents(HypInput)

    expect(wrapper.find('[data-test="login__title"]').text()).toBe(
      'auth.login.title'
    )
    expect(wrapper.find('[data-test="login__form"]').exists()).toBe(true)

    expect(inputs[0].props('placeholder')).toBe('auth.common.email.placeholder')
    expect(inputs[1].props('placeholder')).toBe(
      'auth.common.password.placeholder'
    )

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
