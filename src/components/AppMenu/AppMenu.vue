<script setup>
import { useRouter } from 'vue-router';
import AppButton from '../AppButton/AppButton.vue';
import useProfileStore from '@/stores/ProfileStore';

const router = useRouter();
const profileStore = useProfileStore();

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
    <p class="menu__title">Welcome {{ profileStore.name }}</p>

    <AppButton
      class="menu__btn mt-5"
      :label="'Home'"
      @click="goTo('pokemon.list')"
    />

    <AppButton
      class="menu__btn mt-5"
      :label="'Profile'"
      @click="goTo('trainer.profile')"
    />

    <hr />
  </div>
</template>
