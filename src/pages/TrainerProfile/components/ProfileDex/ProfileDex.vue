<script setup>
import { ref } from 'vue'
import useProfileStore from '@/stores/Profile/ProfileStore'

const profileStore = useProfileStore()

const isDexVisible = ref(false)

const releasePokemon = (pokeId) => profileStore.releasePokemon(pokeId)

const changeVisibility = () => {
  isDexVisible.value = !isDexVisible.value
}
</script>

<template>
  <h1>Dex details</h1>

  <AppButton
    :label="isDexVisible ? 'Hide' : 'Show'"
    @click="changeVisibility"
  />

  <template v-if="isDexVisible">
    <table
      v-if="profileStore.myPokemons.length"
      class="table-auto w-full mt-1"
    >
      <thead>
        <th>Position</th>
        <th>Name</th>
        <th>Type</th>
        <th>Height</th>
        <th>Sprites</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="(myPokemon, index) in profileStore.myPokemons">
          <td>{{ ++index }}</td>
          <td>{{ myPokemon.name }}</td>
          <td>
            <ul>
              <li
                v-for="pokeType in myPokemon.types"
                :key="pokeType.slot"
                :class="`--${pokeType.type.name}`"
                class="text-neutral-50"
              >
                {{ pokeType.type.name }}
              </li>
            </ul>
          </td>
          <td>{{ myPokemon.height }}</td>
          <td>
            <div class="flex justify-center">
              <img
                :src="myPokemon.sprites.front_default"
                :alt="myPokemon.name + ' back sprite'"
              />
              <img
                :src="myPokemon.sprites.back_default"
                :alt="myPokemon.name + ' back sprite'"
              />
            </div>
          </td>
          <td>
            <div class="flex justify-center">
              <AppButton
                :label="'Release'"
                @click="releasePokemon(myPokemon.id)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <p
      v-if="!profileStore.myPokemons.length"
      class="pt-5"
    >
      There are no pokemons around
    </p>
  </template>
</template>

<style lang="scss" scoped>
@import '../../../../assets/sass/mixins';
@include types;
</style>
