/**
 * Split url to get selected pokemon id
 * @param url
 * @returns id
 */
export const getPokemonId = (url) => url && url.split('/')[6];

/**
 * Returns offset (Navigation pattern of PokéAPI v2)
 * @param {Number} page
 * @returns {Number}
 */
export const getPageOffset = (page) => (page - 1) * 20;

/**
 * Navigate to pokemon view
 * @param id - pokemonId
 */
export const viewPokemonWithUrl = (url) => {
  const id = getPokemonId(url);

  return {
    name: 'pokemon.view',
    params: {
      id,
    },
  };
};
