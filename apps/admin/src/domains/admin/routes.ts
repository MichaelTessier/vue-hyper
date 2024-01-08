export const ADMIN_ROUTES = {
  ADMIN: 'admin',
  DASHBOARD: 'dashboard',
}

export const adminRoutes = {
  path: 'admin',
  name: ADMIN_ROUTES.ADMIN,
  component: () => import('@/domains/admin/pages/Admin/Admin.vue'),
  redirect: { name: ADMIN_ROUTES.DASHBOARD },
  children: [
    {
      path: 'dashboard',
      name: ADMIN_ROUTES.DASHBOARD,
      component: () => import('@/domains/admin/pages/Dashboard/Dashboard.vue'),
    },
  ],
}
