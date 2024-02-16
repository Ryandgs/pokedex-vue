<script setup>
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import AppMenu from '@/components/AppMenu/AppMenu.vue';
</script>

<template>
  <div class="container mx-auto">
    <AppMenu />
    <router-view />
    <AppFooter />
  </div>
</template>

<style lang="sass">
  @import url('./styles.scss')
</style>
