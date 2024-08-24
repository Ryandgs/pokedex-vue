<script setup>
import { onMounted, ref } from 'vue'

import usePokemonStore from '@/stores/Pokemon/PokemonStore'
import { getPageOffset, getPokemonId } from '@/composables/usePokemon'
import { useRoute, useRouter } from 'vue-router'

const pokemonStore = usePokemonStore()
const pokemonList = ref([])
const actualPage = ref(0)
const isLoading = ref(false)
const selectedId = ref(null)

const getPokemons = () => {
  isLoading.value = true
  actualPage.value = actualPage.value + 1

  pokemonStore
    .getPokemons({ offset: getPageOffset(actualPage.value) })
    .then(({ data }) => {
      pokemonList.value.push(...data.results)
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(() => getPokemons())
</script>

<template>
  <div class="pokemonDex">
    <h1>Pokédex</h1>

    <div class="pokemonDex-wrapper">
      <div class="sprites">
        <template v-if="selectedId">
          <img
            v-if="selectedId > 1"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${
              selectedId - 1
            }.png`"
          />
          <img
            class="sprites-main"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${selectedId}.png`"
          />
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${
              Number(selectedId) + 1
            }.png`"
          />
        </template>
        <p v-else>?</p>
      </div>
      <div class="pokemonDex-list">
        <div
          v-for="pokemon in pokemonList"
          class="pokemon"
          @click="selectedId = getPokemonId(pokemon.url)"
        >
          N<span>o</span> {{ getPokemonId(pokemon.url) }} {{ pokemon.name }}
        </div>

        <AppButton
          label="More"
          :disabled="isLoading"
          @click="getPokemons"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './PokemonDex.scss';
</style>
