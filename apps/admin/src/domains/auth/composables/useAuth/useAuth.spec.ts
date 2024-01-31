import { useI18nMock } from '@/test/mocks/vue-i18n'

const useSupabaseMock = {
  supabase: {
    auth: {
      getUser: vi.fn(),
      resend: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      updateUser: vi.fn(),
    },
  },
}

vi.mock('@/composables/useSupabase/useSupabase.ts', () => ({
  useSupabase: () => useSupabaseMock,
}))

describe('useAuth', () => {
  beforeEach(() => {
    useI18nMock.t.mockReturnValue('auth.error.invalid-credentials')
  })

  describe('login', () => {
    it('should return user', async () => {
      useSupabaseMock.supabase.auth.signInWithPassword.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { login } = useAuth()

      const user = await login('email', 'password')

      expect(user).toEqual({
        id: 'id',
      })

      expect(
        useSupabaseMock.supabase.auth.signInWithPassword
      ).toHaveBeenCalledWith({ email: 'email', password: 'password' })
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.signInWithPassword.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { login, errorMessage } = useAuth()

      await login('email', 'password')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage if api not respond', async () => {
      const { login, errorMessage } = useAuth()

      await login('email', 'password')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('logout', () => {
    it('should logout user', async () => {
      useSupabaseMock.supabase.auth.signOut.mockResolvedValue({
        error: null,
      })
      const authStore = useAuthStore()

      const { logout } = useAuth()

      await logout()

      expect(authStore.user).toEqual(null)
      expect(useSupabaseMock.supabase.auth.signOut).toHaveBeenCalledWith()
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.signOut.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { logout, errorMessage } = useAuth()

      await logout()

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage if api not respond', async () => {
      const { logout, errorMessage } = useAuth()

      await logout()

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('passwordReset', () => {
    it('should return true', async () => {
      useSupabaseMock.supabase.auth.resetPasswordForEmail.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { passwordReset } = useAuth()

      const isReset = await passwordReset('email', 'localhost')

      expect(isReset).toEqual(true)
      expect(
        useSupabaseMock.supabase.auth.resetPasswordForEmail
      ).toHaveBeenCalledWith('email', { redirectTo: 'localhost' })
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.resetPasswordForEmail.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { passwordReset, errorMessage } = useAuth()

      await passwordReset('email', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage on error if api not respond', async () => {
      const { passwordReset, errorMessage } = useAuth()

      await passwordReset('email', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('passwordUpdate', () => {
    it('should return true', async () => {
      useSupabaseMock.supabase.auth.updateUser.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { passwordUpdate } = useAuth()

      const isUpdate = await passwordUpdate('password')

      expect(isUpdate).toEqual(true)

      expect(useSupabaseMock.supabase.auth.updateUser).toHaveBeenCalledWith({
        password: 'password',
      })
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.updateUser.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { passwordUpdate, errorMessage } = useAuth()

      await passwordUpdate('password')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage on error if api not respond', async () => {
      const { passwordUpdate, errorMessage } = useAuth()

      await passwordUpdate('password')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('register', () => {
    it('should return user', async () => {
      useSupabaseMock.supabase.auth.signUp.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { register } = useAuth()

      const user = await register('email', 'password', 'localhost')

      expect(user).toEqual({ id: 'id' })

      expect(useSupabaseMock.supabase.auth.signUp).toHaveBeenCalledWith({
        email: 'email',
        password: 'password',
        options: {
          emailRedirectTo: 'localhost',
        },
      })
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.signUp.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { register, errorMessage } = useAuth()

      await register('email', 'password', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage on error if api not respond', async () => {
      const { register, errorMessage } = useAuth()

      await register('email', 'password', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('getUser', () => {
    it('should return user', async () => {
      useSupabaseMock.supabase.auth.getUser.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { getUser } = useAuth()

      const user = await getUser()

      expect(user).toEqual({ id: 'id' })

      expect(useSupabaseMock.supabase.auth.getUser).toHaveBeenCalledWith()
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.getUser.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { getUser, errorMessage } = useAuth()

      await getUser()

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage on error if api not respond', async () => {
      const { getUser, errorMessage } = useAuth()

      await getUser()

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })

  describe('resendEmailConfirmation', () => {
    it('should return true', async () => {
      useSupabaseMock.supabase.auth.resend.mockResolvedValue({
        data: {
          user: {
            id: 'id',
          },
        },
      })
      const { resendEmailConfirmation } = useAuth()

      const isResend = await resendEmailConfirmation('email', 'localhost')

      expect(isResend).toEqual(true)

      expect(useSupabaseMock.supabase.auth.resend).toHaveBeenCalledWith({
        type: 'signup',
        email: 'email',
        options: {
          emailRedirectTo: 'localhost',
        },
      })
    })

    it('should set errorMessage on error', async () => {
      useSupabaseMock.supabase.auth.resend.mockResolvedValue({
        data: null,
        error: {
          status: 400,
        },
      })
      const { resendEmailConfirmation, errorMessage } = useAuth()

      await resendEmailConfirmation('email', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })

    it('should set errorMessage on error if api not respond', async () => {
      const { resendEmailConfirmation, errorMessage } = useAuth()

      await resendEmailConfirmation('email', 'localhost')

      expect(errorMessage.value).toEqual('auth.error.invalid-credentials')
    })
  })
})
