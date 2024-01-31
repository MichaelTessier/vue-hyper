import type { User } from '@supabase/supabase-js'

interface AuthState {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },
})
