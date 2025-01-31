import { setActivePinia, createPinia } from 'pinia'

import usePokemonStore from './PokemonStore'

describe('Pokemon Store', () => {
  let pokemonStore = null

  beforeEach(() => {
    setActivePinia(createPinia())
    pokemonStore = usePokemonStore()
  })

  it('Should get an array of pokemons', async () => {
    const {
      data: { results },
    } = await pokemonStore.getPokemons()
    expect(Array.isArray(results)).toBe(true)
  })

  it('Should get a Pikachu', async () => {
    const { data } = await pokemonStore.getPokemonById(25)
    expect(data.name).toBe('pikachu')
  })
})
