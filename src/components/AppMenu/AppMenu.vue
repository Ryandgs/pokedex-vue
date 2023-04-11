<script setup>
import { useRouter } from 'vue-router';
import AppButton from '../AppButton/AppButton.vue';

const router = useRouter();

/**
 * Go To Route
 * @param route - route.name
 */
const goTo = (route) => {
  router.push({
    name: route,
  });
};
</script>

<template>
  <div class="menu">
    <p class="menu__title">Welcome Pokemon's Trainer</p>

    <AppButton
      class="menu__btn mt-5"
      :label="'Home'"
      @click="goTo('pokemon.list')"
    />

    <hr />
  </div>
</template>
