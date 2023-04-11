<script setup>
import AppFooter from '@/components/AppFooter/AppFooter.vue';
import AppMenu from '@/components/AppMenu/AppMenu.vue';
</script>

<template>
  <AppMenu />
  <router-view />
  <AppFooter />
</template>

<style lang="sass">
  @import url('./styles.scss')
</style>
