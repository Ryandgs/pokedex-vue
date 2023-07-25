import { defineStore } from "pinia";

const useProfileStore = defineStore("Profile", {
  state() {
    return {
      myPokemons: [],
      name: "guest00",
    };
  },

  actions: {
    /**
     * Change triner's name
     * @param {String} newName 
     */
    updateName(newName) {
      this.name = newName
    },

    /**
     * Add pokemon to trainer's dex
     * @param {Object} pokemon 
     */
    savePokemon(pokemon) {
      const isAlreayOnDex = this.myPokemons.findIndex((myPokemon) => myPokemon.id === pokemon.id) > -1

      if (!isAlreayOnDex) {
        this.myPokemons.push(pokemon)
      } else {
        // Dispatch error
      }
    },

    /**
     * Remove pokemon from trainer's dex
     * @param {Number} pokemonId 
     */
    releasePokemon(pokemonId) {
      const pokeIndex = this.myPokemons.findIndex((myPokemon) => myPokemon.id === pokemonId)
      if (pokeIndex > -1) this.myPokemons.splice(pokeIndex, 1)
    }
  },
});

export default useProfileStore;
