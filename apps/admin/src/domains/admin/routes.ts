export const ADMIN_ROUTES = {
  ADMIN: 'admin',
  DASHBOARD: 'dashboard',
}

export const adminRoutes = [
  {
    path: 'dashboard',
    name: ADMIN_ROUTES.DASHBOARD,
    component: () => import('@/domains/admin/pages/Dashboard/Dashboard.vue'),
  },
]
