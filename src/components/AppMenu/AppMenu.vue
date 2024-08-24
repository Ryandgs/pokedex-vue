<script setup>
import { useRouter } from 'vue-router'
import useProfileStore from '@/stores/Profile/ProfileStore'

const router = useRouter()
const profileStore = useProfileStore()

/**
 * Go To Route
 * @param route - route.name
 */
const goTo = (route) => {
  router.push({
    name: route,
  })
}
</script>

<template>
  <div class="menu mb-10 mt-5 text-center">
    <p class="menu__title underline">Welcome {{ profileStore.name }}</p>

    <AppButton
      class="menu__btn mt-5"
      label="Home"
      @click="goTo('pokemon.list')"
    />

    <AppButton
      class="menu__btn mt-5"
      label="Profile"
      @click="goTo('trainer.profile')"
    />

    <AppButton
      class="menu__btn mt-5"
      label="Party"
      @click="goTo('trainer.party')"
    />
  </div>
</template>
