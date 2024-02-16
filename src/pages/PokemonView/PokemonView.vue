<script setup>
import { onMounted, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import usePokemonStore from '@/stores/Pokemon/PokemonStore';
import useProfileStore from '@/stores/Profile/ProfileStore';
import AppButton from '@/components/AppButton/AppButton.vue';

const pokemonStore = usePokemonStore();
const profileStore = useProfileStore();
const route = useRoute();
const router = useRouter();
const pokemonData = reactive({ sprites: {} });
const isFetching = ref(false);

const goBack = () => {
  router.go(-1)
};

/**
 * Add pokemon to my list
 */
const savePokemon = () => profileStore.savePokemon(pokemonData)

const releasePokemon = () => profileStore.releasePokemon(pokemonData.id)

onMounted(() => {
  isFetching.value = true;

  /**
   * Set pokemon data
   */
  pokemonStore.getPokemonById(route.params.id)
    .then(({ data }) => {
      Object.assign(pokemonData, data);
    })
    .catch(() => {
      // Dispatch error
    })
    .finally(() => {
      isFetching.value = false;
    });
});
</script>

<template>
  <div
    class="pokemon"
    v-if="!isFetching"
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
              >
              <img
                :src="pokemonData.sprites.back_default"
                :alt="pokemonData.name + ' back sprite'"
              >
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

  <div v-else>
    Loading...
  </div>

  <AppButton
    :label="'Back'"
    class="mt-1"
    @click="goBack"
  />
</template>