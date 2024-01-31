const push = vi.fn()
const resolve = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push,
    resolve,
  }),
  useRoute: vi.fn(),
}))

beforeAll(async () => {
  push.mockImplementationOnce(() => ({
    params: {
      locale: 'fr',
    },
  }))
})

export const useRouterMock = {
  push,
  resolve,
}
