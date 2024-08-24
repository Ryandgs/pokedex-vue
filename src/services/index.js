import axios from 'axios'

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

/**
 * Return pokemon data
 * @param {Number} id - Pokemon number
 * @returns {Object}
 */
export const getPokemonById = (id) => pokeApi.get(`/pokemon/${id}`)

/**
 * Return a list of pokemons ordered by id (20 per request)
 * @param {Object} params - Url params
 * @returns {Obeject}
 */
export const getPokemons = (params) => {
  const urlParams = new URLSearchParams(params).toString()
  return pokeApi.get(`/pokemon?${urlParams}`)
}
