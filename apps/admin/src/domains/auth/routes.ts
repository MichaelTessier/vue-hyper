export const AUTH_ROUTES = {
  AUTH: 'auth',
  LOGIN: 'login',
  PASSWORD_RESET: 'password-reset',
  PASSWORD_UPDATE: 'password-update',
  REGISTER: 'register',
  REGISTER_CONFIRMED: 'register-confirmed',
  VERIFY_EMAIL: 'verify-email',
}

export const authRoutes = {
  path: 'auth',
  name: AUTH_ROUTES.AUTH,
  component: () => import('@/domains/auth/pages/Auth/Auth.vue'),
  redirect: { name: AUTH_ROUTES.LOGIN },
  children: [
    {
      path: 'login',
      name: AUTH_ROUTES.LOGIN,
      component: () => import('@/domains/auth/pages/Login/Login.vue'),
    },
    {
      path: 'register',
      name: AUTH_ROUTES.REGISTER,
      component: () => import('@/domains/auth/pages/Register/Register.vue'),
    },
    {
      path: 'register-confirmed',
      name: AUTH_ROUTES.REGISTER_CONFIRMED,
      component: () =>
        import('@/domains/auth/pages/RegisterConfirmed/RegisterConfirmed.vue'),
    },
    {
      path: 'verify-email',
      name: AUTH_ROUTES.VERIFY_EMAIL,
      component: () =>
        import('@/domains/auth/pages/VerifyEmail/VerifyEmail.vue'),
    },
    {
      path: 'password-reset',
      name: AUTH_ROUTES.PASSWORD_RESET,
      component: () =>
        import('@/domains/auth/pages/PasswordReset/PasswordReset.vue'),
    },
    {
      path: 'password-update',
      name: AUTH_ROUTES.PASSWORD_UPDATE,
      component: () =>
        import('@/domains/auth/pages/PasswordUpdate/PasswordUpdate.vue'),
    },
  ],
}
