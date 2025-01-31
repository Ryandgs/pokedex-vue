import { shallowMount } from '@vue/test-utils'
import AppFooter from './AppFooter.vue'

describe('AppFooter', async () => {
  it('Should show currently ', () => {
    const wrapper = shallowMount(AppFooter)
    const currentYear = new Date().getFullYear()

    expect(wrapper.find('p.footer').text()).toBe(`ryan_dgs © ${currentYear}  github/Ryandgs`)
  })
})
