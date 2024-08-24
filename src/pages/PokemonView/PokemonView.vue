<script setup>
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import usePokemonStore from '@/stores/Pokemon/PokemonStore'
import useProfileStore from '@/stores/Profile/ProfileStore'

const pokemonStore = usePokemonStore()
const profileStore = useProfileStore()
const route = useRoute()
const router = useRouter()
const pokemonData = reactive({ sprites: {} })
const isFetching = ref(false)

const goBack = () => {
  router.push({ name: 'pokemon.list' })
}

/**
 * Add pokemon to my list
 */
const savePokemon = () => profileStore.savePokemon(pokemonData)

const releasePokemon = () => profileStore.releasePokemon(pokemonData.id)

const goTo = (to) => {
  router.push({ name: 'pokemon.view', params: { id: Number(route.params.id) + to } })
}

watch(
  () => route.params.id,
  () => {
    isFetching.value = true

    /**
     * Set pokemon data
     */
    pokemonStore
      .getPokemonById(route.params.id)
      .then(({ data }) => {
        Object.assign(pokemonData, data)
      })
      .catch(() => {
        // Dispatch error
      })
      .finally(() => {
        isFetching.value = false
      })
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="pokemon"
    v-if="pokemonData.id"
  >
    <table class="table-auto w-full">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>Height</th>
        <th>Sprites</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr class="capitalize">
          <td>{{ pokemonData.id }}</td>
          <td>{{ pokemonData.name }}</td>
          <td>
            <ul>
              <li
                v-for="pokeType in pokemonData.types"
                :key="pokeType.slot"
              >
                {{ pokeType.type.name }}
              </li>
            </ul>
          </td>
          <td>{{ pokemonData.height }}</td>
          <td>
            <div class="flex justify-center flex-wrap">
              <img
                :src="pokemonData.sprites.front_default"
                :alt="pokemonData.name + ' back sprite'"
                class="mr-5"
              />
              <img
                :src="pokemonData.sprites.back_default"
                :alt="pokemonData.name + ' back sprite'"
              />
            </div>
          </td>
          <td>
            <div class="flex justify-center flex-wrap gap-1">
              <AppButton
                :label="'Add to my dex'"
                @click="savePokemon"
              />
              <AppButton
                :label="'Release from dex'"
                @click="releasePokemon"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />
  </div>

  <div class="pokemon-error">
    <div v-if="isFetching">Loading...</div>

    <div
      v-else-if="!pokemonData.id"
      class=""
    >
      There's no pokemon around! (ID_NOT_FOUND)
    </div>
  </div>

  <div class="pokemon-navigation mt-5 mb-5">
    <AppButton
      label="Previous"
      class="mt-1"
      @click="goTo(-1)"
    />
    <AppButton
      label="Next"
      class="mt-1"
      @click="goTo(1)"
    />
  </div>

  <AppButton
    label="Back"
    class="mt-1"
    @click="goBack"
  />
</template>

<style lang="scss">
.pokemon {
  &-error {
    text-align: center;
  }
  &-navigation {
    display: flex;
    justify-content: space-between;
  }
}
</style>
