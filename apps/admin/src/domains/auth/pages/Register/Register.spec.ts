import { mount } from '@vue/test-utils'
import { HypInput } from 'vue-hyper-components'
import { useRouterMock } from '@/test/mocks/vue-router'
import Register from './Register.vue'

const useSupabaseMock = {
  supabase: {
    auth: {
      signUp: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('Register', () => {
  it('should display correctly', async () => {
    const wrapper = mount(Register)

    expect(wrapper.find('[data-test="register__title"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__form"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__email"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__password"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="register__login"]').exists()).toBe(true)
  })

  it('should set state correctly & redirect on register', async () => {
    const authStore = useAuthStore()

    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })

    useSupabaseMock.supabase.auth.signUp.mockReturnValue({
      data: {
        user: {
          id: 'id',
        },
      },
      error: null,
    })
    const wrapper = mount(Register)

    const inputs = wrapper.findAllComponents(HypInput)

    inputs[0].vm.$emit('update:modelValue', 'email')
    inputs[1].vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="register__form"]').trigger('submit')

    expect(useSupabaseMock.supabase.auth.signUp).toHaveBeenCalledWith({
      email: 'email',
      password: 'password',
      options: {
        emailRedirectTo: 'http://localhost:5173/emailRedirectTo',
      },
    })

    expect(authStore.user).toEqual({
      id: 'id',
    })

    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: AUTH_ROUTES.VERIFY_EMAIL,
    })
  })

  it('should display error message', async () => {
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    useSupabaseMock.supabase.auth.signUp.mockReturnValue({
      data: {},
      error: {
        status: 500,
      },
    })
    const wrapper = mount(Register)

    const inputs = wrapper.findAllComponents(HypInput)

    inputs[0].vm.$emit('update:modelValue', 'email')
    inputs[1].vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="register__form"]').trigger('submit')

    expect(wrapper.find('[data-test="register__error"]').exists()).toBe(true)
  })

  it('should display error message if api not respond', async () => {
    vi.clearAllMocks()
    useRouterMock.resolve.mockReturnValue({ href: '/emailRedirectTo' })
    const wrapper = mount(Register)

    const inputs = wrapper.findAllComponents(HypInput)

    inputs[0].vm.$emit('update:modelValue', 'email')
    inputs[1].vm.$emit('update:modelValue', 'password')

    await wrapper.find('[data-test="register__form"]').trigger('submit')

    expect(wrapper.find('[data-test="register__error"]').exists()).toBe(true)
  })
})
