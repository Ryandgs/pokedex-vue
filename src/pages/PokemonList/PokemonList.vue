<script setup>
import { reactive, onMounted, ref, watch } from 'vue'

import usePokemonStore from '@/stores/Pokemon/PokemonStore'
import { viewPokemonWithUrl, getPageOffset, getPokemonId } from './helpers'
import { useRoute, useRouter } from 'vue-router'

const pokemonStore = usePokemonStore()
const pokemonList = ref(null)
const actualPage = ref(null)
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()
const pageNavigation = ref(null)

const setPokemonList = (newPage) => {
  isLoading.value = true

  pokemonStore
    .getPokemons({ offset: getPageOffset(newPage) })
    .then(({ data }) => {
      pokemonList.value = data.results
    })
    .finally(() => {
      isLoading.value = false
    })
}

const setPage = ($event) => {
  actualPage.value = pageNavigation.value
}

watch(actualPage, (newPage) => {
  router.replace({ query: { page: newPage } })
  setPokemonList(newPage)
  pageNavigation.value = newPage
})

onMounted(() => {
  if (route.query.page) return (actualPage.value = Number(route.query.page))
  return (actualPage.value = 1)
})
</script>

<template>
  <ul>
    <li
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
      class="my-1"
    >
      <RouterLink :to="viewPokemonWithUrl(pokemon.url)">
        <p class="inline-block text-center mr-3 underline">{{ getPokemonId(pokemon.url) }}</p>
        <p class="inline-block capitalize">
          {{ pokemon.name }}
        </p>
      </RouterLink>
    </li>
  </ul>

  <p v-if="pokemonList && pokemonList.length === 0">There are no pokemons around</p>

  <p class="mb-5 mt-5 font-bold">Page:</p>

  <input
    v-model="pageNavigation"
    ref="pageInput"
    type="number"
    id="name"
    class="px-1 ring-1"
    min="1"
    @blur="setPage"
  />

  <br />

  <AppButton
    label="Previous"
    class="mt-10"
    :disabled="actualPage === 1 || isLoading"
    @click="actualPage -= 1"
  />
  <AppButton
    label="Next"
    :disabled="isLoading"
    @click="actualPage += 1"
  />
</template>
@/stores/Pokemon/PokemonStore
