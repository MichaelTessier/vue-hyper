export const useAuthMock = {
  login: vi.fn(),
  logout: vi.fn(),
  passwordReset: vi.fn(),
  passwordUpdate: vi.fn(),
  register: vi.fn(),
  resendEmailConfirmation: vi.fn(),
  getUser: vi.fn(),
  errorMessage: '',
}

vi.mock('@/domains/auth/composables/useAuth/useAuth.ts', () => ({
  useAuth: () => useAuthMock,
}))
