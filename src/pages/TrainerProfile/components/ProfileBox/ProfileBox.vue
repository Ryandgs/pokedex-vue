<script setup>
import useProfileStore from '@/stores/Profile/ProfileStore'

const profileStore = useProfileStore()
</script>

<template>
  <div class="profileBox">
    <div class="profileBox-leftSection">
      <div class="pkmnData-wrapper">
        <h1>P k M n Data</h1>
        <div class="pkmnData">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/1.png"
          />
        </div>
      </div>
    </div>
    <div class="profileBox-rightSection">
      <div class="boxName">{{ profileStore.name }}'s BOX</div>
      <div class="boxSection">
        <img
          v-for="(myPokemon, index) in profileStore.myPokemons"
          :src="myPokemon.sprites.versions['generation-vii'].icons.front_default"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './ProfileBox.scss';
</style>
