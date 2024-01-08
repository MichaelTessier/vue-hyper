export const AUTH_ROUTES = {
  AUTH: 'auth',
  LOGIN: 'login',
  LOGOUT: 'logout',
  REGISTER: 'register',
  VERIFY_EMAIL: 'verify-email',
}

export const authRoutes = {
  path: 'auth',
  name: AUTH_ROUTES.AUTH,
  redirect: { name: AUTH_ROUTES.LOGIN },
  children: [
    {
      path: 'login',
      name: AUTH_ROUTES.LOGIN,
      component: () => import('@/domains/auth/pages/Login/Login.vue'),
    },
    {
      path: 'logout',
      name: AUTH_ROUTES.LOGOUT,
      component: () => import('@/domains/auth/pages/Logout/Logout.vue'),
    },
    {
      path: 'register',
      name: AUTH_ROUTES.REGISTER,
      component: () => import('@/domains/auth/pages/Register/Register.vue'),
    },
    {
      path: 'verify-email',
      name: AUTH_ROUTES.VERIFY_EMAIL,
      component: () =>
        import('@/domains/auth/pages/VerifyEmail/VerifyEmail.vue'),
    },
  ],
}
