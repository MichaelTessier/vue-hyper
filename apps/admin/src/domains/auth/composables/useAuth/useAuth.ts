type StatusCode = 400 | 403 | 404 | 409 | 422 | 500

enum AuthErrorKey {
  NOT_FOUND = 'not-found',
  UNAUTHORIZED = 'unauthorized',
  ALREADY_EXISTS = 'already-exists',
  INVALID_CREDENTIALS = 'invalid-credentials',
  IDENTICAL_PASSWORD = 'identical-password',
  SERVER_ERROR = 'server-error',
  UNKNOWN = 'unknown',
}

const authErrorCode: Record<StatusCode, AuthErrorKey> = {
  400: AuthErrorKey.INVALID_CREDENTIALS,
  403: AuthErrorKey.UNAUTHORIZED,
  404: AuthErrorKey.NOT_FOUND,
  409: AuthErrorKey.ALREADY_EXISTS,
  422: AuthErrorKey.IDENTICAL_PASSWORD,
  500: AuthErrorKey.SERVER_ERROR,
}

export const useAuth = () => {
  const { supabase } = useSupabase()
  const authStore = useAuthStore()

  const errorMessage = ref('')

  const { t } = useI18n()

  const authErrorKey = (code: StatusCode) =>
    authErrorCode?.[code] ?? AuthErrorKey.UNKNOWN

  const errorMessageByStatus = (code: StatusCode) =>
    t(`auth.error.${authErrorKey(code)}`)

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }
      authStore.$patch({ user: data.user })
      return data.user
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)
      } else {
        authStore.user = null
      }
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }

  const passwordReset = async (email: string, redirectTo: string) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo,
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)
      }

      return !!data
    } catch {
      errorMessage.value = errorMessageByStatus(500)
      return false
    }
  }

  const passwordUpdate = async (password: string) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: password,
        email: 'michael.tessier.paris@gmail.com',
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)
      }

      return !!data.user
    } catch {
      errorMessage.value = errorMessageByStatus(500)
      return false
    }
  }

  const register = async (
    email: string,
    password: string,
    emailRedirectTo: string
  ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo,
        },
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }
      authStore.$patch({ user: data.user })

      return data.user
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }

  const resendEmailConfirmation = async (
    email: string,
    emailRedirectTo: string
  ) => {
    try {
      const { data, error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
        options: {
          emailRedirectTo,
        },
      })

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)
      }

      return !!data.user
    } catch {
      errorMessage.value = errorMessageByStatus(500)

      return false
    }
  }

  const getUser = async () => {
    try {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        errorMessage.value = errorMessageByStatus(error.status as StatusCode)

        return
      }

      authStore.$patch({ user: data.user })
      return data.user
    } catch (error) {
      errorMessage.value = errorMessageByStatus(500)
    }
  }

  return {
    errorMessage,
    login,
    logout,
    passwordReset,
    passwordUpdate,
    register,
    resendEmailConfirmation,
    getUser,
  }
}
