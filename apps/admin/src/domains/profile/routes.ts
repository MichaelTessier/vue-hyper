export const PROFILE_ROUTES = {
  ME: 'me',
  LIST: 'profile-list',
}

export const profileRoutes = [
  {
    path: 'me',
    name: PROFILE_ROUTES.ME,
    component: () => import('@/domains/profile/pages/Me/Me.vue'),
  },
  {
    path: 'profile-list',
    name: PROFILE_ROUTES.LIST,
    component: () =>
      import('@/domains/profile/pages/ProfileList/ProfileList.vue'),
  },
]
