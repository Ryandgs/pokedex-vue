<script setup>
import { ref } from 'vue';

defineProps({
  pokemonList: {
    type: Array,
    default: [],
  },
});

const noFlood = ref(false)

const getHPStyle = () => {
  const randomValue = Math.random() * 100
  let hpColor = '#79D270'

  if (randomValue < 80) hpColor = '#E7C632'
  if (randomValue < 20) hpColor = '#DF9C81'

  return {
    width: `${randomValue}%`,
    backgroundColor: hpColor,
  }
}

const playCries = (pokemonCry) => {
  if (noFlood.value || !pokemonCry) return

  const audio = new Audio(pokemonCry)
  audio.play()

  noFlood.value = true
  setTimeout(() => {
    noFlood.value = false
  }, 2000)
}
</script>

<template>
  <div
    v-for="(myPokemon) in pokemonList"
    :key="myPokemon.id"
    class="party-pokemon"
    @click="playCries(myPokemon.cries.legacy)"
  >
    <div
      class="card card--left"
    >
      <img
        :src="myPokemon.sprites.versions['generation-vii'].icons.front_default"
      />
      <span>
        Lv. {{ parseInt(Math.random() * 80 + 1) }}
      </span>
    </div>
    <div class="card card--right">
      <h1>{{ myPokemon.name }}</h1>
      <div class="card__life">
        <div>HP</div>
        <div class="hp-bar">
          <div
            class="hp"
            :style="getHPStyle()"
          ></div>
        </div>
      </div>
      <div class="card__types">
        <div v-for="(type) in myPokemon.types" :key="type.type.name">{{ type.type.name }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './PartyPokemon.scss';
</style>