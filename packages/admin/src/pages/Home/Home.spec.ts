import { mount } from '@vue/test-utils'
import Home from './Home.vue'

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = mount(Home)

    expect(wrapper.find('[data-test="home__title"]').text()).toEqual(
      'Bienvenue'
    )
  })
})
