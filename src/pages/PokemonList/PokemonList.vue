<script setup>
import {
  reactive, onMounted, ref, watch,
} from 'vue';

import usePokemonStore from '@/stores/PokemonStore';
import AppButton from '@/components/AppButton/AppButton.vue';
import { viewPokemonWithUrl, getPageOffset } from './helpers';

const pokemonStore = usePokemonStore();
const pokemonList = reactive({});
const actualPage = ref(null);
const isLoading = ref(false);

const setPokemonList = (newPage) => {
  isLoading.value = true;

  pokemonStore.getPokemons({ offset: getPageOffset(newPage) })
    .then(({ data }) => {
      Object.assign(pokemonList, data.results);
    })
    .finally(() => {
      isLoading.value = false;
    });
};

watch(actualPage, (newPage) => {
  setPokemonList(newPage);
});

onMounted(() => {
  actualPage.value = 1;
});
</script>

<template>
  <ul>
    <li
      v-for="pokemon in pokemonList"
      :key="pokemon.name"
    >
      <router-link :to="viewPokemonWithUrl(pokemon.url)">
        {{ pokemon.name }}
      </router-link>
    </li>
  </ul>

  <p>Page: {{ actualPage }}</p>

  <AppButton
    :label="'Previous'"
    @click="actualPage -= 1"
    :disabled="actualPage === 1 || isLoading"
    />
    <AppButton
    :label="'Next'"
    @click="actualPage += 1"
    :disabled="isLoading"
  />
</template>
