import { flushPromises, mount } from '@vue/test-utils'
import { useRouterMock } from '@/test/mocks/vue-router'
import { useAuthMock } from '@/test/mocks/useAuthMock'
import Logout from './Logout.vue'

describe('Logout', () => {
  it('should render successfully', async () => {
    useAuthMock.logout.mockResolvedValueOnce(true)
    const wrapper = mount(Logout)

    wrapper.trigger('click')

    await flushPromises()

    expect(useAuthMock.logout).toHaveBeenCalled()
    expect(useRouterMock.push).toHaveBeenCalledWith({
      name: AUTH_ROUTES.LOGIN,
    })
  })
})
