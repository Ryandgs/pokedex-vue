<script setup>
import { onMounted, ref } from 'vue'
import useProfileStore from '@/stores/Profile/ProfileStore'
import PartyPokemon from './components/PartyPokemon/PartyPokemon.vue'

const profileStore = useProfileStore()
const leftPokemons = ref(undefined)
const rightPokemons = ref(undefined)

onMounted(() => {
  const myPokemons = profileStore.myPokemons

  leftPokemons.value = myPokemons.filter((p, i) => i % 2 === 0)
  rightPokemons.value = myPokemons.filter((p, i) => i % 2 === 1)
})
</script>

<template>
  <div class="emerald-layout">
    <div class="pokemons">
      <div v-if="profileStore.myPokemons">
        <section class="emerald-layout--left pokemon">
          <PartyPokemon :pokemonList="leftPokemons" />
        </section>
      
        <section class="emerald-layout--right pokemon">
          <PartyPokemon :pokemonList="rightPokemons" />
        </section>
      </div>
    </div>

    <div class="emerald-layout--bottom">
      <div class="text-area">
        {{ profileStore.name.slice(0, 10) + (profileStore.name.length > 10 ? "..." : "") }}:
        {{
          profileStore.myPokemons.length
            ? 'Choose a Pokémon.'
            : 'There are no pokemons around'
        }}
      </div>
      <router-link :to="{ name: 'pokemon.list' }">
        <div class="button">
          Cancel
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './TrainerParty.scss';
</style>
