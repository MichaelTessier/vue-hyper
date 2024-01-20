export const AUTH_ROUTES = {
  AUTH: 'auth',
  LOGIN: 'login',
  PASSWORD_FORGOTTEN: 'password-forgotten',
  REGISTER: 'register',
  REGISTER_CONFIRMED: 'register-confirmed',
  VERIFY_EMAIL: 'verify-email',
}

export const authRoutes = {
  path: 'auth',
  name: AUTH_ROUTES.AUTH,
  redirect: { name: AUTH_ROUTES.LOGIN },
  component: () => import('@/domains/auth/pages/Auth/Auth.vue'),
  children: [
    {
      path: 'login',
      name: AUTH_ROUTES.LOGIN,
      component: () => import('@/domains/auth/pages/Login/Login.vue'),
    },
    {
      path: 'logout',
      name: AUTH_ROUTES.PASSWORD_FORGOTTEN,
      component: () =>
        import('@/domains/auth/pages/PasswordForgotten/PasswordForgotten.vue'),
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
  ],
}
