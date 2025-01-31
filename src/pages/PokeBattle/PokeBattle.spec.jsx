import { shallowMount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import PokeBattle from './PokeBattle.vue'
import { expect, vi } from 'vitest'

const name = 'Mocked name'

vi.mock('@/stores/profileStore', () => ({
  useProfileStore: vi.fn(() => ({ name })),
}))

const mountComponent = (options = {}) => {
  setActivePinia(createPinia())

  return shallowMount(PokeBattle, {
    ...options,
  })
}

describe('PokeBattle', () => {
  it('Should render correctly with mocked store', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('.pokebattle').exists()).toBe(true)
  })

  it('Should show you as online player', async () => {
    const wrapper = mountComponent()

    wrapper.vm.battleData = { players: [{ name: 'Red' }, { name }] }
    await wrapper.vm.$nextTick()

    const onlinePlayers = wrapper.find('.onlineplayers')

    expect(onlinePlayers.html()).toContain(name)
  })

  it('Should not display online players if no players exist', async () => {
    const wrapper = mountComponent()
    wrapper.vm.battleData = { players: [] }
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.onlineplayers').exists()).toBe(false)
  })

  it('Should display multiple players', async () => {
    const wrapper = mountComponent()

    wrapper.vm.battleData = { players: [{ name: 'Red' }, { name }, { name: 'Blue' }] }
    await wrapper.vm.$nextTick()

    expect(wrapper.findAll('.onlineplayers li').length).toBe(3)
  })
})
