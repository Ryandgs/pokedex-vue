<script setup>
import useProfileStore from '@/stores/Profile/ProfileStore'
import { getPokemonId } from '@/composables/usePokemon'
import { ref } from 'vue'

const profileStore = useProfileStore()
const selectedPokemon = ref(null)
</script>

<template>
  <div class="profileBox">
    <div class="profileBox-leftSection">
      <div class="pkmnData-wrapper">
        <h1>P <span>k</span> M <span>n</span><div>Data</div></h1>
        <div
          class="pkmnData"
        >
          <h2>{{ selectedPokemon ? selectedPokemon.name.substr(0, 7) : '-' }}</h2>
          <div class="pkmnData-image">
            <img
              v-if="selectedPokemon"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${selectedPokemon.id}.png`"
            />
          </div>
          <div>
            <p v-if="selectedPokemon">Lv. {{ parseInt(Math.random() * 80 + 1) }}</p>
            <p v-if="selectedPokemon" class="pkmnData-types">
              <div
                v-for="type in selectedPokemon.types"
                :class="`--${type.type.name}`"
                class="text-neutral-50"
              >
                {{ type.type.name }}
              </div>
            </p>
            <p class="text-center">
              {{ selectedPokemon ? selectedPokemon.abilities[0].ability.name.substr(0, 10) : '-' }}
            </p>
            <p class="text-center">No item</p>
          </div>
        </div>
      </div>
    </div>
    <div class="profileBox-rightSection">
      <div class="boxName">{{ profileStore.name }}'s BOX</div>
      <div class="boxSection">
        <img
          v-for="myPokemon in profileStore.myPokemons"
          :src="myPokemon.sprites.versions['generation-vii'].icons.front_default"
          @click="selectedPokemon = myPokemon"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './ProfileBox.scss';
</style>
