const push = vi.fn()
const resolve = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push,
    resolve,
  }),
  useRoute: useRouteMock,
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

export const useRouteMock = vi.fn()
