const userMock = {
  id: 'a4df89e6-a67d-4b66-8aaa-53441ffd2c01',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'azerty@mail.com',
  email_confirmed_at: '2024-01-12T17:39:30.085439Z',
  phone: '',
  confirmed_at: '2024-01-12T17:39:30.085439Z',
  last_sign_in_at: '2024-01-17T05:28:28.160479001Z',
  app_metadata: {
    // provider: 'email',
    // providers: ['email']
  },
  user_metadata: {},
  identities: [
    {
      identity_id: 'd0fc8ecd-811d-4f3e-8af9-a0d8e9ca0d49',
      id: 'a4df89e6-a67d-4b66-8aaa-53441ffd2c01',
      user_id: 'a4df89e6-a67d-4b66-8aaa-53441ffd2c01',
      identity_data: {
        // email: 'azerty@mail.com',
        // email_verified: false,
        // phone_verified: false,
        // sub: 'a4df89e6-a67d-4b66-8aaa-53441ffd2c01',
      },
      provider: 'email',
      last_sign_in_at: '2024-01-12T17:39:30.082582Z',
      created_at: '2024-01-12T17:39:30.082674Z',
      updated_at: '2024-01-12T17:39:30.082674Z',
      email: 'azerty@mail.com',
    },
  ],
  created_at: '2024-01-12T17:39:30.081195Z',
  updated_at: '2024-01-17T05:28:28.162321Z',
}

describe('Auth store', () => {
  it('should set isAuthenticated correctly', () => {
    const authStore = useAuthStore()

    expect(authStore.isAuthenticated).toBe(false)

    authStore.$patch({ user: userMock })

    expect(authStore.isAuthenticated).toBe(true)
  })
})
