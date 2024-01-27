import type { StatusCode } from '../useAuthError'

export const useAuth = () => {
  const { supabase } = useSupabase()
  const { errorMessageByStatus } = useAuthError()

  const errorMessage = ref('')

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

      return data.user
    } catch {
      errorMessage.value = errorMessageByStatus(500)
    }
  }

  const logout = () => {}

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

      return !!data
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
