<script setup>
import { ref } from 'vue'
import useProfileStore from '@/stores/Profile/ProfileStore'

const profileStore = useProfileStore()

const dexVisibility = ref(false)

const releasePokemon = (pokeId) => profileStore.releasePokemon(pokeId)

const changeVisibility = () => { dexVisibility.value = !dexVisibility.value }
</script>

<template>
  <h1>My dex</h1>

  <AppButton 
    :label="'Show/hide'"
    @click="changeVisibility"
  />

  <p class="mt-5 text-yellow-800">
    ⚠️ Warning: The section bellow will be removed soon and replaced by
    <RouterLink
      class="text-blue-600 underline"
      :to="{ name: 'trainer.party' }"
    >
      the new PARTY MENU
    </RouterLink>
  </p>

  <template v-if="dexVisibility">
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
              >
              <img
                :src="myPokemon.sprites.back_default"
                :alt="myPokemon.name + ' back sprite'"
              >
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
  
    <p v-if="!profileStore.myPokemons.length" class="pt-5">There are no pokemons around</p>
  </template>
</template>