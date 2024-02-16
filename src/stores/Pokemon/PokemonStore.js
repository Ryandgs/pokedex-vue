import { defineStore } from 'pinia';
import * as pokeApi from '@/services';

const usePokemonStore = defineStore('Pokemon', {
  state() {
    return {}
  },

  getters: {},

  actions: {
    getPokemons: (params) => pokeApi.getPokemons(params),
    getPokemonById: (id) => pokeApi.getPokemonById(id),
  },
});

export default usePokemonStore;
